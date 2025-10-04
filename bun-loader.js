// TODO: adapt full node loaders / plugins compat - https://github.com/ProjectEvergreen/greenwood/blob/master/packages/cli/src/loader.js
// TODO: https://github.com/thescientist13/greenwood-lit-ssr/pull/31/files#diff-331071217a3ab2aa8b4d355963f7f43aec384b080331f2ef67c675adb7d7cead
// 1) import the greenwood plugin and lifecycle helpers
import { greenwoodPluginTypeScript } from "@greenwood/cli/src/plugins/resource/plugin-typescript.js";
import { readAndMergeConfig } from "@greenwood/cli/src/lifecycles/config.js";
import { initContext } from "@greenwood/cli/src/lifecycles/context.js";

// 2) initialize Greenwood lifecycles
const config = await readAndMergeConfig();
const context = await initContext({ config });
const compilation = { context, config };

// 3) initialize the plugin
const typeScriptPlugin = greenwoodPluginTypeScript[0].provider(compilation);

import { plugin } from "bun";

/** @type {import('bun').PluginBuilder} */
plugin({
  name: "custom greenwood loader",
  setup(build) {
    const filter = /\.(ts)$/

    build.onLoad({ filter }, async (args) => {
      console.log('onLoad', { args });
      const response = await typeScriptPlugin.serve(new URL(`file://${args.path}`));
      const contents = await response.text();

      console.log({ contents });
      return {
        contents,
        loader: "js",
      };
    });
  },
});