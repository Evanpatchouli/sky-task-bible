<script setup lang="ts">
import { provide, reactive, ref } from "vue";
import { useLocale } from "@/locale";
import { useGlobal } from "@/store";
import Logo from "@/components/Logo.vue";
import Task from "@/components/Task.vue";
import router from "@router/index";

const $ = useLocale();
const tasks = reactive<{ id: number | null }[]>(Array.from({ length: 4 }, () => ({ id: null })));
provide("tasks", tasks);

const global = useGlobal();

const handleSubmit = () => {
  if (tasks.every((task) => task.id === null)) {
    show.value = true;
    return;
  }
  global.setTaskIds(tasks.map((task) => task.id));
  router.push(`/result?ids=${JSON.stringify(tasks.map((task) => task.id))}`);
};

const show = ref(false);
const isRefresh = ref(false);
const refresh = () => {
  setTimeout(() => {
    tasks.forEach((task) => {
      task.id = null;
    });
    isRefresh.value = false;
  }, 500);
};
</script>

<template>
  <var-pull-refresh v-model="isRefresh" @refresh="refresh">
    <Logo />
    <Task />
    <var-button type="primary" @click="handleSubmit">{{ $("$GENERATE_RESULT") }}</var-button>
    <var-snackbar type="info" v-model:show="show">{{ $("$NONE_OF_UNSELECTED_TASK") }}</var-snackbar>
  </var-pull-refresh>
</template>

<style scoped>
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
