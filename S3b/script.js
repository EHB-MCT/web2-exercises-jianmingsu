

    const searchMovie = {
        initFields() {
         document.getElementById('searchform').addEventListener('submit', (e) => {
            e.preventDefault();
            const search = document.getElementById('inputTitle').value;
            console.log(search);
            this.getMovie(search);
        });

},



async getMovie(movie) {
    fetch(`https://www.omdbapi.com/?t=${movie}&apikey=3ea53594`)
        .then(response => {
           return response.json()
        })
        .then(data => {
            console.log(data);
            let htmlString = `
            <h5 class="card-title">${data.title}</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            `;
            document.getElementsByClassName('card-body').innerHTML = htmlString;
        });
}

}

searchMovie.initFields();


        