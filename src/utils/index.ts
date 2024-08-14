export function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

export function isFullscreen() {
  return Boolean(document.fullscreenElement);
}

export function getWindowSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export function debounce(func: Function, delay: number) {
  let timer: number;
  return function (this: any, ...args: any[]) {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

export function throttle(func: Function, delay: number) {
  let timer: number;
  return function (this: any, ...args: any[]) {
    if (!timer) {
      timer = window.setTimeout(() => {
        func.apply(this, args);
        timer = 0;
      }, delay);
    }
  };
}

export function isMobile() {
  const userAgent = navigator.userAgent;
  return /(iPhone|iPad|iPod|Android|BlackBerry|IEMobile)/i.test(userAgent);
}

export function formatDate(date: Date, format: string) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const map: { [x: string]: number } = {
    "Y+": year,
    "M+": month,
    "D+": day,
    "h+": hour,
    "m+": minute,
    "s+": second,
  };
  for (const key in map) {
    const reg = new RegExp(`(${key})`);
    if (reg.test(format)) {
      format = format.replace(RegExp.$1, String(map[key]).padStart(RegExp.$1.length, "0"));
    }
  }
  return format;
  // const options = {
  //   year: "numeric",
  //   month: "2-digit",
  //   day: "2-digit",
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   second: "2-digit",
  // };
  // return date.toLocaleString("zh-CN", options);
}

export function downloadFile(url: string, filename: string) {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export function getBrowserInfo() {
  const userAgent = navigator.userAgent;
  const isChrome = /Chrome/.test(userAgent) && /Google Inc/.test(navigator.vendor);
  const isFirefox = /Firefox/.test(userAgent);
  const isSafari = /Safari/.test(userAgent) && /Apple Computer/.test(navigator.vendor);
  const isEdge = /Edge/.test(userAgent);
  return {
    isChrome,
    isFirefox,
    isSafari,
    isEdge,
  };
  // const isIE = window.navigator.userAgent.indexOf("MSIE ") > 0 ||!!document.documentMode;
  // return {
  //   isIE,
  //   isChrome,
  //   isFirefox,
  //   isSafari,
  //   isEdge,
  // };
}

export function getBrowserVersion() {
  const userAgent = navigator.userAgent;
  const version = userAgent.match(/(Chrome|Firefox|Safari|Edge)\/(\S+)/);
  return version ? version[2] : "";
}

export function getQueryParams(url: string) {
  const params = new URLSearchParams(url.split("?")[1]);
  const query: { [key: string]: string } = {};
  for (const [key, value] of params) {
    query[key] = value;
  }
  return query;
}

export function sleep<T>(seconds: number, data?: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data as T);
    }, seconds * 1000);
  });
}

export async function getProjectInfo() {
  const project = await import("../../package.json");
  return project.default;
}
