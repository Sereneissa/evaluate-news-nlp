
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    if(Client.checkForName(formText)) {
        console.log("::: Form Submitted :::")
        postData('http://localhost:8081/addAPI', {url: formText} )
        
        .then(function(res) {
            document.getElementById('results').innerHTML = `Results ${res.message}`;
            document.getElementById("model").innerHTML = `Model ${res.model}`;
            document.getElementById("agreement").innerHTML = `Agreement ${res.agreement}`;
            document.getElementById("confidence").innerHTML = `Confidence ${res.confidence}`;
            document.getElementById("irony").innerHTML = `Irony ${res.irony}`;


        })
    } else {
        error('There is an error with the submission');
    }
    
    }
   
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
        const response = await fetch(url,options);
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
  })
    }




export { handleSubmit }

