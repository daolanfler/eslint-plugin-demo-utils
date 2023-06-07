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
    rules : requireIndex(__dirname + "/rules"),
    configs: {
        plugins: ["@funkey/demo-util"]
    }
};



