"use strict";
const common_vendor = require("../vendor.js");
class Utils {
  constructor() {
    this.baseUrl = "https://code.itndedu.com/pz";
  }
  // 获取用户信息
  getUserInfo() {
    common_vendor.index.login({
      success: (res) => {
        common_vendor.index.__f__("log", "at common/js/utils.js:12", "调用登录的api==>", res);
        this.request({
          url: "/auth/wxLogin",
          method: "GET",
          data: {
            code: res.code
          },
          isShowLoading: true,
          success: (res2) => {
            common_vendor.index.__f__("log", "at common/js/utils.js:22", res2, "request res");
          },
          fail: (err) => {
            common_vendor.index.__f__("log", "at common/js/utils.js:25", err, "request err");
          }
        });
        this.request({
          url: "/auth/wxLogin",
          method: "GET",
          data: {
            code: res.code
          },
          isShowLoading: true,
          success: (res2) => {
            common_vendor.index.__f__("log", "at common/js/utils.js:38", res2, "request res");
          },
          fail: (err) => {
            common_vendor.index.__f__("log", "at common/js/utils.js:41", err, "request err");
          }
        });
      }
    });
  }
  /**
  * 调用说明：
  * 当同时存在 2 个请求发起，且 isShowLoading 都为 true 时，下面详细描述代码的执行顺序：
  	前提条件
  		代码运行在 uni-app 框架中，使用 uni.getStorageSync 和 uni.setStorageSync 进行本地存储操作，uni.showLoading 和 uni.hideLoading 用于显示和隐藏加载动画。
  		初始状态下，本地存储中 isShowLoading 的值为 false。
  	
  	执行顺序步骤
  	
  		第一个请求发起
  			调用 request 方法：
  				传入的 options 中 isShowLoading 为 true，并且 options.url 存在（假设满足条件）。
  				由于 options.isShowLoading 为 true，调用 this.showLoadingFun() 方法。
  				执行 showLoadingFun 方法：
  				通过 uni.getStorageSync('isShowLoading') 获取本地存储的值，此时为 false，所以不会执行隐藏加载动画的逻辑。
  				调用 uni.showLoading 显示加载动画，设置 title 为 “加载中...”。
  				uni.showLoading 执行完成后，触发 complete 回调，在回调中使用 uni.setStorageSync('isShowLoading', true) 将本地存储中的 isShowLoading 设置为 true，表示加载动画正在显示。
  		第二个请求发起
  			调用 request 方法：
  				同样传入的 options 中 isShowLoading 为 true，且 options.url 存在。
  				因为 options.isShowLoading 为 true，再次调用 this.showLoadingFun() 方法。
  				执行 showLoadingFun 方法：
  				通过 uni.getStorageSync('isShowLoading') 获取本地存储的值，此时为 true，说明已有加载动画正在显示。
  				执行 uni.hideLoading() 隐藏当前的加载动画，然后使用 uni.setStorageSync('isShowLoading', false) 将本地存储中的 isShowLoading 设置为 false。
  				接着调用 uni.showLoading 显示新的加载动画，设置 title 为 “加载中...”。
  				uni.showLoading 执行完成后，触发 complete 回调，在回调中使用 uni.setStorageSync('isShowLoading', true) 将本地存储中的 isShowLoading 再次设置为 true，表示新的加载动画正在显示。
  				
  	综上所述，在同时发起两个请求且 isShowLoading 都为 true 的情况下，会先显示第一个加载动画，当第二个请求发起时，会先隐藏第一个加载动画，再显示新的加载动画，始终保证页面上最多只有一个加载动画显示。
  */
  request(options = {
    isShowLoading: false
  }) {
    if (!options.url)
      return false;
    if (options.isShowLoading) {
      this.showLoadingFun();
    }
    common_vendor.index.request({
      url: this.baseUrl + options.url,
      // 请求地址
      method: options.method ? options.method : "GET",
      // 请求方式
      data: options.data ? options.data : {},
      // 请求参数
      header: options.header ? options.header : {},
      // 请求头
      success: (response) => {
        common_vendor.index.hideLoading();
        if (response.data.code != 1e4) {
          if (options.fail && typeof options.fail == "function") {
            options.fail(response);
          }
        } else {
          if (options.success && typeof options.success == "function") {
            options.success(response);
          }
        }
      },
      fail: (err) => {
        common_vendor.index.__f__("log", "at common/js/utils.js:110", err, "err");
        common_vendor.index.hideLoading();
      }
    });
  }
  // 封装加载动画函数，让页面中只存在一个loading的效果
  showLoadingFun() {
    const isLoading = common_vendor.index.getStorageSync("isShowLoading");
    if (isLoading) {
      common_vendor.index.hideLoading();
      common_vendor.index.setStorageSync("isShowLoading", false);
    }
    common_vendor.index.showLoading({
      title: "加载中...",
      complete: () => {
        common_vendor.index.setStorageSync("isShowLoading", true);
      },
      fail: () => {
        common_vendor.index.setStorageSync("isShowLoading", false);
      }
    });
  }
}
const Utils$1 = new Utils();
exports.Utils = Utils$1;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/common/js/utils.js.map
