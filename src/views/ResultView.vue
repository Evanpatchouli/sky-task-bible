<script setup lang="ts">
import { useLocale } from "@/locale";
import { useGlobal } from "@/store";
import tasks from "@assets/tasks";
import router from "@router/index";

const { taskIds: globalTaskIds } = useGlobal();
const taskIdsRouted = router.currentRoute.value.query.ids ? JSON.parse(router.currentRoute.value.query.ids as any) : [];
const taskIds: (number | null)[] = taskIdsRouted || globalTaskIds;
const tasksData = tasks.filter((task) => taskIds?.includes(task.id));

const $ = useLocale();
</script>

<template>
  <div class="result-view">
    <h1 class="result-title">{{ $("$TASK_RESULT") }}</h1>
    <div class="task-results-list">
      <div class="task-result" :id="`task-${idx + 1}`" v-for="(task, idx) in tasksData" :key="idx">
        <h2 class="task-title">{{ task.title }}</h2>
        <p>{{ $("$POSITION") }} ： {{ task.position }}</p>
        <div class="task-strategy">
          <p class="task-description">{{ task.description }}</p>
          <var-image
            class="task-demo-image"
            width="80%"
            v-for="(url, idx) in task.images"
            :key="idx"
            :src="url"
            radius="5"
            lazy
            loading="images/loading.gif"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.result-view {
  width: 100vw;
  height: 100%;
  margin: 0;
  padding: 0;
}

.result-title {
  font-size: 3em;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12vh;
  box-sizing: border-box;
}
.task-results-list {
  height: calc(100vh - 12vh - 8vh);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 1em;
  box-sizing: border-box;
  text-align: center;
  overflow-y: auto;

  background: linear-gradient(to top, --color-body, rgba(255, 255, 255, 0.09));
  /* -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px); */
}
.task-title {
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 
               0 0 20px rgba(255, 255, 255, 0.6), 
               0 0 30px rgba(255, 255, 255, 0.4), 
               0 0 40px rgba(255, 255, 255, 0.2);
}
.task-description {
  text-align: left;
}
.task-strategy {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.task-strategy > p {
  text-indent: 2em;
  padding-inline: 0.5em;
}
</style>
