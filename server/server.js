const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));



console.log(publicPath);

app.get('/', function(req, res) {
    res.send('HELLO')
});








app.listen(port, () => {
    console.log(`Express Running -> PORT ${port}`);
})


