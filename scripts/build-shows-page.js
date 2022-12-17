const BASE_API_URL = "https://project-1-api.herokuapp.com/";
const API_KEY = "?api_key=13e6724b-7a76-4de9-b366-c2be24ae7e0f";

const showsURL = `${BASE_API_URL}showdates${API_KEY}`;

const showsSection = document.querySelector(".showsContainer");
const showsEl = document.querySelector(".showsContainer");

const showsTitle = document.createElement("h2");
showsTitle.innerText = "Shows";
showsSection.append(showsTitle);

const titleHeader = document.createElement("div");
titleHeader.classList.add("titlesContainer");
showsSection.append(titleHeader);

const h3 = (title, container, className) => {
  const titleEl = document.createElement("h3");
  titleEl.innerText = title;
  titleEl.classList.add(className);
  container.append(titleEl);
};

h3("DATE", titleHeader, "titlesContainer__names");
h3("VENUE", titleHeader, "titlesContainer__names");
h3("LOCATION", titleHeader, "titlesContainer__names");

const displayShows = (show) => {
  for (let i = 0; i < show.length; i++) {
    const showsData = show[i];

    const showContainerEl = document.createElement("article");
    showContainerEl.classList.add("shows");

    h3("DATE", showContainerEl, "shows__title");

    const dateEl = document.createElement("p");
    const date = new Date(showsData.date);
    dateEl.innerText = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    dateEl.classList.add("shows__details");
    showContainerEl.append(dateEl);

    h3("VENUE", showContainerEl, "shows__title");

    const venueEl = document.createElement("p");
    venueEl.innerText = showsData.place;
    venueEl.classList.add("shows__details");
    showContainerEl.append(venueEl);

    h3("LOCATION", showContainerEl, "shows__title");

    const locationEl = document.createElement("p");
    locationEl.innerText = showsData.location;
    locationEl.classList.add("shows__details");
    showContainerEl.append(locationEl);

    const buttonEl = document.createElement("button");
    buttonEl.innerText = "BUY TICKETS";
    buttonEl.classList.add("shows__button");
    showContainerEl.append(buttonEl);

    showsEl.append(showContainerEl);
  }
};

axios
  .get(showsURL)
  .then((result) => {
    displayShows(result.data);
  })
  .catch((error) => {
    console.log(error);
  });
// displayShows();
