import { createApp } from "vue";
// import "./style.css";
import "@/assets/less/common.less";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
//引入依赖和语言
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript"; //引入语言
hljs.registerLanguage("javascript", javascript);
import hljsVuePlugin from "@highlightjs/vue-plugin";
import "highlight.js/styles/stackoverflow-light.css";
import "highlight.js/lib/common";

const app = createApp(App);
app.component("hljsVuePlugin", hljsVuePlugin); //全局注册
app.use(ElementPlus);
app.use(router);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#app");
