const express = require('express');
const app = express();


const {
  Telegraf
} = require('telegraf');

const bot = new Telegraf("1442414242:AAELYF8Wp41gKX59NM17Vg525mRrN5AR40A");

bot.start(ctx => {
  const username = ctx.update.message.from.username;
  ctx.reply(`Halo @${username}, selamat datang di grup pusdikom`);
});

bot.start(ctx => {
  const username = ctx.update.message.from.username;
  ctx.reply(`Halo kak ☺️ @${username}, `);
});



bot.help((ctx) => ctx.reply("ini adalah menu bantuan"));

// bot.hello((ctx) => ctx.reply("Selamat Datang"));

// tegur sapa

bot.hears('hi', (ctx) => ctx.reply("Hai Salam Kenal"));
bot.hears('hello', (ctx) => ctx.reply("Hello Salam Kenal"));
bot.hears('Bot', (ctx) => ctx.reply("Iya dengan saya sendiri"));
bot.hears('bagaimana', (ctx) => ctx.reply("Iya dengan saya sendiri"));
bot.hears('bot', (ctx) => ctx.reply("Iya dengan saya sendiri bot"));
bot.hears('Jangkrik', (ctx) => ctx.reply("Perkataan Anda tidak pantas"));
bot.hears('kontol', (ctx) => ctx.reply("Otak Anda Mesum"));
bot.hears('ngaceng', (ctx) => ctx.reply("Otak Anda Mesum"));
bot.hears('memek', (ctx) => ctx.reply("Otak Anda Mesum"));
bot.hears('anjing', (ctx) => ctx.reply("Perkataan Anda Kotor"));
bot.hears('babi', (ctx) => ctx.reply("Perkataan Anda tidak pantas"));

// tanya-jawab
bot.hears('apa kabar', (ctx) => ctx.reply("saya baik, kamu..?"));
bot.hears('baik', (ctx) => ctx.reply("alhamdulilah, semooga harimu menyenangkan"));
bot.hears('tidak baik', (ctx) => ctx.reply("kenapa?"));
bot.hears('capek', (ctx) => ctx.reply("mungkin kamu lelah"));
bot.hears('males', (ctx) => ctx.reply("mungkin kamu lelah"));
bot.hears('bosan', (ctx) => ctx.reply("bosan dengan keadaan.?"));
bot.hears('kamu cuek', (ctx) => ctx.reply("perasaan anda saja yang tidak baik"));
bot.hears('iya', (ctx) => ctx.reply("jalani dengan penuh ikhlas"));
bot.hears('iyakah', (ctx) => ctx.reply("beneran saya baik, kamu bagaimana..?"));
bot.hears('saya baik', (ctx) => ctx.reply("alhamdulilah ☺️"));
bot.hears('😘', (ctx) => ctx.reply("🥰"));
bot.hears('😘😘😘', (ctx) => ctx.reply("🥰🥰🥰🥰"));
bot.hears('☺️', (ctx) => ctx.reply("😁"));
bot.hears('😋', (ctx) => ctx.reply("😡"));
bot.hears('😔', (ctx) => ctx.reply("😭"));
bot.hears('sedih', (ctx) => ctx.reply("😭"));


//  perintah

bot.command('anjing', (ctx) => ctx.reply('Anda menggunakan bahasa kotor'));
bot.command('kontol', (ctx) => ctx.reply('Anda menggunakan bahasa kotor'));
bot.command('memek', (ctx) => ctx.reply('Anda menggunakan bahasa kotor'));
bot.command('babi', (ctx) => ctx.reply('Anda menggunakan bahasa kotor'));

// sapa kabar
bot.command('apakabar', (ctx) => ctx.reply('Baik, bagaimana denganmu'));
bot.command('akubaik', (ctx) => ctx.reply('Benarkah, bagaimana dengan hatimu'));
bot.command('sedih', (ctx) => ctx.reply('😔😔'));

// kirim media 
//  bot.command()
// bot.command('dev', (ctx) => ctx.replyWithPhoto("https://scontent.fsub6-1.fna.fbcdn.net/v/t1.0-0/p526x296/125862634_2813872322220724_5732726074926288198_o.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGtbK3REg1StY8HeG8oAxe8NTXA4iqPjps1NcDiKo-Omxo5pahFovxfkv4tG7fEz6E00tCbXTJ4dIjjMoihdWDO&_nc_ohc=5SKSgiZl71gAX8Wb6A4&_nc_ht=scontent.fsub6-1.fna&tp=6&oh=dfc13bbf9f86cc3d7d72917a90ee285f&oe=5FED7106"));
// bot.command('gambar', (ctx) => ctx.replyWithPhoto("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKqHE4OadUua0Dv0bFn7vfnjm7qaIDjEaCdA&usqp=CAU"));
// bot.command('gambar1', (ctx) => ctx.replyWithPhoto("https://scontent.fsub6-1.fna.fbcdn.net/v/t1.0-9/117166249_821436901595681_5464164722755621713_n.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGZZgscTMTUc2EULFW0DJnMMM3v9wBz64Awze_3AHPrgGjn0IkTxSkU_YJePhOVl9oxq0tzOcS9XauEyXIggm1h&_nc_ohc=ExmPyNma3acAX8SbgoJ&_nc_ht=scontent.fsub6-1.fna&oh=b8d0648fb10db61a969f366960dc4211&oe=5FEE5904"));
// bot.command('gambar2', (ctx) => ctx.replyWithPhoto("https://scontent.fsub6-1.fna.fbcdn.net/v/t1.0-9/35757479_370772969995412_8221756290146238464_n.jpg?_nc_cat=106&ccb=2&_nc_sid=174925&_nc_eui2=AeEhawuQSZBS5Gmjh1dCgA1Fwt23MquyfpLC3bcyq7J-ks7-PWOuN5cPQy7IfJ6Bt9Cne4gOQbV1v5IFKGI-wFWS&_nc_ohc=xW7y6wntUNEAX-AVmS6&_nc_ht=scontent.fsub6-1.fna&oh=ccd4aea3114b958f766302672e024f94&oe=5FF0B7E4"));

// bot.command('gambar3', (ctx) => ctx.replyWithPhoto("https://scontent.fsub6-4.fna.fbcdn.net/v/t1.0-9/119418603_849477418791629_1308048692788991104_o.jpg?_nc_cat=107&ccb=2&_nc_sid=730e14&_nc_eui2=AeGk1O4I7Vmjk4ZBKKcrMVKz-jsZScNskAT6OxlJw2yQBDtfjFPFPBe7FP1iJxG_LVxKi2wWxTd9G53rOlHdBl-7&_nc_ohc=fWxONaaqzsgAX8iBREj&_nc_ht=scontent.fsub6-4.fna&oh=813329c8a7267a3a54718c54408c1ba5&oe=5FEDAEEA"));







bot.launch();

app.listen(process.env.PORT || 3000, () => {
  console.log('success');
});

//  jangan lupa ketik nodemon index.js untuk menjalankan



//  jangan lupa ketik nodemon index.js untuk menjalankanStashed changes