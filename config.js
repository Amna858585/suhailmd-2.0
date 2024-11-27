const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347062362592";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_50_11_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA3LFxuICAgICAgICA2NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI4LFxuICAgICAgICA3MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDYsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxODMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI4LFxuICAgICAgICAxOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyLFxuICAgICAgICA1NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDUsXG4gICAgICAgIDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjksXG4gICAgICAgIDcwLFxuICAgICAgICA0MixcbiAgICAgICAgODYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTY2LFxuICAgICAgICA3OCxcbiAgICAgICAgOTksXG4gICAgICAgIDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNixcbiAgICAgICAgMTksXG4gICAgICAgIDEzLFxuICAgICAgICAxOTksXG4gICAgICAgIDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDUwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDkxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMsXG4gICAgICAgIDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICA5NixcbiAgICAgICAgNzQsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc0LFxuICAgICAgICA3NCxcbiAgICAgICAgODMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyNixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc2LFxuICAgICAgICA3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQyLFxuICAgICAgICAzNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgsXG4gICAgICAgIDk2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDUxLFxuICAgICAgICA0MixcbiAgICAgICAgMjQyLFxuICAgICAgICA0MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjksXG4gICAgICAgIDExNixcbiAgICAgICAgOTksXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYUzNSM0xpVzJoMVVZcUFkMWk0UytOQXdSSXBmWWFDcFZZamFYNU4wQ3NJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwcjlSc28yR1FLV3pGRDkzcDJDM0xBXCIsXG4gIFwicGhvbmVJZFwiOiBcImE4MjFiZTRlLTAxNzYtNDM3Yi1iY2U2LWQwZWRlMjhjMzdmZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTgsXG4gICAgICAyNTIsXG4gICAgICAxMzEsXG4gICAgICA3MyxcbiAgICAgIDkyLFxuICAgICAgNzQsXG4gICAgICAxMjUsXG4gICAgICA4NyxcbiAgICAgIDIwOCxcbiAgICAgIDUzLFxuICAgICAgOTQsXG4gICAgICAyMDksXG4gICAgICAxODAsXG4gICAgICAyNTIsXG4gICAgICAxODIsXG4gICAgICA2LFxuICAgICAgMTI5LFxuICAgICAgMTA2LFxuICAgICAgNzgsXG4gICAgICAxMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA0LFxuICAgICAgNixcbiAgICAgIDEwMSxcbiAgICAgIDE3MixcbiAgICAgIDI0MCxcbiAgICAgIDEwOSxcbiAgICAgIDE5MCxcbiAgICAgIDE0NCxcbiAgICAgIDIyOCxcbiAgICAgIDEyOCxcbiAgICAgIDE1MixcbiAgICAgIDE2MyxcbiAgICAgIDIxNixcbiAgICAgIDEwOCxcbiAgICAgIDIxMSxcbiAgICAgIDIwMyxcbiAgICAgIDIwMyxcbiAgICAgIDEzNSxcbiAgICAgIDIxNCxcbiAgICAgIDI0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUUzVMWllCQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2MjM2MjU5Mjo2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkhOIENPTExFQ1RJT04gQU5EIEFDQURFTVlcIixcbiAgICBcImxpZFwiOiBcIjE2MzUxODExMjM1MDQwMzo2OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQN0ZpYkVCRU1yL25Mb0dHQWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhUUWNBRHlpS1JINURheWNKd0NQeG4xV0xTMmN3M3JiT215RTJkZGEyemM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic2hhcEdGK0ZvOU9rSTlWUEd4Tm1WVjZtdDc0akwxb1p6dWdDZmkwMGdiMVRoTEUxZVZpNXlobCs4bE1xR3hYN1JqVGQrbW1nVU5maE9reGt3RVRJREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVFNMTkw5TWp2YzBxdG9lYnZHbDV0Qzd2YW1wa21tNVVwaGpFQjUwNnBXWlRzR0RnaGlCY2tYbXFlNjgwMWd2OURGMmZqa0hxOWdiejYyMDk0cVM1Q1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2MjM2MjU5Mjo2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI3MjI2MzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDUDlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNQOS5qc29uIjogIntcImtleURhdGFcIjpcIkRFTUxnUW9SakJWaDVMRzF0aFZSVXRQM1dYRHRaNVlvSXB2a3BERCtQN3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzcxMzUyMzE3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMwNzE4OTM1NjA5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
