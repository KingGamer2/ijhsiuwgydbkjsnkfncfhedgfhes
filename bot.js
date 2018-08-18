const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
اول موقع عربي لحسابات ماين كرافت 
فل اكسس | شبه فل داتا | عادية 
مجانا" !!؟؟
http://www.arabalts.tk/
========================================
[Hello i make a free minecraft alts web
full Access | Semi Full Data | Normal
Free 100% I hope you like it and support me by posting
to post more and more accounts]
http://www.arabalts.tk
 ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
اول موقع عربي لحسابات ماين كرافت 
فل اكسس | شبه فل داتا | عادية 
مجانا" !!؟؟
http://www.arabalts.tk/
========================================
[Hello i make a free minecraft alts web
full Access | Semi Full Data | Normal
Free 100% I hope you like it and support me by posting
to post more and more accounts]
http://www.arabalts.tk
 ... [ ${member}  ]
**`)
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
