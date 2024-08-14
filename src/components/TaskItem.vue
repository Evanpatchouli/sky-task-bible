<script setup lang="ts">
import { computed, PropType, ref, watch } from "vue";
import tasks, { TaskTypes } from "../assets/tasks";
import { useLocale } from "@/locale";
import maps from "@/assets/map";

const $ = useLocale();

const selected = defineModel("value", {
  type: [null, Number] as PropType<null | number>,
  default: null,
});

const placeholder = "请选择任务";
const taskType = ref<SkyTaskBible.TaskTypeNames>("不限");
const map = ref<string>("不限");
const options = computed(() => {
  const list = tasks.filter(
    (t) =>
      (taskType.value === "不限" || t.type === taskType.value) &&
      (map.value === "不限" || t.position.includes(map.value))
  );
  if (list.length === 0) {
    return [
      {
        id: 0,
        title: "没有符合条件的任务",
        icon: "images/task-star.png",
        type: "noTasks",
        position: [],
        disabled: true,
      },
    ];
  } else {
    return list;
  }
});
const selectedTask = computed(() => options.value.find((item) => item.id === selected.value));

const typePop = ref(false);
const openTypePop = () => {
  typePop.value = true;
};
const closeTypePop = (type: SkyTaskBible.TaskTypeNames) => {
  taskType.value = type;
  typePop.value = false;
};

const mapPop = ref(false);
const openMapPop = () => {
  mapPop.value = true;
};
const closeMapPop = (newMap: string) => {
  map.value = newMap;
  mapPop.value = false;
};

watch(options, () => {
  if (options.value.find((item) => item.id === selected.value) === undefined) {
    selected.value = null;
  }
});

const spand = ref(false);
const toggleSpand = () => {
  spand.value = !spand.value;
};
</script>

<template>
  <div class="task-item">
    <var-select v-model="selected" :placeholder="placeholder" clearable class="task-selector">
      <template #default>
        <var-option
          v-for="(task, idx) in options"
          :key="idx"
          :label="task.title"
          :value="task.id"
          :disabled="task.disabled"
        >
          <img class="task-icon" :src="task.icon" />
          <span>{{ $(task.title as any) || task.title }}</span>
        </var-option>
      </template>
      <template #selected>
        <img class="task-icon" :src="selectedTask?.icon" />
        <span>{{ $(selectedTask?.title as any) || selectedTask?.title }}</span>
      </template>
    </var-select>
    <div class="task-filter">
      <div class="coll" @click="toggleSpand" v-ripple>{{ spand ? ">" : "<" }}</div>
      <var-button v-show="spand" @click="openTypePop">{{ taskType }}</var-button>
      <var-button v-show="spand" @click="openMapPop">{{ map }}</var-button>
    </div>
    <var-popup v-model:show="typePop" title="任务类型" class="popcard">
      <div class="popbox">
        <h3 class="popbox-title">任务类型</h3>
        <div @click="closeTypePop(type.name)" v-for="(type, idx) in TaskTypes" :key="idx" class="popitem" v-ripple>
          <img class="task-icon" :src="type.icon" />
          <span>{{ type.name }}</span>
        </div>
      </div>
    </var-popup>
    <var-popup v-model:show="mapPop" title="所属地图">
      <div class="popbox">
        <h3 class="popbox-title">所属地图</h3>
        <div @click="closeMapPop(map.name)" v-for="(map, idx) in maps" :key="idx" class="popitem" v-ripple>
          <img class="task-icon" :src="map.icon" />
          <span>{{ map.name }}</span>
        </div>
      </div></var-popup
    >
  </div>
</template>

<style scoped>
.task-item {
  margin-bottom: 8vmin;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.task-selector {
  flex: 1;
}
.task-icon {
  width: 1.5em;
  height: 1.5em;
  margin-right: 0.5em;
}
.task-filter {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.coll {
  align-self: stretch;
  height: 50px;
  line-height: 50px;
  width: 1.4em;
  margin-left: 0.6em;
}
.popcard {
  border-radius: 5px;
}
.popbox {
  padding: 0.5em 0.5em;
  width: 60vw;
  border-radius: 5px;
}
.popbox-title {
  padding-left: 1em;
  text-align: left;
}
.popitem {
  display: flex;
  align-items: center;
  padding-block: 1em;
  /**可改为1或4, 4不严谨 */
  padding-left: 1em;
  padding-right: 1em;
  border-radius: 5px;
  text-indent: 0.5em;
}
</style>
