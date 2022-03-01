{
  // 顺序很重要，后面的会覆盖前面的配置
  "extends": [
    // 引入eslint的核心功能，并且报告一些常见的共同错误
    "eslint:recommended",
    // 添加插件，可以停用下面设置的格式化规则，并且可以达到 prettier 格式错误被当作 ESLint 错误的效果
    "plugin:prettier/recommended"
  ],
  "env": {
    "es6": true,
    "node": true
  },
  "rules": {
    // 会被 prettier 覆盖
    "max-len": [
      "error",
      { "code": 80 }
    ],
    "indent": [
      "error",
      2
    ],
    // 可以覆盖.prettierrc.json，但最好不要，分工明确
    'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }],
  }
}