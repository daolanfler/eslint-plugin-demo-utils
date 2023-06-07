/**
 * @fileoverview typeof 不能用于对象和数组，请使用 @jslib-book/type
 * @author daolanfler
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "typeof 不能用于对象和数组，请使用 @jslib-book/type",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      typeofUsageWrong: 'typeof 不能用于对象和数组，请使用 @jslib-book/type',
    }
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

    return {
      // visitor functions for different types of nodes
      BinaryExpression: (node) => {
        const operator = node.operator;
        const left = node.left;
        const right = node.right;

        if (
          (operator === "==" || operator === "===") &&
          left.type === "UnaryExpression" &&
          left.operator === "typeof" &&
          right.type === "Literal" &&
          right.value === "object"
        ) {
          context.report({
            node,
            messageId: 'typeofUsageWrong',
          })
        }
      },
    };
  },
};
