var client = require('./Structures/Client')
client = new client({})

client.on('ready', () => {
  console.info()
  client.user.setActivity(`${client.user.username} is ready!`)
  client.loadAllCommands({silent:false})
});

client.on('message', async(message) => {
  var cmd = message.content.split(' ')[0]
  var args = message.content.split(' ').slice(1)
  var prefix = DEFINE_PREFIX
  
  let cmdfile = client.commands.get(cmd.slice(prefix.length)
  if(cmdfile) return cmdfile.run(message, args)

})

client.login(CLIENT_TOKEN)
