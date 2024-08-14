<script setup lang="ts">
import { inject } from "vue";
import TaskItem from "./TaskItem.vue";

const tasks = inject<{ id: null | number }[]>("tasks");
if (!tasks) {
  throw new Error("tasks is not provided");
}
</script>

<template>
  <div class="tasks-box">
    <var-card style="width: 90%">
      <TaskItem v-for="(task, idx) in tasks" :key="idx" v-model:value="task.id" />
    </var-card>
  </div>
</template>

<style scoped>
.tasks-box {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  place-items: center;
  margin-bottom: 10%;
}
</style>
