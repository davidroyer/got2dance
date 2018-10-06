const fs = require('fs')
let envContents = ''

for (let varName in process.env) {
  envContents += `${varName}=${process.env[varName]}\n`
  console.log(process.env[varName])
}
fs.writeFileSync('./.env', envContents)
