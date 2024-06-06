const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348151810033";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_50_06_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDkzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA1NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MixcbiAgICAgICAgNzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDc1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk0LFxuICAgICAgICA1MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1NixcbiAgICAgICAgMTIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNixcbiAgICAgICAgMjI4LFxuICAgICAgICAzNyxcbiAgICAgICAgODYsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUxLFxuICAgICAgICA4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA5LFxuICAgICAgICA0NixcbiAgICAgICAgNjksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA4NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgODksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDkxLFxuICAgICAgICA1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQxLFxuICAgICAgICA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MixcbiAgICAgICAgNzQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjksXG4gICAgICAgIDg3LFxuICAgICAgICAxMixcbiAgICAgICAgMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODYsXG4gICAgICAgIDc2LFxuICAgICAgICA5NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDU5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkwLFxuICAgICAgICA1NSxcbiAgICAgICAgODEsXG4gICAgICAgIDg0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNixcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NyxcbiAgICAgICAgODYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgODEsXG4gICAgICAgIDU0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiN3JCTkZDTGU3OHVyOUZEeitvK0VmNkwrMzZQc1N3SnRkS2x0Q05IZlBJST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSGtKYjVpNnFSai00Rk5GMS1GWF9ud1wiLFxuICBcInBob25lSWRcIjogXCJjMGYyYTc5NC02MzVjLTQ5YjctODhlOS0xODljMGViZGE0NjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjksXG4gICAgICAyNDUsXG4gICAgICAyMjYsXG4gICAgICAyNDksXG4gICAgICA3NyxcbiAgICAgIDg2LFxuICAgICAgMjEsXG4gICAgICAyMjYsXG4gICAgICAxNzMsXG4gICAgICAxODcsXG4gICAgICAyMCxcbiAgICAgIDE1NyxcbiAgICAgIDEyNCxcbiAgICAgIDE4MyxcbiAgICAgIDEzOCxcbiAgICAgIDI3LFxuICAgICAgMjE2LFxuICAgICAgMjUwLFxuICAgICAgOTAsXG4gICAgICA5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTksXG4gICAgICAxMjUsXG4gICAgICAxNTAsXG4gICAgICA1OSxcbiAgICAgIDgyLFxuICAgICAgMjM3LFxuICAgICAgMjI3LFxuICAgICAgMTI2LFxuICAgICAgODQsXG4gICAgICAxNjIsXG4gICAgICA1NixcbiAgICAgIDEyOSxcbiAgICAgIDE0OCxcbiAgICAgIDIyNixcbiAgICAgIDE1NCxcbiAgICAgIDEwMSxcbiAgICAgIDI5LFxuICAgICAgMjAzLFxuICAgICAgNzEsXG4gICAgICAxMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRVRHV0tTN0NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNTE4MTAwMzM6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNci4gTWljaGFlbCBvZiBUaGUgU21pbGVTIExlZ2FjeVwiLFxuICAgIFwibGlkXCI6IFwiMjIzMjM1MzcxMTg0MjQyOjE4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B6U2w3b0JFT0NQaExNR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQjl6bVhOWlJHUFhHc0NZU2ZOYzN5ekdQWjRXZEJJakcxTy9zL0dCbnBsVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiQnc2ZTY3V3BXK0NnTTlMelBmbDlNOVQ5ZnNxUmhoLzRRSHBZUFNjWTRpY2Y1S25mdjY0QVovK1hxUWRIYm16eDRGSy9zY0hvdnJZY0dsNm45aStEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJnaFVlNFd2MFJwSXZNczVBS0hjSUYxSXVOTWZ5MnI4N05tK0ZJTy8rQm83SHZYZ2xFL05IUmlreGQ3WThlcXRaTUNDbkxYV0xEYU96UUxSNVRXRG9nUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTUxODEwMDMzOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc2MzUwNDRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
