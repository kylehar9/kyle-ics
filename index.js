const methods = require('./lib/methods.js')

async function main() {
  const tagParams = {
    numberToReturn: 50, setId: 'all', tags: 'BoM: love', type: 'highlight,journal,reference'
  }
  const response = await methods.getNotes(tagParams)
  const notes = response.data

  console.log(notes)

}

main()