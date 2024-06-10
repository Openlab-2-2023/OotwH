document.getElementById('getJokeBtn').addEventListener('click', fetchJoke);

function fetchJoke() {
    fetch('https://icanhazdadjoke.com/slack')
        .then(response => response.json())
        .then(data => {
            displayJoke(data);
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            document.getElementById('jokeContainer').textContent = 'Oops! Something went wrong. Please try again.';
        });
}

function displayJoke(jokeData) {
    const jokeContainer = document.getElementById('jokeContainer');
    jokeContainer.innerHTML = `<p>${jokeData.setup}</p><p><strong>${jokeData.punchline}</strong></p>`;
}
