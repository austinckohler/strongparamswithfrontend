console.log("hi")

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content loaded')

   function fetchCities() {
       
   } fetch('http://localhost:3000/cities')
    .then(response => response.json())
    .then(cities => console.log(cities))

    fetchCities()
})