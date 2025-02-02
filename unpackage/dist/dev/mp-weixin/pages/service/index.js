"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_dtPicker2 = common_vendor.resolveComponent("dtPicker");
  _easycom_dtPicker2();
}
const _easycom_dtPicker = () => "../../components/dtPicker/dtPicker.js";
if (!Math) {
  _easycom_dtPicker();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const app = getApp();
    const service = common_vendor.ref({});
    const hospital_index = common_vendor.ref(0);
    const hospitals = common_vendor.ref([]);
    const order = common_vendor.reactive({
      price: "",
      // 价格
      starttime: 0,
      // 就诊时间
      tel: "",
      // 联系电话
      demand: "",
      // 服务需求
      address: {
        userName: "",
        cityName: "",
        countyName: "",
        detailInfo: ""
      },
      receiveAddress: ""
      // 接送地址
    });
    common_vendor.onLoad((option) => {
      getServiceDetail(option);
    });
    const getServiceDetail = (option) => {
      const {
        svid,
        hid
      } = option;
      app.globalData.utils.request({
        url: "/Service/order",
        data: {
          svid
        },
        success: (res) => {
          service.value = res.data.service;
          hospitals.value = res.data.hospitals;
          if (option.hid > 0) {
            const hospitalsData = common_vendor.toRaw(hospitals.value);
            for (let i = 0; i < hospitalsData.length; i++) {
              let hosI = hospitalsData[i];
              if (hosI.id == option.hid) {
                hospital_index.value = i;
                order.price = hosI.service_price ?? "";
                break;
              }
            }
          }
        }
      });
    };
    const handleServiceTap = () => {
    };
    const onHospitalChange = (e) => {
      const changeIndex = parseInt(e.detail.value);
      hospital_index.value = changeIndex;
      order.price = hospitals.value[changeIndex].service_price ?? "";
    };
    const onStartTimeChanged = (e) => {
      order.starttime = e.detail.value;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_assets._imports_0$1,
        b: service.value.icon_image ? service.value.icon_image_url : "../../static/resource/images/avatar.jpg",
        c: common_vendor.t(service.value.name),
        d: common_vendor.o(handleServiceTap),
        e: hospitals.value.length > 0 && service.value.stype == "10" || service.value.stype == "15" || service.value.stype == "20"
      }, hospitals.value.length > 0 && service.value.stype == "10" || service.value.stype == "15" || service.value.stype == "20" ? {
        f: hospitals.value[hospital_index.value].name,
        g: common_vendor.o(onHospitalChange),
        h: hospital_index.value,
        i: hospitals.value,
        j: common_vendor.o(onStartTimeChanged),
        k: common_vendor.p({
          timestamp: order.starttime,
          placeholder: "请选择就诊时间"
        })
      } : {});
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/service/index.js.map
