/**
 * Strongly inspired by https://github.com/jakubsadura/eslint-plugin-no-shit/
 */

import * as ESTree from 'estree';
import { Rule } from 'eslint';

const containsBranchName = (text: string): boolean =>
  typeof text === 'string' && /((vp)-\d+(-\w*)*)|(fix-(\w*-*)*)/.test(('' + text).toLowerCase());

const noBranchRule: Rule.RuleModule = {
  meta: {
    docs: {
      description: 'disallow branches in code',
      category: 'Possible Errors',
      recommended: true,
    },
  },
  create(context): Rule.RuleListener {
    const message = (branch?: string): string =>
      `It would seem you have a branch ${branch} in your code. Please verify this. If this is ok, disable eslint for this line.`;
    return {
      Literal(node): void {
        const value = (node as ESTree.Literal).value as string;
        containsBranchName(value) &&
          context.report({
            node: node,
            message: message(value),
          });
      },
    };
  },
};

export const rule = {
  'no-vp-branches': noBranchRule,
};
