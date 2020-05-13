console.log("hi")

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content loaded')

   function fetchCities() {
    fetch('http://localhost:3000/cities')
    .then(response => response.json())
    .then(cities => console.log(cities))
   }
    
   fetchCities()

    const newCityForm = document.querySelector('#add-city')

    newCityForm.addEventListener('submit', event => {
        event.preventDefault()
        const formData = new FormData(newCityForm)
        const name = formData.get('name')
        const population = formData.get('population')
        const state = formData.get('state')
        fetch('http://localhost:3000/cities', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                city: {
                name: name,
                population: population,
                state: state
                }
            })
        })
    })
    


// function displayCities() {
//     cities.forEach(city => {
//         const h1 = document.createElement("h1")

//         h1.innerText = city.name

//         document.body.append(h1)
//     });
    
// }
})