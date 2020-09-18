const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();
require("./server.js");
const { get } = require("snekfetch");
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log("pingin");
  response.sendStatus(200);
})
setInterval(() => {
  
  http.get('https://furry1234.glitch.me/');
}, 280000);

function randomStatus() {
    let status = ["prefix ^ ", "^help ", "creator: ★♦FURRY CYBERWOLF♦★#9539", "invite saya: bit.ly/invite-bot-anime", "jika belum paham DM ke pembuat!", "JOIN OFFICIAL DISCORD ANIME BOT: https://discord.gg/M95gUDE", "Jika pro invite saya! https://top.gg/bot/745378461597564979", "Watching 1.000.000 Server!"];
    let rstatus = Math.floor(Math.random() * status.length);

    bot.user.setActivity(status[rstatus]);
}
  setInterval(randomStatus, 1000);

const prefix = '^'

bot.on("warn", console.warn);
bot.on("error", console.error);
bot.on("ready", () => console.log(`[READY] ${bot.user.tag} berhasil menyalakan bot!`));
bot.on("shardDisconnect", (event, id) => console.log(`[SHARD] Shard ${id} disconnected (${event.code}) ${event}, mencoba untuk menghubungkan ulang...`));
bot.on("shardReconnecting", (id) => console.log(`[SHARD] Shard ${id} menghubungkan ulang...`));

bot.on("message", async (message) => {
  
if(message.author.bot) return;
if(message.channel.type === 'dm') return;
let msg = message.content.toLowerCase();
let args = message.content.slice(prefix.length).trim().split(/ +/);
let cmd = args.shift().toLowerCase();
    
 console.log(`${message.author.tag} menggunakan ${prefix}${cmd}`)
  
  if (message.content === "Halo") {
    message.channel.send(`Halo Juga ${message.author.username}`);
  }
  if(message.content === "Hai") {
     message.channel.send(`Hai juga ${message.author.username} :)`);
   }
  if(message.content === "Hi") {
    message.channel.send(`Hi juga ${message.author.username}`);
  }
  if (message.content === "Indonesia") {
    message.channel.send(':flag_id: ');
  }
  if (message.content === "info bot") {
    message.channel.send('Bot Masih BETA Masih Tahap Perbaikan/Pembaruan ');
  }
  if (cmd === "info-bot" || cmd === "info") {
    message.channel.send('Bot di bikin oleh ★♦FURRY CYBERWOLF♦★#9539 pada Tanggal:27/07/20 Pukul: 20.00 WIB');
  } 
  if (message.content === "p") {
    message.channel.send('Dilarang P utamakan Assalamualaikum (kalo non islam ketik pagi,siang,sore,malam :D)');
  }
  if (message.content === "Assalamualaikum") {
    message.channel.send(`Waalaikumsalam ${message.author.username} :D`);
  }
  if(message.content === "Salmekom") {
    message.channel.send(`Hai ${message.author.username} kamu tau gak? kata kata salmekom artinya matilah kamu(gak percaya tanya bapak kamu!)`);
  }
  if(message.content === "Samlekom") {
    message.channel.send(`Hai ${message.author.username} kamu tau gak? kata kata salmekom artinya matilah kamu(gak percaya tanya bapak kamu!)`);
  }
  if (message.content === "Pagi") {
    message.channel.send(`pagi juga ${message.author.username} :D`);
  }
  if (message.content === "Siang") {
    message.channel.send(`siang juga ${message.author.username} :D`);
  }
  if (message.content === "Sore") {
    message.channel.send(`sore juga  ${message.author.username} :D`);
  }
  if (message.content === "Malam") {
    message.channel.send(`malam  juga ${message.author.username} :D`);
  }
  if (message.content === "YouTube") {
    message.channel.send('Silahkan Buka YouTube untuk menonton video: https://www.youtube.com/');
  }
  if (message.content === "Donate") {
    message.channel.send('Donate Dong Untuk Upgrade Bot di: https://bit.ly/Donate-Rizal');
  }
  if (message.content === "Bot aktif") {
   message.channel.send('bot aktif jika pc coding nya on kalo pc coding nya mati maka saya off :)');
  }
  if(message.content.startsWith(`${prefix}user-info`)) {
    message.channel.send(`Nama kamu: ${message.author.username}\nId kamu: ${message.author.id}` );
  }
 if(message.content.startsWith(`${prefix}list`)) {
   // List servers the bot is connected to
   await message.delete()
    console.log("Servers:")
    bot.guilds.forEach((guild) => {
        console.log(" - " + guild.name)
    })
  }
  if(message.channel.id === '746046391540777002') {
    await message.delete()
  }
  if(message.channel.id === '744472213394030592') {
    await message.delete()
  }
  if(message.channel.id === '754670077504389131') {
    await message.delete()
  }
  if(cmd === "satpam-on" || cmd === "satpam") {
    message.reply(`KAMU TELAH MENJADI SATPAM 24 JAM!!!`);
  }
  
  if(message.content === "Honk") {
    message.channel.send('Honk Honk!!!');
  }
  if(message.content === "Musik") {
    message.channel.send('Silahkan Ketik ^help untuk meminta bantuan pada bot ini :)')
  }
  if(message.content.startsWith(`${prefix}user-info`)) {
    message.channel.send(`Nama kamu: ${message.author.username}\nId kamu: ${message.author.id}` );
  }
  if(message.content.startsWith(`${prefix}bot`)) {
    message.channel.send(`Iya ada apa ${message.author.username}?`)
  }
  if(message.content.startsWith(`${prefix}tag`)) {
    message.channel.send(`${message.author.username}`)
  }
 if(message.content.startsWith(`${prefix}say`)) {
    var text = message.content.split(' ').slice(1).join(' ')
    await message.delete()
    if(!text) return message.reply('Tolong beri aku kata kata!!!!!!')
    message.channel.send(text)
  }
 if(message.content.startsWith(`${prefix}kick`)) {
  
  let member = message.mentions.members.first();
  member.kick().then((member) => {
    console.log(`dadah | ${member.displayName} sudah di Kick!`)
    message.channel.send(`:wave: dadah **|** ${member.displayName} sudah di Kick!`);
  }).catch(() => {
    if(!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR'])) {
      message.reply("Kamu tidak bisa Kick orang");
    } else if(member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR'])) {
      message.reply("Kamu tidak bisa kick ini orang");
    }
 
   })
}
  if(message.content.startsWith(`${prefix}ban`)) {
  
  let member = message.mentions.members.first();
  member.ban().then((member) => {
    console.log(`dadah | ${member.displayName} sudah di ban!`)
    message.channel.send(`:wave: dadah **|** ${member.displayName} sudah di Ban!`);
  }).catch(() => {
    if(!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR'])) {
      message.reply("Kamu tidak bisa Ban orang");
    } else if(member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR'])) {
      message.reply("Kamu tidak bisa Ban ini orang");
    }
 
   })
  }
  if(message.content.startsWith(`${prefix}afk`)) {
    message.reply(` aku menset afk ke #${message.channel.name}`)
  }
  if(message.content.startsWith(`${prefix}on`)) {
    message.reply(` kamu telah on kembali dari afk #${message.channel.name}`)
  }
  if(message.content.startsWith (`${prefix}delete`)) {
  if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Kamu tidak ada permission untuk menghapus pesan!");
    if (isNaN(args[0])) return message.channel.send("Harap masukkan nomor yang valid.") 
    if (args[0] > 100) return message.channel.send("masukkan angka kurang dari 100.") 
    if (args[0] < 2) return message.channel.send("masukkan angka kurang dari 1.")
    
    await message.delete()
    await message.channel.bulkDelete(args[0])
    .catch(() => message.channel.send("Ada yang tidak beres, saat menghapus pesan."))
    .then(messages => message.channel.send(`Deleted ${messages.size}/${args[0]} messages.`)).then(d => d.delete({timeout: 10000})) 
    message.channel.send(`berhasil membersihkan text sebanyak: ${args[0]} messages`)
    console.log(`berhasil membersihkan text sebanyak: ${args[0]} messages`)
  }
  if(message.content.startsWith (`${prefix}nuke`)) {
    if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have a permissions to do this.");
    if (isNaN(args[0])) return message.channel.send("Harap masukkan nomor yang valid.") 
    if (args[0] > 100000) return message.channel.send("masukkan angka kurang dari 100000.") 
    if (args[0] < 2) return message.channel.send("masukkan angka kurang dari 1.")
    
    await message.delete()
    await message.channel.bulkDelete(args[0])
    .then(messages => message.channel.send(`Deleted ${messages.size}/${args[0]} messages.`)).then(d => d.delete({timeout: 10000})) 
    .catch(() => message.channel.send("Ada yang tidak beres, saat menghapus pesan."))
    message.channel.send(`berhasil membersihkan text sebanyak: ${args[0]} messages`)
    console.log(`berhasil membersihkan text sebanyak: ${args[0]} messages`)
  }
 if(message.content.startsWith (`${prefix}invite`)) {
    message.channel.send(`invite saya: https://bit.ly/invite-bot-anime`)
  }
  if(message.content.startsWith (`${prefix}room`)) {
    message.reply(`kamu berada di room: ${message.channel.name}`)
  }
  let commandFiles;
  try{
    commandFiles = require(`./commands/${cmd}.js`)
  } catch (err) {
  }
  const db = require("quick.db")
  const now = Date.now()
  if(db.has(`cd_${message.author.id}`)) {
    const expirationTime = db.get(`cd_${message.author.id}`) + 3000
    if(now < expirationTime) {
      const timeLeft = (expirationTime, now) / 1000;
      return;
    }
  }
  db.set(`cd_${message.author.id}`, now);
  setTimeout(() => {
    db.delete(`cd_${message.author.id}`)
}, 3000)
try{
  commandFiles.run(client, message, args)
} catch(err) {
} finally{
  console.log(`${message.author.tag} menggunakan ${prefix}${cmd}`)
}
});

bot.login(process.env.TOKEN)
