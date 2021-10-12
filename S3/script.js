
let randomNumber = Math.floor(Math.random()*21);
let magicNumber = 0;

console.log(randomNumber);

function compareNumber(nr) {
   return new Promise(function(resolve, reject) {
        
        switch (randomNumber) {
            case userInput:
                console.log(resolve)
                
        }
            
            resolve('You guessed it right')
            
       
        
    });
    
}



document.getElementById("random").addEventListener("submit", event => {
    event.preventDefault();
    let userInput = document.getElementById("input").value
    console.log(userInput);
    
        let getNumber = `${userInput}`
    document.getElementById("print").innerHTML = getNumber;
});

