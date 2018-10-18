import path from 'path'
import FS from 'fs-extra'

export default async function GlobalComponents (moduleOptions) {
  // You can do async works here using `async`/`await`
  let pages = await FS.readJson('./pages.json')
  let pluginPath = path.resolve(__dirname, 'plugin.js')
  this.addPlugin(path.resolve(__dirname, 'plugin.js'))
}
