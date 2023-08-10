const express = require('express')
const path = require('path');
const fs = require('fs');
const app = express()
const port = 80
const download = fs.readFileSync('./Devansh_kansagra.pdf')

const staticPath = path.join(__dirname,'/public')

app.use(express.static(staticPath));
app.use(express.urlencoded());

// Downloading the resume
app.get('/download', (req, res) => {
    res.download('./Devansh_kansagra.pdf');
})

// Sending the details of contact form to the server
app.post('/', (req, res) => {
    let name = req.body.fname;
    let email = req.body.email;
    let phNum = req.body.phNum;
    let message = req.body.message;

    output = `Name: ${name}\nEmail: ${email}\nPhone Number: ${phNum}\nMessage: ${message}`;
    fs.writeFileSync('output.txt', output);
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
})

// Listening to the port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})