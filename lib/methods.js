const axios = require('axios').default

async function getNotes() {
    try {
        const response = await axios.get('/user?ID=12345');
        return response
    } catch (error) {
        console.error(error);
    }
}


