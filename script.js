//Seleziono tutti gli id all'indeterno del DOM

const searchInput = document.getElementById('searchInput');
const randomMeal = document.getElementById('randomMeal');
const results = document.getElementById('results');
let search = '';


//Facciamo una funzione asincrona con il metodo fetch per ottenere il JSON
const fetchSearch = async() => {
    meals = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=tomato`)
        .then(res => res.json())
        .then(res => res.meals)
        // .then(res => console.log(res))

        console.log(meals);
}

//Mostriamo i risultati della ricerca a video

const serchDisplay = async() => {
    await fetchSearch();
};

searchInput.addEventListener('input', (e) => {
    console.log(e.target.value);
    search = e.target.value;
})




fetchSearch();