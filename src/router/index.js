/* 路由配置文件 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import modules from './modules';
import store from '../store';

// 注册插件
Vue.use(VueRouter);
Vue.use(Vuex);

// 路由生成
const routes = [{
  name: '',
  path: '/',
  component: modules.main.index.component,
  meta: { requireAuth: modules.main.index.requireAuth },
}];
Object.getOwnPropertyNames(modules).forEach(mainKey => {
  Object.getOwnPropertyNames(modules[mainKey]).forEach(key => {
    routes.push({
      name: `${mainKey}${key.replace(/\b(\w)|\s(\w)/g, m => m.toUpperCase())}`,
      path: `/${mainKey}/${key}`,
      component: modules[mainKey][key].component,
      meta: { requireAuth: modules[mainKey][key].requireAuth },
    });
  });
});

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  // store.commit('saveToken', window.localStorage.getItem('token'))
  // store.commit('saveFixedProdId', window.localStorage.getItem('FixedProdId'))
}

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.userInfo) {
      next();
    } else {
      const ua = window && window.navigator && window.navigator.userAgent.toLowerCase();
      const inWeChat = ua && ua.indexOf('micromessenger') > 0;
      const baseUrl = (process.env && process.env.apiHost) || '/';
      if (inWeChat) {
        window.location.href = `${baseUrl}common/loginNew?fromOfficialAccount=1&envName=${location.hostname.split('.')[0]}&returnURL=${encodeURIComponent(location.href)}`;
      } else {
        next({
          path: '/user/inputPhoneNumber',
        });
      }
    }
  } else {
    next();
  }
});

export default router;
