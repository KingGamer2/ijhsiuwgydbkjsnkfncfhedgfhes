const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
[10+ People Invited]
➤ [:page_with_curl:] Tier I
➤ [:money_with_wings:] $40 Paypal

[20+ People Invited]
➤ [:page_with_curl:] Tier II
➤ [:money_with_wings:] $80 Paypal

[30+ People Invited]
➤ [:page_with_curl:] Tier III
➤ [:money_with_wings:] $140 Paypal

[40+ People Invited]
➤ [:page_with_curl:] Tier IV
➤ [:money_with_wings:] $360 Paypal

[50+ People Invited]
➤ [:page_with_curl:] Tier V
➤ [:money_with_wings:] $420 Paypal

[60+ People Invited]
➤ [:page_with_curl:] Tier VI
➤ [:money_with_wings:] $145 Paypal

[70+ People Invited]
➤ [:page_with_curl:] Tier VII
➤ [:money_with_wings:] $340 Paypal

**[80+ People Invited]
➤ [:page_with_curl:] Tier VIII
➤ [:money_with_wings:] $700 Paypal

[90+ People Invited]
➤ [:page_with_curl:] Tier IX
➤ [:money_with_wings:] $840 Paypal

[100+ People Invited]
➤ [:page_with_curl:] Tier X
➤ [:money_with_wings:] $1,000 Paypal
Note: People who reach 50 Invites will be paid directly.
https://discordapp.com/invite/f9F7fud
 ... [ ${member}  ]
**`) 
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
[10+ People Invited]
➤ [:page_with_curl:] Tier I
➤ [:money_with_wings:] $40 Paypal

[20+ People Invited]
➤ [:page_with_curl:] Tier II
➤ [:money_with_wings:] $80 Paypal

[30+ People Invited]
➤ [:page_with_curl:] Tier III
➤ [:money_with_wings:] $140 Paypal

[40+ People Invited]
➤ [:page_with_curl:] Tier IV
➤ [:money_with_wings:] $360 Paypal

[50+ People Invited]
➤ [:page_with_curl:] Tier V
➤ [:money_with_wings:] $420 Paypal

[60+ People Invited]
➤ [:page_with_curl:] Tier VI
➤ [:money_with_wings:] $145 Paypal

[70+ People Invited]
➤ [:page_with_curl:] Tier VII
➤ [:money_with_wings:] $340 Paypal

**[80+ People Invited]
➤ [:page_with_curl:] Tier VIII
➤ [:money_with_wings:] $700 Paypal

[90+ People Invited]
➤ [:page_with_curl:] Tier IX
➤ [:money_with_wings:] $840 Paypal

[100+ People Invited]
➤ [:page_with_curl:] Tier X
➤ [:money_with_wings:] $1,000 Paypal
Note: People who reach 50 Invites will be paid directly.
https://discordapp.com/invite/f9F7fud
 ... [ ${member}  ]
**`)
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
