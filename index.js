const Discord = require("discord.js"); //загружаем дискорд.js
const fs = require("fs"); // загружаем fs
const client = new Discord.Client({
    disableEveryone: true,
  });
const config = require("./config.json"); // достаём информацию из конфига
const token = config.token; // загружаем токен бота
client.commands = new Discord.Collection(); // команды бота
client.aliases = new Discord.Collection(); // алиасы команд бота
client.categories = fs.readdirSync("./commands/"); // загружаем папку с командами
client.prefix = config.prefix; // загружаем префикс


["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
  }); // загружаем command.js и event.js из папки handler
 
  client.login(token);

  // я объяснил почти всё, если не понятно, то спрашивай 