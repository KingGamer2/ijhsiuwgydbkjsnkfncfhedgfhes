const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
حياك الله في سيرفرنا
➤ Arab MCسيرفر
➤ من اكثر السيرفرات المشهورة
➤ قيف اويات كل يومين تقريبا
➤ مقابل كردت free-ggنجبلك زيارات 
➤ سيرفر ماين كرافت العاب
➤ سيرفر ماين كرافت سرفايفل
➤ يوتيوبرز مشهوريييين
➤ ادعي اصحابك للسيرفر وخذ هدايا و كردت
➤ كل هذا واكثر تفضل عيدا الرابط
➤ شوف بنفسك
➤ https://discord.gg/r8WxTuu
 ... [ ${member}  ]
**`) 
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
حياك الله في سيرفرنا
➤ Arab MCسيرفر
➤ من اكثر السيرفرات المشهورة
➤ قيف اويات كل يومين تقريبا
➤ مقابل كردت free-ggنجبلك زيارات 
➤ سيرفر ماين كرافت العاب
➤ سيرفر ماين كرافت سرفايفل
➤ يوتيوبرز مشهوريييين
➤ ادعي اصحابك للسيرفر وخذ هدايا و كردت
➤ كل هذا واكثر تفضل عيدا الرابط
➤ شوف بنفسك
➤ https://discord.gg/r8WxTuu
 ... [ ${member}  ]
**`)
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
