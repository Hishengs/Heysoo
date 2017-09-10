'use strict';

const path = require('path');
const getFolderFiles = require('./util.js').getFolderFiles;

exports.init = (app) => {
	const config = app.config;
	// 获取 service 模块
	const servicePath = `./${config.folder.app}/${config.folder.service}/`;
  const files = getFolderFiles(servicePath);
  let serviceModule = {};
  for(let i=0,ilen=files.length;i<ilen;i++){
    serviceModule[files[i].slice(0,-3)] = require(path.join(app.basePath,servicePath+files[i]))(app);
  }
	app.service = app.context.service = serviceModule;

	app.debug('service init done.');
}

exports.baseClass = class Service {
	constructor (){
		this._name = 'Service';
	}
}