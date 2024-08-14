import { createPinia, defineStore } from "pinia";

const pinia = createPinia();

type globalState = {
  taskIds: (number | null)[];
  lang: "cn" | "en";
  isFullScreen: boolean;
  isMobile: boolean;
};

interface GlobalAction {
  setTaskIds(taskIds: (number | null)[]): void;
  setLang(lang: "cn" | "en"): void;
  toggleLang(): void;
  setIsFullScreen(isFullScreen: boolean): void;
  toggleFullScreen(): void;
  setIsMobile(isMobile: boolean): void;
}

export const useGlobal = defineStore<"global", globalState, {}, GlobalAction>("global", {
  state: () => {
    return {
      taskIds: [],
      lang: "cn",
      isFullScreen: false,
      isMobile: true,
    };
  },
  getters: {},
  actions: {
    setTaskIds(taskIds: (number | null)[]) {
      this.taskIds = taskIds;
    },
    setLang(lang: "cn" | "en") {
      this.lang = lang;
    },
    toggleLang() {
      this.lang = this.lang === "cn" ? "en" : "cn";
    },
    setIsFullScreen(isFullScreen: boolean) {
      this.isFullScreen = isFullScreen;
    },
    toggleFullScreen() {
      this.isFullScreen = !this.isFullScreen;
    },
    setIsMobile(isMobile: boolean) {
      this.isMobile = isMobile;
    },
  },
});

export default pinia;
