let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/hiking-fun.jpeg') {
        myImage.setAttribute ('src', 'images/dead-end.jpeg');
    } else {
        myImage.setAttribute('src', 'images/hiking-fun.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name. ');
    if(!myName) {
        setUserName();
    }else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Great hiking in Quebec, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName()
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Great hiking in Quebec ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}