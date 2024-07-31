// const apiKey = 'live_mnxYR3rHZtH23FUMaWsc1VTwM2U9PqKjATX89uLvAxmqmddpuCf4MaqO7LyJHpBj';
// const url = "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1";
// const imageElement = document.querySelector('.image');
// document.addEventListener('DOMContentLoaded', () => {
//   fetch(url, {
//     headers: {
//       'x-api-key': apiKey
//     }
//   })
//   .then(response => response.json()) // Converts the data into an array of objects (JSON)
//   .then(data => { // Data is an array of objects
//     console.log(data);
//     const image = document.createElement('img')
//     image.src = data[0].url
//     imageElement.appendChild(image)
//   })
//   .catch(error => {
//     console.error('Error fetching the JSON data:', error);
//   });
// });


// Elements from the DOM
// const countryList = document.getElementById('country-list');
// const capitalDisplay = document.getElementById('capitalDisplay');
// const searchBar = document.getElementById('search-bar');


// // Fetch the country data from the JSON file
// fetch('/json/countryAndCapitals.json')
//   .then(response => response.json())
//   .then(data => {
//     // Initial display of all countries
//     displayCountries(data);

//     // Event listener for the search bar
//     searchBar.addEventListener('input', () => {
//       const searchQuery = searchBar.value.toLowerCase();
//       // Filter countries based on the search query
//       capitalDisplay.textContent = ''
//       const filteredCountries = data.filter(country =>
//         country.country.toLowerCase().includes(searchQuery)
//       );
//       // Display the filtered list of countries
//       displayCountries(filteredCountries);
//     });
//   })
//   .catch(error => {
//     console.error('Error fetching country data:', error);
//   });


// // Function to display the list of countries
// function displayCountries(countries) {
//   // Clear the previous list
//   countryList.innerHTML = '';
//   // Create a div for each country and append it to the country list
//   countries.forEach(country => {
//     const countryDiv = document.createElement('div');
//     countryDiv.className = 'country';
//     countryDiv.textContent = country.country;
//     countryDiv.addEventListener('click', () => {
//       // Show the capital of the selected country
//       capitalDisplay.textContent = `The capital of ${country.country} is ${country.city}`;
//     });
//     countryList.appendChild(countryDiv);
//   });
// }


// Elements from the DOM
const countryList = document.getElementById('country-list');
const displayText = document.getElementById('displayText');
const searchBar = document.getElementById('search-bar');
const flipButton = document.getElementById('flipButton');

let countriesData = [];
let showCapitals = false; // Boolean to track whether we are showing capitals or countries

// Function to display the list of countries or capitals
function displayItems(items, showCapitals) {
  // Clear the previous list
  countryList.innerHTML = '';
  // Create a div for each item and append it to the country list
  items.forEach(item => {
    // Skip items with null capital or country
    if ((showCapitals && !item.city) || (!showCapitals && !item.country)) {
      return;
    }
    const itemDiv = document.createElement('div');
    itemDiv.className = 'country';
    itemDiv.textContent = showCapitals ? item.city : item.country;
    itemDiv.addEventListener('click', () => {
      // Show the country or capital of the selected item
      displayText.textContent = showCapitals ? `The country for ${item.city} is ${item.country}` : `The capital of ${item.country} is ${item.city}`;
    });
    countryList.appendChild(itemDiv);
  });
}

// Fetch the country data from the JSON file
fetch('/json/countryAndCapitals.json')
  .then(response => response.json())
  .then(data => {
    countriesData = data;
    // Initial display of all countries
    displayItems(countriesData, showCapitals);

    // Event listener for the search bar
    searchBar.addEventListener('input', () => {
      const searchQuery = searchBar.value.toLowerCase();
      // Filter countries or capitals based on the search query
      displayText.textContent = '';
      const filteredItems = countriesData.filter(item =>
        showCapitals ? item.city.toLowerCase().includes(searchQuery) : item.country.toLowerCase().includes(searchQuery)
      );
      // Display the filtered list of countries or capitals
      displayItems(filteredItems, showCapitals);
    });

    // Event listener for the flip button
    flipButton.addEventListener('click', () => {
      showCapitals = !showCapitals;
      flipButton.textContent = showCapitals ? 'Flip to Countries' : 'Flip to Capitals';
      displayItems(countriesData, showCapitals);
      searchBar.placeholder = showCapitals ? 'Search for a capital...' : 'Search for a country...';
    });
  })
  .catch(error => {
    console.error('Error fetching country data:', error);
  });
