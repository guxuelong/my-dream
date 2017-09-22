<template xmlns="http://www.w3.org/1999/html">
  <div class="page-index">
    <div class="header">
      <div class="sort"></div>
    </div>
    <div class="header-bottom">
      <transition name="moveDown">
        <div v-show="init">
          <div class="title">Just Do It</div>
          <div class="description">
            <label></label>
            <span>&nbsp;&nbsp;&nbsp;朝着自己的梦想前进&nbsp;&nbsp;&nbsp;</span>
            <label></label>
          </div>
        </div>
      </transition>
    </div>
    <div class="banner"></div>
  </div>
</template>
<script>
  import '../css/pages/index.css';

  export default {
    name: 'Index',
    data() {
      return {
        init: false,
      };
    },
    created() {
    },
    mounted() {
      setTimeout(() => {
        this.init = true;
      }, 10);
    },
    methods: {
      checkClick(txt) {
        /* eslint-disable no-alert */
        alert(txt);
        /* eslint-enable no-alert */
      },
    },
  };
</script>
