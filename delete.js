'use strict';
console.log("work pls");

let delPenguin = document.querySelector("#del-penguins");
console.log(delPenguin);
let delId = document.querySelector("#id")
console.log(delId);


let deleteRequest = (type) => {

    fetch(`http://localhost:8083/delete/${type}`, {
        method: `DELETE`
    }).then((response) => {
        if (response.status !== 204) {
            console.error(`Status : ${response.statusText}`);
            return;
        }
        //
        console.log("pingu is dead");
    })
}

delPenguin.addEventListener('click', () => {

    let delVal = delId.value;
    console.log("button clicked");
    console.log(delVal);
    deleteRequest(delVal)
})