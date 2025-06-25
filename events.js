const mainBtn = document.querySelector('#myButton');
mainBtn.addEventListener('click', () => {
    alert('Button was clicked!');
});

function curlyLaunch() {
    console.log('Curly brace somehow makes things complicated!');
}

function shout() {
    console.log('Shout!');
}

const tasButton = document.querySelector('#tas');

//     document.querySelector('div').appendChild(Button);
tasButton.addEventListener('click', twist);
tasButton.addEventListener('click', shout);

// This code selects an element with the id 'hello' and adds an event listener to it that logs "hello" when clicked.
const hello = document.querySelector('#hello');

hello.addEventListener('click', function () {
    console.log("hello");
});

const bye = document.querySelector('#goodbye');

bye.addEventListener('click', function () {
    console.log("goodbye");
});