const Discord = require ("discord.js")

module.exports.run = (client, message, args) => {
  var tagdakiler = 0;
  let sayılcak_tag = 'sayılacak tag';
  message.guild.members.forEach(member => {
    if(member.user.username.includes(sayılcak_tag)) {
      tagdakiler = tagdakiler+1
    }
  })
  message.reply(`Tagda toplam **${tagdakiler}** kişi var!`)
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'tag-say',
};
//TlhaMert Youtube Kanalına Abone Ol ! 
