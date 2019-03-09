const Discord = require('discord.js')

class ayano extends Discord.Client {
  constructor(options) {
    super(options)
    this.items = new Discord.Collection()
    this.commands = new Discord.Collection()
    }
 }
    
module.exports = ayaro;
