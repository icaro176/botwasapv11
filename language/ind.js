exports.wait = () => {
	return`*「 WAIT 」 SEDANG PROSES*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar affis|17*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA NEGARA 」*\n\nkamu sudah terdaftar dengan data \n\n┏━⊱nama\n┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱umur\n┗⊱${umurUser}\n┏━⊱waktu pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : jangan sampai lupa nomer ini karena ini penting:v`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
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
➼✰ *${prefix}chord* <texto>
➼✰ *${prefix}mining*
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
➼✰ *${prefix}hidetag*
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
➼✰ *${prefix}clone* <@tag>
➼✰ *${prefix}setppbot* 

▌│█║▌║▌║║▌║▌║█│▌▌│█║▌║▌║
                 © *ᏆᏟᎪᎡØ*
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 SELAMAT 」*
┏⊱ *Nama* : ${pushname}
┣⊱ *Nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limit* : +3
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*beli limit untuk mendapatkan limit/ naik level*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nama* : ${pushname}\n┣⊱ *Nomer* : ${sender.split("@")[0]}\n┣⊱ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}
