// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'airbnb',
  // required to lint *.vue files
  plugins: [
    'html',
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'linebreak-style': 0,
    'no-param-reassign': 0,// 允许给函数参数重新赋值
    "no-new": 0,// 禁止在使用new构造一个实例后不赋值
    // "no-new-object": 0,// 禁止使用new Object()
    // "no-new-func": 0,// 禁止使用new Function
    "no-extend-native": 0,// 禁止扩展native对象
    "no-bitwise": 0,// 禁止使用按位运算符
    "no-cond-assign": 0,// 禁止在条件表达式中使用赋值语句
    "no-unused-expressions": 0,// 禁止无用的表达式
    "consistent-return": 0,// return 后面是否允许省略
    "func-names": 0,// 函数表达式必须有名字
    // // allow async-await
    // 'generator-star-spacing': 0,
    // // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-console": process.env.NODE_ENV === 'production' ? 2 : 0,//禁止使用console
    "no-alert": process.env.NODE_ENV === 'production' ? 2 : 0,//禁止使用alert confirm prompt
  }
}
