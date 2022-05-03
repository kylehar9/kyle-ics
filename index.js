const methods = require('./lib/methods.js')

async function doThings() {
  let notes = await methods.getNotes()
  console.log(notes)
}
// methods.helloWorld()

doThings()
