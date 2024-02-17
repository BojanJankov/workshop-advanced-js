console.log("Script is working");

/*
Bonus Workshop
CountrySearch 🌍🌎🌏
CountrySearch is an application that is meant to search for countries and get data for them in real-time. The application is very simple. 
It only has one functionality: Search and show the countries in cards

Requirements
There should be one search input to input the name or partial name of a country
There should be a button for search to initiate
When the button is clicked, show countries in cards with the info below
The card shows:
Flag (photo of the flag)
Name
Population
Capital
Area
If there are no results found show a "Country Not Found" message on the screen
The API for countries is: https://restcountries.com/
Read the API documentation to figure out how to call for the countries
Extra requirements
List language names and currency names in the table as well ( only names and divided by, EX: Spanish, English )
Add loading image (or spinner) while it is getting the data
Add a filter by name, area, and population in descending order
Add a filter by name, area, and population in ascending order
*/

// URL links for feteching API data

const countryURL_ALL = "https://restcountries.com/v3.1/all";

// Selectors
// Search

const serachInput = document.querySelector(".searchInput");
const searchButton = document.querySelector(".searchButton");

// Card selectors
const cardContainer = document.querySelector(".all-card-container");
const cardInfoDiv = document.querySelector(".countryInfo");

// Fetching data for all countries

const fetchCountryData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    displayErrorMessage(data, cardContainer);
    renderAllDataCountry(data, cardContainer);

    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Function that render cards with data info for country

const renderAllDataCountry = (data, element) => {
  const cardHTML = data
    .map((country) => {
      return `
<section class="card-container">
<div class="flag">
    <img
        src="${country.flags.png}"
        alt="${country.flags.alt}"
        width="100px"
        class="flag"
    />
</div>
<div class="countryInfo">
    <h4>Name:${country.name.common} </h4>
    <h4>Population: ${country.population}</h4>
    <h4>Capital city: ${country.capital}</h4>
    <h4>Area: ${country.area}</h4>
</div>
</section>
  `;
    })
    .join("");

  element.innerHTML = cardHTML;
};

// Add event listener that work on click and display all countries if search box is empty

searchButton.addEventListener("click", () => {
  if (serachInput.value === "") fetchCountryData(countryURL_ALL);
  fetchSerachByName(serachInput.value);
});

// Search data

const countryURL_NAME = `https://restcountries.com/v3.1/name/`;

const fetchSerachByName = async (searchValue) => {
  try {
    const response = await fetch(`${countryURL_NAME}${searchValue}`);
    const data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
