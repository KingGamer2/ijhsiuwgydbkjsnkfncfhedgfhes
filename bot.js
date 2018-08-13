const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
Invite Rewards;
10 Invites Reward: 1 UFA Minecraft Account
25 Invites Reward: 3 UFA Minecraft Accounts
50 Invites Reward: 5 UFA Minecraft Accounts
100 Invites Reward: 10 UFA Minecraft Accounts
Or Pick
10 Invites Reward: 1 VPN Account
25 Invites Reward: 3 VPN Accounts
50 Invites Reward: 5 VPN Accounts
100 Invites Reward: 10 VPN Accounts
https://discord.gg/tw9j77P
 ... [ ${member}  ]
**`) 
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
Invite Rewards;
10 Invites Reward: 1 UFA Minecraft Account
25 Invites Reward: 3 UFA Minecraft Accounts
50 Invites Reward: 5 UFA Minecraft Accounts
100 Invites Reward: 10 UFA Minecraft Accounts
Or Pick
10 Invites Reward: 1 VPN Account
25 Invites Reward: 3 VPN Accounts
50 Invites Reward: 5 VPN Accounts
100 Invites Reward: 10 VPN Accounts
https://discord.gg/tw9j77P
 ... [ ${member}  ]
**`)
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
