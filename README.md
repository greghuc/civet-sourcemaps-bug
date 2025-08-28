# README

This repo demos Civet sourcemaps having an incorrect `sources` value for a `.civet` file loaded from a `node_modules` package.

Check out `build/index.js.map`:
* Bad: "../node_modules/civet-pkg/lib/node_modules/civet-pkg/lib/math.civet"
* Should be: "../node_modules/civet-pkg/lib/math.civet"

Cmds:
* `npm install` to install deps
* `npm run build` or `npm run watch` to rebuild code and sourcemap
* `npm run start` to run code