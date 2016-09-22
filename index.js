const Discord = require('discord.js');
const config = require('./config');
const glob = require('require-glob');
const Promise = require('bluebird');
const logger = require('winston-color');
const client = new Discord.Client();
const database = require('./database');

const loadTrackers = function loadTrackers(dir) {
  return new Promise((resolve, reject) => {
    glob([dir], {cwd: __dirname}).then(modules => {
      for (let module in modules) {
        module = modules[module];
        module(client, logger, database);
        logger.info(`Loaded "${module.tracking}" tracker`);
      }
      resolve();
    });
  });
};

client.on('ready', () => {
  loadTrackers('trackers/**/*.js')
  .then(() => logger.info('Analytics Bot started successfully'));
});

client.login(config.token);
