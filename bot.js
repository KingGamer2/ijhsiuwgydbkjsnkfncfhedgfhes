const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
السلام عليكم شباب 
اليوم افتتاح موقع اختصار الروابط لي اتمنى الكل يسجل فيه 


http://www.king4earn.tk

Hello I make a url shortner site that you can short your urls and get money for that with good referal links
hope you like it and register to us

http://www.king4earn.tk

 ... [ ${member}  ]
**`) 
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
السلام عليكم شباب 
اليوم افتتاح موقع اختصار الروابط لي اتمنى الكل يسجل فيه 


http://www.king4earn.tk

Hello I make a url shortner site that you can short your urls and get money for that with good referal links
hope you like it and register to us

http://www.king4earn.tk

 ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
