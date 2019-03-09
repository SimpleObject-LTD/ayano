var CMD = require('../Structures/Command');

class Help extends CMD {
 constructor(client) {
  super(client, {
   name: "Help",
   description: "Show Commands"
  })
 }
 
 async run(message, args) {
  var client = this.client
 }
 
};


module.exports = Help;
