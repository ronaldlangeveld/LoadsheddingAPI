const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(express.json());
app.options('*', cors()) 

app.get('/eskomStatus', cors(), (request, response) => {

    axios.get('http://loadshedding.eskom.co.za/LoadShedding/GetStatus').then(res => {
        const status = res.data
        response.json({stage: status})
    })

 
    // http://loadshedding.eskom.co.za/LoadShedding/GetStatus

  });


  app.listen(3500, () => console.log("on port 3500"))