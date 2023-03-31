const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => { 
  res.send('Hello World!')
})
app.post('/', (req,res) => {
    let name = req.body.name;
    console.log("received name :",name);
    res.send(name);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})