//Seleziono tutti gli id all'indeterno del DOM

const searchInput = document.getElementById('searchInput');
const randomMeal = document.getElementById('randomMeal');
const results = document.getElementById('results');
let search = '';


//Facciamo una funzione asincrona con il metodo fetch per ottenere il JSON
const fetchSearch = async() => {
    meals = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(res => res.meals)
        // .then(res => console.log(res))

        console.log(meals);
}

//Mostriamo i risultati della ricerca a video
const searchDisplay = async() => {
    await fetchSearch();

    if (meals == null) {
        results.innerHTML = '<span class="noResult">Nessun risultato </span>'
    }

    results.innerHTML = (


        meals.map(meal => (
                `
                    <div class="searchContainer">
                        <h2>${meal.strMeal}</h2>
                        <div class="infos">
                        <div>origin : ${meal.strArea}</div>
                        <div>category : ${meal.strCategory}</div>
                        </div>
                        <img src='${meal.strMealThumb}' /></br>
                        <a href="${meal.strYoutube}" target="_blank"><i class="fab fa-youtube"></i></a>
                    </div>
            `
          //Quando finiamo un map mettere un join altrimenti avremo dell stringhe con delle virgole
        )).join('')
    );
};

//Prendiamo il valore dell'input 
searchInput.addEventListener('input', (e) => {
    // console.log(e.target.value);
    search = e.target.value;
    searchDisplay();
})




fetchSearch();