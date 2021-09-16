// 引用 node_modules 只需套件名稱不用路徑
import { createApp } from "vue";
// 引用檔案才需加路徑
import App from "./App2.vue";
import router from "./router";

// use() 使用 Vue 的擴充功能
createApp(App)
  .use(router)
  .mount("#app");
