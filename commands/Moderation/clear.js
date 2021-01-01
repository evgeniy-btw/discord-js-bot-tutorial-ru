const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "clear",
    category: "Moderation",
    run: async (client, message, args) => {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) // ставим права, которые нужно иметь человеку
            return message.channel.send(
                `У вас нету прав на выполнение данной команды, ${message.author.username}` // Если у человека нет прав, то будет такое сообщение
            );
        if (!args[0]) {
            return message.channel.send(`Введите от 1 до 100`) // возвращаем аргумент, если человек не вписал сколько ему нужно очистить сообщнений либо написал больше 100
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100 ) { // выставляем ограничение
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        await message.channel.bulkDelete(deleteAmount, true); // удаляем сообщение автора

        const embed = new MessageEmbed() // создаём embed
            .setTitle(`${message.author.username}`)
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription(`Успешно удалено ${deleteAmount} сообщений`)
            .setFooter(message.author.username, message.author.displayAvatarURL())
            .setColor('#f2f2f2')
        await message.channel.send(embed) // отправляем embed
    }
}