/**
 * @fileoverview 别出现和 utils 重名的函数
 * @author daolanfler
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const { isExist } = require("../utils/index");
// 可能会冲突的函数名
const limitList = ["truncate", "range", "pick", "getParam"];

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "别出现和 utils 重名的函数",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      A: "@jslib-book/utils中已存在此函数",
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

    function isInLimitList(funcName, node) {
      if (limitList.indexOf(funcName) !== -1) {
        context.report({
          node,
          messageId: 'A'
        });
      }
    }

    function check(node) {
      let funcName;
      if (isExist(node, "parent", "id", "name")) {
        // for ArrowFunctionExpression and FunctionExpression
        funcName = node.parent.id.name;
        isInLimitList(funcName, node.parent.id);
      }
      if (isExist(node, "parent", "key", "name")) {
        funcName = node.parent.key.name;
        isInLimitList(funcName, node.parent.key);
      }
      if (isExist(node, "id", "name")) {
        // for FunctionDeclaration
        funcName = node.id.name;
        isInLimitList(funcName, node.id);
      }
    }

    return {
      FunctionDeclaration: (node) => {
        check(node)
      },
      ArrowFunctionExpression: check,
      FunctionExpression: check,
    };
  },
};
