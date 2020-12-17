const {
  telegraf
} = require('telegraf');

const bot = new telegraf("1442414242:AAELYF8Wp41gKX59NM17Vg525mRrN5AR40A");

const commands = '/star - memulai /menu - menampilkan menu /gambar - bot mengirimkan gambar';
// const commands = '/menu - menampilkan menu';

bot.commands('menu', (ctx) => ctx.replay(commands));
bot.commands('gambar', (ctx) => {
  ctx.replyWithPhoto("https://www.alizila.com/wp-content/uploads/2018/08/shutterstock_677646532-992x558.jpg")
})

bot.on("message", (ctx) => {
  ctx.replay("Hello")
})

bot.launch()