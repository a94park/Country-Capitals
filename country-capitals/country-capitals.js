document.addEventListener('DOMContentLoaded', () => {
    fetch('country-capitals.json')
        .then(response => response.json())
        .then(data => {
            displayCountries(data);
        })
        .catch(error => {
            console.error('Error fetching the JSON data:', error);
        });
});

function displayCountries(data) {
    const countriesContainer = document.getElementById('countries-container');
    data.forEach(item => {
        const countryCard = document.createElement('div');
        countryCard.classList.add('country-card');

        const countryCardInner = document.createElement('div');
        countryCardInner.classList.add('country-card-inner');

        const countryCardFront = document.createElement('div');
        countryCardFront.classList.add('country-card-front');
        countryCardFront.textContent = item.country;

        const countryCardBack = document.createElement('div');
        countryCardBack.classList.add('country-card-back');
        countryCardBack.textContent = item.city;

        countryCardInner.appendChild(countryCardFront);
        countryCardInner.appendChild(countryCardBack);
        countryCard.appendChild(countryCardInner);
        countriesContainer.appendChild(countryCard);

        countryCard.addEventListener('click', () => {
            countryCard.classList.add('flipped');
            setTimeout(() => {
                countryCard.classList.remove('flipped');
            }, 800); // Flip back after 2 seconds
        });
    });
}


// const cityElement = document.createElement('div');
//         cityElement = textContent = item.city;
//         countriesContainer.appendChild(cityElement)