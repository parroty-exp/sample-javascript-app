const express = require('express')
const app = express()
const port = 3000

app.get('/', (_req, res) => {
    res.send('Hello World!')
})

app.get('/file/:fileId', (req, res) => {
    var fileId = req.params.fileId;
    res.sendFile("/workspace/sample-javascript-app/" + fileId);
})

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://0.0.0.0:${port}`)
})
