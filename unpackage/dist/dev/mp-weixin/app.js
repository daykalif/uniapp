"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const common_js_utils = require("./common/js/utils.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/order/index.js";
  "./pages/user/index.js";
  "./pages/search/index.js";
  "./pages/test/index.js";
  "./pages/hospital/index.js";
  "./pages/service/index.js";
}
const _sfc_main = {
  onLaunch: function() {
    common_vendor.index.__f__("log", "at App.vue:5", "App Launch");
  },
  onShow: function() {
    common_vendor.index.__f__("log", "at App.vue:8", "App Show");
  },
  onHide: function() {
    common_vendor.index.__f__("log", "at App.vue:11", "App Hide");
  },
  // 注册公共的工具函数
  globalData: {
    utils: common_js_utils.Utils
  }
};
const Component = () => "./mycomponents/component.js";
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.component("my-component", Component);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
