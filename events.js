const mainBtn = document.querySelector('#myButton');
mainBtn.addEventListener('click', () => {
    alert('Button was clicked!');
});

function twist() {
    console.log('Twist!');
}

function shout() {
    console.log('Shout!');
}

const tasButton = document.querySelector('#tas');

//     document.querySelector('div').appendChild(Button);
tasButton.addEventListener('click', twist);
tasButton.addEventListener('click', shout);

const hello = document.querySelector('#hello');

hello.addEventListener('click', function () {
    console.log("hello");
});

const bye = document.querySelector('#goodbye');

bye.addEventListener('click', function () {
    console.log("goodbye");
});