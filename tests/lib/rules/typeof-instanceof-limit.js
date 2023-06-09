/**
 * @fileoverview instanceof 操作符不够准确，请使用@jslib-book/type 
 * @author daolanfler
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/typeof-instanceof-limit"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const msg = `instanceof 操作符不够准确，请使用@jslib-book/type`;

const parserOptions = {
  ecmaVersion: 2022,
  sourceType: 'module',
};

const ruleTester = new RuleTester({ parserOptions });
ruleTester.run('type-instanceof-limit', rule, {
  valid: [{ code: 'const a = typeof "String"' }],

  invalid: [
    {
      code: 'const b = "test2" instanceof "String"',
      errors: [
        {
          message: msg,
        },
      ],
    },
  ],
});