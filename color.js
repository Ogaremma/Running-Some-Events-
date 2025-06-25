const button = document.querySelector('#back');
const h1 = document.querySelector('#name');


#back.addEventListener('click', function () {

    const random = randomColor();
    document.body.style.backgroundColor = random;
    #name.innerText = random;

    const brightness = getBrightness(random);
    h1.style.color = brightness < 128 ? 'white' : 'black';  // Adjust text color
});

const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // This will return a string in the format "rgb(r, g, b)"
    return `rgb(${r}, ${g}, ${b})`;
};

const getBrightness = (rgbString) => {
    // Extract RGB numbers from "rgb(r, g, b)"
    const [r, g, b] = rgbString.match(/\d+/g).map(Number);
    // Calculate brightness using a common formula
    return 0.299 * r + 0.587 * g + 0.114 * b;
};