module.exports = {
    name: 'ping',
    description: 'outputs: test',
    execute(message, args){
        message.channel.send("test");
    }
}