const db = require('../database');
const type = db.type;

const Guild = db.createModel('Guild', {
  messageCount: type.number(),
  emojiCount: type.number(),
  code: type.object(),
  members: type.array(),
  channels: type.array()
});

module.exports = Guild;
