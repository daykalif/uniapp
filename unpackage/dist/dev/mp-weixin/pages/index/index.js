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
    const nav2s = common_vendor.ref([]);
    const navs = common_vendor.ref([]);
    const hospitals = common_vendor.ref([]);
    common_vendor.onLoad(() => {
      app.globalData.utils.getUserInfo();
      app.globalData.utils.request({
        url: "/app/init",
        success: ({
          data
        }) => {
          const {
            id
          } = data.area;
          app.globalData.utils.request({
            url: "/Index/index",
            data: {
              aid: id
            },
            success: (ress) => {
              bannerList.value = ress.data.slides;
              nav2s.value = ress.data.nav2s;
              navs.value = ress.data.navs;
              hospitals.value = ress.data.hospitals;
            }
          });
        }
      });
    });
    const jump = (nav, type) => {
      if (nav.stype == 1) {
        common_vendor.index.navigateTo({
          url: nav.stype_link
        });
      }
    };
    const onNav2sTap = (e) => {
      const nav = common_vendor.toRaw(nav2s.value)[e.currentTarget.dataset.index];
      jump(nav);
    };
    const onNavsTap = (e) => {
      const nav = common_vendor.toRaw(navs.value)[e.currentTarget.dataset.index];
      jump(nav);
    };
    const toHospitals = (e) => {
      common_vendor.index.navigateTo({
        url: "/pages/hospital/index?hid=" + e.currentTarget.dataset.hid
      });
    };
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
      } : {}, {
        f: nav2s.value && nav2s.value.length > 0
      }, nav2s.value && nav2s.value.length > 0 ? {
        g: common_vendor.f(nav2s.value, (item, index, i0) => {
          return {
            a: item.pic_image_url,
            b: index
          };
        }),
        h: common_vendor.o(onNav2sTap, _ctx.idnex),
        i: _ctx.idnex
      } : {}, {
        j: navs.value && navs.value.length > 0
      }, navs.value && navs.value.length > 0 ? {
        k: common_vendor.f(navs.value, (item, index, i0) => {
          return {
            a: item.pic_image_url,
            b: common_vendor.t(item.title),
            c: common_vendor.s("color" + (item.tcolor ? item.tcolor : "")),
            d: common_vendor.o(onNavsTap, index),
            e: index,
            f: index
          };
        })
      } : {}, {
        l: common_vendor.f(hospitals.value, (item, index, i0) => {
          return {
            a: item.avatar ? item.avatar_url : "../../static/resource/images/avatar.jpg",
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.rank),
            d: common_vendor.t(item.label),
            e: common_vendor.t(item.intro),
            f: item.id,
            g: item.id,
            h: common_vendor.o(toHospitals, item.id)
          };
        })
      });
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
