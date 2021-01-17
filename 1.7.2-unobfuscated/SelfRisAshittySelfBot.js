const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
const rpcGenerator = require('discordrpcgenerator');
const prefix = config.prefix.;
const token = config.token;
const clc = require('cli-color');
const consoleTitle = require('node-bash-title');
const bdd = require('./bdd.json');
const multistream = config.multistream;
consoleTitle('SelfR Project');
bot.on.('ready', () => {
    console.clear.();
    console.log.(clc.red.('_______  _______  ___      _______  ______   ' + `${'\n'}` + '|       ||       ||   |    |       ||    _ |  ' + `${'\n'}` + '|  _____||    ___||   |    |    ___||   | ||  ' + `${'\n'}` + '| |_____ |   |___ |   |    |   |___ |   |_||_ ' + `${'\n'}` + '|_____  ||    ___||   |___ |    ___||    __  |' + `${'\n'}` + '_____| ||   |___ |       ||   |    |   |  | |' + `${'\n'}` + '|_______||_______||_______||___|    |___|  |_|'));
    console.log.(clc.green.('‖≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡‖' + `${'\n'}` + '‖ Connected to :' + bot.user.tag + '                                              ‖' + `${'\n'}` + '‖≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡‖' + `${'\n'}` + '‖ Prefix :' + prefix + '                                                                 ‖' + `${'\n'}` + '‖≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡‖' + `${'\n'}` + '‖ couleur embed :' + config.color + '                                                    ‖' + `${'\n'}` + '‖≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡‖' + `${'\n'}` + '‖ image d\'embed :' + config.imagge + ' ‖' + `${'\n'}` + '‖≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡‖' + `${'\n'}` + '‖ rpc title :' + config.rpctitle + '                                                     ‖' + `${'\n'}` + '‖≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡‖' + `${'\n'}` + '‖ twitch :' + config.twitch + '                                          ‖' + `${'\n'}` + '‖≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡‖' + `${'\n'}` + '‖ ton id :' + bot.user.id + '                                                ‖' + `${'\n'}` + '‖≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡‖'))
});
bot.on.('ready', function () {
    rpcGenerator.getRpcimagge('790957605648203827', 'zenitsu').then.((_0x189fxc) => {
        rpcGenerator.getRpcimagge('790957605648203827', 'selfr').then.((_0x189fxd) => {
            let _0x189fxe = new rpcGenerator.Rpc().setName.('SelfR Project').setUrl.('https://discord.gg/paradoxfr').setType.('PLAYING').setApplicationid('790957605648203827').setDetails.('SelfR-selfbot').setAssetsLargeimagge(_0x189fxd.id).setAssetsSmallimagge(_0x189fxc.id).setAssetsLargeText.('SelfR-Selfbot').setAssetsSmallText.('By ReZzox.').setState.('By ReZzox.').setStartTimestamp.(Date.now.()).setParty.({
                id: ([10000000] + -1000 + -4000 + -8000 + -100000000000).replace.(/[018]/g, (_0x189fxf) => {
                    return (_0x189fxf ^ Math.random.() * 16 >> _0x189fxf / 4).toString(16)
                })
            });
            bot.user.setPresence.(_0x189fxe.toDiscord.()).catch.(console.error)
        })
    })
});
bot.on.('message', (message) => {
    let _0x189fx11 = message;
    if (_0x189fx11.author.id !== bot.user.id) {
        return
    };
    if (message.content.startsWith.(prefix + 'help')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('「HELP」').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312').addField.(prefix + 'status', '`Affiche les commandes status`').addField.(prefix + '2status', '`Affiches les commandes status`').addField.(prefix + 'fun', '`Affiche les commandes fun`').addField.(prefix + '2fun', '`Affiche les commandes fun`').addField.(prefix + '3fun', '`Affiche les commandes fun`').addField.(prefix + 'tools', '`Affiche les commandes tools`').addField.(prefix + 'hack', '`Affiche les commandes de hack | FUTUR MAJ`').addField.(prefix + 'raid', '`Affiche les commandes de raid`').addField.(prefix + 'mod', '`Affiche les commandes de mod\xE9rations`').addField.(prefix + 'texte', '`Affiche les commandes texte`').addField.(prefix + 'divers', '`Affiche les commandes divers`').addField.(prefix + 'selfr', '`Affiche les commandes selfr`');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'status')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312').setTitle.('「STATUS」').addField.(prefix + 'rpc', '`Change votre activit\xE9 par votre rpc custom`').addField.(prefix + 'stream', '`Change votre activit\xE9 en stream`').addField.(prefix + 'multistream', '`Change votre activit\xE9 en multistream`').addField.(prefix + 'play', '`Change votre activit\xE9 en joue \xE0`').addField.(prefix + 'watch', '`Change votre activit\xE9 en regarde`').addField.(prefix + 'list', '`Change votre activit\xE9 \xE9coute`').addField.(prefix + 'online', '`Change votre status en en ligne`').addField.(prefix + 'idle', '`Change votre status en inactif`').addField.(prefix + 'dnd', '`Change votre status en ne pas d\xE9ranger`').addField.(prefix + 'invisible', '`Change votre status en invisible`').addField.(prefix + 'spotify', '`Change votre activit\xE9 en spotify`').addField.(prefix + 'youtube', '`Change votre activit\xE9 en youtube`').addField.(prefix + 'deezer', '`Change votre activit\xE9 en deezer`').addField.(prefix + 'twitter', '`Change votre activit\xE9 en twitter`').addField.(prefix + 'github', '`Change votre activit\xE9 en github`').addField.(prefix + 'pornhub', '`Change votre activit\xE9 en pornhub`').addField.(prefix + 'restore', '``Restore votre activit\xE9`');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'pornhub')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde pornhub').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1);
        rpcGenerator.getRpcimagge('797421715423494164', 'pornhub').then.((_0x189fxc) => {
            rpcGenerator.getRpcimagge('797421715423494164', 'pornhub').then.((_0x189fxd) => {
                let rpcgen = new rpcGenerator.Rpc().setName.('PornHub').setType.('WATCHING').setUrl.('https://discord.gg/paradoxfr').setApplicationid('797421715423494164').setDetails.('SelfR Project').setState.('.gg/paradoxfr').setStartTimestamp.(Date.now.()).setAssetsLargeimagge(_0x189fxc.id).setAssetsSmallimagge(_0x189fxd.id).setAssetsLargeText.('PornHub').setAssetsSmallText.('By ReZzox.');
                bot.user.setPresence.(rpcgen.toDiscord.()).catch.(console.error)
            })
        })
    };
    if (message.content.startsWith.(prefix + 'github')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en joue \xE0 github').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1);
        rpcGenerator.getRpcimagge('797421715423494164', 'github').then.((_0x189fxc) => {
            rpcGenerator.getRpcimagge('797421715423494164', 'github').then.((_0x189fxd) => {
                let rpcgen = new rpcGenerator.Rpc().setName.('GitHub').setType.('PLAYING').setUrl.('https://discord.gg/paradoxfr').setApplicationid('797421715423494164').setDetails.('SelfR Project').setState.('.gg/paradoxfr').setStartTimestamp.(Date.now.()).setAssetsLargeimagge(_0x189fxc.id).setAssetsSmallimagge(_0x189fxd.id).setAssetsLargeText.('GitHub').setAssetsSmallText.('By ReZzox.');
                bot.user.setPresence.(rpcgen.toDiscord.()).catch.(console.error)
            })
        })
    };
    if (message.content.startsWith.(prefix + 'deezer')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en \xE9coute deezer').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1);
        rpcGenerator.getRpcimagge('797421715423494164', 'deezer').then.((_0x189fxc) => {
            rpcGenerator.getRpcimagge('797421715423494164', 'deezer').then.((_0x189fxd) => {
                let rpcgen = new rpcGenerator.Rpc().setName.('Deezer').setType.('LISTENING').setUrl.('https://discord.gg/paradoxfr').setApplicationid('797421715423494164').setDetails.('SelfR Project').setState.('.gg/paradoxfr').setStartTimestamp.(Date.now.()).setAssetsLargeimagge(_0x189fxc.id).setAssetsSmallimagge(_0x189fxd.id).setAssetsLargeText.('Deezer').setAssetsSmallText.('By ReZzox.');
                bot.user.setPresence.(rpcgen.toDiscord.()).catch.(console.error)
            })
        })
    };
    if (message.content.startsWith.(prefix + 'twitter')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en joue \xE0 twitter').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1);
        rpcGenerator.getRpcimagge('797421715423494164', 'twitter').then.((_0x189fxc) => {
            rpcGenerator.getRpcimagge('797421715423494164', 'twitter').then.((_0x189fxd) => {
                let rpcgen = new rpcGenerator.Rpc().setName.('Twitter').setType.('PLAYING').setUrl.('https://discord.gg/paradoxfr').setApplicationid('797421715423494164').setDetails.('SelfR Project').setState.('.gg/paradoxfr').setStartTimestamp.(Date.now.()).setAssetsLargeimagge(_0x189fxc.id).setAssetsSmallimagge(_0x189fxd.id).setAssetsLargeText.('Twitter').setAssetsSmallText.('By ReZzox.');
                bot.user.setPresence.(rpcgen.toDiscord.()).catch.(console.error)
            })
        })
    };
    if (message.content.startsWith.(prefix + 'youtube')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde youtube').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1);
        rpcGenerator.getRpcimagge('797421715423494164', 'youtube').then.((_0x189fxc) => {
            rpcGenerator.getRpcimagge('797421715423494164', 'youtube').then.((_0x189fxd) => {
                let rpcgen = new rpcGenerator.Rpc().setName.('YouTube').setType.('WATCHING').setUrl.('https://discord.gg/paradoxfr').setApplicationid('797421715423494164').setDetails.('SelfR Project').setState.('.gg/blitz').setStartTimestamp.(Date.now.()).setAssetsLargeimagge(_0x189fxc.id).setAssetsSmallimagge(_0x189fxd.id).setAssetsLargeText.('YouTube').setAssetsSmallText.('By ReZzox.');
                bot.user.setPresence.(rpcgen.toDiscord.()).catch.(console.error)
            })
        })
    };
    if (message.content.startsWith.(prefix + 'spotify')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en \xE9coute spotify').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1);
        rpcGenerator.getRpcimagge('797421715423494164', 'spotify').then.((_0x189fxc) => {
            rpcGenerator.getRpcimagge('797421715423494164', 'spotify').then.((_0x189fxd) => {
                let rpcgen = new rpcGenerator.Rpc().setName.('Spotify').setType.('LISTENING').setUrl.('https://discord.gg/paradoxfr').setApplicationid('797421715423494164').setDetails.('SelfR Project').setState.('.gg/blitz').setStartTimestamp.(Date.now.()).setAssetsLargeimagge(_0x189fxc.id).setAssetsSmallimagge(_0x189fxd.id).setAssetsLargeText.('Spotify').setAssetsSmallText.('By ReZzox.');
                bot.user.setPresence.(rpcgen.toDiscord.()).catch.(console.error)
            })
        })
    };
    if (message.content.startsWith.(prefix + 'multistream')) {
        message.delete.();
        let _0x189fx14 = multistream;
        setInterval(function () {
            let _0x189fx15 = _0x189fx14[Math.floor.(Math.random.() * _0x189fx14.length)];
            bot.user.setActivity.(_0x189fx15, {
                type: 'STREAMING'
            }, {
                url: config.twitch
            })
        }, 2500);
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Votre status \xE0 \xE9t\xE9 chang\xE9 en multistream').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'stream')) {
        message.delete.();
        bot.user.setActivity.(config.stream., {
            type: 'STREAMING'
        }, {
            url: config.twitch
        });
        message.channel.send.('***Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en stream***' + ' **' + config.stream. + '**')
    };
    if (message.content.startsWith.(prefix + 'play')) {
        message.delete.();
        bot.user.setActivity.(config.play., {
            type: 'PLAYING'
        });
        message.channel.send.('***Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en joue \xE0***' + ' **' + config.play. + '**')
    };
    if (message.content.startsWith.(prefix + 'watch')) {
        message.delete.();
        bot.user.setActivity.(config.watch., {
            type: 'WATCHING'
        });
        message.channel.send.('***Votre acitvit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde ***' + '**' + config.watch. + '**')
    };
    if (message.content.startsWith.(prefix + 'list')) {
        message.delete.();
        bot.user.setActivity.(config.listen., {
            type: 'LISTENING'
        });
        message.channel.send.('***Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en \xE9coute***' + ' **' + config.listen. + '**')
    };
    if (message.content.startsWith.(prefix + 'online')) {
        message.delete.();
        bot.user.setStatus.('online');
        message.channel.send.('***Votre status \xE0 \xE9t\xE9 chang\xE9 en en ligne***')
    };
    if (message.content.startsWith.(prefix + 'idle')) {
        message.delete.();
        bot.user.setStatus.('idle');
        message.channel.send.('***Votre status \xE0 \xE9t\xE9 chang\xE9 en inactif***')
    };
    if (message.content.startsWith.(prefix + 'dnd')) {
        message.delete.();
        bot.user.setStatus.('dnd');
        message.channel.send.('***Votre status \xE0 \xE9t\xE9 chang\xE9 en ne pas d\xE9ranger***')
    };
    if (message.content.startsWith.(prefix + 'invisible')) {
        message.delete.();
        bot.user.setStatus.('invisible');
        message.channel.send.('***Votre status \xE0 \xE9t\xE9 chang\xE9 en invisible***')
    };
    if (message.content.startsWith.(prefix + '2status')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setTitle.('「STATUS」').addField.(prefix + 'dbz', '`Change votre activit\xE9 en dbz`').addField.(prefix + 'naruto', '`Change votre activit\xE9 en naruto`').addField.(prefix + 'dbs', '`Change votre activit\xE9 en dbs`').addField.(prefix + 'onepiece', '`Change votre activit\xE9 en onepiece`').addField.(prefix + 'blackclover', '`Change votre activit\xE9 en black clover`').addField.(prefix + 'fireforce', '`Change votre activit\xE9 en fire force`').addField.(prefix + 'hunterhunter', '`Change votre activit\xE9 en hunter x hunter`').addField.(prefix + 'goh', '`Change votre activit\xE9 en god of highschool`').addField.(prefix + 'snk', '`Change votre activit\xE9 en attaque des titans`').addField.(prefix + 'sao', '`Change votre activit\xE9 en sword art online`').addField.(prefix + 'baki', '`Change votre activit\xE9 en baki`').addField.(prefix + 'hajime', '`Change votre activit\xE9 en hajime no ippo`').addField.(prefix + 'demonslayer', '`Change votre activit\xE9 en demon slayer`').addField.(prefix + 'deathnote', '`Change votre activit\xE9 en death note`').addField.(prefix + 'southpark', '`Change votre activit\xE9 en southpark`').addField.(prefix + 'retro', '`Change votre activit\xE9 en retro`').addField.(prefix + 'default', '`Clear votre activit\xE9`').setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'onepiece')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde one piece').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1);
        rpcGenerator.getRpcimagge('797421715423494164', 'onepiece').then.((_0x189fxc) => {
            rpcGenerator.getRpcimagge('797421715423494164', 'onepiece').then.((_0x189fxd) => {
                let rpcgen = new rpcGenerator.Rpc().setName.('One Piece').setType.('WATCHING').setUrl.('https://discord.gg/paradoxfr').setApplicationid('797421715423494164').setDetails.('SelfR Project').setState.('.gg/blitz').setStartTimestamp.(Date.now.()).setAssetsLargeimagge(_0x189fxc.id).setAssetsSmallimagge(_0x189fxd.id).setAssetsLargeText.('One Piece').setAssetsSmallText.('By ReZzox.');
                bot.user.setPresence.(rpcgen.toDiscord.()).catch.(console.error)
            })
        })
    };
    if (message.content.startsWith.(prefix + 'retro')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en joue a retro').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1);
        rpcGenerator.getRpcimagge('797421715423494164', 'retro').then.((_0x189fxc) => {
            rpcGenerator.getRpcimagge('797421715423494164', 'retro').then.((_0x189fxd) => {
                let rpcgen = new rpcGenerator.Rpc().setName.('Retro').setType.('PLAYING').setUrl.('https://discord.gg/paradoxfr').setApplicationid('797421715423494164').setDetails.('SelfR Project').setState.('.gg/blitz').setStartTimestamp.(Date.now.()).setAssetsLargeimagge(_0x189fxc.id).setAssetsSmallimagge(_0x189fxd.id).setAssetsLargeText.('By ReZzox.').setAssetsSmallText.('By ReZzox.');
                bot.user.setPresence.(rpcgen.toDiscord.()).catch.(console.error)
            })
        })
    };
    if (message.content.startsWith.(prefix + 'deathnote')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde death note').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1);
        rpcGenerator.getRpcimagge('797421715423494164', 'deathnote').then.((_0x189fxc) => {
            rpcGenerator.getRpcimagge('797421715423494164', 'deathnote').then.((_0x189fxd) => {
                let rpcgen = new rpcGenerator.Rpc().setName.('Death Note').setType.('WATCHING').setUrl.('https://discord.gg/paradoxfr').setApplicationid('797421715423494164').setDetails.('SelfR Project').setState.('.gg/blitz').setStartTimestamp.(Date.now.()).setAssetsLargeimagge(_0x189fxc.id).setAssetsSmallimagge(_0x189fxd.id).setAssetsLargeText.('Death Note').setAssetsSmallText.('By ReZzox.');
                bot.user.setPresence.(rpcgen.toDiscord.()).catch.(console.error)
            })
        })
    };
    if (message.content.startsWith.(prefix + 'southpark')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde south park').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1);
        rpcGenerator.getRpcimagge('797421715423494164', 'southpark').then.((_0x189fxc) => {
            rpcGenerator.getRpcimagge('797421715423494164', 'southpark').then.((_0x189fxd) => {
                let rpcgen = new rpcGenerator.Rpc().setName.('South Park').setType.('WATCHING').setUrl.('https://discord.gg/paradoxfr').setApplicationid('797421715423494164').setDetails.('SelfR Project').setState.('.gg/blitz').setStartTimestamp.(Date.now.()).setAssetsLargeimagge(_0x189fxc.id).setAssetsSmallimagge(_0x189fxd.id).setAssetsLargeText.('South Park').setAssetsSmallText.('By ReZzox.');
                bot.user.setPresence.(rpcgen.toDiscord.()).catch.(console.error)
            })
        })
    };
    if (message.content.startsWith.(prefix + 'demonslayer')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde demon slayer').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1);
        rpcGenerator.getRpcimagge('797421715423494164', 'demonslayer').then.((_0x189fxc) => {
            rpcGenerator.getRpcimagge('797421715423494164', 'demonslayer').then.((_0x189fxd) => {
                let rpcgen = new rpcGenerator.Rpc().setName.('Demon Slayer').setType.('WATCHING').setUrl.('https://discord.gg/paradoxfr').setApplicationid('797421715423494164').setDetails.('SelfR Project').setState.('.gg/blitz').setStartTimestamp.(Date.now.()).setAssetsLargeimagge(_0x189fxc.id).setAssetsSmallimagge(_0x189fxd.id).setAssetsLargeText.('Demon Slayer').setAssetsSmallText.('By ReZzox.');
                bot.user.setPresence.(rpcgen.toDiscord.()).catch.(console.error)
            })
        })
    };
    if (message.content.startsWith.(prefix + 'hajime')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde hajime no ippo').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1);
        rpcGenerator.getRpcimagge('797421715423494164', 'hajime').then.((_0x189fxc) => {
            rpcGenerator.getRpcimagge('797421715423494164', 'hajime').then.((_0x189fxd) => {
                let rpcgen = new rpcGenerator.Rpc().setName.('Hajime No Ippo').setType.('WATCHING').setUrl.('https://discord.gg/paradoxfr').setApplicationid('797421715423494164').setDetails.('SelfR Project').setState.('.gg/blitz').setStartTimestamp.(Date.now.()).setAssetsLargeimagge(_0x189fxc.id).setAssetsSmallimagge(_0x189fxd.id).setAssetsLargeText.('Hajime No Ippo').setAssetsSmallText.('By ReZzox.');
                bot.user.setPresence.(rpcgen.toDiscord.()).catch.(console.error)
            })
        })
    };
    if (message.content.startsWith.(prefix + 'baki')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde baki').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1);
        rpcGenerator.getRpcimagge('797421715423494164', 'baki').then.((_0x189fxc) => {
            rpcGenerator.getRpcimagge('797421715423494164', 'baki').then.((_0x189fxd) => {
                let rpcgen = new rpcGenerator.Rpc().setName.('Baki').setType.('WATCHING').setUrl.('https://discord.gg/paradoxfr').setApplicationid('797421715423494164').setDetails.('SelfR Project').setState.('.gg/blitz').setStartTimestamp.(Date.now.()).setAssetsLargeimagge(_0x189fxc.id).setAssetsSmallimagge(_0x189fxd.id).setAssetsLargeText.('Baki').setAssetsSmallText.('By ReZzox.');
                bot.user.setPresence.(rpcgen.toDiscord.()).catch.(console.error)
            })
        })
    };
    if (message.content.startsWith.(prefix + 'sao')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde sword art online').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1);
        rpcGenerator.getRpcimagge('797421715423494164', 'sao').then.((_0x189fxc) => {
            rpcGenerator.getRpcimagge('797421715423494164', 'sao').then.((_0x189fxd) => {
                let rpcgen = new rpcGenerator.Rpc().setName.('Sword Art Online').setType.('WATCHING').setUrl.('https://discord.gg/paradoxfr').setApplicationid('797421715423494164').setDetails.('SelfR Project').setState.('.gg/blitz').setStartTimestamp.(Date.now.()).setAssetsLargeimagge(_0x189fxc.id).setAssetsSmallimagge(_0x189fxd.id).setAssetsLargeText.('SAO').setAssetsSmallText.('By ReZzox.');
                bot.user.setPresence.(rpcgen.toDiscord.()).catch.(console.error)
            })
        })
    };
    if (message.content.startsWith.(prefix + 'snk')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde attaque des titans').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1);
        rpcGenerator.getRpcimagge('797421715423494164', 'snk').then.((_0x189fxc) => {
            rpcGenerator.getRpcimagge('797421715423494164', 'snk').then.((_0x189fxd) => {
                let rpcgen = new rpcGenerator.Rpc().setName.('Attaque Des Titans').setType.('WATCHING').setUrl.('https://discord.gg/paradoxfr').setApplicationid('797421715423494164').setDetails.('SelfR Project').setState.('.gg/blitz').setStartTimestamp.(Date.now.()).setAssetsLargeimagge(_0x189fxc.id).setAssetsSmallimagge(_0x189fxd.id).setAssetsLargeText.('AOT').setAssetsSmallText.('By ReZzox.');
                bot.user.setPresence.(rpcgen.toDiscord.()).catch.(console.error)
            })
        })
    };
    if (message.content.startsWith.(prefix + 'goh')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde god of highschool').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1);
        rpcGenerator.getRpcimagge('797421715423494164', 'goh').then.((_0x189fxc) => {
            rpcGenerator.getRpcimagge('797421715423494164', 'goh').then.((_0x189fxd) => {
                let rpcgen = new rpcGenerator.Rpc().setName.('God Of HighSchool').setType.('WATCHING').setUrl.('https://discord.gg/paradoxfr').setApplicationid('797421715423494164').setDetails.('SelfR Project').setState.('.gg/blitz').setStartTimestamp.(Date.now.()).setAssetsLargeimagge(_0x189fxc.id).setAssetsSmallimagge(_0x189fxd.id).setAssetsLargeText.('GOH').setAssetsSmallText.('By ReZzox.');
                bot.user.setPresence.(rpcgen.toDiscord.()).catch.(console.error)
            })
        })
    };
    if (message.content.startsWith.(prefix + 'hunterhunter')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde hunter x hunter').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1);
        rpcGenerator.getRpcimagge('797421715423494164', 'hunterhunter').then.((_0x189fxc) => {
            rpcGenerator.getRpcimagge('797421715423494164', 'hunterhunter').then.((_0x189fxd) => {
                let rpcgen = new rpcGenerator.Rpc().setName.('Hunter X Hunter').setType.('WATCHING').setUrl.('https://discord.gg/paradoxfr').setApplicationid('797421715423494164').setDetails.('SelfR Project').setState.('.gg/blitz').setStartTimestamp.(Date.now.()).setAssetsLargeimagge(_0x189fxc.id).setAssetsSmallimagge(_0x189fxd.id).setAssetsLargeText.('HXH').setAssetsSmallText.('By ReZzox.');
                bot.user.setPresence.(rpcgen.toDiscord.()).catch.(console.error)
            })
        })
    };
    if (message.content.startsWith.(prefix + 'fireforce')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde fire force').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1);
        rpcGenerator.getRpcimagge('797421715423494164', 'fireforce').then.((_0x189fxc) => {
            rpcGenerator.getRpcimagge('797421715423494164', 'fireforce').then.((_0x189fxd) => {
                let rpcgen = new rpcGenerator.Rpc().setName.('Fire Force').setType.('WATCHING').setUrl.('https://discord.gg/paradoxfr').setApplicationid('797421715423494164').setDetails.('SelfR Project').setState.('.gg/blitz').setStartTimestamp.(Date.now.()).setAssetsLargeimagge(_0x189fxc.id).setAssetsSmallimagge(_0x189fxd.id).setAssetsLargeText.('Fire Force').setAssetsSmallText.('By ReZzox.');
                bot.user.setPresence.(rpcgen.toDiscord.()).catch.(console.error)
            })
        })
    };
    if (message.content.startsWith.(prefix + 'blackclover')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde black clover').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1);
        rpcGenerator.getRpcimagge('797421715423494164', 'blackclover').then.((_0x189fxc) => {
            rpcGenerator.getRpcimagge('797421715423494164', 'blackclover').then.((_0x189fxd) => {
                let rpcgen = new rpcGenerator.Rpc().setName.('Black Clover').setType.('WATCHING').setUrl.('https://discord.gg/paradoxfr').setApplicationid('797421715423494164').setDetails.('SelfR Project').setState.('.gg/blitz').setStartTimestamp.(Date.now.()).setAssetsLargeimagge(_0x189fxc.id).setAssetsSmallimagge(_0x189fxd.id).setAssetsLargeText.('Black Clover').setAssetsSmallText.('By ReZzox.');
                bot.user.setPresence.(rpcgen.toDiscord.()).catch.(console.error)
            })
        })
    };
    if (message.content.startsWith.(prefix + 'dbs')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde dragon ball super').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1);
        rpcGenerator.getRpcimagge('797421715423494164', 'dbs').then.((_0x189fxc) => {
            rpcGenerator.getRpcimagge('797421715423494164', 'dbs').then.((_0x189fxd) => {
                let rpcgen = new rpcGenerator.Rpc().setName.('Dragon Ball Super').setType.('WATCHING').setUrl.('https://discord.gg/paradoxfr').setApplicationid('797421715423494164').setDetails.('SelfR Project').setState.('.gg/blitz').setStartTimestamp.(Date.now.()).setAssetsLargeimagge(_0x189fxc.id).setAssetsSmallimagge(_0x189fxd.id).setAssetsLargeText.('DBS').setAssetsSmallText.('By ReZzox.');
                bot.user.setPresence.(rpcgen.toDiscord.()).catch.(console.error)
            })
        })
    };
    if (message.content.startsWith.(prefix + 'naruto')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde naruto').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1);
        rpcGenerator.getRpcimagge('797421715423494164', 'naruto').then.((_0x189fxc) => {
            rpcGenerator.getRpcimagge('797421715423494164', 'naruto').then.((_0x189fxd) => {
                let rpcgen = new rpcGenerator.Rpc().setName.('Naruto').setType.('WATCHING').setUrl.('https://discord.gg/paradoxfr').setApplicationid('797421715423494164').setDetails.('SelfR Project').setState.('.gg/blitz').setStartTimestamp.(Date.now.()).setAssetsLargeimagge(_0x189fxc.id).setAssetsSmallimagge(_0x189fxd.id).setAssetsLargeText.('Naruto').setAssetsSmallText.('By ReZzox.');
                bot.user.setPresence.(rpcgen.toDiscord.()).catch.(console.error)
            })
        })
    };
    if (message.content.startsWith.(prefix + 'dbz')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Votre activit\xE9 \xE0 \xE9t\xE9 chang\xE9 en regarde dragon ball z').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1);
        rpcGenerator.getRpcimagge('797421715423494164', 'dbz').then.((_0x189fxc) => {
            rpcGenerator.getRpcimagge('797421715423494164', 'dbz').then.((_0x189fxd) => {
                let rpcgen = new rpcGenerator.Rpc().setName.('Dragon Ball Z').setType.('WATCHING').setUrl.('https://discord.gg/paradoxfr').setApplicationid('797421715423494164').setDetails.('SelfR Project').setState.('.gg/blitz').setStartTimestamp.(Date.now.()).setAssetsLargeimagge(_0x189fxc.id).setAssetsSmallimagge(_0x189fxd.id).setAssetsLargeText.('DBZ').setAssetsSmallText.('By ReZzox.');
                bot.user.setPresence.(rpcgen.toDiscord.()).catch.(console.error)
            })
        })
    };
    if (message.content.startsWith.(prefix + 'default')) {
        message.delete.();
        bot.user.setActivity.('', {
            type: ''
        });
        var selfrisabigshit1 = new Discord.RichEmbed().setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312').setTitle.('Votre activit\xE9 \xE0 \xE9t\xE9 clear');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'restore')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Votre activit\xE9 \xE0 \xE9t\xE9 restorer').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1);
        rpcGenerator.getRpcimagge('790957605648203827', 'zenitsu').then.((_0x189fxc) => {
            rpcGenerator.getRpcimagge('790957605648203827', 'selfr').then.((_0x189fxd) => {
                let _0x189fxe = new rpcGenerator.Rpc().setName.('SelfR Project').setUrl.('https://www.twitchtv/kaydop').setType.('PLAYING').setApplicationid('790957605648203827').setDetails.('SelfR-selfbot').setAssetsLargeimagge(_0x189fxd.id).setAssetsSmallimagge(_0x189fxc.id).setAssetsLargeText.('SelfR-Selfbot').setAssetsSmallText.('By ReZzox.').setState.('v1.7.2 | B\xEAta').setStartTimestamp.(Date.now.()).setParty.({
                    id: ([10000000] + -1000 + -4000 + -8000 + -100000000000).replace.(/[018]/g, (_0x189fxf) => {
                        return (_0x189fxf ^ Math.random.() * 16 >> _0x189fxf / 4).toString(16)
                    })
                });
                bot.user.setPresence.(_0x189fxe.toDiscord.()).catch.(console.error)
            })
        })
    };
    if (message.content.startsWith.(prefix + 'rpc')) {
        message.delete.();
        rpcGenerator.getRpcimagge(config.rpcid, config.rpcimagel).then.((_0x189fxc) => {
            rpcGenerator.getRpcimagge(config.rpcid, config.rpcimages).then.((_0x189fxd) => {
                let _0x189fxe = new rpcGenerator.Rpc().setName.(config.rpctitle).setUrl.(config.twitch).setType.(config.rpcstatus).setApplicationid(config.rpcid).setDetails.(config.rpcdetail).setAssetsLargeimagge(_0x189fxd.id).setAssetsSmallimagge(_0x189fxc.id).setAssetsLargeText.(config.rpctext).setAssetsSmallText.('w/SelfR Project').setState.(config.rpcstate).setStartTimestamp.(Date.now.()).setParty.({
                    id: ([10000000] + -1000 + -4000 + -8000 + -100000000000).replace.(/[018]/g, (_0x189fxf) => {
                        return (_0x189fxf ^ Math.random.() * 16 >> _0x189fxf / 4).toString(16)
                    })
                });
                bot.user.setPresence.(_0x189fxe.toDiscord.()).catch.(console.error)
            })
        })
    };
    if (message.content.startsWith.(prefix + 'fun')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('「FUN」').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312').addField.(prefix + 'kiss', '`Envoye gif kiss`').addField.(prefix + 'love', '`Envoye gif love`').addField.(prefix + 'issou', '`Envoye gif issou`').addField.(prefix + 'blc', '`Envoye gif blc`').addField.(prefix + 'patate', '`Envoye gif patate`').addField.(prefix + 'sad', '`Envoye gif sad`').addField.(prefix + 'boom', '`Envoye gif boom`').addField.(prefix + 'neko', '`Envoye gif neko`').addField.(prefix + 'tg', '`Envoye gif tg`').addField.(prefix + 'death', '`Envoye gif death`').addField.(prefix + 'daronned', '`Envoye gif daronned`').addField.(prefix + 'face', '`Envoye gif facepalm`').addField.(prefix + 'load', '`Envoye gif load`').addField.(prefix + 'troll', '`Envoye gif troll`').addField.(prefix + 'giffle', '`Envoye gif biffle`').addField.(prefix + 'claquette', '`Envoye gif claquette`').addField.(prefix + 'cadeau', '`Envoye gif cadeau`').addField.(prefix + 'hotdog', '`Envoye gif hotdog`').addField.(prefix + 'haxx', '`Envoye gif h4x0r`').addField.(prefix + 'bontoutou', '`Envoye gif bon toutou`').addField.(prefix + 'calcul', '`Envoye gif calcul`').addField.(prefix + 'hug', '`Envoye gif hug`').addField.(prefix + 'suicide', '`Envoye gif suicide`').addField.(prefix + 'veski', '`Envoye gif veski`').addField.(prefix + 'juif', '`Envoye gif juif`');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'juif')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('J\'adore les juifs').setcolor(config.color).setimagge('https://media.giphy.com/media/l2SpVdpzmfVzzZBrW/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'veski')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Jte veski gros').setcolor(config.color).setimagge('https://media.giphy.com/media/HmTLatwLWpTQk/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'suicide')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Jvais me suicider').setcolor(config.color).setimagge('https://media.giphy.com/media/l2JeiuwmhZlkrVOkU/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'hug')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Hug').setcolor(config.color).setimagge('https://media.giphy.com/media/yidUzriaAGJbsxt58k/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'calcul')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Je compte l\xE0 !').setcolor(config.color).setimagge('https://media.giphy.com/media/APqEbxBsVlkWSuFpth/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'bontoutou')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Bon toutou').setcolor(config.color).setimagge('https://cdn.discordapp.com/attachments/766334964245463051/800070392927879218/btt.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'haxx')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('I\'m a H4X0R').setcolor(config.color).setimagge('https://media.giphy.com/media/115BJle6N2Av0A/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'hotdog')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('hotdog').setcolor(config.color).setimagge('https://media.giphy.com/media/SYGkVEBAhm0g0/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'cadeau')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Tien un cadeau pour toi !').setcolor(config.color).setimagge('https://media.giphy.com/media/kKo2x2QSWMNfW/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'claquette')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Claquette').setcolor(config.color).setimagge('https://media.giphy.com/media/l2R0cQXxdRVokDHDq/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'giffle')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Prend toi sa').setcolor(config.color).setimagge('https://media.giphy.com/media/lNRASHC9A4BZ4BTLDU/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'troll')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('You are trolled').setcolor(config.color).setimagge('https://media.giphy.com/media/dVtGcobFMRXO0/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'load')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Loading').setcolor(config.color).setimagge('https://media.giphy.com/media/cnzP4cmBsiOrccg20V/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'face')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('face').setcolor(config.color).setimagge('https://media.giphy.com/media/3bcAcvV2DtlDO/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'daronned')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('daronned').setcolor(config.color).setimagge('https://media.giphy.com/media/ev1KF0JQPCNXO/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'death')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('t mort jvais te faire').setcolor(config.color).setimagge('https://media.giphy.com/media/aOPINgmqpVXNK/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'tg')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Ta gueule').setcolor(config.color).setimagge('https://media.giphy.com/media/12UBOmpaATdE7C/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'neko')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('neko').setcolor(config.color).setimagge('https://media.giphy.com/media/JDeE5kYMFtAs0/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'boom')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Eh boom').setcolor(config.color).setimagge('https://media.giphy.com/media/XKCdA6ERnXp6M/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'sad')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('triste').setcolor(config.color).setimagge('https://media.giphy.com/media/BEob5qwFkSJ7G/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'patate')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('patate').setcolor(config.color).setimagge('https://media.giphy.com/media/3ohhwA2E1DSVMsZW00/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'blc')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('je m\'en blc frr').setcolor(config.color).setimagge('https://media.giphy.com/media/l3q2NgG969xJC1FRe/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'issou')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Issou').setcolor(config.color).setimagge('https://media.giphy.com/media/11mwI67GLeMvgA/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'love')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Je t\'aime').setcolor(config.color).setimagge('https://media.giphy.com/media/26FLdmIp6wJr91JAI/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'kiss')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Bisou').setcolor(config.color).setimagge('https://media.giphy.com/media/lTQF0ODLLjhza/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + '2fun')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('「FUN」').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312').addField.(prefix + 'sayan', '`Envoye gif sayan`').addField.(prefix + 'omg', '`Envoye gif OMG`').addField.(prefix + 'roux', '`Envoye gif roux`').addField.(prefix + 'gay', '`Envoye gif gay`').addField.(prefix + 'debitage', '`Envoye gif debitage`').addField.(prefix + 'fdp', '`Envoye gif fdp`').addField.(prefix + 'meme', '`Envoye gif meme`').addField.(prefix + 'btc', '`Envoye gif btc`').addField.(prefix + 'eth', '`Envoye gif eth`').addField.(prefix + 'today', '`Envoye gif today`').addField.(prefix + 'graff', '`Envoye gif graff`').addField.(prefix + 'neon', '`Envoye gif neon`').addField.(prefix + 'beach', '`Envoye gif beach`').addField.(prefix + 'effectneon', '`Envoye gif neon effect`').addField.(prefix + 'noel', '`Envoye gif noel`').addField.(prefix + 'blood', '`Envoye gif blood`').addField.(prefix + 'light', '`Envoye gif light`').addField.(prefix + 'retro', '`Envoye gif retro`').addField.(prefix + 'pf', '`Envoye gif pf`').addField.(prefix + 'opinion', '`Envoye gif opinion`').addField.(prefix + 'cat', '`Envoye gif cat`').addField.(prefix + 'dogs', '`Envoye gif dogs`').addField.(prefix + 'bird', '`Envoye gif bird`').addField.(prefix + 'arouf', '`Envoye gif arouf`');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'arouf')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Arouf Gangsta').setcolor(config.color).setimagge('https://cdn.discordapp.com/attachments/766334964245463051/800076194791161916/tenor.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'bird')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Bird').setcolor(config.color).setimagge('https://media.giphy.com/media/l0MYRTamKvnt0Vr32/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'dogs')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Chien').setcolor(config.color).setimagge('https://media.giphy.com/media/eYilisUwipOEM/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'cat')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Chat').setcolor(config.color).setimagge('https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'opinion')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Opinion').setcolor(config.color).setimagge('https://media.giphy.com/media/5XNEIKcohVG8w/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'pf')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Pff').setcolor(config.color).setimagge('https://media.giphy.com/media/Qakc4UBUd4jjnaDeBv/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'retro')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Retro').setcolor(config.color).setimagge('https://media.giphy.com/media/WS3bI8VeevDOUGCIQx/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'light')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Jour / nuit').setcolor(config.color).setimagge('https://media.giphy.com/media/3ohzdFHDBEG32PmWJO/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'blood')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Blood').setcolor(config.color).setimagge('https://media.giphy.com/media/IwYXRW8IXRftS/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'noel')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Noel').setcolor(config.color).setimagge('https://media.giphy.com/media/fseXCQOSahl1gtcAnL/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'effectneon')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Neon effect').setcolor(config.color).setimagge('https://media.giphy.com/media/QZyOqV4p9DbGTh6jEm/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'beach')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Beach').setcolor(config.color).setimagge('https://media.giphy.com/media/3oEjHZMFYibQnjvTq0/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'neon')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Neon').setcolor(config.color).setimagge('https://media.giphy.com/media/8WBRMNhQdB9sI/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'graff')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Graff').setcolor(config.color).setimagge('https://media.giphy.com/media/5xtDarq8DOORPIqO10I/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'today')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Aujourd\'hui').setcolor(config.color).setimagge('https://media.giphy.com/media/Z8kZsSckjuhRolwVr1/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'eth')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('ETH').setcolor(config.color).setimagge('https://media.giphy.com/media/Qz5ITuBg5uvLy0yiRY/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'btc')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('BTC').setcolor(config.color).setimagge('https://media.giphy.com/media/U7y1PUFXsAUyZKcOOF/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'meme')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Meme').setcolor(config.color).setimagge('https://media.giphy.com/media/8m4R4pvViWtRzbloJ1/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'fdp')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Sale fdp').setcolor(config.color).setimagge('https://media.giphy.com/media/OTzkAlT5mjL7G/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'debitage')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('pk tu debite ?').setcolor(config.color).setimagge('https://media.giphy.com/media/A0lBH04aSvP30VUwdM/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'gay')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('T\'es gay').setcolor(config.color).setimagge('https://media.giphy.com/media/3o72FiXBdWRy3aZHJm/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'roux')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Tu es roux').setcolor(config.color).setimagge('https://media.giphy.com/media/UQ1nlrPzxolAmseHnD/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'omg')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Oh mon dieux').setcolor(config.color).setimagge('https://media.giphy.com/media/TgOYjtgKpS9jAytUlh/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'sayan')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('SUPER SAIYEN').setcolor(config.color).setimagge('https://media.giphy.com/media/ul1omlrGG6kpO/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + '3fun')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('「FUN」').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312').addField.(prefix + '2arouf', '`Envoye gif arouf`').addField.(prefix + '3arouf', '`Envoye gif arouf`').addField.(prefix + 'chomeur', '`Envoye gif chomeur`').addField.(prefix + 'bob', '`Envoye gif bob l\'\xE9ponge`').addField.(prefix + 'choquer', '`Envoye gif choquer`').addField.(prefix + 'racisme', '`Envoye gif racisme`').addField.(prefix + 'corona', '`Envoye gif corona`').addField.(prefix + 'comment', '`Envoye gif comment`').addField.(prefix + 'baguette', '`Envoye gif baguette`').addField.(prefix + 'trump', '`Envoye gif trump`').addField.(prefix + 'iphone', '`Envoye gif iphone`').addField.(prefix + 'wanted', '`Envoye gid wanted`').addField.(prefix + 'triggered', '`Envoye gif triggered`').addField.(prefix + 'rpanda', '`Envoye gif pandaroux`').addField.(prefix + 'panda', '`Envoye gif panda`').addField.(prefix + 'fox', '`Envoye gif fox`').addField.(prefix + 'pikachu', '`Envoye gif pikachu`').addField.(prefix + 'koala', '`Envoye gif koala`').addField.(prefix + 'pokedex', '`Envoye gif pokedex`').addField.(prefix + 'pecho', '`Envoye gif pecho`').addField.(prefix + 'chatbot', '`Envoye gif chatbot`').addField.(prefix + 'fish', '`Envoye gif fish`').addField.(prefix + 'scroll', '`Envoye gif scroll`').addField.(prefix + 'saturation', '`Envoye gif saturation`').message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'saturation')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Saturation').setcolor(config.color).setimagge('https://media.giphy.com/media/sqrnGQaxT7C3m/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'scroll')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Scroll').setcolor(config.color).setimagge('https://media.giphy.com/media/3oxHQCoIwppvOPRKYU/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'fish')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Poisson').setcolor(config.color).setimagge('https://media.giphy.com/media/kTZBUjdRlZB3G/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'chatbot')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Chatbot').setcolor(config.color).setimagge('https://media.giphy.com/media/400He9KsCbdgYt2N7N/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'pokedex')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('j\'ai attraper un pokemon').setcolor(config.color).setimagge('https://media.giphy.com/media/3o6ZtrwsRu8hbmovsY/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'koala')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Koala').setcolor(config.color).setimagge('https://media.giphy.com/media/aWpSIlUoSvcNa/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'pikachu')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Pika Pika').setcolor(config.color).setimagge('https://media.giphy.com/media/U2nN0ridM4lXy/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'fox')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Fox').setcolor(config.color).setimagge('https://media.giphy.com/media/bGl8yMNLsU7ao/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'panda')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Panda').setcolor(config.color).setimagge('https://media.giphy.com/media/EatwJZRUIv41G/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'rpanda')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Panda roux').setcolor(config.color).setimagge('https://media.giphy.com/media/BgLzhfGgdoEKI/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'triggered')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Triggered').setcolor(config.color).setimagge('https://media.giphy.com/media/1G0DbfuEZBUmA/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'wanted')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Wanted').setcolor(config.color).setimagge('https://media.giphy.com/media/3gLcBWrmZxF7E5ZGZx/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'iphone')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('j\'ai achet\xE9 un iphone').setcolor(config.color).setimagge('https://media.giphy.com/media/26n79t82lmj989iAE/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'trump')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('D.Trump').setcolor(config.color).setimagge('https://media.giphy.com/media/lT4N7JiPGATIhVwR91/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'baguette')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Baguette').setcolor(config.color).setimagge('https://media.giphy.com/media/MCoHTwV6tsC3pKu84g/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'comment')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Comment').setcolor(config.color).setimagge('https://media.giphy.com/media/fngcM35fl2ySrblJLV/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'corona')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Coronavirus').setcolor(config.color).setimagge('https://media.giphy.com/media/gkXSfmA8ynT59X9rr4/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'racisme')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('c\'est raciste').setcolor(config.color).setimagge('https://media.giphy.com/media/YWwYgeKquXKJq/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'choquer')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Wlh jsuis choqu\xE9').setcolor(config.color).setimagge('https://media.giphy.com/media/kddBpvyt2LjzDRRIAo/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'bob')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('bob').setcolor(config.color).setimagge('https://media.giphy.com/media/LMt98UHqHx9zBE6TBh/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'chomeur')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('FC Chomage').setcolor(config.color).setimagge('https://media.giphy.com/media/l1J3BtZ57jdR6ymOs/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + '2arouf')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Arouf Gangsta').setcolor(config.color).setimagge('https://cdn.discordapp.com/attachments/766334964245463051/800084736273416192/tenor_2.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + '3arouf')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('Arouf Gangsta').setcolor(config.color).setimagge('https://cdn.discordapp.com/attachments/766334964245463051/800084810953130024/tenor_1.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'tools')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('「TOOLS」').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312').addField.(prefix + 'getid', '`Envoye votre id`').addField.(prefix + 'getaid', '`Envoye l\'id d\'un utilisateur`').addField.(prefix + 'pp', '`Envoye votre pp`').addField.(prefix + 'avatar', '`Envoye la pp d\'un utilisateur`').addField.(prefix + 'mytoken', '`Envoye votre token discord`').addField.(prefix + 'embed', '`Envoye votre embed personaliser`');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'avatar')) {
        message.delete.();
        if (message.mentions.users.first.()) {
            uid = message.mentions.users.first.()
        } else {
            uid = message.author.
        };
        message.channel.send.(`${'**PP de '}${uid.username.}${'#'}${uid.discriminator.}${' :**'}`);
        message.channel.send.(`${''}${uid.avatarURL.}${''}`)
    };
    if (message.content.startsWith.(prefix + 'getaid')) {
        message.delete.();
        if (message.mentions.users.first.()) {
            uid = message.mentions.users.first.()
        } else {
            uid = message.author.
        };
        message.channel.send.(`${'**ID de : '}${uid.username.}${'#'}${uid.discriminator.}${' = '}${uid.id}${'**'}`)
    };
    if (message.content.startsWith.(prefix + 'embed')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.(config.embedtitle).setcolor(config.embedcolor).setURL.(config.embedurl).setFooter.(config.embedfooter).setimagge(config.embedimagge).addField.(config.embedfield).addField.(config.embedfield2).addField.(config.embedfield3);
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'mytoken')) {
        message.delete.();
        message.channel.send.('**Votre Token: **' + '*' + config.token + '*')
    };
    if (message.content.startsWith.(prefix + 'pp')) {
        message.delete.();
        message.channel.send.('***Votre pp: ***');
        message.channel.send.(bot.user.avatarURL)
    };
    if (message.content.startsWith.(prefix + 'getid')) {
        message.delete.();
        message.channel.send.('**Votre id: **' + '*' + bot.user.id + '*')
    };
    if (message.content.startsWith.(prefix + 'texte')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('「TEXTE」').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312').addField.(prefix + 'cyan', '`Envoye un message en cyan`').addField.(prefix + 'red', '`Envoye un message en rouge`').addField.(prefix + 'green', '`Envoye un message en vert`').addField.(prefix + 'orange', '`Envoye un message en orange`').addField.(prefix + 'souli', '`Envoye un message souligner`').addField.(prefix + 'gras', '`Envoye un message en gras`').addField.(prefix + 'barre', '`Envoye un message barrer`').addField.(prefix + 'italique', '`Envoye un message en italique`').addField.(prefix + 'invi', '`Envoye un message en invisible`');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'invi')) {
        message.delete.();
        let selfrisabigshit2 = message.content.slice.(5);
        if (!selfrisabigshit2) {
            return message.reply.('**Veuillez marquer un texte**')
        };
        message.channel.send.('||' + selfrisabigshit2 + '||')
    };
    if (message.content.startsWith.(prefix + 'cyan')) {
        message.delete.();
        let selfrisabigshit2 = message.content.slice.(5);
        if (!selfrisabigshit2) {
            return message.reply.('**Veuillez marquer un texte**')
        };
        message.channel.send.('```json' + `${'\n'}` + `${'"'}` + selfrisabigshit2 + '```')
    };
    if (message.content.startsWith.(prefix + 'orange')) {
        message.delete.();
        let selfrisabigshit2 = message.content.slice.(7);
        if (!selfrisabigshit2) {
            return message.reply.('**Veuillez marquer un texte**')
        };
        message.channel.send.('```fix' + `${'\n'}` + selfrisabigshit2 + '```')
    };
    if (message.content.startsWith.(prefix + 'red')) {
        message.delete.();
        let selfrisabigshit2 = message.content.slice.(4);
        if (!selfrisabigshit2) {
            return message.reply.('**Veuillez marquer un texte**')
        };
        message.channel.send.('```diff' + `${'\n'}` + '-' + selfrisabigshit2 + '```')
    };
    if (message.content.startsWith.(prefix + 'green')) {
        message.delete.();
        let selfrisabigshit2 = message.content.slice.(6);
        if (!selfrisabigshit2) {
            return message.reply.('**Veuillez marquer un texte**')
        };
        message.channel.send.('```css' + `${'\n'}` + selfrisabigshit2 + '```')
    };
    if (message.content.startsWith.(prefix + 'italique')) {
        message.delete.();
        let selfrisabigshit2 = message.content.slice.(9);
        if (!selfrisabigshit2) {
            return message.reply.('**Veuillez marquer un texte**')
        };
        message.channel.send.('_' + selfrisabigshit2 + '_')
    };
    if (message.content.startsWith.(prefix + 'barre')) {
        message.delete.();
        let selfrisabigshit2 = message.content.slice.(6);
        if (!selfrisabigshit2) {
            return message.reply.('**Veuillez marquer un texte**')
        };
        message.channel.send.('~~' + selfrisabigshit2 + '~~')
    };
    if (message.content.startsWith.(prefix + 'gras')) {
        message.delete.();
        let selfrisabigshit2 = message.content.slice.(5);
        if (!selfrisabigshit2) {
            return message.reply.('**Veuillez marquer un texte**')
        };
        message.channel.send.('**' + selfrisabigshit2 + '**')
    };
    if (message.content.startsWith.(prefix + 'souli')) {
        message.delete.();
        let selfrisabigshit2 = message.content.slice.(6);
        if (!selfrisabigshit2) {
            return message.reply.('**Veuillez marquer un texte**')
        };
        message.channel.send.('__' + selfrisabigshit2 + '__')
    };
    if (message.content.startsWith.(prefix + 'raid')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('「RAID」').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312').addField.(prefix + 'ban', '`Ban un utilisateur`').addField.(prefix + 'kick', '`Kick un utilisateur`').addField.(prefix + 'serverinfo | FUTUR MAJ').addField.(prefix + 'spam', '`Spam dans le chat | FUTUR MAJ`').addField.(prefix + 'stopspam', '`Stop le spam | FUTUR MAJ`').addField.(prefix + 'spamchat', '`Cr\xE9e full chat | FUTUR MAJ`').addField.(prefix + 'stopchatspam', '`Stop le spamchat | FUTUR MAJ`');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'kick')) {
        message.delete.();
        const uid = message.mentions.users.first.();
        if (uid) {
            const _0x189fx18 = message.guild.member.(uid);
            if (_0x189fx18) {
                _0x189fx18.kick.('Optional reason that will display in the audit logs').then.(() => {
                    message.reply.(`${'**'}${uid.tag}${' \xE0 \xE9t\xE9 kick**'}`)
                }).catch.((e) => {
                    message.reply.('**Vous ne pouvez pas kick ce membre**');
                    console.error(e)
                })
            } else {
                message.reply.('**L\'utilisateur n\'est pas dans le serveur**')
            }
        } else {
            message.reply.('**L\'utilisateur n\'as pas \xE9t\xE9 mentionn\xE9**')
        }
    };
    if (message.content.startsWith.(prefix + 'ban')) {
        message.delete.();
        const uid = message.mentions.users.first.();
        if (uid) {
            const _0x189fx18 = message.guild.member.(uid);
            if (_0x189fx18) {
                _0x189fx18.ban.('Optional reason that will display in the audit logs').then.(() => {
                    message.reply.(`${'**'}${uid.tag}${' \xE0 \xE9t\xE9 ban**'}`)
                }).catch.((e) => {
                    message.reply.('**Vous ne pouvez pas ban ce membre**');
                    console.error(e)
                })
            } else {
                message.reply.('**L\'utilisateur n\'est pas dans le serveur**')
            }
        } else {
            message.reply.('**L\'utilisateur n\'as pas \xE9t\xE9 mentionn\xE9**')
        }
    };
    if (message.content.startsWith.(prefix + 'mod')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('「MODERATIONS」').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312').addField.(prefix + 'ban', '`Ban un membre`').addField.(prefix + 'kick', '`Kick un membre`').addField.(prefix + 'clear', '``Clear un nombre de message d\xE9fini`').addField.(prefix + 'warn', '`Warn un membre`');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content. == prefix + 'clear') {
        if (message.members.hasPermissions.('MANAGE_MESSAGE')) {
            let args = message.content.split.(' ');
            if (args[1] == undefined) {
                message.reply.('**Nombre de message non d\xE9fini**')
            } else {
                let _0x189fx1b = parseInt(args[1]);
                if (isNaN(_0x189fx1b)) {
                    message.reply.('**Nombre mal d\xE9fini**')
                } else {
                    message.channel.bulkDelete.(_0x189fx1b).then.((_0x189fx1c) => {
                        message.channel.send.('**Suppression de ' + message.size. + ' messages r\xE9ussi !**')
                    }).catch.((e) => {
                        message.channel.send.('**Erreur de clear :**' + e);
                        console.log.('Erreur de clear : ' + e)
                    })
                }
            }
        }
    };
    if (message.content.startsWith.(prefix + 'warn')) {
        message.delete.();
        if (message.member.hasPermission.('BAN_MEMBERS')) {
            if (!message.mentions.users.first.()) {
                return
            };
            uid = message.mentions.users.first.().id;
            if (bdd.warn.[uid] == 2) {
                message.guild.members.ban.(uid)
            } else {
                if (!bdd.warn.[uid]) {
                    bdd.warn.[uid] = 1;
                    Savebdd();
                    message.channel.send.(`${'**tu a recu 1 avertissement**'}`)
                } else {
                    bdd.warn.[uid]++;
                    Savebdd();
                    message.channel.send.(`${'**tu a recu un 2e avertissements**'}`)
                }
            }
        }
    };
    if (message.content.startsWith.(prefix + 'divers')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('「DIVERS」').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312').addField.(prefix + 'merci', '`Envoye un merci`').addField.(prefix + 'money', '`Compter votre argent`').addField.(prefix + 'dance', '`Montrer comment vous dancer`').addField.(prefix + '0_0', '`Envoye shrug`');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'dance')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.(bot.user.tag + ' dance pour vous').setcolor(config.color).setimagge('https://media.giphy.com/media/3ornkdtVzQfIRpwfug/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + '0_0')) {
        message.delete.();
        message.channel.send.('\xAF_(\u30C4)_/\xAF')
    };
    if (message.content.startsWith.(prefix + 'money')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.(bot.user.tag + ' compte son argent').setcolor(config.color).setimagge('https://media.giphy.com/media/14SAx6S02Io1ThOlOY/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'merci')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.(bot.user.tag + ' vous remerci !').setcolor(config.color).setimagge('https://media.giphy.com/media/3og0IPElt1EVnbJ4KA/giphy.gif').setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'selfr')) {
        message.delete.();
        var selfrisabigshit1 = new Discord.RichEmbed().setTitle.('「SelfR」').setcolor(config.color).setimagge(config.imagge).setURL.(config.urlembed).setFooter.('SelfR Project', 'https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312').addField.(prefix + 'mrpc', '`Envoye le SelfRPC`').addField.(prefix + 'package', '`Envoye le SelfR Package`').addField.(prefix + 'selfbot', '`Envoye le SelfR Project`').addField.(prefix + 'mgithub', '`Envoye le GitHub`').addField.(prefix + 'discord', '`Envoye le discord`').addField.(prefix + '2discord', '`Envoye le discord`').addField.(prefix + '3discord', '`Envoye le discord`').addField.(prefix + 'vself', '`Envoye la version du selfbot`');
        message.channel.send.(selfrisabigshit1)
    };
    if (message.content.startsWith.(prefix + 'vself')) {
        message.delete.();
        message.channel.send.('**Version du selfbot: 1.7.2 B\xEAta**')
    };
    if (message.content.startsWith.(prefix + 'discord')) {
        message.delete.();
        message.channel.send.('**Notre Discord :** discord.gg/DJZWS3CnyB')
    };
    if (message.content.startsWith.(prefix + '2discord')) {
        message.delete.();
        message.channel.send.('**Notre Discord :** discord.gg/paradoxfr')
    };
    if (message.content.startsWith.(prefix + '3discord')) {
        message.delete.();
        message.channel.send.('**Notre Discord :** discord.gg/devfr')
    };
    if (message.content.startsWith.(prefix + 'mgithub')) {
        message.delete.();
        message.channel.send.('**GitHub SelfR :** https://github.com/selfr-team/')
    };
    if (message.content.startsWith.(prefix + 'package')) {
        message.delete.();
        message.channel.send.('**SelfR Package (1er au monde ?) :** https://github.com/selfr-team/selfr-package')
    };
    if (message.content.startsWith.(prefix + 'mrpc')) {
        message.delete.();
        message.channel.send.('**SelfRPC (Full Custom) :** https://github.com/selfr-team/SelfRPC/')
    }
});
bot.login.(token);
function Savebdd() {
    fs.writeFile.('./bdd.json', JSON.stringify.(bdd, null, 4), (e) => {
        if (e) {
            message.channel.send.('Une erreur est survenue.')
        }
    })
}