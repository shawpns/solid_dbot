const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, RichEmbed, Attachment } = require('discord.js');
prefix = ("a.")

// Abhijit Shaw
// Coded by ShaW
// Will prob be a open source soon :)
// Sub to my youtube channel https://www.youtube.com/channel/UCpSINMoznmQgX0UPKbQOecQ

// Prints that the bot is ready in cmd
client.on('ready', () => {
  console.log(`Your Logged in as ${client.user.tag}!`);
});

// The bot responds to these messages
client.on('message', msg => {
  if (msg.content === 'hi') {
    msg.reply('hello! whats up');
  }
});


client.on('message', msg => {
  if (msg.content === 'gay') {
    msg.reply('NO U');
  }
});

// Links

client.on('message', msg => {
  if (msg.content === 'a.yt') {
    msg.reply('https://www.youtube.com/channel/UCpSINMoznmQgX0UPKbQOecQ');
  }
})

client.on('message', msg => {
  if (msg.content === 'a.site') {
    msg.reply('https://www.youtube.com/channel/UCpSINMoznmQgX0UPKbQOecQ');
  }
})

// Avatar command

client.on('message', message => {
    if (message.content === 'what is my dp') {
      message.reply(message.author.avatarURL);
    }
  });

// Embled messages


client.on('message', message => {
  if (message.content === 'a.test') {
    const embed = new RichEmbed()
      .setTitle('test')
      .setColor(0xBB8FCE)
      .setDescription('This will be changed but i hope you enjoy my bot');
    message.channel.send(embed);
  }
});

  // help command

  client.on('message', message => {
    if (message.content === 'a.help') {
      const embed = new RichEmbed()
        .setTitle('Help!')
        .setColor(0xBB8FCE)
        .setDescription('Commands: a.ban <user> a.kick <user>, what is my dp (shows your avatar). **Still a W.I.P so i will be adding more and more as i go!** ');
      message.channel.send(embed);
    }
  });

  client.on('message', message => {
    if (message.content === 'a.info') {
      const embed = new RichEmbed()
        .setTitle('bot information')
        .setColor(0xBB8FCE)
        .setDescription('This bot was made in 2020 by Abhijit ShaW. Ping Me For More INFO :)');
      message.channel.send(embed);
    }
  });

// Admin stuff

  client.on('message', message => {
    if (!message.guild) return;
  
    if (message.content.startsWith('a.kick')) {
    
      const user = message.mentions.users.first();

      if (user) {
        const member = message.guild.member(user);
        if (member) {

          member.kick('Optional reason that will display in the audit logs').then(() => {
            message.reply(`Successfully kicked ${user.tag}`);
          }).catch(err => {
            message.reply('I was unable to kick the member');
            console.error(err);
          });
        } else {
          message.reply('That user isn\'t in this guild!');
        }
      } else {
        message.reply('You didn\'t mention the user to kick!');
      }
    }
  });
  
  client.on('message', message => {
    if (!message.guild) return;
  
    if (message.content.startsWith('a.ban')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.ban({
            reason: 'They were bad!',
          }).then(() => {
            message.reply(`Successfully banned ${user.tag}`);
          }).catch(err => {
            message.reply('I was unable to ban the member');
            console.error(err);
          });
        } else {
          message.reply('That user isn\'t in this guild!');
        }
      } else {ed
        message.reply('You didn\'t mention the user to ban!');
      }
    }
  });

  // Welcome message

  client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'welcome');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
  });

  // Attachments

  client.on('message', message => {
    if (message.content === 'a.rip') {
        const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
        message.channel.send(attachment);
    }
});


client.login('NzQ2NjkxOTU5NzA3NTMzMzc0.X0EBFA.rvnlEQOJhuAUk-UW75dzk2tzark');
