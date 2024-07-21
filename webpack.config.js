// 引入一个包
const path = require('path')
// 引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 引入先清除dist，再重新生成dist目录的插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


// webpack中的所有的配置信息都应该写在module.exports中
module.exports = {
  // 指定入口文件
  entry: './src/index.ts',

  // 指定打包文件所在目录
  output: {
    path: path.resolve(__dirname, 'dist'),
    /* 打包后转成的js文件 */
    filename: 'bundle.js',
    // 告诉webpack不使用箭头函数
    environment: {
      arrowFunction: false,
      const: false
    }
  },

  // 指定webpack打包时要使用的模块
  module: {
    rules: [
      {
        // test指定规则生效的文件
        test: /\.ts$/,
        // 要使用的loader
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: 'babel-loader',
            // 设置babel
            options: {
              // 设定预定义环境
              presets: [
                [
                  "@babel/preset-env",
                  // 配置信息
                  {
                    targets: {
                      "chrome": 88,
                      "ie": 11
                    },

                    // 指定core-js的版本
                    "corejs": '3',

                    // 使用core-js的方式，按需加载
                    "useBuiltIns": 'usage'
                  }
                ]
              ]
            }
          },
          /* 从下往上运行，ts-loader在最下面，先将ts转成js */
          'ts-loader'
        ],
        // 要排除的文件
        exclude: /node_modules/
      },

      {
        //less文件设置的处理
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          // 引入postcss
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      browsers: 'last 2 versions'
                    }
                  ]
                ]
              }
            }
,          },
          'less-loader'
        ]
      }
    ]

  },

  // 配置webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // title:'这是我自定义的title'
      
      // 模板html文件
      template: './src/index.html'
    }),
  ],

  // 用来设置引用模块
  resolve: {
    extensions: ['.ts', '.js']
  }
}