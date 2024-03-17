<template>
  <div class="home">
    <!-- 介绍在vite项目中less使用 -->
    <div class="desc-box">
      <div class="desc-title">在vite项目使用less</div>
      <div class="desc-content">
        <p>在vite项目中使用less，只需要安装less即可，不需要配置less-loader</p>
        <div class="sub-title">安装less</div>
        <pre><code class="language-bash">{{ installCode }}</code></pre>
        <div class="sub-title">vite.config.js配置</div>
        <p>在vite.config.js中配置less插件</p>
        <pre><code class="language-js">{{ viteConfigCode }}</code></pre>
        <div class="sub-title">定义全局less变量</div>
        <p>在src/assets/less/variables.less中定义全局less变量</p>
        <pre><code class="language-less">{{ variablesCode }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from "prismjs";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      installCode: "npm install less",
      viteConfigCode: `// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import less from 'vite-plugin-less'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    css({
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: \`true; @import (reference) "\${resolve('src/assets/less/variables.less')}";\`,
          }
          javascriptEnabled: true,
        },
      },
    }),
})`,
      variablesCode: `// src/assets/less/variables.less
@bg-color: #f5f5f5;
@layout-color: #fff;
@border-color: #e5e5e5;
@text-color: #333;`,
    };
  },
  mounted() {
    Prism.highlightAll();
  },
};
</script>

<style lang="less" scoped>
</style>