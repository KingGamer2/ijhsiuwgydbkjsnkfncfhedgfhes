const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
حياك الله في سيرفرنا[10+ People Invited]
➤ [:page_with_curl:] Tier I
➤ [:money_with_wings:] $20 Paypal

[20+ People Invited]
➤ [:page_with_curl:] Tier II
➤ [:money_with_wings:] $45 Paypal

[30+ People Invited]
➤ [:page_with_curl:] Tier III
➤ [:money_with_wings:] $70 Paypal

[40+ People Invited]
➤ [:page_with_curl:] Tier IV
➤ [:money_with_wings:] $95 Paypal

[50+ People Invited]
➤ [:page_with_curl:] Tier V
➤ [:money_with_wings:] $120 Paypal

[60+ People Invited]
➤ [:page_with_curl:] Tier VI
➤ [:money_with_wings:] $145 Paypal

[70+ People Invited]
➤ [:page_with_curl:] Tier VII
➤ [:money_with_wings:] $170 Paypal

**[80+ People Invited]
➤ [:page_with_curl:] Tier VIII
➤ [:money_with_wings:] $195 Paypal

[90+ People Invited]
➤ [:page_with_curl:] Tier IX
➤ [:money_with_wings:] $220 Paypal

[100+ People Invited]
➤ [:page_with_curl:] Tier X
➤ [:money_with_wings:] $250 Paypal
https://discord.gg/CkV8ytG
 ... [ ${member}  ]
**`) 
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
حياك الله في سيرفرنا[10+ People Invited]
➤ [:page_with_curl:] Tier I
➤ [:money_with_wings:] $20 Paypal

[20+ People Invited]
➤ [:page_with_curl:] Tier II
➤ [:money_with_wings:] $45 Paypal

[30+ People Invited]
➤ [:page_with_curl:] Tier III
➤ [:money_with_wings:] $70 Paypal

[40+ People Invited]
➤ [:page_with_curl:] Tier IV
➤ [:money_with_wings:] $95 Paypal

[50+ People Invited]
➤ [:page_with_curl:] Tier V
➤ [:money_with_wings:] $120 Paypal

[60+ People Invited]
➤ [:page_with_curl:] Tier VI
➤ [:money_with_wings:] $145 Paypal

[70+ People Invited]
➤ [:page_with_curl:] Tier VII
➤ [:money_with_wings:] $170 Paypal

**[80+ People Invited]
➤ [:page_with_curl:] Tier VIII
➤ [:money_with_wings:] $195 Paypal

[90+ People Invited]
➤ [:page_with_curl:] Tier IX
➤ [:money_with_wings:] $220 Paypal

[100+ People Invited]
➤ [:page_with_curl:] Tier X
➤ [:money_with_wings:] $250 Paypal
https://discord.gg/CkV8ytG
 ... [ ${member}  ]
**`)
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
