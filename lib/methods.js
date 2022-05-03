const axios = require('axios').default

const OAUTH_TOKEN = 'eyJraWQiOiJjMGZzT1BGWjlKNzY1OXpUcC14b0ZoOGU5OUpVUXFuMzh0SDRwRW9sNkxjIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwMHUxeDBtZjJ3OEdIQ1RhcDM1NyIsInZlciI6MSwiaXNzIjoiaHR0cHM6Ly9pZC5jaHVyY2hvZmplc3VzY2hyaXN0Lm9yZy9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6IjBvYTc2NXpkZGxSN3h6eGZ1MzU3IiwiaWF0IjoxNjUxNjEyNTc4LCJleHAiOjE2NTE2MTYxNzgsImp0aSI6IklELnRmTlBJV2tMLWpFZ1BjT3p2TWVrVk5SR2ZNSHpHeDg1QUduTTZtTzNQZkkiLCJhbXIiOlsicHdkIl0sImlkcCI6IjAwb3ptd2NpaWZ3T3VFbjBCMzU2IiwiYXV0aF90aW1lIjoxNjUxNjEyNTc3LCJhdF9oYXNoIjoiRGJBblVRNkRYajF2V0kyTmVrekMwZyIsImZpcnN0TmFtZSI6Ikt5bGUiLCJsYXN0TmFtZSI6IkhhcmxpbmUiLCJjaHVyY2hBY2NvdW50SUQiOiIzNTMxNjEwNDQyMzQxNDI3IiwiZGlzcGxheU5hbWUiOiJLeWxlIEQuIEhhcmxpbmUiLCJwZXJzb25hbEVtYWlsIjoia3lsZWhhcjlAZ21haWwuY29tIn0.flzCQCG7w6VX1wVinINi6D9NF28ey0GAuFwM6EEOfbIe3WrRpZkeGgzp2b-xgZd_VqCfHVFPCMVLyAFQE9vfSh6lPARA3MSkWUPVcpuKYNyBOT9e7Zu921y79QBnt4cAYzxmmd6ambx2tioc5D0X7wS5uhqFnMdXY2j5djwhV4lEPa0062hP-k947ea3DDNBsZvBaT4n8debSWnHEmKAlVr_HXF-uX6t3X1iciwCe6Ry8z3fBrgOfSX0hr6iscF_RzdJFUxd7xPNUOLWiCtCtss85uBcmRaHO9VE8nl1jdVrc9Cvk7p3wIB-hbanvtEgeZnGZ7wmVs09O3wEEMgjEQ'

const instance = axios.create({
    baseURL: 'https://www.churchofjesuschrist.org',
    timeout: 5000,
    headers: {
      'Accept': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br',
      'cookie': `oauth_id_token=${OAUTH_TOKEN}` }
});

function getNotes() {
    instance.get('/notes/api/v3/annotations').then((response) => {
      console.log(response)
    }).catch((error) => {console.log(error)})

}

// Idk about the authentication for this request. Need an authorized session.
// Try: get this all to work with the data pasted in here, in a data file. data.json

function helloWorld() {
    console.log('hello world')
}

module.exports = {
    getNotes,
    helloWorld
}


