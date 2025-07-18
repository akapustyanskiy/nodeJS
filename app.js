// npm's
// npm - comes with node cmd

// local dependency - use it only in current project
// npm i <packageName>

// global deps
// npm i -g <packageName>

// package.json - manifest file
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);
