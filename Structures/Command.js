class Command {
  constructor(client, {
    name = null,
    description = "No description provided.",
    category = "Other",
    usage = "None",
    aliases = new Array(),
    devOnly = false,
  }) {
    this.client = client;
    this.name = name
    this.description = description
    this.category = category
    this.usage = usage
    this.aliases = aliases
    this.dev = devOnly
  }
}
module.exports = Command;
