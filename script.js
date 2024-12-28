'use strict';

// let body = document.querySelector("body")

// let ism = document.createElement('h1')

// let name = prompt('ism').trim()

// let back = prompt('fon')

// let color = prompt("rang")

// body.style.backgroundColor = back

// ism.innerHTML = name

// ism.style.color = color

// body.style.backgroundColor = back

// body.style.display = 'flex'

// body.style.justifyContent = 'center'

// body.style.padding = '21% 0'

// body.appendChild(ism)


let bodys = document.querySelector("body")

let div = document.createElement('div')

let names = [
    "Roziya",
    "Durdona",
    "Abdulvoris",
    "Samir",
    "Behruz",
    "Best Mentor",
];

names.forEach(item => {

    let h2 = document.createElement("h2")

    let br = document.createElement("br")
    
    h2.innerHTML = item + " 🔥"
    
    div.appendChild(h2)
    
    div.appendChild(br)
});

bodys.appendChild(div)