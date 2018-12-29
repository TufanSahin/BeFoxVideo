const Discord = require('discord.js');
const kanalidleri = require('./data/kanalidleri.json');
const ayarlar = require('./data/ayarlar.json');
const client = new Discord.Client();

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`[ ${client.user.tag} ] Bota Başarıyla Bağlandık!`);
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('Pong!');
  } //SA KOMUTU
  if (message.content.toLowerCase() === "sa") {
    message.reply("Aleyküm Selam,Hoşgeldin")
  }
  if (message.content.toLowerCase().startsWith("selamun aleyküm")) {
    message.reply("Aleyküm Selam,Hoşgeldin")
  } //Hadi Args Komutuyla Birşeyler Yazdıralım
  if (message.content.startsWith(`${ayarlar.prefix}yaz`)) {
    let mesaj = message.content.substring(prefix.length + 3)
    if (mesaj.length < 1) return message.reply('Ne Yazmak İstediğini Yaz.');
    message.delete('1');
		message.channel.send(`${mesaj}`) //unutmuşum bunları :D
  } //şimdide seçilen kanala mesaj göndermeyi yapalım
  if (message.content.startsWith(`${ayarlar.prefix}mesajgönder`)) {
    let args = message.content.substring(prefix.length + 11);
    client.channels.get(kanalidleri.mesajgönder).send(`${args}`)
    message.channel.send('mesajınız Gönderildi') //bunlarıda unutmuşum vallaha :D
  }
});

client.login(ayarlar.token); //devamı bir sonraki videoda :D 