//Seleziono tutti gli id all'indeterno del DOM

const searchInput = document.getElementById('searchInput');
const randomMeal = document.getElementById('randomMeal');
const results = document.getElementById('results');
let search = '';


//Facciamo una funzione asincrona con il metodo fetch per ottenere il JSON
const fetchSearch = async(url) => {
    meals = await fetch(
        // `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)

        //per fare una chiamata sia sul "search" che sul "random" creiamo un oarametro "url" che sarà usato per entrambe le chiamate
        `https://www.themealdb.com/api/json/v1/1/${url}`)
        .then(res => res.json())
        .then(res => res.meals)
        // .then(res => console.log(res))

        // console.log(meals);
}

//SEARCH MEAL

//Mostriamo i risultati della ricerca a video
const searchDisplay = async() => {
    await fetchSearch(search);

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
    search = `search.php?s=${e.target.value}`  
    searchDisplay();
})

// RANDOM MEAL

const randomMealDisplay = async() => {
    await fetchSearch('random.php');


    results.innerHTML = (

            meals.map( meal => (

            `
                <div class="randomContainer">
                <h2>${meal.strMeal}</h2>
                <div class="infos">
                    <div>origin : ${meal.strArea}</div>
                    <div>catégory : ${meal.strCategory}</div>
                </div>
                <img src='${meal.strMealThumb}' />
                <p>${meal.strInstructions}</p>
                <a href="${meal.strYoutube}" target="_blank"><i class="fab fa-youtube"></i></a>
                </div>
        `
        ))


    );

    
};


randomMeal.addEventListener('click', randomMealDisplay);

randomMealDisplay();