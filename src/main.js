// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
// import install from '../dist/hui';

const I64BIT_TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'.split('');
Vue.config.productionTip = false;
// Vue.use(install);
// Vue.prototype.$confirm = MessageBox.confirm;
store.subscribe((mutation, state) => {
  sessionStorage.setItem('hdMobileState', JSON.stringify(state));
  localStorage.setItem('hdMobileState', JSON.stringify(state));
});
new Vue({
  el: '#app',
  router,
  store,
  mounted() {
    /* query hash code */
    String.prototype.hash = function () {
      const input = this;
      let hashCode = 5381;
      const i = input.length - 1;
      if (typeof input === 'string') {
        for (let k = i; k > -1; k -= 1) {
          hashCode += (hashCode << 5) + input.charCodeAt(k);
        }
      } else {
        for (let k = i; k > -1; k -= 1) {
          hashCode += (hashCode << 5) + input[k];
        }
      }
      let value = hashCode & 0x7FFFFFFF;
      let retValue = '';
      do {
        retValue += I64BIT_TABLE[value & 0x3F];
      }
      while (value >>= 6);
      return retValue;
    };
    /* date format */
    Date.prototype.format = function (fmt) {
      const o = {
        'M+': this.getMonth() + 1,                 // 月份
        'd+': this.getDate(),                    // 日
        'h+': this.getHours(),                   // 小时
        'm+': this.getMinutes(),                 // 分
        's+': this.getSeconds(),                 // 秒
        'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
        S: this.getMilliseconds(),             // 毫秒
      };
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear().toString()).substr(4 - RegExp.$1.length));
      }
      Object.getOwnPropertyNames(o).forEach(k => {
        if (new RegExp(`(${k})`).test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr((o[k].toString()).length)));
        }
      });
      return fmt;
    };
    /* string replace All */
    String.prototype.replaceAll = function (s1, s2) {
      return this.replace(new RegExp(s1, 'gm'), s2);
    };
    /* amount formatting */
    String.prototype.amountFormat = function (unit) {
      let result = this.replace(/^(-?)(\d+)((\.\d+)?)$/, (s, s1, s2, s3) => `${unit || ''}${s1}${s2.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,')}${s3}`);
      if (result.indexOf('.') === -1) {
        result += '.00';
      }
      return result;
    };
    Number.prototype.amountFormat = function (unit) {
      return String(this).amountFormat(unit);
    };
    // 去尾法
    Number.prototype.toFloor = function () {
      return Math.floor(this * 100) / 100;
    };
    /* prefixInteger 数字自动补0 */
    Number.prototype.prefixInteger = function (n) {
      n = n || 2;
      return (Array(n).join(0) + this).slice(-n);
    };
    /* develop tools */
    // if (process.env.NODE_ENV === 'development') {
    //   const script = document.createElement('script');
    //   script.src = 'http://cdn.jsdelivr.net/eruda/1.2.2/eruda.min.js';
    //   document.body.appendChild(script);
    //   script.onload = () => {
    //     window.eruda.init();
    //   };
    // }
  },
  template: '<App/>',
  components: { App },
});
