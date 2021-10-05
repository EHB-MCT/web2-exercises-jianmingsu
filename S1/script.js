"use strict"


window.onload = (event) => {
    console.log('page is fully loaded');
  };

// exercise 4-5

    document.getElementById("form").addEventListener("submit", event => {
      event.preventDefault();
     
      let inputName = document.getElementById("nameInput").value;
      let inputEmail = document.getElementById("emailInput").value;
      let inputOrder = document.getElementById("orderInput").value;
      let htmlString = `<p> The order for the customer ${inputName} is the following: ${inputOrder}. The customer may be notified by email: ${inputEmail}.</p>`;
      document.getElementById("message").innerHTML = htmlString;
      
      function printOrder(orderdetails) {
       return orderdetails.orders;
      }
      let orders = {
        name: inputName,
        order: inputOrder,
        email: inputEmail,
      }
      console.log(orders);
      

      printOrder(orders);
      


      
        
      
      event.target.reset();
  
  });



// exercise 1-3

//   document.getElementById("form").addEventListener("submit", event => {
//     event.preventDefault();
   
//     let inputName = document.getElementById("nameInput").value;
//     let inputEmail = document.getElementById("emailInput").value;
//     let inputOrder = document.getElementById("orderInput").value;
//     document.getElementById("message").innerHTML ="The order for the customer "+ inputName + " is the following: " + inputOrder + ". The customer may be notified by email: " + inputEmail;
//     console.log(inputName);

//     event.target.reset();

// });



    


  
  
 

    
    


