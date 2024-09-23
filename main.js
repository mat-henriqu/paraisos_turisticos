const r = document.querySelector(":root");
const bodyElement = document.body;
const randomizeElement = document.querySelector(".randomize");
const destinations = [
  {
    name: "Sahara",
    location: "Marrakech",
    img: "./img/dubai-desert-safari-6826298_1280.jpg",
  },
  {
    name: "Maldives",
    location: "Indian Ocean",
    img: "./img/maldives-1993704_1280.jpg",
  },
  {
    name: "Dolomites",
    location: "Italy",
    img: "./img/pale-di-san-martino-4979964_1280.jpg",
  },
  {
    name: "Highland",
    location: "Scotland",
    img: "./img/neist-point-540119_1280.jpg",
  },
  {
    name: "Kleifarvatn",
    location: "Iceland",
    img: "./img/iceland-2111811_1280.jpg",
  },
  {
    name: "Colorado",
    location: "Arizona",
    img: "./img/desert-1867005_1280.jpg",
  },
  {
    name: "Santorin",
    location: "Greece",
    img: "./img/church-2020258_1280.jpg",
  },
  {
    name: "Petra",
    location: "Jordan",
    img: "./img/petra-4351361_1280.jpg",
  },
  {
    name: "Fundy",
    location: "Canada",
    img: "./img/river-5765785_1280.jpg",
  },
  {
    name: "Fuji",
    location: "Japan",
    img: "./img/japan-1902834_1280.jpg",
  },
  {
    name: "Ha Long Bay",
    location: "Vietnam",
    img: "./img/marvel-7536676_1280.jpg",
  },
];
let nextDestination = destinations[1];

const getRandomDestination = () => {
  const randomId = Math.floor(Math.random() * destinations.length);
  return destinations[randomId];
};

const displayNextContent = () => {
  if (bodyElement.classList.contains("body--animated")) {
    return;
  }

  bodyElement.classList.add("body--animated");

  setTimeout(() => {
    r.style.setProperty("--img-current", `url(${nextDestination.img})`);
    r.style.setProperty("--text-current-title", `"${nextDestination.name}"`);
    r.style.setProperty(
      "--text-current-subtitle",
      `"${nextDestination.location}"`
    );
    setTimeout(() => {
      bodyElement.classList.remove("body--animated");
      setTimeout(() => {
        nextDestination = getRandomDestination();
        r.style.setProperty("--img-next", `url(${nextDestination.img})`);
        r.style.setProperty("--text-next-title", `"${nextDestination.name}"`);
        r.style.setProperty(
          "--text-next-subtitle",
          `"${nextDestination.location}"`
        );
      }, 1000);
    }, 1000);
  }, 1000);
};

randomizeElement.addEventListener("click", displayNextContent);

displayNextContent();

const preloadImages = (destinations) => {
  destinations.forEach((destination) => {
    const img = new Image();
    img.src = destination.img;
  });
};
preloadImages(destinations);
