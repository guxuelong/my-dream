import * as types from './mutation-types';
import VueRouter from '../router';

export default {
  /* login module */
  [types.UPDATE_PHONE_NUMBER](state, phoneNumber) {
    state.phoneNumber = phoneNumber;
  },

  [types.UPDATE_BIZ_TOKEN](state, bizToken) {
    state.bizToken = bizToken;
  },

  [types.UPDATE_SERVICE_PROTOCOL_URL](state, serviceProtocolURL) {
    state.serviceProtocolURL = serviceProtocolURL;
  },

  [types.GO_PAGE_INPUT_P_N]() {
    VueRouter.push({ name: 'userInputPhoneNumber' });
  },

  [types.GO_PAGE_LOGIN]() {
    VueRouter.push({ name: 'userLogin' });
  },

  [types.GO_PAGE_REGISTER]() {
    VueRouter.push({ name: 'userRegister' });
  },

  [types.GO_PAGE_VERIFY_REAL_NAME]() {
    VueRouter.push({ name: 'userVerifyRealName' });
  },

  [types.GO_PAGE_SET_LOGIN_PWD]() {
    VueRouter.push({ name: 'userSetLoginPwd' });
  },

  [types.UPDATE_PRD_LIST](state, prdList) {
    state.prdList.data = prdList;
    state.prdList.hasNextPage = false;
  },

  [types.UPDATE_SECOND_PRD_LIST](state, secondPrdList) {
    const originData = [...state.secondPrdList.data];
    secondPrdList.data = (secondPrdList.pageNum === 1 ? secondPrdList.productList
      : originData.concat(secondPrdList.productList));
    state.secondPrdList = secondPrdList;
  },

  [types.UPDATE_PRODUCT_DETAIL](state, productDetail) {
    state.productDetail = productDetail;
  },

  [types.UPDATE_MY_ASSETS](state, myAssets) {
    state.myAssets = myAssets;
  },

  [types.UPDATE_PERSONAL_SETTING](state, personSetting) {
    state.personSetting = personSetting;
  },

  [types.UPDATE_MY_COUPON_LIST](state, myCouponList) {
    state.myCouponList = myCouponList;
  },

  [types.UPDATE_PRODUCT_PAGE](state, productPage) {
    state.productPage = productPage;
  },
  [types.UPDATE_LOGIN_STATUS](state, userInfo) {
    state.userInfo = userInfo;
  },
};
