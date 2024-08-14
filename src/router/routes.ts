const routes = [
  {
    path: "/",
    name: "index",
    title: "首页",
    component: () => import("@views/HomeView.vue"),
  },
  {
    path: "/result",
    name: "Result",
    title: "任务攻略",
    component: () => import("@views/ResultView.vue"),
  },
  {
    path: "/map",
    name: "Map",
    title: "任务攻略",
    component: () => import("@views/MapView.vue"),
  },
  {
    path: "/changeLogs",
    name: "ChangeLogs",
    title: "开发日志",
    component: () => import("@/views/ChangeLogView.vue"),
  },
];
export default routes;
