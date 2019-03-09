/**
This goes in /commands
*/
const Cmd = require("../Structures/Command")

class COMMAND_NAME extends Cmd {
  constructor(client){
       super(client, {
       name: COMMAND_NAME,
       description: COMMAND_DESCRIPTION
       devOnly: BOOLEAN
       }
  }
  
  async run(message, args) {
  var client = this.client
  //continue with command code
  
  
  }


}

module.exports = COMMAND_NAME_CLASS
