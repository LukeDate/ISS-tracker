const express = require('express')
const app = express()
const port = 9000
const http = require('http')
const axios = require('axios')
const cors = require('cors');
const path = require('path')
const { spawn } = require('child_process')


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
})

app.use(cors());
// 

app.get('/data', (req,res) => {
    const fetchData = axios.get('http://api.open-notify.org/iss-now.json')
        .then(response => {
            const lat = response.data.iss_position.latitude;
            const lon = response.data.iss_position.longitude;
            const process = spawn('python',[ 
                "-u", 
                path.join(__dirname, 
                'issgraph.py'              
                ), parseInt(lon), parseInt(lat)]);
                    // parseInt(lat), parseInt(lon)
            // process.stdout.on('data', data => console.log('FOO', data));
            process.stdout.on('data', data => data.toString());
           
            res.send(response)
        })
        .catch(err => console.log('Error', err))

        // res.send(fetchData);
        // fetchData;
    // setTimeout(fetchData, 1000);
}
);



// server.listen(port, () => {
//     // app.get('http://api.open-notify.org/iss-now.json', res => console.log('THIS ONE WORKS', res));
//     console.log(`Server running at localhost://${port}`);
// })




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
