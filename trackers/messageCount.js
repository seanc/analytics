function messageCount(bot, logger) {
  bot.on('message', message => {
    console.log(message.content);
  });
}

messageCount.tracking = 'Message Count';

module.exports = messageCount;
