const Discord = require('discord.js');
const ayarlar = require('./data/ayarlar.json')
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`[ ${client.user.tag} ] Bota Başarıyla Bağlandık!`);
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('Pong!');
  }
});

client.login(ayarlar.token); // Devamı Bir Sonraki Videoda  :))))