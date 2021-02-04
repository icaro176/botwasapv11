exports.wait = () => {
	return`*「 AGUARDE 」 EM PROCESSO*`
}

exports.succes = () => {
	return`*「 SUCESSO 」*`
}

exports.lvlon = () => {
	return`*「 LEVELING 」 HABILITADO*`
}

exports.lvloff = () => {
	return`*「 LEVELING 」 DESATIVADO*`
}

exports.lvlnul = () => {
	return`*KAKKAKA LEVEL 0*`
}

exports.lvlnoon = () => {
	return`*O NÍVEL DO GRUPO NÃO FOI ATIVADO*`
}

exports.noregis = () => {
	return`*「 NÃO REGISTRADO 」*\n\n*como registrar ${prefix}daftar nome|idade* \n*exemplo ${prefix}daftar ${pushname}|idade*`
}

exports.rediregis = () => {
	return`*「 ${pushname} 」*\n\n*você já está registrado*`
}

exports.stikga = () => {
	return`*sim ${pushname} falhou tente repetir*`
}

exports.linkga = () => {
	return`*desculpe ${pushname} link inválido*`
}

exports.groupo = () => {
	return`*ESSE COMANDO SÓ PODE SER USADO EM GRUPOS*`
}

exports.ownerb = () => {
	return`*ESSE COMANDO SÓ PODE SER USADO PELO PRIORITÁRIO*`
}

exports.ownerg = () => {
	return`*ESSE COMANDO SÓ PODE SER USADO PELO PROPRIETÁRIO DO GRUPO*`
}

exports.admin = () => {
	return`*I ala, membro comum querendo usar comando dos adm🤣*`
}

exports.badmin = () => {
	return`*${pushname} me dá adm primeiro que eu aceito o comando 👉👈*`
}

exports.nsfwoff = () => {
	return`*ATIVE O NSFW PRIMEIRO 🤬*`
}

exports.bug = () => {
	return`*Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos*`
}

exports.wrongf = () => {
	return`*Formato incorreto ou texto em branco*`
}

exports.clears = () => {
	return`*limpado com sucesso*`
}

exports.pc = () => {
	return`*「 CADASTRO 」*\n\nPara saber se você se cadastrou, verifique a mensagem que enviei \n\nNOTA:\n*se você não entendeu a mensagem.  significa que você não salvou o número do bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DADOS 」*\n\nvocê se registrou com os dados \n\n┏━⊱NOME\n┗⊱${namaUser}\n┏━⊱NÚMERO\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱IDADE\n┗⊱${umurUser}\n┏━⊱hora de registro\n┗⊱${time}\n\n┏━❉ *CÓDIGO* ❉━\n┣⊱${serialUser}\n┗⊱NOTA : 0`
}

exports.cmdnf = (prefix, command) => {
	return`comando *${prefix}${command}* não encontrado\tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Desculpe ${pushname} você não é meu dono*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Desculpa ${pushname} seu nivel não é suficiente*\n\n*┏⊱seu nível : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${aha}*\n\n_NOTA : CHAT/SEMPRE LIGADO PARA OBTER XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Desculpa ${pushname} seu nivel não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahb}*\n\n_NOTA : CHAT/SEMPRE LIGADO PARA OBTER XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Desculpa ${pushname} seu nivel não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahc}*\n\n_NOTA : CHAT/SEMPRE LIGADO PARA OBTER XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Desculpa ${pushname} seu nivel não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahd}*\n\n_NOTA : CHAT/SEMPRE LIGADO PARA OBTER XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Desculpa ${pushname} seu nivel não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahe}*\n\n_NOTA : CHAT/SEMPRE LIGADO PARA OBTER XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Desculpa ${pushname} seu nivel não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahf}*\n\n_NOTA : CHAT/SEMPRE LIGADO PARA OBTER XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
┏━━━⊱  *SOBRE O USUARIO*
➼✰ ΝOᎷᎬ : ${pushname}
➼✰ ΝÚᎷᎬᎡO : wa.me/${sender.split("@")[0]}
➼✰『DINHEIRO』 : R$: ${uangku}
➼✰『XP』 : ${getLevelingXp(sender)}/${reqXp}
➼✰『LEVEL』 : ${getLevelingLevel(sender)}
│
╭━━━➼ *𝐁𝐎𝐓 𝐁𝐀𝐈𝐀𝐍𝐎*
│➼ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂
├─ ❏ *${prefix}help* ❏
├─ ❏ *${prefix}menu* ❏
╰──────────────
│
┏⊱︙𝐌𝐚𝐤𝐞𝐫 𝐌𝐞𝐧𝐮
➼✰ *${prefix}sticker*
➼✰ *${prefix}quotemaker <texto|autor>*
➼✰ *${prefix}qrcode* <texto>
➼✰ *${prefix}ttp*
➼✰ *${prefix}stickerhide* <texto>
➼✰ *${prefix}emoji*
➼✰ *${prefix}ocr* <foto>
➼✰ *${prefix}text3d* <texto>
│
┏⊱︙𝐅𝐮𝐧 𝐌𝐞𝐧𝐮
➼✰ *${prefix}chord* <título>
➼✰ *${prefix}bisakah* <texto>
➼✰ *${prefix}kapankah* <texto>
➼✰ *${prefix}apakah* <texto>
➼✰ *${prefix}rate* <texto>
➼✰ *${prefix}truth* [verdade]
➼✰ *${prefix}dare* [desafio]
➼✰ *${prefix}slap* <@tag>
➼✰ *${prefix}moddroid* <aplicativo>
➼✰ *${prefix}happymod* <aplicativo>
│
┏⊱︙𝐌𝐞𝐝𝐢𝐚 𝐌𝐞𝐧𝐮
➼✰ *${prefix}pinterest*
➼✰ *${prefix}resepmasakan* <texto>
➼✰ *${prefix}igstalk* <usuário>
➼✰ *${prefix}tiktok* <link>
➼✰ *${prefix}fototiktok* <usuário>
➼✰ *${prefix}map* <cidade>
➼✰ *${prefix}bitly* <link>
➼✰ *${prefix}ssweb* <link>
➼✰ *${prefix}toimg*
│
*┏⊱︙𝐘𝐓 & 𝐒𝐎𝐍𝐆
➼✰ *${prefix}ytmp3* <link>
➼✰ *${prefix}ytmp4* <link>
➼✰ *${prefix}joox* <título>
│
*┏⊱︙𝐍𝐬𝐟𝐰 𝐌𝐞𝐧𝐮
➼✰ *${prefix}anjing*
➼✰ *${prefix}blowjob* <@tag>
➼✰ *${prefix}nekonime*
➼✰ *${prefix}husbu*
➼✰ *${prefix}ranime*
➼✰ *${prefix}nangis* <@tag>
➼✰ *${prefix}cium* <@tag>
➼✰ *${prefix}peluk* <@tag>
│
*┏⊱︙𝐋𝐢𝐦𝐢𝐭𝐞 & 𝐃𝐢𝐧𝐡𝐞𝐢𝐫𝐨
➼✰ *${prefix}limit* 
➼✰ *${prefix}buylimit* <total>
➼✰ *${prefix}transfer* <@tag|total>
➼✰ *${prefix}dompet*
│
*┏⊱︙𝐆𝐫𝐮𝐩𝐨 𝐌𝐞𝐧𝐮
➼✰ *${prefix}hidetag* <texto>
➼✰ *${prefix}level*
➼✰ *${prefix}linkgc*
➼✰ *${prefix}tagall*
➼✰ *${prefix}setpp*
➼✰ *${prefix}add* <55123xxxx>
➼✰ *${prefix}kick* <@tag>
➼✰ *${prefix}setname* <texto>
➼✰ *${prefix}setdesc* <texto>
➼✰ *${prefix}demote* <@tag>
➼✰ *${prefix}promote* <@tag>
➼✰ *${prefix}listadmin*
│
┏⊱︙𝐀𝐭𝐢𝐯𝐚𝐫
➼✰ *${prefix}group* [buka/tutup]
├𝐮𝐬𝐨: buka: abrir / tutup: fechar "GRUPO"
╰────────
➼✰ *${prefix}leveling* [enable/disable]
➼✰ *${prefix}nsfw* [1/0]
➼✰ *${prefix}simih* [1/0]
➼✰ *${prefix}welcome* [1/0]
│
*┏⊱︙𝐏𝐫𝐨𝐩𝐫𝐢𝐞𝐭𝐚𝐫𝐢𝐨
➼✰ *${prefix}bc* <texto>
➼✰ *${prefix}bcgc* <texto>
➼✰ *${prefix}kickall* <ban>
➼✰ *${prefix}setreply* <texto>
➼✰ *${prefix}setprefix* <símbolo>
➼✰ *${prefix}setmemlimit* <total>
➼✰ *${prefix}clearall*
➼✰ *${prefix}block* <@tag>
➼✰ *${prefix}unblock* <@tag>
➼✰ *${prefix}leave*
➼✰ *${prefix}event* [1/0]
➼✰ *${prefix}mining*
➼✰ *${prefix}clone* <@tag>
➼✰ *${prefix}setppbot* 

▌│█║▌║▌║║▌║▌║█│▌▌│█║▌║▌║
                 © *ᏆᏟᎪᎡØ*
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 LEVEL UP💥 」*
┏⊱ *ΝOᎷᎬ* : ${pushname}
┣⊱ *ΝÚᎷᎬᎡO* : wa.me/${sender.split("@")[0]}
┣⊱ *ХᏢ* : ${getLevelingXp(sender)}
┣⊱ *ᏞIMITᎬ* : +3
┗⊱ *ᏞᎬᏙᎬᏞ* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*desculpa ${pushname} seu limite acabou*\n*obter limite/subir de nível ou ${prefix}buylimit <total>*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 ＬＩＭＩＴＥ ＤＡ ＣＯＮＴＡ 」*
SEU LIMITE : ${limitCounts}`
}

exports.satukos = () => {
	return`*Adicionar 1/ativar ou 0/desativar*`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ${pushname} 」⊰━┓*\n┣⊱ *NOME* : ${pushname}\n┣⊱ *NÚMERO* : ${sender.split("@")[0]}\n┣⊱ *DINHEIRO* : ${uangkau}\n┗━━━━━━━━━━`
}
