"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const app = getApp();
    const service = common_vendor.ref({});
    common_vendor.onLoad((option) => {
      getServiceDetail(option);
    });
    const getServiceDetail = (option) => {
      const {
        svid
      } = option;
      app.globalData.utils.request({
        url: "/Service/order",
        data: {
          svid
        },
        success: (res) => {
          service.value = res.data.data.service;
        }
      });
    };
    const handleServiceTap = () => {
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: service.value.icon_image ? service.value.icon_image_url : "../../static/resource/images/avatar.jpg",
        c: common_vendor.t(service.value.name),
        d: common_vendor.o(handleServiceTap)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/service/index.js.map
