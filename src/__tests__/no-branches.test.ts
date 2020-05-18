/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-var-requires */
import { RuleTester } from 'eslint';
import noBranchRule from '../no-branches';

const ruleTester = new RuleTester();
ruleTester.run('no-vp-branches', noBranchRule, {
  valid: ['"VP"', '"vp"', '"fix"', '"FIX"', '"Fix"', '"fIx"', '"fiX"', '"FiX"', '"FIx"', '"fIX"', '"fixed"'],
  invalid: [
    {
      code: `var vp = 'VP-123'`,
      errors: 1,
    },
    {
      code: `var vp = 'vp-123'`,
      errors: 1,
    },
    {
      code: `var vp = 'Vp-123'`,
      errors: 1,
    },
    {
      code: `var vp = 'vP-123'`,
      errors: 1,
    },
    {
      code: `var fixTest = 'fix-test'`,
      errors: 1,
    },
    {
      code: `var fixTest= 'FIX-test'`,
      errors: 1,
    },
    {
      code: `var fixTest = 'Fix-test'`,
      errors: 1,
    },
    {
      code: `var fixTest = 'fIx-test'`,
      errors: 1,
    },
    {
      code: `var fixTest = 'fiX-test'`,
      errors: 1,
    },
    {
      code: `var fixTest= 'FIx-test'`,
      errors: 1,
    },
    {
      code: `var fixTest = 'FiX-test'`,
      errors: 1,
    },
    {
      code: `var fixTest = 'fIX-test'`,
      errors: 1,
    },
  ],
});
