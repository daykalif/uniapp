"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_navbar2 = common_vendor.resolveComponent("navbar");
  _easycom_navbar2();
}
const _easycom_navbar = () => "../../components/navbar/navbar.js";
if (!Math) {
  _easycom_navbar();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const navigatorTo = () => {
      common_vendor.index.navigateTo({
        url: "/pages/search/index"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          isHome: true
        }),
        b: common_vendor.o(navigatorTo)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
