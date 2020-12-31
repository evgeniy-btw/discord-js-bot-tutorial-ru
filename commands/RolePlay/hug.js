const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "hug",
    category: "RolePlay",
    run: async (client, message, args) => {
        const url = 'https://some-random-api.ml/animu/hug'; //берем api url

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`Произошла ошибка API!`) // если происходит ошибка api, будет писать так
        }

        const user = message.mentions.users.first();
        if(!user)
        return message.reply('Упомяните кого-нибудь, чтобы обнять'); // если чел написал ?hug, но никого не упоминул, то будет писать это

        const embed = new MessageEmbed() // создаём embed
        .setDescription((message.author.toString() + " обнял(-а) " + user.toString()))
            .setImage(data.link)

        await message.channel.send(embed) // отправляем embed
    }
}