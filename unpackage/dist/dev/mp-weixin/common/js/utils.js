"use strict";
const common_vendor = require("../vendor.js");
class Utils {
  // 获取用户信息
  getUserInfo() {
    common_vendor.index.login({
      success: (res) => {
        common_vendor.index.__f__("log", "at common/js/utils.js:7", res);
      }
    });
  }
}
const Utils$1 = new Utils();
exports.Utils = Utils$1;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/common/js/utils.js.map
