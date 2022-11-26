const axios = require('axios').default

const instance = axios.create({
    baseURL: 'https://www.churchofjesuschrist.org',
    timeout: 1000,
    headers: { 'cookie': 'oauth_id_token=eyJraWQiOiJhbFo5Sjlua21Ka0NSVkhrSEppWEkyU18xRFA1eGhKME9UVFUtaGQyWUs4IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwMHUxeDBtZjJ3OEdIQ1RhcDM1NyIsInZlciI6MSwiaXNzIjoiaHR0cHM6Ly9pZC5jaHVyY2hvZmplc3VzY2hyaXN0Lm9yZy9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6IjBvYTc2NXpkZGxSN3h6eGZ1MzU3IiwiaWF0IjoxNjY5NDI2MTgyLCJleHAiOjE2Njk0Mjk3ODIsImp0aSI6IklELkl1TGNWSmk5QjVCcEtvS0oyblZqbWFjSXFKclJSS1VpMVlQOE0ycURxMjQiLCJhbXIiOlsicHdkIl0sImlkcCI6IjAwb3ptd2NpaWZ3T3VFbjBCMzU2IiwiYXV0aF90aW1lIjoxNjY5NDIxMTcxLCJhdF9oYXNoIjoiSFk3R2tZeUJUMW91bWZwbFdxYmFGdyIsImZpcnN0TmFtZSI6Ikt5bGUiLCJsYXN0TmFtZSI6IkhhcmxpbmUiLCJjaHVyY2hBY2NvdW50SUQiOiIzNTMxNjEwNDQyMzQxNDI3IiwiZGlzcGxheU5hbWUiOiJLeWxlIEQuIEhhcmxpbmUiLCJwZXJzb25hbEVtYWlsIjoia3lsZWhhcjlAZ21haWwuY29tIn0.LIiByXQhQ9e1DdrrX617oc7vkNqA7fLZA00eAOTLepYqkNPW1sdwCh7tnUgyW_9fHGQjfDV6xAtBRFTA5DcaCwNWaXFTBydfqZSkzB3gkAqTI6on2gQd1WmGTo0C7ggn1xbZvSubnfClR5Ke7LBXvVBj9_fqzIXMz7z7rApucxZF-P9o6dpo1Mgo05F0a04A-NcMaIzklC1qDsgTt_ZJSf0Z6pP2r-p_qtjQpbX8AOGrApZ25BWWOtCGdzimI18WwIy00Y4Aw_6tHztp2PkwPtKLMOEiQwD40nCMOZyLVwbnKZAljtbbVEqX_Bk57YOkSkdWOI-xh-VrfNOS9S20Pg' }
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

function helloWorld() {
    console.log('hello world')
}

module.exports = {
    getNotes,
    helloWorld
}


