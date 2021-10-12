"use strict"
// import Team from './team.js'

let list = [];
let pokemons = [];
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(data => {
            list = data.results;
            list.forEach(poke => {
                fetch(poke.url)
                .then(response => response.json())
                .then(pokeObject => {
                    pokemons.push(pokeObject);
                });
            });
            let array = Array(151);
            let htmlString = "<article>";
            for (let i = 0; i < array.length; i++ ) {
                
                htmlString += `
                <article>
                    
                        <div>
                        <h1>${data.results[i].name}</h1>
                        <img src="${data.sprites.front_default}">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
                        <p>${data.results[i].this.name}</p>
                        </div>
                    </div>
                </article>
            `
            htmlString += "</article>";
            
        }

    document.getElementById('container').innerHTML = htmlString;
  
    

        });

        window.onload = function() {
            setTimeout(buildList, 3000);

            function buildList() {
                console.log(pokemons);
            }
        }
    
           

        

