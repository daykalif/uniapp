"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "custom_comp",
  props: {
    name: String,
    content: {
      type: String,
      default: () => {
        return "默认值";
      }
    }
  },
  emits: ["changeData"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const handleChange = () => {
      emit("changeData", "修改后的数据");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.name),
        b: common_vendor.t(__props.content),
        c: common_vendor.o(handleChange)
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/custom_comp/custom_comp.js.map
