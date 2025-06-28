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
const order = document.querySelector('#tweetList');

// This code adds an event listener to the tweet form to handle submission.
// It prevents the default form submission behavior, creates a new list item with the tweet content,
tweetForm.addEventListener('submit', function (e) {
    // Prevent the default form submission behavior
    e.preventDefault();
    // Select the tweet list and the input values
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;

    addTweet(usernameInput.value, tweetInput.value);

    // Clear the input fields
    usernameInput.value = '';
    tweetInput.value = '';
});


const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);

    newTweet.append(`- ${tweet}`);
    // Append the new tweet to the tweet list
    order.append(newTweet);

}

order.addEventListener('click', function (e) {
    e.target.nodeName === 'LI' && e.target.remove();
});