// [定数] webpack の出力オプションを指定します
// 'production' か 'development' を指定
const MODE = 'development';



// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = (MODE === 'development');



module.exports = [{
      // モード値を production に設定すると最適化された状態で、
      // development に設定するとソースマップ有効でJSファイルが出力される
      // mode: MODE,
      entry: {
        app: "./src/index.jsx"
      },
      output: {
        path: __dirname + '/public/js',
        filename: "[name].js"
      },
      devServer: {
        contentBase: __dirname + '/public',
        port: 8080,
        publicPath: '/js/',
        disableHostCheck: true,
        historyApiFallback: true,
      },
      devtool: "#inline-source-map",
      module: {
        rules: [{
          test: /\.(js|jsx)$/,
          enforce: "pre",
          exclude: /node_modules/,
          loader: "eslint-loader"
        }, {
          test: /\.css$/,
          loader: ["style-loader","css-loader"]
        }, {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }, {
          test: /\.scss/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                // オプションでCSS内のurl()メソッドの取り込みを禁止する
                url: false,
                // ソースマップの利用有無
                sourceMap: enabledSourceMap,

                // 0 => no loaders (default);
                // 1 => postcss-loader;
                // 2 => postcss-loader, sass-loader
                importLoaders: 2
              },
            },
            {
              loader: 'sass-loader',
              options: {
                // ソースマップの利用有無
                sourceMap: enabledSourceMap,
              }
            }
          ],
        },
      ]},
      resolve: {
        extensions: ['.js', '.jsx'],
      },
      performance: { hints: false } // warningをオフにする
}]
