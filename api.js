const express = require('express')
const app = express()
const port = 3000
let data = require('./data.json');

app.get('/', (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(data));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))