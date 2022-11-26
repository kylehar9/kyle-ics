const axios = require('axios').default

const instance = axios.create({
  baseURL: 'https://www.churchofjesuschrist.org',
  timeout: 5000,
  headers: {'cookie': 'oauth_id_token=eyJraWQiOiJhbFo5Sjlua21Ka0NSVkhrSEppWEkyU18xRFA1eGhKME9UVFUtaGQyWUs4IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwMHUxeDBtZjJ3OEdIQ1RhcDM1NyIsInZlciI6MSwiaXNzIjoiaHR0cHM6Ly9pZC5jaHVyY2hvZmplc3VzY2hyaXN0Lm9yZy9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6IjBvYTc2NXpkZGxSN3h6eGZ1MzU3IiwiaWF0IjoxNjY5NDM2ODczLCJleHAiOjE2Njk0NDA0NzMsImp0aSI6IklELkQ2MFBKeTk3RUduQUE5NG1MVFlYZWxUR2F2T1I4Tzl2eGJWZVBHcEg2WDAiLCJhbXIiOlsicHdkIl0sImlkcCI6IjAwb3ptd2NpaWZ3T3VFbjBCMzU2IiwiYXV0aF90aW1lIjoxNjY5NDM2ODcyLCJhdF9oYXNoIjoiSXlxNXdaODBWeWhMSW5JY1pkREtHQSIsImZpcnN0TmFtZSI6Ikt5bGUiLCJsYXN0TmFtZSI6IkhhcmxpbmUiLCJjaHVyY2hBY2NvdW50SUQiOiIzNTMxNjEwNDQyMzQxNDI3IiwiZGlzcGxheU5hbWUiOiJLeWxlIEQuIEhhcmxpbmUiLCJwZXJzb25hbEVtYWlsIjoia3lsZWhhcjlAZ21haWwuY29tIn0.JdH2Np4BSPwX5IVw1_405o4LGpmPzZWpxz6IrtsRalgY3w1oNmgwFrc8k7Ojq8mV7btbjjvdLlYYu3RcwYMHZsvkGU9cLAvKZlqb1YYIi50saBjVxxXjAHVKk6T9xKvtTlZHGjZJ1m3mqfAfFnsVI4bdXkFhBdwkqgiKtlz5N8-ZNLUsptq0hlOKw4LE4j6h7MRLtCtkUYyCuzLQrQ8cN1SoLA0i_0DRzwiy3GoJBDd8TRkY1KIJvdMX2tOejMY2B39YmzEXzyrdbrXVeyTwsfPesdekId9WOgieB6sQzTZ1Rq8vj74B65k9qwm88IMzcSWtKzPQGjsmkryUXYffRw'}
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
    await helloWorld()
  }
}

const moveNoteToSet = async (note, setId) => {
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

const helloWorld = async () => {
  const helloWorld = 'hello world'
  await new Promise(resolve => {
    setTimeout(() => {
      console.log(helloWorld)
      resolve()
    }, 1000)
  })
}

module.exports = {
  getNotes, helloWorld, moveNotes
}


