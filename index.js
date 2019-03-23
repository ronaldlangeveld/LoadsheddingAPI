const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(express.json());
app.options('*', cors()) 

    // Gets DATA from http://loadshedding.eskom.co.za/LoadShedding/GetStatus
    // This number is 1 digit ahead of actual status, so subtract 1 to get actual status.

app.get('/eskomStatus', cors(), (request, response) => {

    axios.get('http://loadshedding.eskom.co.za/LoadShedding/GetStatus').then(res => {
        const stval = res.data;
        const val = parseInt(stval)
        var status = val - 1;
        response.json({stage: status})
    })



  });


  app.listen(3500, () => console.log("on port 3500"))