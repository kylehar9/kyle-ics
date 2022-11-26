const methods = require('./lib/methods.js')

async function main() {
  const tagParams = {
    numberToReturn: 50, setId: 'all', tags: 'BoM: love', type: 'highlight,journal,reference'
  }

  let notes = await methods.getNotes(tagParams)

  console.log(notes)

}

main()