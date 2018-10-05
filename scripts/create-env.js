const fs = require('fs')
fs.writeFileSync('./.env', `API_KEY=${process.env.GOOGLE_API_KEY}\n`)
