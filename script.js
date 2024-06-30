document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fetch-cat-image-button').addEventListener('click', fetchCatImage);
    fetchWeather();
    fetchJokes();
});

function fetchCatImage() {
    const statusCode = document.getElementById('status-code-input').value;
    if (!statusCode) {
        alert('Please enter a status code.');
        return;
    }

    const imageUrl = `https://http.cat/${statusCode}`;
    const factList = document.getElementById('cat-facts-list');
    factList.innerHTML = ''; // Clear previous images

    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = `HTTP Cat for status code ${statusCode}`;
    img.className = 'img-fluid'; // Bootstrap class for responsive images

    listItem.appendChild(img);
    factList.appendChild(listItem);
}

