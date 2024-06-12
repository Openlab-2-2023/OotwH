document.addEventListener('DOMContentLoaded', () => {
    const blackHumorBtn = document.getElementById('blackHumorBtn');
    const dadJokeBtn = document.getElementById('dadJokeBtn');
    const randomJokeBtn = document.getElementById('randomJokeBtn');

    const blackHumorJoke = document.getElementById('blackHumorJoke');
    const dadJoke = document.getElementById('dadJoke');
    const randomJoke = document.getElementById('randomJoke');

    blackHumorBtn.addEventListener('click', generateBlackHumorJoke);
    dadJokeBtn.addEventListener('click', generateDadJoke);
    randomJokeBtn.addEventListener('click', generateRandomJoke);

    function generateBlackHumorJoke() {
        const url = 'https://v2.jokeapi.dev/joke/Dark?type=single';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    blackHumorJoke.textContent = 'Failed to fetch a joke. Please try again.';
                } else {
                    blackHumorJoke.textContent = data.joke;
                }
            })
            .catch(error => {
                console.error('Error fetching the joke:', error);
                blackHumorJoke.textContent = 'Failed to fetch a joke. Please try again.';
            });
    }

    function generateDadJoke() {
        const url = 'https://icanhazdadjoke.com/';

        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                dadJoke.textContent = data.joke;
            })
            .catch(error => {
                console.error('Error fetching the joke:', error);
                dadJoke.textContent = 'Failed to fetch a joke. Please try again.';
            });
    }

    function generateRandomJoke() {
        const url = 'https://v2.jokeapi.dev/joke/Any?type=single';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    randomJoke.textContent = 'Failed to fetch a joke. Please try again.';
                } else {
                    randomJoke.textContent = data.joke;
                }
            })
            .catch(error => {
                console.error('Error fetching the joke:', error);
                randomJoke.textContent = 'Failed to fetch a joke. Please try again.';
            });
    }
});