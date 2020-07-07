module.exports = {
    name: 'youtube',
    description: 'Pulls up youtube homepage',
    execute(message, args){
        message.channel.send('https://www.youtube.com/')
    }
}