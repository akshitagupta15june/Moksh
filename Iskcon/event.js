function fetchData() {
  return fetch('data.json')
    .then(response => response.json())
    .catch(error => console.error('Error fetching data:', error));
}

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    loop: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  let eventData;

  fetchData().then(data => {
    eventData = data;
    createEventCards(data, swiper);
  });

  const searchInput = document.querySelector('#search-bar');
  const searchButton = document.querySelector('#search-button');

  function handleSearch() {
    const searchText = searchInput.value.toLowerCase();
    const filteredEvents = eventData.filter(event => event.state.toLowerCase().includes(searchText));
    updateEventCards(filteredEvents, swiper);
  }

  searchInput.addEventListener('input', handleSearch);
  searchButton.addEventListener('click', handleSearch);
});

function createEventCards(data, swiper) {
  const eventCardsContainer = document.querySelector('.cards');

  data.forEach(event => {
    createEventCard(event, swiper, eventCardsContainer);
  });

  swiper.update();
}

function createEventCard(event, swiper, container) {
  const { image, heading, description, date, btnText, link, state } = event;

  const card = document.createElement('div');
  card.classList.add('card', 'bg-indigo-600', 'w-[270px]', 'h-[480px]', 'p-4', 'text-slate-100', 'rounded-md', 'ease-in-out', 'duration-300', 'hover:shadow-2xl', 'hover:scale-110', 'flex', 'flex-col', 'justify-between', 'gap-y-5');
  const imageElement = document.createElement('img');
  imageElement.src = image;
  imageElement.alt = heading;
  imageElement.classList.add('card-image', 'w-full', 'h-[210px]', 'rounded-md');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body', 'flex', 'flex-col', 'justify-evenly', 'gap-y-4', 'text-sm', 'grow');

  const headingElement = document.createElement('p');
  headingElement.classList.add('card-title', 'text-center', 'font-semibold');
  headingElement.innerText = heading;

  const descriptionElement = document.createElement('p');
  descriptionElement.innerText = description;

  const dateElement = document.createElement('span');
  dateElement.classList.add('text-slate-400', 'font-semibold', 'text-xs');
  dateElement.innerText = date;

  const btn = document.createElement('a');
  btn.href = link;
  btn.target = "_blank";
  btn.classList.add('font-semibold', 'w-full', 'bg-emerald-500', 'py-3', 'text-center', 'uppercase', 'tracking-widest', 'ease-in-out', 'duration-300', 'hover:bg-indigo-900', 'rounded-md');
  btn.innerText = btnText;

  const stateElement = document.createElement('span');
  stateElement.classList.add('text-slate-400', 'font-semibold', 'text-xs');
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
  const eventCardsContainer = document.querySelector('.cards');
  const allCards = eventCardsContainer.querySelectorAll('.card');

  allCards.forEach(card => {
    card.style.display = 'none';
  });

  filteredEvents.forEach(event => {
    const card = eventCardsContainer.querySelector(`[data-event-id="${event.id}"]`);
    if (card) {
      card.style.display = 'block';
    } else {
      createEventCard(event, swiper, eventCardsContainer);
    }
  });

  swiper.update();
}

