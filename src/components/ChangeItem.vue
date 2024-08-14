<script lang="ts" setup>
import { computed, ref } from "vue";
type Change = {
  version: string;
  timestamp: string | number;
  commit: string;
  author: string;
  message: string;
  information: string[];
};

const value = ref("");
defineProps<{
  change: Change;
}>();
function handleChange(val: any) {
  console.log(val);
}
const closedIcon = "var-icon var-icon--set var-icon-chevron-down var-collapse-item__header-icon";
const openedIcon =
  "var-icon var-icon--set var-icon-chevron-down var-collapse-item__header-icon var-collapse-item__header-open";
const rightIcon = computed(() => (value.value ? openedIcon : closedIcon));
</script>
<template>
  <var-collapse v-model="value" @change="handleChange" accordion>
    <var-collapse-item name="1" :title="`v ${change.version}`">
      <template #title>
        <span style="font-size: small">{{ `v ${change.version}` }}</span>
      </template>
      <template #icon>
        <span style="font-size: small">{{ change.message }}</span>
        <i :class="rightIcon" style="margin-left: 0.2em"></i>
      </template>
      <ul style="text-align: left">
        <li v-for="info in change.information" :key="info">{{ info }}</li>
      </ul>
    </var-collapse-item>
  </var-collapse>
</template>
