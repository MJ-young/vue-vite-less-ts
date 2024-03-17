<template>
  <div class="vite">
    <div class="desc-box">
      <div class="desc-title">安装unplugin-auto-import插件</div>
      <div class="desc-content">
        <p>在vite项目中使用unplugin-auto-import插件，可以自动导入第三方库</p>
        <div class="sub-title">安装unplugin-auto-import</div>
        <pre><code class="language-bash">{{ autoImport.installCode }}</code></pre>
        <div class="sub-title">vite.config.js配置</div>
        <p>在vite.config.js中配置unplugin-auto-import插件</p>
        <pre><code class="language-js">{{ autoImport.viteConfigCode }}</code></pre>
        <div class="sub-title">使用</div>
        <p>在项目中使用第三方库，不需要手动导入</p>
        <pre><code class="language-js">{{ autoImport.useCode }}</code></pre>
      </div>
    </div>
    <div class="desc-box">
      <div class="desc-title">安装vite-plugin-inspect插件</div>
      <div class="desc-content">
        <p>
          在vite项目中使用vite-plugin-inspect插件，可以在浏览器中查看vue组件
        </p>
        <div class="sub-title">安装vite-plugin-inspect</div>
        <pre><code class="language-bash">{{ inspect.installCode }}</code></pre>
        <div class="sub-title">vite.config.js配置</div>
        <p>在vite.config.js中配置vite-plugin-inspect插件</p>
        <pre><code class="language-js">{{ inspect.viteConfigCode }}</code></pre>
        <div class="sub-title">监测vue组件</div>
        <p>
          查看
          <a href="http://localhost:5173/__inspect/" target="_blank"
            >localhost:5173/__inspect/</a
          >
          观察vue组件
        </p>
        <div class="img-box">
          <img src="@/assets/img/inspect.png" alt="inspect" class="eg-img" />
          <img src="@/assets/img/eg.png" alt="inspect-eg" class="eg-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from "prismjs";
export default {
  name: "Vite",
  data() {
    return {
      inspect: {
        installCode: "npm install vite-plugin-inspect -D",
        viteConfigCode: `// vite.config.js
        // vite.config.ts
import Inspect from 'vite-plugin-inspect'

export default {
  plugins: [
    Inspect()
  ],
}`,
      },
      autoImport: {
        installCode: "npm install unplugin-auto-import",
        viteConfigCode: `// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dts: true,
    }),
  ],
})`,
        useCode: `// 直接使用，不需要手动导入
// import { ElButton } from 'element-plus'
<el-button>按钮</el-button>`,
      },
    };
  },
  mounted() {
    Prism.highlightAll();
  },
};
</script>

<style lang="less" scoped>
.img-box {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  .eg-img {
    margin: 20px;
    width: 40%;
    border: 5px solid #f5f5f5;
  }
}
</style>