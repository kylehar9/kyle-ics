const axios = require('axios').default

const instance = axios.create({
  baseURL: 'https://www.churchofjesuschrist.org',
  timeout: 5000,
  headers: {'cookie': 'oauth_id_token=eyJraWQiOiJhbFo5Sjlua21Ka0NSVkhrSEppWEkyU18xRFA1eGhKME9UVFUtaGQyWUs4IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwMHUxeDBtZjJ3OEdIQ1RhcDM1NyIsInZlciI6MSwiaXNzIjoiaHR0cHM6Ly9pZC5jaHVyY2hvZmplc3VzY2hyaXN0Lm9yZy9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6IjBvYTczazRnbTFianZsWVRpMzU3IiwiaWF0IjoxNjY5NDMzMDgxLCJleHAiOjE2Njk0MzY2ODEsImp0aSI6IklELnZjWFFVcnZ5cDZrQkgwV3pZNmtjZlVaQjBnU0tSYndPdjJWUkY2d2pYNE0iLCJhbXIiOlsicHdkIl0sImlkcCI6IjAwb3ptd2NpaWZ3T3VFbjBCMzU2IiwiYXV0aF90aW1lIjoxNjY5NDIxMTcxLCJhdF9oYXNoIjoiRnpJbTF3R0dXNy1WVkdqU21BQnZuQSIsImZpcnN0TmFtZSI6Ikt5bGUiLCJsYXN0TmFtZSI6IkhhcmxpbmUiLCJjaHVyY2hBY2NvdW50SUQiOiIzNTMxNjEwNDQyMzQxNDI3IiwiZGlzcGxheU5hbWUiOiJLeWxlIEQuIEhhcmxpbmUiLCJwZXJzb25hbEVtYWlsIjoia3lsZWhhcjlAZ21haWwuY29tIn0.R5CkJYL0VEKmONsN8oOzUibU5Zdo7BPYv0Qf20n_nwKJRilgYmcmtcEeGi1FRATmHKu0cSIQzAumj-XJWsOGTdEYTnF6kZRRSM-REq-8LeByA0w16NHz2qZj8eZV7_U_vZOWgMkRjWurpAKOhEYLVwPLA6RQsH0pA6CDH3EkestinFGUWVuAnO-2uYspDiVVFNod65L0oVfMCT36d05HWtZPXoRe5RMDqayLcVjWpk9EYnmlLvbacDNRQvWM0GQcDqSQxSs8ezIhCmL3rFwFgvBg5noPIHllhp4uEBAwRJbrgObY9IHRhy0HKVbj0ysG3zhwzlsrngcAvCQ4IvhcOQ'}
});

async function getNotes(pathParams) {
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

async function moveNotes(noteSet, setId) {
  if (!noteSet || !setId) {
    throw new Error('please provide a noteSet and setId')
  }

  noteSet.forEach(note => {
    new Promise(resolve => {
      setTimeout(() => {
        // moveNoteToSet(note, setId)
        resolve(note)
      }, 1000)
    }).then((res) => console.log(`Annotation ${res.annotationId} moved to set ${res.setId}. 
    uri: ${res.uri} 
    color: ${res.highlights[0].color} 
    tag: ${res.tags[0].name}`))
  })
}

async function moveNoteToSet(note, setId) {
  if (!note || !setId) {
    throw new Error('please specify annotationId and setId to move it to.')
  }
  const annotationId = note.annotationId
  let url = `/notes/api/v3/${annotationId}/set`
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

function helloWorld() {
  console.log('hello world')
}

module.exports = {
  getNotes, helloWorld, moveNotes
}


