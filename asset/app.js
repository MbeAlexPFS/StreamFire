const films = [
  {
    title: "Inception",
    category: "Science-Fiction",
    image: "ressource/inception.jpg"
  },
  {
    title: "Pulp Fiction",
    category: "Thriller",
    image: "ressource/pulp-fiction.jpg"
  },
  {
    title: "Interstellar",
    category: "Science-Fiction",
    image: "ressource/interstellar.jpg"
  },
  {
    title: "The Dark Knight",
    category: "Action",
    image: "ressource/the-dark-knight.jpg"
  },
  {
    title: "Parasite",
    category: "Drame",
    image: "ressource/parasite.jpg"
  },
  {
    title: "Spirited Away",
    category: "Animation",
    image: "ressource/spirited-away.jpg"
  },
  {
    title: "The Godfather",
    category: "Drame",
    image: "ressource/the-godfather.jpg"
  },
  {
    title: "Avengers: Endgame",
    category: "Action",
    image: "ressource/avengers-endgame.jpg"
  }
];

const galleryContainer = document.getElementById("galleryContainer");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");

function displayFilms(filmsToDisplay) {
  galleryContainer.innerHTML = "";
  filmsToDisplay.forEach(film => {
    const col = document.createElement("div");
    col.className = "col";
    col.innerHTML = `
  <div class="card">
    <img src="${film.image}" class="card-img-top brick-img" alt="${film.title}" height="300px">
    <div class="card-body">
      <h5 class="card-title">${film.title}</h5>
      <p class="card-text">${film.category}</p>
      <button class="btn btn-primary btn-sm voir-video" data-bs-toggle="modal" data-bs-target="#videoModal">
        Voir la vidéo
      </button>
    </div>
  </div>
`;

    galleryContainer.appendChild(col);
  });
}

function filterFilms() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categorySelect.value;

  const filtered = films.filter(film => {
    const matchesSearch = film.title.toLowerCase().includes(searchTerm);
    const matchesCategory = selectedCategory === "all" || film.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  displayFilms(filtered);
}

searchInput.addEventListener("input", filterFilms);
categorySelect.addEventListener("change", filterFilms);

// Afficher tous les films au chargement
displayFilms(films);

// Gestion lecture vidéo
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('voir-video')) {
    const video = document.getElementById('filmVideo');
    video.currentTime = 0;
    video.play();
  }
});

const modal = document.getElementById('videoModal');
modal.addEventListener('hidden.bs.modal', function () {
  const video = document.getElementById('filmVideo');
  video.pause();
});