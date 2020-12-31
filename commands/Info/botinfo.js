const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    name: "botinfo", // название команды
    category: "Info", // category - название папки
    run: async (client, message, args) => {
        const embed = new MessageEmbed() // создание embed сообщения
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Информация о боте')
            .setColor('#000000')
            .addFields(
                {
                    name: '🌐 Серверов',
                    value: `Смотрю ${client.guilds.cache.size} серверов.`,
                    inline: true
                },
                {
                    name: '📺 Всего Текстовых и Голосовых Каналов',
                    value: `Смотрю ${client.channels.cache.size} каналов.`,
                    inline: true
                },
                {
                    name: '👥 Пользователей',
                    value: `Смотрю ${client.users.cache.size} пользователей`,
                    inline: true
                },
                {
                    name: '⏳ Задержка Api',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: 'Дата Присоединения',
                    value: client.user.createdAt,
                    inline: true
                },
                {
                    name: 'Информация о CPU',
                    value: `Ядер: ${os.cpus().length}`,
                    inline: true
                }
            )
            .setFooter(`Запросил: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed)
    }
}