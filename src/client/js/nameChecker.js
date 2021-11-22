function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Serene",
        "Nadeen",
        "Vaibhav",
        "Salahedeen",
        "Rana",
        "Sami"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}

export { checkForName }
