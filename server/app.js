// 引入路径别名
require('./alias')

const express = require('express')
const path = require('path')
const cookiesParser = require('cookie-parser')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const chalk = require('chalk')
const mount = require('mount-routes')

const scheduler = require('./scheduler');
const sessionAuth = require('./middlewares/sessionMiddleware');
const errorHandler = require('./utils/utils.errorHandler');
const apiResponse= require('./utils/utils.apiResponse');

const isDev = process.env.NODE_ENV === 'development';

// 访问不同的 .env 文件
require('dotenv').config({ path: isDev ? './.env.development' : './.env.production' });

require('express-async-errors')

// mongodb 数据库连接
require('./db/index');

// 实例化
const app = express();

// Session全局中间件配置
app.use(sessionAuth)

// 处理post参数解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 解决跨域
app.use(cors());

// 设置跨域和设置允许的请求的头部信息
app.all('/v1/*', function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With, token');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With, Authorization');
	res.header('Content-Type', 'application/json;charset=UTF-8');
	res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
	res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
	if (req.method === 'OPTIONS') res.send(200);
	/*让options请求快速返回*/
	else next();
});

if (isDev) {
	console.log(chalk.bold.yellow('当前是开发环境'));
	app.use(logger('dev'));
} else {
	console.log(chalk.bold.yellow('当前是生产环境'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
