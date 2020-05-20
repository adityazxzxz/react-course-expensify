const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname,'..','public');
const port = process.env || 3000;
console.log(path.join(publicPath,'index.html'))

app.use(express.static(publicPath));

app.get('*',(req,res) => {
    res.sendFile(path.join(publicPath,'index.html'));
});

app.listen(port, () => {
    console.log('server up port',port);
})