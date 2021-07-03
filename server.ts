import express from 'express';
import webpack from 'webpack';
import config from './webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import history from 'connect-history-api-fallback';

const app = express();
const port = 8080;

app.use(express.static('dist'));

//fallback to /
app.use(history());

//webpack and hot-load
const compiler = webpack(config as webpack.Configuration);
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);
app.use(webpackHotMiddleware(compiler));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
