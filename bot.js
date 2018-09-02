const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
افضل موقع للحصول على حسابات ماين كرافت و فورت نايت مجانا 100% و
العديد من انواع الحسابات مثل فل داتا فل اكسس و عادي و حسابات فورت نايت فيها سكنات و بكجات و الكثير للمزيد زوروا الموقع 
Best site to get the accounts of Maine Craft and Fortnight 100% free
Many types of accounts, such as full Data and full Access and Normal and Fortnight accounts where skins and password change and ultimate v-bucks and much more visit the site
http://www.arabalts.tk

 ... [ ${member}  ]
**`) 
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
افضل موقع للحصول على حسابات ماين كرافت و فورت نايت مجانا 100% و
العديد من انواع الحسابات مثل فل داتا فل اكسس و عادي و حسابات فورت نايت فيها سكنات و بكجات و الكثير للمزيد زوروا الموقع 
Best site to get the accounts of Maine Craft and Fortnight 100% free
Many types of accounts, such as full Data and full Access and Normal and Fortnight accounts where skins and password change and ultimate v-bucks and much more visit the site
http://www.arabalts.tk

 ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
