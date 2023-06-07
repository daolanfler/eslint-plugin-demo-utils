/**
 * @fileoverview 别出现和 utils 重名的函数
 * @author daolanfler
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-same-function"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const msg = `@jslib-book/utils中已存在此函数`;

const ruleTester = new RuleTester();
ruleTester.run("no-same-function", rule, {
  valid: [
    // give me some code that won't trigger a warning
    { code: "function aaa() {}" },
  ],

  invalid: [
    {
      code: "function truncate() {}",
      errors: [
        {
          message: msg,
        },
      ],
    },
  ],
});
