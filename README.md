# discord-js-bot-tutorial-ru
____
Туториал по созданию ботов для дискорда
____
Первым делом заходим на сайт https://discord.com/developers/applications
New Application, тыкаем на вкладку Bot и create bot.

Приглашаем бота на свой сервер:
https://discord.com/api/oauth2/authorize?client_id=айдибота&permissions=8&scope=bot

Вместо айдибота - впишите client_id бота, его можно найти в General Information.

Далее скачиваем проект с GitHub. Устанавливаем NodeJS на пк.

https://nodejs.org/en/ - Версия 14.15.3 LTS

Также для удобства скачайте Visual Studio Code - https://code.visualstudio.com/

Теперь октрываем папку с проектом в VSC, CTRL+SHIFT+`
- открыть терминал

В терминале пишем npm install и нажимаем enter. 

Пока скачиваются модули заходим в config.json и изменяем его под себя
`
{
 "token": "токен бота", 
 "prefix": "префикс бота"
}
`
Токен бота берём на сайте https://discord.com/developers/applications, в разделе Bot

После того как вы всё сделали - просто запускайте бота командой `node index.js`
