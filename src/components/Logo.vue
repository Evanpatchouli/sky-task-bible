<script setup lang="ts">
import { useLocale } from "@/locale";

const logo = "images/sky.jpg";
const $ = useLocale();
</script>

<template>
  <div class="applogo-box">
    <img :src="logo" width="40%" />
    <h1 class="appname">{{ $("$APPNAME") }}</h1>
  </div>
</template>

<style scoped>
.applogo-box {
  width: 100%;
  margin-top: 16dvh;
  will-change: filter;
  transition: filter 300ms;
}
.appname {
  font-size: 1.2em;
  color: var(--color-text);
  text-align: center;
  margin-top: -2.4em;
  padding: 0;
}
</style>
