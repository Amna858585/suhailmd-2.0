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
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_50_12_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxODMsXG4gICAgICAgIDMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAzLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI2LFxuICAgICAgICAzMixcbiAgICAgICAgMjEwLFxuICAgICAgICA3NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzksXG4gICAgICAgIDk5LFxuICAgICAgICA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE1LFxuICAgICAgICA1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkwLFxuICAgICAgICAxODksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICAzMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDk1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDksXG4gICAgICAgIDk3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk2LFxuICAgICAgICA0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDY3LFxuICAgICAgICA1MixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDMsXG4gICAgICAgIDc2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNyxcbiAgICAgICAgODgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NixcbiAgICAgICAgMjgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTcwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhV0pocmtRSGFUT2c3dzZLTFhKRFNTalljcHFSSGdFZDhrM1ZCRUM2WmpNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJsYjNud292Q1JHYVNhaHlYZl9ldkZBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjViYTE1ZTNjLTkzMTktNDdmZi1iZTQ5LTM0NDg4Y2E5YTEzNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzAsXG4gICAgICA1LFxuICAgICAgODUsXG4gICAgICAxMDgsXG4gICAgICAxNTUsXG4gICAgICA4MixcbiAgICAgIDczLFxuICAgICAgMTYyLFxuICAgICAgMTc5LFxuICAgICAgMTE2LFxuICAgICAgMTkwLFxuICAgICAgMjA5LFxuICAgICAgMTYyLFxuICAgICAgMTc5LFxuICAgICAgMjQwLFxuICAgICAgOTksXG4gICAgICA0NCxcbiAgICAgIDExMSxcbiAgICAgIDE2MCxcbiAgICAgIDI0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDQsXG4gICAgICAyMDAsXG4gICAgICAyMjIsXG4gICAgICAyMDgsXG4gICAgICAxMzUsXG4gICAgICA5OSxcbiAgICAgIDE0OCxcbiAgICAgIDM0LFxuICAgICAgMTI3LFxuICAgICAgNTAsXG4gICAgICAxMzQsXG4gICAgICAyMixcbiAgICAgIDEzOSxcbiAgICAgIDQ0LFxuICAgICAgMTA1LFxuICAgICAgNTEsXG4gICAgICAyNDcsXG4gICAgICAxOTMsXG4gICAgICA3OCxcbiAgICAgIDE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkE1TUxaM0FXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDYyMzYyNTkyOjY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSE4gQ09MTEVDVElPTiBBTkQgQUNBREVNWVwiLFxuICAgIFwibGlkXCI6IFwiMTYzNTE4MTEyMzUwNDAzOjY5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l2QzRiWUhFSjZrbHJzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia2dFeVVoQXAxcWp4bERIa2RTUXlYN0pBWWpYMmJvNjZXWjgzbC9ldjlEZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJJWDlOTmwzQ1doM1kvTDYwRU1TTDV6MXE4enBtSUdXMzBwRUppQkhoUWVWdjRmdk1TTXBsMHQ2Uys0dW5PMW9hMFJIN0JBUGU3cDJBNHFTdDV5QXZDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4MkRRQWtXamxINVJjVGtSYVVENzdPRXl0STZjdVJLV2pHYkZEbFhVN2xFZDVtVkNMWldTN0laTEVjR1RGY0kzMHByc0dlMGhDTG5qTXkrSXAxOVhCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDYyMzYyNTkyOjY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ3MDk3OTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQL1NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVAvUy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
