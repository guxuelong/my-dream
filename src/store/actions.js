// 分发actions，页面的action同意dispatch到此进行逻辑处理
import * as types from './mutation-types';

export const updateLoginStatusByOnly = ({ commit }, userInfo) => {
  commit(types.UPDATE_LOGIN_STATUS, userInfo);
};

export const updateLoginStatusByOnly1 = ({ commit }, userInfo) => {
  commit(types.UPDATE_LOGIN_STATUS, userInfo);
};
