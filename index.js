#!/usr/bin/env node
const path = require("path");
const jetpack = require("fs-jetpack");
const argv = require("minimist")(process.argv.slice(1));
const cwd = process.cwd();
const prompt = require("prompt");
prompt.message = "";

let base_manifest = {
  manifest_version: 2,
  version: "1.0",
  icons: {
    "128": "icon128.png",
    "48": "icon48.png",
    "16": "icon16.png"
  }
};
let manifestString = "";

let schema = {
  properties: {
    name: {
      name: "name",
      pattern: /^[a-zA-Z\s-]+$/,
      message: "Name ? ",
      default: "chrome-extension"
    },
    description: {
      name: "description",
      message: "Description ?",
      default: "Description of extension"
    },
    action: {
      name: "action",
      message: "1) Browser Action 2) Page Action",
      default: 1
    },
    permissions: {
      name: "permissions",
      message: "Permissions (seperate with comma) ?"
    }
  }
};

prompt.start();
prompt.get(schema, function(err, result) {
  let curated = {};
  curated.name = result.name.toString();
  curated.description = result.description.toString();
  const action = parseInt(result.action);
  switch (action) {
    case 1:
      curated.browser_action = {
        default_icon: "icon16.png",
        default_popup: "popup.html"
      };
      break;
    case 2:
      curated.page_action = {
        default_icon: "icon16.png",
        default_popup: "popup.html"
      };
      break;
    default:
      curated.browser_action = {
        default_icon: "icon16.png",
        default_popup: "popup.html"
      };
      break;
  }
  curated.permissions = result.permissions
    .split(",")
    .map(per => per.trim().toString());
  let manifest = Object.assign({}, base_manifest, curated);
  manifestString = JSON.stringify(manifest, undefined, 2);
  jetpack.dir(result.name);
  jetpack.copy(
    path.resolve(__dirname, "files"),
    path.resolve(cwd, result.name),
    { overwrite: true }
  );
  jetpack.file(path.resolve(cwd, result.name, "src", "manifest.json"), {
    content: manifestString
  });
});
