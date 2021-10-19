

// async function getData(url = '') {
//     const response = await fetch(url, {
//         headers: {
//             'X-Parse-Application-Id': '42JVA2kr07R3iE2HNRksimNJhxGWvm9K7bcCa1VG', // This is your app's application id
//             'X-Parse-REST-API-Key': 'gpVQ9845MnESeZzoFzCXXv4MQGzzV6QoEMgiLq9J', // This is your app's REST API key
//           }
//     });
//     return response.json();
// }

// getData('https://parseapi.back4app.com/classes/Carmodels_Car_Model_List?limit=10000&order=Make')


//     .then(data => {
//         console.log(data);
//     });


fetch('https://private-anon-865ca293e5-carsapi1.apiary-mock.com/cars')

    

        .then(response => response.json())
        .then(data => {
            console.log(data);
                
           
                
           





        let array = Array(40);
        let htmlString = "<article>";
        for (let i = 0; i < array.length; i++ ) {
            
            htmlString += `
            <article>
                
                    <div>
                    <h1>Make: ${data[i].make}</h1>
                    <p>Model: ${data[i].model}<br>
                    Horsepower: ${data[i].horsepower}
                    </p>
                    <img src="${data[i].img_url}">
                    </div>
                </div>
            </article>
        `
        htmlString += "</article>";
        
    }

document.getElementById('container').innerHTML = htmlString;

});


//// op deze api zijn sommige fotos verwijdert. ik ga nog een betere api zoeken anders ga ik op een ander manier de fotos toevoegen.