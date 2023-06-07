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

const ruleTester = new RuleTester();
ruleTester.run("typeof-instanceof-limit", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
