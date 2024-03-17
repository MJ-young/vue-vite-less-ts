import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { prismjsPlugin } from "vite-plugin-prismjs";
import Inspect from "vite-plugin-inspect";

// https://vitejs.dev/config/
const pathResolve = (dir: string): string => {
  return resolve(__dirname, dir);
};
export default defineConfig({
  plugins: [
    vue(),
    Inspect({
      build: true,
      outputDir: ".vite-inspect",
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dts: true,
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    prismjsPlugin({
      languages: "all", // 语言
      plugins: ["line-numbers", "copy-to-clipboard"], //官网有其他功能,这里开启行数和复制按钮功能
      theme: "default", // 主题
      css: true,
    }),
  ],
  resolve: {
    alias: {
      "@": pathResolve("src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${pathResolve(
            "src/assets/less/variables.less"
          )}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
});
