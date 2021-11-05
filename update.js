'use strict';

let updateBttn = document.querySelector('#get-penguins');
console.log(updateBttn);
let updateName = document.querySelector('#name');
console.log(updateName);
let updateAge = document.querySelectorAll('#age');
console.log(updateAge);
let updateFeet = document.querySelector('#happyFeets');
console.log(updateFeet);
let updateId = document.querySelectorAll('#id')
console.log(updateId);

let postData = (id1, name1, age1, feet) => {

    let newObject = {
        name: name1,
        age: age1,
        happyFeet: feet
    };


    postFetch(newObject, id1);

    return newObject
};

let postFetch = (object, id) => {
    fetch(`http://localhost:8083/update/${id}`, {
        method: "PUT", // We are specifying we are POSTing data
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
    });
};


updateBttn.addEventListener('click', () => {
    let updateAge = document.querySelectorAll('#age');
    console.log(updateAge);
    let nameVal = updateName.value;
    console.log(nameVal);
    let ageVal = updateAge.value;
    console.log(ageVal);
    let feetVal = updateFeet.value;
    console.log(feetVal);
    let idVal = updateId.value;
    console.log(idVal);
    postData(idVal, nameVal, ageVal, feetVal)
})