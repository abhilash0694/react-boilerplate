import webpack from 'webpack';
import path from 'path';



export default{
    debug:true,//sets debug to true, this will enable the display of debug information.
    devtool:'inline-source-map',//this set the devtool to inline-source-map
    noInfo:false,//this sets noInfo to false and webpack will display a list of all the files that it’s bundling.
    entry: [// defining our applications entry point.
        'eventsource-polyfill',
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, 'src/index')//actual entry point.
      ],
      target: 'web',
      output: {//specifies where webpack will create our dev bundle,
        path: __dirname + '/dist', 
        publicPath: '/',
        filename: 'bundle.js'
      },
      devServer: {//webpack’s devServer where our source code lives
        contentBase: path.resolve(__dirname, 'src')
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
      ],
      module: {
        loaders: [//all file application handles by webpack
          {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
          {test: /(\.css)$/, loaders: ['style', 'css']},
          {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
          {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
          {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
           loader: 'url?limit=10000&mimetype=application/octet-stream'},
          {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
      }
}