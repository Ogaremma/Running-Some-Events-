const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}


const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}


const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
}


const myImage = document.querySelector('img');
myImage.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg');

const h1 = document.querySelector('h1');
h1.style.fontSize = '24px';


const h2 = document.querySelector('h2');
h2.classList.add('purple');
h2.classList.add('bold');
h2.classList.add('italic');
h2.classList.remove('italic');
// The method toggle checks if the class exists, if it does it removes it, if it doesn't it adds it.
h2.classList.toggle('italic');


//Unrelated code, but its talking about toggling classes
// This code selects all <li> elements and toggles the 'highlight' class on each of them.
const link = document.querySelectorAll('li');

for (let li of link) {
    li.classList.toggle('highlight');
}


const h4 = document.createElement('h4');
h4.append("You have to become the change you want to see in the world.");

const h3 = document.querySelector('h3');

h3.insertAdjacentElement('afterend', h4);

h3.nextElementSibling; // This will select the h4 element that was just added

// Talking about inserting elements, this code creates 100 buttons and appends them to a div:

for (let i = 0; i < 100; i++) {
    const Button = document.createElement('button');
    Button.innerText = 'This is SuperCool';
    const Div = document.querySelector('div');
    Div.appendChild(Button);
    console.log(`(Button $(i + 1)`);
}

for (let i = 0; i < 50; i++) {
    const H1 = document.
}