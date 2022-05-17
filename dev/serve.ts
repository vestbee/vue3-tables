import "./serve.css";

import Dev from "./serve.vue";
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "app.use" call
// import Vue3Tables from "@/entry.esm";
import { createApp } from "vue-demi";

const app = createApp(Dev);
// app.use(Vue3Tables);

app.mount("#app");
