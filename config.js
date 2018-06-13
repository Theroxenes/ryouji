/* eslint-disable */
var Offline = 'invisible';
var Online = 'online';
var Manutenção1 = 'dnd'
var Manutenção2 = 'idle';
var config = { // NOTE: DO NOT LEAVE ANYTHING BLANK
    // ALL settings are strings. Do NOT just use true or false, use these in strings such as 'true' or 'false'. This is due to how some code works when changing the settings
    ownerID: 'OWNERID', // Seu ID Aqui
    token: 'BOT_TOKEN', // Your bot token here
    status: Online, // Status do Bot [Manutenção, Online, Ocupado, Ausente]
    debug: 'false', // This is used to output some debug info if needed. The token will be in the console and other information could be in the console
    playingGame: '{{prefix}}help para Ajuda,  r!info para minhas informações.', // The game you want the bot to play. {{prefix}} is replaced with the default prefix below, {{guilds}} is replaced with the guild count and {{version}} is replaced with the bot version. Leave blank to disable
    purgeLogFormat: '\n ID da Mensagem: {{mID}} | Hora: {{mTS}} | Conteúdo: {{mC}} \n', // {{mID}}: Message ID; {{mTS}} Message Timestamp; {{mC}}: Message Content;
    eightBallResponses: ['Sim', 'Não', 'Certamente', 'Minhas fontes dizem sim', 'Tente mais tarde...', 'Sem duvida', 'É melhor não contar agora'], // An array of responses for the 8ball command
    cleverbotToken: 'CC-3824abc', // API Token for CleverBot
    googleAPIToken: 'AIzaSyBrHBnH8XHCXhK81WQ-94renCEl4RC-fjA', // Used for link shortener and music features. You need to have these APIs enabled.
    logTimeFormat: 'LLLL',
    musicEnabled: 'true',
    defaultSettings: {
        prefix: 'r!',
        modLogChannel: 'logs',
        modRole: 'Moderador',
        adminRole: 'Administrador',
        welcomeChannel: 'bem-vindo',
        welcomeMessage: 'Bem-Vindo {{user}}!',
        welcomeEnabled: 'true',
        inviteFilterEnabled: 'true',
        inviteWhitelist: ['Administrador', 'Moderador'], // This can be changed, these are just defaults as an example
        facepalms: 'true', // If enabled, the bot will reply with the facepalm emoji whenever a message contains 'facepalm'
        swearFilter: 'false',
        swearWords: ['idiota'], // An array of swear words. These should be lowercase. (of course, I have not included much for certain reasons...)
        logDeletes: 'false',
        logNewMember: 'false',
        logMemberLeave: 'false',
        logCommandUsage: 'false',
        logPurge: 'false',
        sendHelp: 'channel' // Available options: channel, dm
    },
    dashboard: {
        enabled: 'true', // This setting controls whether the dashboard is enabled or not.
        oauthSecret: '85SRql5rQVAXiMMmq1qDkHQgteIqTs3i', // The client secret from the Discord bot page
        secure: 'true', // HTTPS: 'true' for true, 'false' for false
        sessionSecret: 'aofbhiopbhgaibgiubaigbibahkfbjafbkbaf', // Go crazy on the keyboard here, this is used as a session secret
        domain: `ryouji.glitch.me`, // Domain name (with port if not running behind proxy running on port 80). Example: 'domain': 'dashboard.bot-website.com' OR 'domain': 'localhost:33445'
        port:  process.env.PORT, // The port that it should run on
        invitePerm: '536079575',
        protectStats: 'false',
        borderedStats: 'false', // Controls whether stats in the dashboard should have a border or not
        legalTemplates: {
            contactEmail: 'devs_services@engineer.com', // This email will be used in the legal page of the dashboard if someone needs to contact you for any reason regarding this page
            lastEdited: '02 de Junho de 2018' // Change this if you update the `TERMS.md` or `PRIVACY.md` files in `dashboard/public/`
        }
    }
};


module.exports = config;
