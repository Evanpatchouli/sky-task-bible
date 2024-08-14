<script setup lang="ts">
import { RouterView } from "vue-router";
import Navigator from "@/components/Navigator.vue";
import { isFullscreen, isMobile } from "./utils";
import { useGlobal } from "./store";

const global = useGlobal();
const initialize = () => {
  global.setIsFullScreen(isFullscreen());
  global.setIsMobile(isMobile());
};
initialize();
</script>

<template>
  <div class="container">
    <RouterView class="router-view" />
    <Navigator />
  </div>
</template>

<style scoped>
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.router-view {
  height: 100%;
  width: 100%;
}
.container {
  display: flex;
  margin: 0;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  height: 100dvh;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  background-image: url("/sky-task-bible/images/back.png");
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
