<script setup lang="ts">
import { useLocale } from "@/locale";
import router from "@/router";
import { useGlobal } from "@/store";
import { toggleFullScreen as tf } from "@/utils";
import { ref } from "vue";

const $ = useLocale();
const goHome = () => {
  router.push("/");
};
const goBack = () => {
  router.back();
};
const share = () => {
  if (navigator.share) {
    navigator
      .share({
        title: $("$SHARE_TITLE"),
        text: "Hey bro, I found a cool site for you!",
        url: router.currentRoute.value.fullPath,
      })
      .catch((error) => console.error("Error sharing:", error));
  } else {
    alert("抱歉，当前浏览器不支持分享功能");
  }
};
const global = useGlobal();
const tanslate = () => {
  // global.toggleLang();
};
const toggleFullScreen = () => {
  tf();
  global.toggleFullScreen();
};
const msgShow = ref(false);
const star = () => {
  try {
    if (window.sidebar) {
      window.sidebar.addPanel(location.href, document.title, "");
      // @ts-ignore
    } else if (window.external?.AddFavorite) {
      // @ts-ignore
      window.external.AddFavorite(location.href, document.title);
    } else {
      msgShow.value = true;
    }
  } catch (error) {
    console.error(error);
    msgShow.value = true;
  }
};
</script>

<template>
  <div class="navigator">
    <div class="navigate-img-wrapper" v-ripple>
      <var-icon name="images/backward.svg" class="navigate-icon" :size="32" @click="goBack" />
    </div>
    <var-icon
      :name="global.isFullScreen ? 'images/fullscreen-exit.svg' : 'images/fullscreen.svg'"
      :size="32"
      v-ripple
      class="navigate-icon"
      @click="toggleFullScreen"
    />
    <var-icon name="home" :size="32" v-ripple class="navigate-icon" @click="goHome" />
    <var-icon name="star" :size="32" v-ripple class="navigate-icon" @click="star" />
    <var-icon name="share" :size="32" v-ripple class="navigate-icon" @click="share" />
    <var-snackbar position="bottom" type="info" v-model:show="msgShow">{{ $("$FAIL_TO_STAR") }}</var-snackbar>
  </div>
</template>

<style scoped>
.navigator {
  /* z-index: 1000; */
  width: 100vw;
  border-top: 3px solid; /* 设置边框宽度 */
  border-image: linear-gradient(to right, rgb(32, 32, 32), rgb(126, 126, 126)) 1; /* 使用线性渐变 */
  padding-block: 0.5em;
  height: 8vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  user-select: none;
  background-color: var(--color-body);
  justify-self: flex-end;
}

.navigate-img-wrapper {
  border-radius: 5px;
  user-select: none;
}

.navigate-icon {
  border-radius: 5px;
  padding: 0.4em;
  user-select: none;
}
</style>
