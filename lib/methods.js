const axios = require('axios').default

const instance = axios.create({
  baseURL: 'https://www.churchofjesuschrist.org',
  timeout: 5000,
  headers: {'cookie': 'oauth_id_token=eyJraWQiOiJhbFo5Sjlua21Ka0NSVkhrSEppWEkyU18xRFA1eGhKME9UVFUtaGQyWUs4IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwMHUxeDBtZjJ3OEdIQ1RhcDM1NyIsInZlciI6MSwiaXNzIjoiaHR0cHM6Ly9pZC5jaHVyY2hvZmplc3VzY2hyaXN0Lm9yZy9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6IjBvYTc2NXpkZGxSN3h6eGZ1MzU3IiwiaWF0IjoxNjY5NDQwNjE5LCJleHAiOjE2Njk0NDQyMTksImp0aSI6IklELkNPZkpxUW5ZMENtTDlEamxTcGM1TkpLb0lpbTZwdEN0M1llZGJydDZ2NzgiLCJhbXIiOlsicHdkIl0sImlkcCI6IjAwb3ptd2NpaWZ3T3VFbjBCMzU2IiwiYXV0aF90aW1lIjoxNjY5NDQwNjE4LCJhdF9oYXNoIjoiRlh3VWN0NDJKT19yZ2o0QmtyTml0ZyIsImZpcnN0TmFtZSI6Ikt5bGUiLCJsYXN0TmFtZSI6IkhhcmxpbmUiLCJjaHVyY2hBY2NvdW50SUQiOiIzNTMxNjEwNDQyMzQxNDI3IiwiZGlzcGxheU5hbWUiOiJLeWxlIEQuIEhhcmxpbmUiLCJwZXJzb25hbEVtYWlsIjoia3lsZWhhcjlAZ21haWwuY29tIn0.mOxAE7R2BIcjIUnXRGyqw57jYXxvLkqHZZRv-npNpHWlzDYb8QcFn8ED-tKzygsM5qYwJk-pM7uvDY0zXsRtJtGOFYbdl0vza3q5UEXGHG207cPvyd2Tz6H_8RThvDwCvGGzce1RMk9Xh__6b4RSLxfq9fgy6IY8vAiUPjzBut6tzDlQIZO8na0PpgiYKkRwX3FLMps5QsJ4X7RFk56aJLkLTSf_AizY6PE2_oY-ladhz0mn6BDeQvtNH9FMHxFwfQp0RfO6-s9TCJ3Cedj2mkq6W5gk_aQBp-R6FVqNK5pa_AFnmplGV2MLcxLvd87jIJ6DsDV4JioiUgs8oHXDYQ'}
});

const getNotes = async (pathParams) => {
  let url = '/notes/api/v3/annotations'
  if (pathParams) {
    url += '?'
    const numberToReturn = pathParams.numberToReturn
    const setId = pathParams.setId
    const tags = pathParams.tags
    const type = pathParams.type

    if (numberToReturn) url += `numberToReturn=${numberToReturn}`
    if (setId) url += `&setId=${setId}`
    if (tags) url += `&tags=${tags}`
    if (type) url += `&type=${type}`
  }
  try {
    const response = await instance.get(url)
    return response
  } catch (error) {
    console.error(error);
  }
}

const moveNotes = async (noteSet, setId) => {
  if (!noteSet || !setId) {
    throw new Error('please provide a noteSet and setId')
  }

  for (note of noteSet) {
    await new Promise(resolve => {
      setTimeout(() => {
        moveNoteToSet(note, setId)
        resolve()
      }, 2000)
    })
  }
}

const moveNoteToSet = async (note, setId) => {
  if (!note || !setId) {
    throw new Error('please specify annotationId and setId to move it to.')
  }
  const annotationId = note.annotationId
  if (note.setId === setId) {
    console.log('already done')
    return 0
  }
  let url = `/notes/api/v3/annotations/${annotationId}/set`
  try {
    const response = await instance.patch(url, {
      annotationId: annotationId, setId: setId
    })
    console.log(`annotation moved: 
        uri: ${note.uri} 
        annotationId: ${note.annotationId}`)
    return response
  } catch (error) {
    console.error(error);
  }
}

const helloWorld = () => {
  console.log('helloWorld')
}

module.exports = {
  getNotes, helloWorld, moveNotes
}


