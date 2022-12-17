const shows = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021 ",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

const h3 = (title, container, className) => {
  const titleEl = document.createElement("h3");
  titleEl.innerText = title;
  titleEl.classList.add(className);
  container.append(titleEl);
};

const showsSection = document.querySelector(".showsContainer");

const showsTitle = document.createElement("h2");
showsTitle.innerText = "Shows";
showsSection.append(showsTitle);

const titleHeader = document.createElement("div");
titleHeader.classList.add("titlesContainer");
showsSection.append(titleHeader);

h3("DATE", titleHeader, "titlesContainer__names");
h3("VENUE", titleHeader, "titlesContainer__names");
h3("LOCATION", titleHeader, "titlesContainer__names");

const displayShows = (show) => {
  const showContainerEl = document.createElement("article");
  showContainerEl.classList.add("shows");

  h3("DATE", showContainerEl, "shows__title");

  const dateEl = document.createElement("p");
  dateEl.innerText = show.date;
  dateEl.classList.add("shows__details");
  showContainerEl.append(dateEl);

  h3("VENUE", showContainerEl, "shows__title");

  const venueEl = document.createElement("p");
  venueEl.innerText = show.venue;
  venueEl.classList.add("shows__details");
  showContainerEl.append(venueEl);

  h3("LOCATION", showContainerEl, "shows__title");

  const locationEl = document.createElement("p");
  locationEl.innerText = show.location;
  locationEl.classList.add("shows__details");
  showContainerEl.append(locationEl);

  const buttonEl = document.createElement("button");
  buttonEl.innerText = "BUY TICKETS";
  buttonEl.classList.add("shows__button");
  showContainerEl.append(buttonEl);

  showsEl.append(showContainerEl);
};

const showsEl = document.querySelector(".showsContainer");

for (let i = 0; i < shows.length; i++) {
  const showsItem = shows[i];

  displayShows(showsItem);
}
