const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'VAJIRA-MD=XENmQbqR#Yr2E8IKZU52A_6rWaOSooHUuKaUR6lM2CnXYW8CfJUg' : process.env.SESSION_ID,
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'true' : process.env.ONLY_ME,
OWNER_NAME: process.env.OWNER_NAME === undefined ? `kasun` : process.env.OWNER_NAME,    
ADDRESSES: process.env.ADDRESSES === undefined ? '' : process.env.ADDRESSES,
AUTO_VOICE: process.env.AUTO_VOICE === undefined ? 'false' : process.env.AUTO_VOICE,    
ALIVE: process.env.ALIVE === undefined ? `Hello im alive now !!` : process.env.ALIVE,
OWNER: process.env.OWNER === undefined ? `94775228949` : process.env.OWNER,
PREFIX: process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
FOOTER: process.env.FOOTER=== undefined ? '‌ᴍʀᴋᴀꜱᴜɴ': process.env.FOOTER,
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
AUTO_STATUS_READ: process.env.AUTO_STATUS_READ === undefined ? false : process.env.AUTO_STATUS_READ,
WAPRESENCE:process.env.WAPRESENCE === undefined ? false : process.env.WAPRESENCE // 'composing' (typing) | 'recording' (recording) | 'paused'
};
