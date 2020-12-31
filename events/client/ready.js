module.exports = client => {
    let botStatus = [
      `${client.guilds.cache.size} серверов!`,
      "!help",
  ]
  
      setInterval(function() {
      let status = botStatus[Math.floor(Math.random() * botStatus.length)];
      client.user.setActivity(status, {type: "WATCHING"});
  
      }, 4000)
  

      client.user.setStatus("online"); // статус бота
      
    console.log(`Привет, ${client.user.username} онлайн!`); // логи в консоль, когда бот включится
     
  };
  