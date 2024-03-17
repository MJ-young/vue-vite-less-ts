<template>
  <div>
    <el-container class="layout">
      <el-aside class="aside">
        <el-menu default-active="1" class="menu">
          <div style="text-align: center">
            <div class="logo-box">
              <a href="https://vitejs.dev" target="_blank">
                <img src="/vite.svg" class="logo" alt="Vite logo" />
              </a>
              <a href="https://vuejs.org/" target="_blank">
                <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
              </a>
            </div>
            <div class="menu-title">{{ title }}</div>
          </div>
          <el-menu-item index="1" class="menu-item">
            <template #title>
              <el-icon><setting /></el-icon
              ><router-link to="/">Home</router-link>
            </template>
          </el-menu-item>
          <el-menu-item index="2">
            <template #title>
              <el-icon><setting /></el-icon
              ><router-link to="/vite">Vite</router-link>
            </template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container class="right-part">
        <el-header class="header">
          <el-menu mode="horizontal" :ellipsis="false">
            <el-menu-item index="0">
              <div class="header-title">学习vite、less及plugin</div>
            </el-menu-item>
          </el-menu>
        </el-header>

        <el-main class="mian-part">
          <el-card class="card">
            <router-view />
          </el-card>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { Setting } from "@element-plus/icons-vue";
export default {
  name: "Layout",
  data() {
    return {
      title: "Vite + Vue",
    };
  },
};
</script>

<style lang="less" scoped>
.layout {
  height: 100vh;
  width: 100vw;
  position: fixed;
  background: @bg-color;
}
.right-part {
  flex: 1;
}
.mian-part {
  padding: 20px;
  overflow: hidden;
  // display: block;
  .card {
    height: 90vh;
    overflow: auto;
  }
}
.flex {
  display: flex;
  align-items: center;
}
.items-center {
  align-items: center;
}

.header {
  background: @layout-color;
  // border-bottom: 1px solid @border-color;
  padding: 0;
}
.header-title {
  font-size: 20px;
  font-weight: bold;
  color: dodgerblue;
}
.menu {
  height: 100vh;
  overflow: hidden;
}
.menu-title {
  font-size: 20px;
  font-weight: bold;
  color: @text-color;
}
aside {
  overflow: hidden;
  width: 200px;
  display: block;
  line-height: 32px;
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  a {
    color: #337ab7;
    cursor: pointer;

    &:hover {
      color: rgb(32, 160, 255);
    }
  }
}
.logo-box {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 3em;
    padding: 0.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  img:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
}
</style>