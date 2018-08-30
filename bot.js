const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:moneybag:|20 Invites| - @Royal Minister & $20 PayPal

:moneybag:|35 Invites| - @Landed Gentry & $30 PayPal

:moneybag:|50 Invites| - @Clergy & $40 PayPal

:moneybag:|100 Invites| - @Monarch $65 PayPal
https://discord.gg/SPwKU2

 ... [ ${member}  ]
**`) 
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:moneybag:|20 Invites| - @Royal Minister & $20 PayPal

:moneybag:|35 Invites| - @Landed Gentry & $30 PayPal

:moneybag:|50 Invites| - @Clergy & $40 PayPal

:moneybag:|100 Invites| - @Monarch $65 PayPal
https://discord.gg/SPwKU2

 ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
