"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "navbar",
  props: {
    background: {
      type: String,
      default: "rgba(255,255,255,1)"
    },
    color: {
      type: String,
      default: "rgba(0,0,0,1)"
    },
    fontSize: {
      type: Number,
      default: 32
    },
    iconWidth: {
      type: Number,
      default: 116
    },
    iconHeight: {
      type: Number,
      default: 38
    },
    titleText: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const status = common_vendor.ref(0);
    const navHeight = common_vendor.ref(0);
    const containerStyle = common_vendor.ref("");
    const textStyle = common_vendor.ref("");
    const iconStyle = common_vendor.ref("");
    const pages = common_vendor.ref(getCurrentPages().length);
    const setNavSize = () => {
      const {
        system,
        statusBarHeight
      } = common_vendor.index.getSystemInfoSync();
      status.value = statusBarHeight * 2;
      const isIos = system.indexOf("ios") > -1;
      if (!isIos) {
        navHeight.value = 96;
      } else {
        navHeight.value = 88;
      }
    };
    const setStyle = () => {
      containerStyle.value = ["background:" + props.background].join(";");
      textStyle.value = ["color:" + props.color, "font-size:" + props.fontSize + "rpx"].join(";");
      iconStyle.value = ["width:" + props.iconWidth + "rpx", "height:" + props.iconHeight + "rpx"].join(";");
    };
    common_vendor.onBeforeMount(() => {
      setNavSize();
      setStyle();
    });
    const backHome = () => {
      if (pages.value > 1) {
        common_vendor.index.navigateBack();
      } else {
        common_vendor.index.switchTab({
          url: "/pages/index/index"
        });
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.s("height:" + status.value + "rpx;" + containerStyle.value),
        b: pages.value > 1
      }, pages.value > 1 ? {
        c: common_assets._imports_0$1
      } : {
        d: common_assets._imports_1
      }, {
        e: common_vendor.o(backHome),
        f: __props.titleText
      }, __props.titleText ? {
        g: common_vendor.t(__props.titleText),
        h: common_vendor.s("height:" + navHeight.value + "rpx;line-height:" + navHeight.value + "rpx;" + textStyle.value)
      } : {}, {
        i: common_vendor.s("height:" + navHeight.value + "rpx;" + containerStyle.value)
      });
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/navbar/navbar.js.map
