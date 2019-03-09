const Cmd = require("../Structures/Command")

class Website extends Cmd {
  constructor(client){
       super(client, {
       name: "Website",
       description: "See our website!",
       devOnly: false
       }
  }

  async run(message, args) {
  var client = this.client
  
  let embed = new Discord.RichEmbed()
  .setColor("PURPLE")
  .setTitle("Our website.")
  .setDescription("Click [here](https://yxridev.github.io/ayano) to see my website")
  message.channel.send(embed)


  }


}

module.exports = website
