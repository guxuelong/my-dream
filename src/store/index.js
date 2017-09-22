/* eslint-disable */
// vuex配置
import Vue from 'vue';
import Vuex from 'vuex';
import stateOrg from './state';
import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';
let state;
if (sessionStorage.getItem('hdMobileState')) {
  state = JSON.parse(sessionStorage.getItem('hdMobileState'));
} else {
  state = stateOrg;
}
const local = JSON.parse(localStorage.getItem('hdMobileState'));
if (local) {
  state.productPage.totalAmountShow = local.productPage.totalAmountShow;
}
export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  strict:debug,
})
