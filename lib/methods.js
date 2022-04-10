const axios = require('axios').default

async function getNotes() {
    try {
        const response = await axios.get('https://www.churchofjesuschrist.org/notes/api/v3/annotations');
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


