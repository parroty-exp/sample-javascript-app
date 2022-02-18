const express = require('express')
const RateLimit = require('express-rate-limit');
const app = express()
const port = 3000

function f() {
    x = 23;
    let x;
}

console.log(f());

// apply rate limiter to all requests
var limiter = new RateLimit({
    windowMs: 1*60*1000, // 1 minute
    max: 5
});
app.use(limiter);

app.get('/', (_req, res) => {
    res.send('Hello World!')
})

app.get('/file/:fileId', (req, res) => {
    var fileId = req.params.fileId;
    res.sendFile("/workspace/sample-javascript-app/" + fileId);
})

app.get('/json-file', (req, res) => {
    var fileId = JSON.parse(req.params.fieldId);
    res.sendFile("/workspace/sample-javascript-app/" + fileId);
})

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://0.0.0.0:${port}`)
})
