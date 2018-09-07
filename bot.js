const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سيرفر عربي ديسكورد ArabMC
مميزاته: 
- invite rewards
-giveaways
-سيرفر ماين كرافت مكركة 
- سيرفر ميني كيمز
- سيرفر سرفايفل
- موقع لحسابات مجانا فورت نايت و مايت كرافت
http://www.arabalts.tk
https://discordapp.com/invite/r8WxTuu

 ... [ ${member}  ]
**`) 
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سيرفر عربي ديسكورد ArabMC
مميزاته: 
- invite rewards
-giveaways
-سيرفر ماين كرافت مكركة 
- سيرفر ميني كيمز
- سيرفر سرفايفل
- موقع لحسابات مجانا فورت نايت و مايت كرافت
http://www.arabalts.tk
https://discordapp.com/invite/r8WxTuu

 ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
