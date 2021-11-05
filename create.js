'use strict';

let updateBttn = document.querySelector('#get-penguins');
let updateName = document.querySelector('#name');
//let updateAge = document.querySelectorAll('#age');
let updateFeet = document.querySelector('#happyFeets');
console.log(updateFeet);


let postData = (name1, age1, feet) => {

    let newObject = {
        name: name1,
        age: age1,
        happyFeet: feet
    };


    postFetch(newObject);

    return newObject
};

let postFetch = (object) => {
    fetch("http://localhost:8083/createPenguin", {
        method: "POST", // We are specifying we are POSTing data
        headers: {
            "Content-type": "application/JSON", // Telling the server we are sending JSON
        },
        body: JSON.stringify(object), // We will be creating an object and passing it in here
    }).then((response) => {
        if (response.status !== 201) {
            console.error(`Status: ${response.status}`);
            return;
        }
        console.log(response);
        // response.json().then((data) => {
        //     console.log(data);
    });
};


updateBttn.addEventListener('click', () => {
    let updateAge = document.querySelectorAll('#age');
    let nameVal = updateName.value;
    let ageVal = updateAge.value;
    let feetVal = updateFeet.value;
    postData(nameVal, ageVal, feetVal)
})