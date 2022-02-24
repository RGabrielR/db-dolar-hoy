const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
const axios = require('axios');
const cors = require('cors');
app.use(cors({
  origin: '*'
}))

app.get("/:endpoint([\\/\\w\\.-]*)", (req, res, next) => {
    let endpoint = 'https://api-dolar-argentina.herokuapp.com/api/' + req.params.endpoint;
    axios.get(endpoint).then(response => {
    res.json(response.data)}).catch(error =>{
      res.json(error)
      }) 
});

  

app.listen(port);