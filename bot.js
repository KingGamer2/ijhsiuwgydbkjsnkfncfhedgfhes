const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
KinGShoPسيرفر
=========================================
_سيرفر جديد_

الخدمات: 

-انشاء بوت ديسكورد بكل الانواع
- اضافة بوتك لاستضافة وتدفع مرةواحدة
- حسابات ماينكرافت كل الانواع
- تصميم مواقع وشراء دومينات
- تفعيل سكربت اختصار الروابط 
....واكثر
الدفع بايبال او كردت واسعار ممتازة
 للمزيد : https://discord.gg/cxWmK9G

 ... [ ${member}  ]
**`) 
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
KinGShoPسيرفر
=========================================
_سيرفر جديد_

الخدمات: 

-انشاء بوت ديسكورد بكل الانواع
- اضافة بوتك لاستضافة وتدفع مرةواحدة
- حسابات ماينكرافت كل الانواع
- تصميم مواقع وشراء دومينات
- تفعيل سكربت اختصار الروابط 
....واكثر
الدفع بايبال او كردت واسعار ممتازة
 للمزيد : https://discord.gg/cxWmK9G

 ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
