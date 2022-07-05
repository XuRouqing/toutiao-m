module.exports = {
  plugins: {
    // 'autoprefixer': {
    //   browsers: ['Android >= 4.0', 'iOS >= 7']
    // },
    'postcss-pxtorem': {
      // rootValue: 37.5,
      // vant样式按照37.5转换，自己的样式按75转换
      footValue ({ file }) {
        return file.indexOf('vant') != -1 ? 37.5 : 75
      },
      propList: ['*']
    }
  }
}
