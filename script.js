var pizzas = []

// select the div with list of all ingredients
let ingredientsDiv = document.getElementById('ingredients')

// select all ingredients
let checkboxes = ingredientsDiv.getElementsByTagName('INPUT')

// print list of pizzas not containing selected ingredients
var printMyPizzas = function() {
    // push all not wanted ingredients into an array
    let notWanted = []
    for (let i=0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            notWanted.push(checkboxes[i].name)
            checkboxes[i].checked = false
        }
    }
    console.log(notWanted)    

    // fetch pizzas
    let pizzasURL = 'pizzas.json'
    let request = new XMLHttpRequest()
    request.open('GET', pizzasURL)
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
        pizzas = request.response        
        // remove pizzas containing not wanted ingredients from the pizzas array
        for (let k = 0; k < pizzas.length; k++) {            
            for (let j = 0; j < notWanted.length; j++) {
                if (pizzas[k]["ingredients"].includes(notWanted[j])) {
                    pizzas[k]["wanted"] = false                    
                }
            }
        }
        // display all pizzas that don't contain not wanted ingredients
        let list = ''
        console.log(pizzas)
        pizzas.forEach( pizza => {
            if (pizza["wanted"]) {
            list += `<p><strong>${pizza["name"]}</strong>: ${pizza["ingredients"].join(', ')}</p>`
            }
        })
        console.log(list)
        document.getElementById('list').innerHTML = `<h1>My Pizzas</h1>${list}`
    }

}