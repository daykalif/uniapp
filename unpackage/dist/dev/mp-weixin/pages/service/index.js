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
    const personInfo = common_vendor.ref({
      name: "",
      age: "",
      mobile: "",
      sex: ""
    });
    const cfg = common_vendor.reactive({
      page_xy: "",
      page_fw: ""
    });
    const is_xieyi = common_vendor.ref(false);
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
    const goSelectPerson = () => {
      common_vendor.index.navigateTo({
        url: "/pages/clients/index?act=select"
      });
    };
    const userReceiveInfo = common_vendor.ref("");
    common_vendor.index.$on("clientChange", (data) => {
      const {
        age,
        mobile,
        sex,
        name
      } = data;
      personInfo.value.name = name;
      personInfo.value.mobile = mobile;
      personInfo.value.sex = sex;
      personInfo.value.age = age;
    });
    const onAddressChange = () => {
      common_vendor.index.chooseAddress({
        success: (res) => {
          const {
            cityName,
            countyName,
            detailInfo,
            userName
          } = res;
          userReceiveInfo.value = res ? userName + "(" + cityName + countyName + detailInfo + ")" : "";
          order.address.userName = userName;
          order.address.cityName = cityName;
          order.address.countyName = countyName;
          order.address.detailInfo = detailInfo;
          common_vendor.index.__f__("log", "at pages/service/index.vue:373", res, "res");
        },
        fail: (err) => {
          common_vendor.index.__f__("log", "at pages/service/index.vue:376", err, "err");
        }
      });
    };
    const onXieyiChange = () => {
      is_xieyi.value = !is_xieyi.value;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_assets._imports_0$1,
        b: service.value.icon_image ? service.value.icon_image_url : "../../static/resource/images/avatar.jpg",
        c: common_vendor.t(service.value.name),
        d: common_vendor.o(handleServiceTap),
        e: hospitals.value.length > 0 && service.value.stype == "10" || service.value.stype == "15" || service.value.stype == "20"
      }, hospitals.value.length > 0 && service.value.stype == "10" || service.value.stype == "15" || service.value.stype == "20" ? common_vendor.e({
        f: hospitals.value[hospital_index.value].name,
        g: common_vendor.o(onHospitalChange),
        h: hospital_index.value,
        i: hospitals.value,
        j: common_vendor.o(onStartTimeChanged),
        k: common_vendor.p({
          timestamp: order.starttime,
          placeholder: "请选择就诊时间"
        }),
        l: personInfo.value.name,
        m: common_vendor.o(goSelectPerson),
        n: service.value.stype == 15
      }, service.value.stype == 15 ? {
        o: order.receiveAddress,
        p: common_vendor.o(($event) => order.receiveAddress = $event.detail.value)
      } : {}, {
        q: order.tel,
        r: common_vendor.o(($event) => order.tel = $event.detail.value),
        s: order.demand,
        t: common_vendor.o(($event) => order.demand = $event.detail.value)
      }) : {}, {
        v: hospitals.value.length > 0 && service.value.stype == "30" || service.value.stype == "40"
      }, hospitals.value.length > 0 && service.value.stype == "30" || service.value.stype == "40" ? {
        w: hospitals.value[hospital_index.value].name,
        x: common_vendor.o(onHospitalChange),
        y: hospital_index.value,
        z: hospitals.value,
        A: common_vendor.o(onStartTimeChanged),
        B: common_vendor.p({
          timestamp: order.starttime,
          placeholder: "请选择期望服务时间"
        }),
        C: userReceiveInfo.value,
        D: common_vendor.o(onAddressChange),
        E: order.tel,
        F: common_vendor.o(($event) => order.tel = $event.detail.value),
        G: order.demand,
        H: common_vendor.o(($event) => order.demand = $event.detail.value)
      } : {}, {
        I: common_vendor.n("is_xieyi " + (is_xieyi.value ? "is_xieyi_on" : "")),
        J: common_vendor.o(onXieyiChange),
        K: cfg.page_xy,
        L: cfg.page_fw,
        M: order.price > 0
      }, order.price > 0 ? {
        N: common_vendor.t(order.price)
      } : {}, {
        O: common_vendor.n("btnp " + (is_xieyi.value ? "" : "btnp-disabled")),
        P: common_vendor.o((...args) => _ctx.submit && _ctx.submit(...args))
      });
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/service/index.js.map
