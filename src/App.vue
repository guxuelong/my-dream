<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import './css/utils/index.css';

  export default {
    name: 'app',
    methods: {},
    created() {
      /* Rem 核心实现 */
      (function (doc, win) {
        const docEl = doc.documentElement;
        const clientWidth = docEl.clientWidth;
        const resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize';
        const recalc = function () {
          if (clientWidth === undefined) return;
          if (clientWidth >= 414) {
            docEl.style.fontSize = '20px';
            return;
          }
          docEl.style.fontSize = `${20 * (clientWidth / 375)}px`;
        };
        if (doc.addEventListener === undefined) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
        document.body.addEventListener('touchmove', (evt) => {
          // In this case, the default behavior is scrolling the body, which
          // would result in an overflow.  Since we don't want that, we preventDefault.
          document.querySelectorAll('.allow-touchmove').forEach(item => {
            if (item.contains(evt.target)) {
              evt.isScroller = true;
            }
          });
          if (!evt.isScroller) {
            evt.preventDefault();
          }
        });
      }(document, window));
    },
    updated() {
      let startY = 0;
      const touchSatrtFunc = function (evt) {
        try {
          // evt.preventDefault(); // 阻止触摸时浏览器的缩放、滚动条滚动等
          const touch = evt.touches[0]; // 获取第一个触点
          const y = Number(touch.pageY); // 页面触点Y坐标
          // 记录触点初始位置
          startY = y;
        } catch (e) {
          // (`touchSatrtFunc：${e.message}`);
        }
      };
      if (!this.ontouchmove) {
        // touchstart事件
        document.addEventListener('touchstart', touchSatrtFunc, false);
        this.ontouchmove = function (ev) {
          const ss = document.querySelector('.scroll');
          const point = ev.touches[0];
          const top = ss.scrollTop;
          // 什么时候到底部
          const bottomFaVal = ss.scrollHeight - ss.offsetHeight;
          // 到达顶端
          if (top <= 0) {
            // 阻止向下滑动
            if (point.clientY > startY) {
              ev.preventDefault();
            } else {
              // 阻止冒泡
              // 正常执行
              ev.stopPropagation();
            }
          } else if (top === bottomFaVal) {
            // 到达底部
            // 阻止向上滑动
            if (point.clientY < startY) {
              ev.preventDefault();
            } else {
              // 阻止冒泡
              // 正常执行
              ev.stopPropagation();
            }
          } else if (top > 0 && top < bottomFaVal) {
            ev.stopPropagation();
          } else {
            ev.preventDefault();
          }
        };
      } else {
        document.querySelector('.allow-touchmove') && document.querySelector('.allow-touchmove').removeEventListener('touchmove', this.ontouchmove);
      }
      document.querySelector('.allow-touchmove') && document.querySelector('.allow-touchmove').addEventListener('touchmove', this.ontouchmove);
    },
  };
</script>
<style>
  @reset-global pc;
  * {
    box-sizing: border-box;
  }
  html, body {
    font-family: 'Raleway', sans-serif;
    font-size: 100%;
    background: #f7f7f7;
  }
</style>
