const path = require('path');

const result = require('dotenv').config({path: path.join(__dirname, '../.env')});
require('dotenv-expand')(result);

module.exports = Object.freeze({
	appName: process.env.APPNAME,
	appDescription: process.env.APPDESC,
	appVersion: process.env.APPVERS,
	logFile: process.env.LOGFILE || 'app.log',
	logLevel: process.env.LOGLEVEL || 'debug'
});
