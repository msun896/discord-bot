const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '~';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log("Yoosh Bot is online")
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split("/ +/ ");
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }else if(command === 'help'){
        client.commands.get('help').execute(message, args);
    }else if(command === 'youtube'){
        client.commands.get('youtube').execute(message, args);
    }else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    }

});

// LAST LINE
client.login('NzI5OTE1Njg5OTAwNTcyNzIz.XwP6DA.b9qwQpa1K6oDT1zb-jogSkJEYxI')
