const search = [
  { name: "Tirupati", place: "Tirupati, Andhra Pradesh" },
  { name: "Varanasi", place: "Varanasi, Uttar Pradesh" },
  { name: "Rameswaram", place: "Rameswaram, Tamil Nadu" },
  { name: "Vaishno Devi", place: "Katra, Jammu and Kashmir" },
  { name: "Kedarnath", place: "Kedarnath, Uttarakhand" },
  { name: "Somnath", place: "Prabhas Patan, Gujarat" },
  { name: "Amarnath", place: "Anantnag, Jammu and Kashmir" },
  { name: "Badrinath", place: "Badrinath, Uttarakhand" },
  { name: "Shirdi Sai Baba", place: "Shirdi, Maharashtra" },
  { name: "Jagannath", place: "Puri, Odisha" },
  { name: "Mahakaleshwar", place: "Ujjain, Madhya Pradesh" },
  { name: "Kashi Vishwanath", place: "Varanasi, Uttar Pradesh" },
  { name: "Kamakhya", place: "Guwahati, Assam" },
  { name: "Golden Temple", place: "Amritsar, Punjab" },
  { name: "Meenakshi", place: "Madurai, Tamil Nadu" },
  { name: "Siddhivinayak", place: "Mumbai, Maharashtra" },
  { name: "Sri Venkateswara", place: "Tirumala, Andhra Pradesh" },
  { name: "Lingaraj", place: "Bhubaneswar, Odisha" },
  { name: "Sri Padmanabhaswamy", place: "Thiruvananthapuram, Kerala" },
  { name: "Dwarkadhish", place: "Dwarka, Gujarat" },
  { name: "Kumbakonam", place: "Kumbakonam, Tamil Nadu" },
  { name: "Guruvayur", place: "Guruvayur, Kerala" },
  { name: "Kamakshi Amman", place: "Kanchipuram, Tamil Nadu" },
  { name: "Chamundeshwari", place: "Mysuru, Karnataka" },
  { name: "Ranganathaswamy", place: "Srirangam, Tamil Nadu" },
  { name: "Ramanathaswamy", place: "Rameswaram, Tamil Nadu" },
  { name: "Mookambika", place: "Kollur, Karnataka" },
  { name: "Brihadeeswarar", place: "Thanjavur, Tamil Nadu" },
  { name: "Ayyappan", place: "Sabarimala, Kerala" },
  { name: "Ghati Subramanya", place: "Doddaballapura, Karnataka" },
  { name: "Tulja Bhavani", place: "Tuljapur, Maharashtra" },
  { name: "Srisailam", place: "Srisailam, Andhra Pradesh" },
  { name: "Udupi Krishna", place: "Udupi, Karnataka" },
  { name: "Kollur Mookambika", place: "Kollur, Karnataka" },
  { name: "Chidambaram", place: "Chidambaram, Tamil Nadu" },
  { name: "Thiruvanaikaval", place: "Tiruchirappalli, Tamil Nadu" },
  { name: "Kashi Vishwanath", place: "Varanasi, Uttar Pradesh" },
  { name: "Kotilingeshwara", place: "Bangarapet, Karnataka" },
  { name: "Arunachalesvara", place: "Tiruvannamalai, Tamil Nadu" },
  { name: "Kanaka Durga", place: "Vijayawada, Andhra Pradesh" },
  { name: "Sri Ranganathaswamy", place: "Srirangapatna, Karnataka" },
  { name: "Srisailam Mallikarjuna", place: "Srisailam, Andhra Pradesh" },
  { name: "Kalighat Kali", place: "Kolkata, West Bengal" },
  { name: "Pashupatinath", place: "Kathmandu, Nepal" },
  { name: "Kapaleeshwarar", place: "Chennai, Tamil Nadu" },
  { name: "Gangotri", place: "Gangotri, Uttarakhand" },
  { name: "Yogeshwari Devi", place: "Amravati, Maharashtra" },
  { name: "Mangalagauri", place: "Gaya, Bihar" },
  { name: "Har Ki Pauri", place: "Haridwar, Uttarakhand" },
  { name: "Nataraja", place: "Chidambaram, Tamil Nadu" },
  { name: "Sri Chakra", place: "Vellore, Tamil Nadu" },
  { name: "Kukke Subramanya", place: "Subramanya, Karnataka" },
];
function fetchData() {
  return fetch("data.json")
    .then((response) => response.json())
    .catch((error) => console.error("Error fetching data:", error));
}

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  let eventData;

  fetchData().then((data) => {
    eventData = data;
    createEventCards(data, swiper);
  });

  const searchInput = document.querySelector("#search-bar");
  const searchButton = document.querySelector("#search-button");
  const searchResults = document.getElementById("search-results");
  function removeChilds(parentNode) {
    while (parentNode.firstChild) {
      parentNode.removeChild(parentNode.firstChild);
    }
  }
  function handleSearch() {
    const searchText = searchInput.value.toLowerCase();
    if (searchText.length > 0) {
      removeChilds(searchResults);
      let filters = search.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
      filters.map((item, index) => {
        let div = document.createElement("div");
        let p = document.createElement("p");
        let span = document.createElement("span");
        p.textContent = item.name;
        span.textContent = item.place;
        p.style.fontSize = "1.3rem";
        p.style.zIndex = "99999";
        p.style.position = "relative";
        span.style.fontSize = "0.8rem";
        span.style.zIndex = "99999";
        span.style.position = "relative";
        div.appendChild(p);
        div.appendChild(span);
        div.style.padding = "0.5rem 1rem";
        div.style.borderBottom = "0.1rem solid black";
        div.style.zIndex = "99999";
        div.style.position = "relative";
        div.style.backgroundColor = "#fff";
        div.style.padding = " 0.8rem";
        //Z-index added
        div.style.zIndex = "2";
        div.setAttribute("key", index);

        //Hover effect begins
        div.addEventListener("mouseenter", () => {
          div.style.backgroundColor = "#e0e0e0";
        });
        div.addEventListener("mouseleave", () => {
          div.style.backgroundColor = "#fff";
        });

        // Transition effect
        div.style.transition = "background-color 0.3s ease";
        //Hover effect ends

        //Click event listener to fill search input
        div.addEventListener("click", () => {
          searchInput.value = p.textContent.trim(); // Fill search input with div's text content
          handleSearch();
        });

        searchResults.appendChild(div);
      });
    } else {
      removeChilds(searchResults);
    }
  }
  searchInput.addEventListener("input", handleSearch);
  searchButton.addEventListener("click", handleSearch);
});

function createEventCards(data, swiper) {
  const eventCardsContainer = document.querySelector(".cards");

  data.forEach((event) => {
    createEventCard(event, swiper, eventCardsContainer);
  });

  swiper.update();
}

function createEventCard(event, swiper, container) {
  const { image, heading, description, date, btnText, link, state } = event;

  const card = document.createElement("div");
  card.classList.add(
    "card",
    "bg-indigo-600",
    "w-[270px]",
    "h-[480px]",
    "p-4",
    "text-slate-100",
    "rounded-md",
    "ease-in-out",
    "duration-300",
    "hover:shadow-2xl",
    "hover:scale-110",
    "flex",
    "flex-col",
    "justify-between",
    "gap-y-5"
  );
  const imageElement = document.createElement("img");
  imageElement.src = image;
  imageElement.alt = heading;
  imageElement.classList.add("card-image", "w-full", "h-[210px]", "rounded-md");

  const cardBody = document.createElement("div");
  cardBody.classList.add(
    "card-body",
    "flex",
    "flex-col",
    "justify-evenly",
    "gap-y-4",
    "text-sm",
    "grow"
  );

  const headingElement = document.createElement("p");
  headingElement.classList.add("card-title", "text-center", "font-semibold");
  headingElement.innerText = heading;

  const descriptionElement = document.createElement("p");
  descriptionElement.innerText = description;

  const dateElement = document.createElement("span");
  dateElement.classList.add("text-slate-400", "font-semibold", "text-xs");
  dateElement.innerText = date;

  const btn = document.createElement("a");
  btn.href = link;
  btn.target = "_blank";
  btn.classList.add(
    "font-semibold",
    "w-full",
    "bg-emerald-500",
    "py-3",
    "text-center",
    "uppercase",
    "tracking-widest",
    "ease-in-out",
    "duration-300",
    "hover:bg-indigo-900",
    "rounded-md"
  );
  btn.innerText = btnText;

  const stateElement = document.createElement("span");
  stateElement.classList.add("text-slate-400", "font-semibold", "text-xs");
  stateElement.innerText = state;

  cardBody.appendChild(headingElement);
  cardBody.appendChild(descriptionElement);
  cardBody.appendChild(dateElement);
  cardBody.appendChild(stateElement);
  cardBody.appendChild(btn);

  card.appendChild(imageElement);
  card.appendChild(cardBody);

  container.appendChild(card);
  swiper.appendSlide(card);
}

function updateEventCards(filteredEvents, swiper) {
  const eventCardsContainer = document.querySelector(".cards");
  const allCards = eventCardsContainer.querySelectorAll(".card");

  allCards.forEach((card) => {
    card.style.display = "none";
  });

  filteredEvents.forEach((event) => {
    const card = eventCardsContainer.querySelector(
      `[data-event-id="${event.id}"]`
    );
    if (card) {
      card.style.display = "block";
    } else {
      createEventCard(event, swiper, eventCardsContainer);
    }
  });

  swiper.update();
}
