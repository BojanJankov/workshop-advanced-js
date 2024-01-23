console.log("Script is working");

/*
JediArchives 📚
Idea ☄
The Jedi Archives has long been forgotten, but that should not stop us from rebuilding this masterpiece of knowledge. The JediArchives app is the first step to rebuilding the collective knowledge about the Star Wars universe. The app should help any user that is interested in some Star Wars data to go through the archive and find what they are looking for. A small step for the internet, but a huge step for Star Wars fans.

Requirements 🗺
The web page should be:

Single page application
There should be only one page
The logo should show at the front of the page
On the page there should be an image of person and space-ship that get data for the corresponding image and display a table
Tables:
 Person
    Name
    Height
    Mass
    Gender
    Birth Year
    Appearances ( Count of movies they appeared in )
 Ship
    Name
    Model
    Manufacturer
    Cost
    People Capacity ( Max people on board )
    Class
There should be 10 records per page of a table
There should be next/previous buttons to change the pages
Flow 🌈

Person opens the web app

Right away the StarWars logo is shown and images of a person and spaceship
The person clicks on the person image
A table is generated with 10 people from the StarWars universe and below, a next button
The person clicks on the Next button
Immediately the view changes to a new table with new people and a previous button appears
A table is generated with 10 ships from the StarWars universe and below, a next button
The person clicks on the Next button
Immediately the view changes to a new table with new ships and a previous button appears
The person clicks on the previous button
Impiety the view changes to a new table with the first ships and the previous button disappears
*/

// Mock

// const personMock = {
//     name: "Luke Skywalker", //Name
//     height: "172", // Height
//     mass: "77", //Mass
//     hair_color: "blond",
//     skin_color: "fair",
//     eye_color: "blue",
//     birth_year: "19BBY", // Birth Year
//     gender: "male", // Gender
//     homeworld: "https://swapi.dev/api/planets/1/",
//     films: [
//       //Appereances - films.length
//       "https://swapi.dev/api/films/1/",
//       "https://swapi.dev/api/films/2/",
//       "https://swapi.dev/api/films/3/",
//       "https://swapi.dev/api/films/6/",
//     ],
//     species: [],
//     vehicles: [
//       "https://swapi.dev/api/vehicles/14/",
//       "https://swapi.dev/api/vehicles/30/",
//     ],
//     starships: [
//       "https://swapi.dev/api/starships/12/",
//       "https://swapi.dev/api/starships/22/",
//     ],
//     created: "2014-12-09T13:50:51.644000Z",
//     edited: "2014-12-20T21:17:56.891000Z",
//     url: "https://swapi.dev/api/people/1/",
//   };

//   const shipMock = {
//     name: "CR90 corvette", //Name
//     model: "CR90 corvette", //Model
//     manufacturer: "Corellian Engineering Corporation", // Manufacturer
//     cost_in_credits: "3500000", // Cost (credits)
//     length: "150",
//     max_atmosphering_speed: "950",
//     crew: "30-165", // Crew OR
//     passengers: "600", //Passengers
//     cargo_capacity: "3000000",
//     consumables: "1 year",
//     hyperdrive_rating: "2.0",
//     MGLT: "60",
//     starship_class: "corvette", //Class
//     pilots: [],
//     films: [
//       "https://swapi.dev/api/films/1/",
//       "https://swapi.dev/api/films/3/",
//       "https://swapi.dev/api/films/6/",
//     ],
//     created: "2014-12-10T14:20:33.369000Z",
//     edited: "2014-12-20T21:23:49.867000Z",
//     url: "https://swapi.dev/api/starships/2/",
//   };

// Elements for

const yodaContainer = document.querySelector(".yoda-container");
const yodaImg = document.querySelector(".yoda");

const starwars_url = "https://swapi.dev/api/people/?page=1";

// First fetch function

const fetchStarWarsApi = () => {
  fetch(starwars_url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      renderPersonsTable(yodaContainer, data.results);
    });
};

// This function will be crate a HTML table with persons data

const renderPersonsTable = (element, personsDetalis) => {
  element.innerHTML = "";
  let rowHTML = "";
  for (let person of personsDetalis) {
    rowHTML += `
    <tr>
    <td>${person.name}</td>
    <td>${person.height}</td>
    <td>${person.mass}</td>
    <td>${person.birth_year}</td>
    <td>${person.gender}</td>
    <td>${person.films.length}</td>
    <tr>`;
  }
  element.innerHTML = `
  <table class="yoda-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Birth Year</th>
            <th>Gender</th>
            <th>Appereances</th>
          </tr>
        </thead>
        <tbody>
        ${rowHTML}       
        </tbody>
  </table>
  `;
  renderButtons(yodaContainer);
};

// Add event listener for render table data

yodaImg.addEventListener("click", () => {
  fetchStarWarsApi();
});

// Function that create two buttons and placed under the table

const renderButtons = (element) => {
  const nextButton = document.createElement("button");
  const previousButton = document.createElement("button");
  element.appendChild(nextButton);
  element.appendChild(previousButton);
  nextButton.innerText = "Next persons";
  previousButton.innerText = "Previous persons";
  nextButton.className = "nextBtn";
  previousButton.className = "previousBtn";
};
