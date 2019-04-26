module.exports = {
  // root: true, 
  // 开启之后本项目之下的js都需要eslint检查 一般不需要 检查src demo下面的就可以了
  parserOptions: {
    parser: 'babel-eslint',
    // ecmaVersion: 2017
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    'standard'
  ],
  // eslint-lugin-vue required to lint *.vue files
  plugins: [
    'vue'
  ],
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    "quotes": 1,
    'no-trailing-spaces': 0,
    'no-debugger': 1
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 0 : 2
  }
}