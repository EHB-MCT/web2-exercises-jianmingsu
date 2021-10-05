"use strict"


        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(data => console.log(data))
        


    // .then(data => {
    //     let array = Array(150);
    //     let htmlString = "<article>";
    //         for (let i = 0; i < array.length; i++) {
    //             htmlString += `
    //             <article>
    //                 <div class="content" alt="${results[i]}">
    //                     <div>
                         
    //                     </div>
    //                 </div>
    //             </article>
    //         `
    //         htmlString += "</article>";
    //         }

    // document.getElementById('container').innerHTML = htmlString;
    // })
