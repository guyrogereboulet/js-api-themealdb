//Seleziono tutti gli id all'indeterno del DOM

const searchInput = document.getElementById('searchInput');
const randomMeal = document.getElementById('randomMeal');
const results = document.getElementById('results');


//Facciamo una funzione asincrona
const fetchSearch = async() => {
    meals = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)
        .then(res => res.json())
        .then(res => console.log(res))
}


fetchSearch();