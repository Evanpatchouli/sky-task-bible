import { useGlobal } from "@/store";
import { storeToRefs } from "pinia";
// import { createIntl, useIntl } from "vue-intl";

export const messages = {
  cn: {
    $CHANGE_LOGS: "开发者日志",
    $CURVER: "当前版本：",
    $LatestUpdate: "最近更新：",
    $SUMBIT: "提交",
    $GENERATE_RESULT: "生成任务攻略",
    $TASK_RESULT: "任务攻略",
    $POSITION: "位置",
    $APPNAME: "光遇任务宝典",
    $SHARE_TITLE: "光遇任务宝典 - 定制你的专属任务攻略",
    $NONE_OF_UNSELECTED_TASK: "请至少选择一个任务哦",
    $FAIL_TO_STAR: "只能手动收藏网站呀",
    $TASK_MEDITATE_IN_PRAIRIES_BUTTERFLY_FIELD: "在蝴蝶平原的神坛旁冥想",
    $TASK_MEDITATE_AT_PRAIRIES_CAVE_SHRINE: "在幽光山洞里冥想",
    $TASK_MEDITATE_AT_PRAIRIES_BIRD_NEST_SHRINE: "在云顶浮石上冥想",
  },
  en: {
    $CHANGE_LOGS: "Changg Logs",
    $CURVER: "Current Version：",
    $LatestUpdate: "Latest Update：",
    $SUMBIT: "SUBMIT",
    $GENERATE_RESULT: "Generate Result",
    $TASK_RESULT: "Task Guide",
    $POSITION: "Position",
    $APPNAME: "Sky Task Bible",
    $SHARE_TITLE: "Sky Task Bible - Customize your exclusive task guide",
    $NONE_OF_UNSELECTED_TASK: "Please select at least one",
    $FAIL_TO_STAR: "Please manually bookmark",
    $TASK_MEDITATE_IN_PRAIRIES_BUTTERFLY_FIELD: "Meditate in at Prairie's Butterfly Field",
    $TASK_MEDITATE_AT_PRAIRIES_CAVE_SHRINE: "Meditate at Prairie's cave shrine",
    $TASK_MEDITATE_AT_PRAIRIES_BIRD_NEST_SHRINE: "Meditate at Prairie's bird nest shrine",
  },
};

export type MsgKeys = keyof (typeof messages)["cn"];

export const useIntl = () => {
  const store = useGlobal();
  const { lang } = storeToRefs(store);
  const formatMessage = (options: { id: MsgKeys }) => messages[lang.value][options.id];
  return {
    formatMessage: formatMessage,
    locale: lang,
    setLocale: (locale: keyof typeof messages) => {
      store.setLang(locale);
    },
    // messages,
  };
};

export function useLocale(): (key: MsgKeys) => string;
/** @deprecated */
export function useLocale(key: MsgKeys): string;
export function useLocale(key?: MsgKeys): any {
  const intl = useIntl();
  if (key !== void 0) {
    return intl.formatMessage({ id: key });
  } else {
    return (key: MsgKeys) => intl.formatMessage({ id: key });
  }
}
