const Discord = require('discord.js')
const Enmap = require('enmap')
const walk = require('walk')
const path = require('path')
const {exec} = require('child_process')
const fs = require('fs')
class ayano extends Discord.Client { 
   constructor(options) {
    super(options);
     this.commands = new Discord.Collection()
     this.aliaes = new Discord.Collection()
    //this.db = new Enmap({name:"r.dj-db"})
     this.owners = new Set(); 
     this.blacklistedServers = new Set();// use an enmap cause they are persistent
   }
  async start() {
   
    this.loadAllCommands({silent:false})
    this.loadAllEvents({silent:false})
    
  }
  async loadAllCommands(options) {
    
    const walker = walk.walk('./commands')
    let i = 1;
    walker.on('file', (root, stats, next) => {
     if (!stats.name.endsWith('.js')) return next();
      const Cmd = require(path.resolve(root)+'/'+stats.name)
      const Command = new Cmd(this)
      Command.aliases.forEach(a => {
        this.aliases.set(a, Command.name)
      });
      Command.file = stats.name
      this.commands.set(Command.help.name, Command)
      if (options.silent == true) return next();
      console.log(`${i++}. Command: ${Command.help.name} | ${stats.name}`)
      next()
    });
  }
  async loadAllEvents() {
        fs.readdir(`./core/events/`, async(err, files) => {
        if (err) return console.error(`There was an error!`);
        const jsfiles = files.filter(f => f.split(`.`).pop() === `js`);
        if (jsfiles.length == 0) console.error(`No events to  load.`);
        jsfiles.map(file => {
            var eventName = file.split(`.`)[0];
            var eventFunction = require(`./core/events/${file}`)
            this.events.set(eventName, eventFunction);
            this.on(eventName, eventFunction.run.bind(null, this));
        });
        console.log(`Loaded ${files.length} events`)
    });
  }
  async reboot() {
      process.exit(0)
      await exec("node server.js", async(stdin, stdout) =>{
        console.log(stdout);
      })
  }
  
  async blacklistGuild(id){
    this.blacklistedServers.add(id);
  }
}

module.exports = ayano;
