"use strict";
const common_vendor = require("../../common/vendor.js");
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
    }
  },
  setup(__props) {
    const props = __props;
    const status = common_vendor.ref(0);
    const navHeight = common_vendor.ref(0);
    const containerStyle = common_vendor.ref("");
    const textStyle = common_vendor.ref("");
    const iconStyle = common_vendor.ref("");
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
    return (_ctx, _cache) => {
      return {
        a: common_vendor.s("height:" + status.value + "rpx;" + containerStyle.value),
        b: common_vendor.s("height:" + navHeight.value + "rpx;" + containerStyle.value)
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/navbar/navbar.js.map
