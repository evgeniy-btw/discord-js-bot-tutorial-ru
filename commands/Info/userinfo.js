const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "userinfo",
    category: "Info",
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member; // даём значение user, чтобы всё робило

        const embed = new MessageEmbed() //создаём embed
            .setTitle(`${user.user.username} статистика`)
            .setColor(`#f3f3f3`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "Имя: ",
                    value: user.user.username,
                    inline: true
                },
                {
                    name: "#️⃣ Тэг: ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "🆔 ID: ",
                    value: user.user.id,
                },
                {
                    name: "Активность: ",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : `Пользователь не играет в игру!`,
                    inline: true
                },
                {
                    name: 'Ссылка на Аватар: ',
                    value: `[Нажать сюда](${user.user.displayAvatarURL()})`
                },
                {
                    name: 'Аккаунт создан: ',
                    value: user.user.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: 'Присоединился к серверу: ',
                    value: user.joinedAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: 'Роли пользователя: ',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                    inline: true
                }
            )

        await message.channel.send(embed) // Отправляем embed
    }
}