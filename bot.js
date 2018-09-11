const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
hello, new discord server pay to you in many ways only when you invite members and it was 100% verified from discord
ديسكورد عربي جديد يدفع بطرق خرااافية بس من خلال دعوة اصحابك السيرفر موثق
[10+ People Invited]
➤ [:money_with_wings:] $1.00 (:paypal: )


[20+ People Invited]
➤ [:money_with_wings:] $5.00 (:paypal: )

[30+ People Invited]
➤ [:money_with_wings:]  $20.50 (:paypal: )

[50+ People Invited]
➤ [:money_with_wings:] $30.50 (:paypal: )

[75+ People Invited] 
➤ [:money_with_wings:] $50.00 (:paypal: )

[100+ People Invited]
➤ [:money_with_wings:]  $100.00 (:paypal:)

[120+ People Invited]
➤ [:money_with_wings:] $120.00 (:paypal: )

[150+ People Invited]
➤ [:money_with_wings:]   $120.00 (:paypal: )
====================================
Mincraft Accoint :Minecraft: 

حساب فول داتا = 20 انفايت  :Minecraft: 

حساب فول داتا 2 = 40 انافيت :Minecraft: 

حساب فول داتا رتبه في هايبكسل في اي بي = حساب 70 :Minecraft: 


و كذا كل 20 حساب فول داتا
=============================================
10 invites = 5 K credit 

20 invites = 15 K credit

30 Invites = 25 K credit

40 invites = 35 K credit 

50 invites = 45 K credit

60 Invites = 50 K credit

70 invites = 60 Credit 

80 invites = 70 k Credit

90 inivtes = 80 K credit

100 Invites = 90 K credit

https://discord.gg/dHsWcGK
 ... [ ${member}  ]
**`) 
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
hello, new discord server pay to you in many ways only when you invite members and it was 100% verified from discord
ديسكورد عربي جديد يدفع بطرق خرااافية بس من خلال دعوة اصحابك السيرفر موثق
[10+ People Invited]
➤ [:money_with_wings:] $1.00 (:paypal: )


[20+ People Invited]
➤ [:money_with_wings:] $5.00 (:paypal: )

[30+ People Invited]
➤ [:money_with_wings:]  $20.50 (:paypal: )

[50+ People Invited]
➤ [:money_with_wings:] $30.50 (:paypal: )

[75+ People Invited] 
➤ [:money_with_wings:] $50.00 (:paypal: )

[100+ People Invited]
➤ [:money_with_wings:]  $100.00 (:paypal:)

[120+ People Invited]
➤ [:money_with_wings:] $120.00 (:paypal: )

[150+ People Invited]
➤ [:money_with_wings:]   $120.00 (:paypal: )
====================================
Mincraft Accoint :Minecraft: 

حساب فول داتا = 20 انفايت  :Minecraft: 

حساب فول داتا 2 = 40 انافيت :Minecraft: 

حساب فول داتا رتبه في هايبكسل في اي بي = حساب 70 :Minecraft: 


و كذا كل 20 حساب فول داتا
=============================================
10 invites = 5 K credit 

20 invites = 15 K credit

30 Invites = 25 K credit

40 invites = 35 K credit 

50 invites = 45 K credit

60 Invites = 50 K credit

70 invites = 60 Credit 

80 invites = 70 k Credit

90 inivtes = 80 K credit

100 Invites = 90 K credit

https://discord.gg/dHsWcGK
 ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
