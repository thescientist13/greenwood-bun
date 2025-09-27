import { greenwoodPluginImportRaw } from "@greenwood/plugin-import-raw";
import { greenwoodPluginRendererLit } from "@greenwood/plugin-renderer-lit";
import type { Config } from "@greenwood/cli";

export default {
  useTsc: true,
  plugins: [
    greenwoodPluginImportRaw(),
    greenwoodPluginRendererLit(),
  ]
} as Config;