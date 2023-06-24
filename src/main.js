import Vue from "vue";
import App from "./App.vue";
import { FlippingWidgets } from "vue-turnjs";
import "vue-turnjs/dist/vue-turnjs.esm.css";

Vue.use(FlippingWidgets);
new Vue({
  render: h => h(App)
}).$mount("#app");
