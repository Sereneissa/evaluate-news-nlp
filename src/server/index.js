//DEFINITIONS
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors');
const axios = require('axios').default;


const app = express()

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'))
app.use(express.static('dist'))

console.log(__dirname)


//API KEY 
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1";
let userInput = [] 
console.log(process.env);
//console.log(`Your API key is ${process.env.REACT_APP_API_KEY}`);
const myApiKey = process.env.REACT_APP_API_KEY;

//GET 
app.get('/all', function (req, res) {
    res.sendFile('dist/index.html')
    res.send(userInput);
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


//POST 
app.post("/addAPI", async function(req,res) {
    userInput = req.body.url;
    console.log(`Your Entry: ${userInput}`);
    const apiURL = `${baseUrl}key=${myApiKey}&url=${userInput}&lang=en`;
    
    const response = await fetch(apiURL)
    const data = await response.json
    console.log(data);

    /*try {
        request.json()
        res.send(json);
      } catch (error) {
        console.log("error", error);
      }*/

});

const dotenv = require('dotenv');
dotenv.config();


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
