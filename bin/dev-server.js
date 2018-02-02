'use strict'
const WebpackDevServer=require('webpack-dev-server');
const config = require('../webpack.config');
const webpack =require('webpack');
const path =require('path');
const compiler =webpack(config);

const server=new WebpackDevServer(compiler,{
  historyApiFallback:true,
  port: 8080, //如果省略，默认8080
});
server.listen(8080,'localhost',function(err){
    if(err) throw err
})