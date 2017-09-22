module.exports = {
  plugins: [
    require('postcss-salad'),
    // require('autoprefixer')({
    //   browsers: ['last 7 versions']
    // }),
    // require('postcss-bem'),
    // require('postcss-css-reset')(),
    // require('precss'),
    // // 因为postcss-sprites必须以文件目录为单位处理，不够灵活。
    // // postcss-easysprites却弥补灵活性缺陷，只需在图片后面添加指定输出组即可（*.png#group）
    // // require('postcss-easysprites')({
    // //   imagePath:'../dist/assets/img',
    // //   spritePath: '../dist/assets/img/sprites'
    // // })
    // require('postcss-short'),
    require('postcss-pxtorem')({
      rootValue: 20,
      propList: ['*']
    }),
  ]
}
