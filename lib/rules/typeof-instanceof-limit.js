/**
 * @fileoverview instanceof 操作符不够准确，请使用@jslib-book/type
 * @author daolanfler
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "instanceof 操作符不够准确，请使用@jslib-book/type ",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      A: "instanceof 操作符不够准确，请使用@jslib-book/type",
    },
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------
    function check(node) {
      const operator = node.operator;

      if (operator === "instanceof") {
        context.report({
          node,
          messageId: "A",
        });
      }
    }
    return {
      // visitor functions for different types of nodes
      BinaryExpression: check,
    };
  },
};
