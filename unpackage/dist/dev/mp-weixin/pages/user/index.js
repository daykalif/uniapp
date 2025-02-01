"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_my_component = common_vendor.resolveComponent("my-component");
  const _easycom_navbar2 = common_vendor.resolveComponent("navbar");
  (_component_my_component + _easycom_navbar2)();
}
const _easycom_navbar = () => "../../components/navbar/navbar.js";
if (!Math) {
  _easycom_navbar();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const data = common_vendor.ref("动态数组");
    const changeValueData = (val) => {
      data.value = val;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(changeValueData),
        b: common_vendor.p({
          name: "组件属性传递",
          content: data.value
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/index.js.map
