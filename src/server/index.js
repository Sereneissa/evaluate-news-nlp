//DEFINITIONS
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors');


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


/*async function getData(){ 
    const response = await fetch(baseUrl);
    const data = await response.json();
    console.log(data);
    
  }
  
getData();*/



//GET 
app.get('/all', function (req, res) {
    res.sendFile('dist/index.html')
    res.send(userInput);
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


//function postData(req, res) {

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

console.log() 

const postData = async (url = "/addAPI", data = {}) => { 
    console.log(data);
      const options = {
      
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    //const response = await fetch(url,options);
    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    } catch (error) {
      console.log("error", error);
    }

    postData('/addAPI')
    .then(function(data){  
      gatherData('/all')

postData();

})
}



const dotenv = require('dotenv');
dotenv.config();


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
