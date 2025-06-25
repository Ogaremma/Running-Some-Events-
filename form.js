const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const list = document.querySelector('#catList');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the cat name from the input
    const catName = input.value;
    const newLi = document.createElement('Li');
    newLi.innerText = catName;
    list.appendChild(newLi);
    input.value = '';
});

// This code handles a tweet form submission, where it takes the input from the user and appends it to a list of tweets.
// It also clears the input fields after submission.
const tweetForm = document.querySelector('#tweetForm');
// const usernameInput = document.querySelectorAll('input')[0];
const tweetInput = document.querySelectorAll('input')[1];
const order = document.querySelector('#tweetList');

// This code adds an event listener to the tweet form to handle submission.
// It prevents the default form submission behavior, creates a new list item with the tweet content,
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Select the tweet list and the input values
    // const username = usernameInput.value;
    const tweet = tweetInput.value;

    const newTweet = document.createElement('li');

    newTweet.innerText = tweet;
    // newTweet.innerText = username;
    order.appendChild(newTweet);

    usernameInput.value = '';
    tweetInput.value = '';
});
