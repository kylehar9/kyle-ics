const methods = require('./lib/methods.js')

async function main() {
  const tagParams = {
    numberToReturn: 5, setId: 'all', tags: 'BoM: love', type: 'highlight,journal,reference'
  }
  const setId = '082d144f-e990-46c5-a59a-95b8877f129d'
  const response = await methods.getNotes(tagParams)
  const notes = response.data

  await methods.moveNotes(notes, setId)

}

main()