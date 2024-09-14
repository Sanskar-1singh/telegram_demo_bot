const { Telegraf }=require('telegraf');
const axios=require('axios');
const { message } = require('telegraf/filters')
require('dotenv').config();
console.log(process.env);
const bot=new Telegraf('7365245391:AAEzg1swJ1d94F9rl1Tr6e-ii_kQ2s32T-g');


    bot.start((ctx)=>{
        ctx.reply("welcome sir");
    });

    bot.command('wholewiki', async (ctx)=>{
        const response=await axios.get('https://raw.githubusercontent.com/Sanskar-1singh/telegram_demo_bot/master/index.js?token=GHSAT0AAAAAACXPXJBE2G23KNPQAAFAFYAMZXFIX4Q');
        ctx.reply(response.data);
    })

    bot.help((ctx)=>{
        ctx.reply("send me message");
    });

    bot.on('sticker', (ctx) => {
        ctx.reply('❤️');
    });

    bot.hears('hi',(ctx)=>{
        ctx.reply('hey there');
    });
bot.on(message('text'),(ctx)=> ctx.reply('i dont'));
    bot.launch();


