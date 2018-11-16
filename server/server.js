
const express = require('express');
const webpack = require('webpack');
const path = require('path');
//pulling in dependencies that we will need.
const config = require('../webpack.config.dev');
const open = require('open');
/* eslint-disable no-console */
//specify  the server port
const port = 3007;
//creating a instance of express

  const app = express();
  //calls webpack with the dev configuartion that we created
  const compiler = webpack(config);
  module.exports = () => {
  // tell express to use webpack-dev-middleware, and we pass it our compiled webpack configuration
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  //use webpack-hot-middleware and pass it the compiled webpack cinfigurations.
  app.use(require('webpack-hot-middleware')(compiler));
  // /express to serve up our index.html for any request on the server.
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
  });
  //starts up express listening on the port configured above. 
  app.listen(port, function (err) {
    if (err) {
      console.log(err);
    } else {
      open(`http://localhost:${port}`);
    }
  });
}