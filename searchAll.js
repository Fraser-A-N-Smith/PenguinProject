'use strict';

// create the getAll method

let parentDiv = document.querySelector('#parentDiv')
let getPengs = document.querySelector('#get-penguins');
console.log(getPengs);

let createCard = (obj) => { //creating card functionality
    // Creating elements
    let newCard = document.createElement('div');
    let newCardBody = document.createElement('div');
    let newTitle = document.createElement('h5');
    let newText = document.createElement('p');

    // Modifying class lists
    newCard.classList = "card";
    newCardBody.classList = "card-body";
    newTitle.classList = "card-title";
    newText.classList = "card-text";

    // Setting the element text content
    newTitle.textContent = `${obj.name}`; // this should be a penguin
    newText.textContent = `Age : ${obj.age} ..... Do they have happy feet? : ${obj.happyFeet}`;

    // Append everything.. 
    newCardBody.appendChild(newTitle);
    newCardBody.appendChild(newText);
    //newCardBody.appendChild(newHyperlink);

    newCard.appendChild(newCardBody);

    parentDiv.appendChild(newCard);
}



let getAll = () => {

    fetch(`http://localhost:8083/getAll`).then((response) => {
        if (response.status !== 200) {
            console.error(`status : ${response.status}`);
            return;

        }
        response.json()
            .then((data) => {
                for (let obj of data) {
                    console.log(obj);
                    createCard(obj);
                }
            }).catch((error) => {
                console.error(`${error}`)
            })
    })
}


getPengs.addEventListener('click', getAll);