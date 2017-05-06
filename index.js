#!/usr/bin/env node
const path = require("path");
const jetpack = require("fs-jetpack");
const argv = require("minimist")(process.argv.slice(1));
const cwd = process.cwd();

jetpack.copy(path.resolve(__dirname, files), cwd, { overwrite: true });
