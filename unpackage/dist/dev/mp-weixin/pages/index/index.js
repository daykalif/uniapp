"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
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
      common_vendor.index.__f__("log", "at pages/index/index.vue:43", "onLoad生命周期");
    });
    const handleClick = () => {
      list.forEach((item) => {
        item.num++;
      });
    };
    const totalNum = common_vendor.computed(() => {
      return list.reduce((total, cur) => total + cur.num, 0);
    });
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.t(title.value),
        c: common_vendor.f(list, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.num),
            c: item.name
          };
        }),
        d: common_vendor.o(handleClick),
        e: common_vendor.t(totalNum.value)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
