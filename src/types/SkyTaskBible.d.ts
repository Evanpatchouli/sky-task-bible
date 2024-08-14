declare namespace SkyTaskBible {
  interface Task {
    id: number | null;
    icon: string;
    title: string;
    position: string;
    description: string;
    images?: string[];
    type: TaskTypeNames;
    disabled?: boolean;
  }

  type TaskTypeNames = "追光" | "寻光" | "冥想" | "社交" | "花憩节" | "彩虹日" | "锦标赛" | "先祖" | "其他" | "不限";
}
