<script lang="ts" setup>
import ChangeItem from "@/components/ChangeItem.vue";
import changelogs from "@/docs/change-log.json";
import { formatDate, sleep } from "@/utils";
import { ref } from "vue";
import project from "../../package.json";
import { useLocale } from "@/locale";

const $ = useLocale();

const loading = ref(false);
const finished = ref(false);
const list = ref<typeof changelogs>([]);

async function getChangelogs(startIndex: number, endIndex: number) {
  // Simulate fetching changelogs from a server
  // Replace with actual API call
  await sleep(0.5);
  return changelogs.slice(startIndex, endIndex);
}

// 每次按顺序从 changelogs 获取 10 条数据
async function load() {
  loading.value = true;
  try {
    const startIndex = list.value.length;
    const endIndex = startIndex + 10;
    const newList = await getChangelogs(startIndex, endIndex);
    list.value = list.value.concat(newList);
    if (newList.length < 10) {
      finished.value = true;
    }
  } catch (error) {
    console.error("Error requiring changelogs:", error);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="change-logs-view">
    <h1 class="change-logs-title">{{ $("$CHANGE_LOGS") }}</h1>
    <div class="lastest-info">
      <label>{{ $("$CURVER") }}</label
      ><span>{{ project.version }}</span> <label style="margin-left: 1em">{{ $("$LatestUpdate") }}</label
      ><span>{{ formatDate(new Date(changelogs[0].timestamp), "YYYY-MM-DD") }}</span>
    </div>
    <var-list class="change-list" :finished="finished" :loading="loading" @load="load">
      <var-cell v-for="(change, idx) in list" :key="idx">
        <ChangeItem :change="change" />
      </var-cell>
      <var-back-top :duration="300" />
    </var-list>
  </div>
</template>

<style scoped>
.change-logs-view {
  height: calc(100vh - 8vh);
}
.change-logs-title {
  margin-bottom: 0.1em;
}
.lastest-info {
  font-size: small;
}
.change-list {
  width: 100%;
  height: calc(100vh - 20vh - 1em);
  overflow-y: auto;
}
</style>
