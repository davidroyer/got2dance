const fs = require('fs')
let envContents = ''
// fs.writeFileSync('./.env-test', `GOOGLE_API_KEY=${process.env.GOOGLE_API_KEY}\n`)

for (let varName in process.env) {
  envContents += `${varName}=${process.env[varName]}\n`
  console.log(process.env[varName])
}
fs.writeFileSync('./.env', envContents)
