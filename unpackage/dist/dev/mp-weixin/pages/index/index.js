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
    const app = getApp();
    const bannerList = common_vendor.ref([]);
    common_vendor.onLoad(() => {
      app.globalData.utils.getUserInfo();
      app.globalData.utils.request({
        url: "/app/init",
        success: ({
          data
        }) => {
          const {
            id
          } = data.data.area;
          app.globalData.utils.request({
            url: "/Index/index",
            data: {
              aid: id
            },
            success: (ress) => {
              bannerList.value = ress.data.data.slides;
              common_vendor.index.__f__("log", "at pages/index/index.vue:75", bannerList.value, "ress");
            }
          });
        }
      });
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          isHome: true
        }),
        b: common_assets._imports_0,
        c: common_assets._imports_1,
        d: bannerList.value && bannerList.value.length > 0
      }, bannerList.value && bannerList.value.length > 0 ? {
        e: common_vendor.f(bannerList.value, (item, index, i0) => {
          return {
            a: item.pic_image_url,
            b: item.id
          };
        })
      } : {});
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
