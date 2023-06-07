/**
 * @fileoverview a eslint plugin for demo-util
 * @author daolanfler
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports = {
  rules: requireIndex(__dirname + "/rules"),
  // 这样可以直接 extend, 不用手动配置 plugins & rules ;
  configs: {
    plugins: ["@funkey/demo-util"],
    rules: {
      "@funkey/demo-util/type-typeof-limit": 2,
      "@funkey/demo-util/typeof-instanceof-limit": 2,
      "@funkey/demo-util/no-same-function": 2,
    },
  },
};
