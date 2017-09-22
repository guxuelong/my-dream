/* eslint-disable */
export default {
  main: {
    index: {
      component: resolve => {
        require.ensure(['src/pages/Index'], () => {
          resolve(require('src/pages/Index'));
        });
      },
      requireAuth: false,
    },
  },
};
