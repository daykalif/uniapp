"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _component_my_component = common_vendor.resolveComponent("my-component");
  const _easycom_custom_comp2 = common_vendor.resolveComponent("custom_comp");
  (_component_my_component + _easycom_custom_comp2)();
}
const _easycom_custom_comp = () => "../../components/custom_comp/custom_comp.js";
if (!Math) {
  _easycom_custom_comp();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const data = common_vendor.ref("动态数组");
    const title = common_vendor.ref("Hello");
    const list = common_vendor.reactive([
      {
        name: "apple",
        num: 1
      },
      {
        name: "banana",
        num: 2
      }
    ]);
    common_vendor.onLoad(() => {
      common_vendor.index.__f__("log", "at pages/test/index.vue:52", "onLoad生命周期");
    });
    const handleClick = () => {
      list.forEach((item) => {
        item.num++;
      });
    };
    const totalNum = common_vendor.computed(() => {
      return list.reduce((total, cur) => total + cur.num, 0);
    });
    const changeValueData = (val) => {
      data.value = val;
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$3,
        b: common_vendor.t(title.value),
        c: common_vendor.f(list, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.num),
            c: item.name
          };
        }),
        d: common_vendor.o(handleClick),
        e: common_vendor.t(totalNum.value),
        f: common_vendor.o(changeValueData),
        g: common_vendor.p({
          name: "组件属性传递",
          content: data.value
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/test/index.js.map
