module.exports = {
    name: 'help',
    description: 'outputs a list of commands',
    execute(message, args){
        message.channel.send('~ping')
        message.channel.send('~youtube') 
        message.channel.send('more coming soon')
    }
}