import { deleteArtist, createArtist, getArtists } from "./modules/artistApi.js";
import { renderArtist } from "./modules/artistUI.js";

let artistsContainer = document.querySelector("#artists-container");
let createArtistForm = document.querySelector("#create-artist-form");

async function createArtistCards() {
  artistsContainer.innerHTML = "";
  let artists = await getArtists();
  console.log(artists);
  // aggiorno il DOM con le card degli artisti
  artists.map((artist) => {
    // funzione che prende un artista, crea la card e la inserisce in un contenitore
    renderArtist(artist, artistsContainer, handleDeleteArtist);
  });

  createArtistForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // ottengo un oggetto con coppie chiave/valore di tutti i campi del form
    let artistInputFields = new FormData(createArtistForm);
    createArtist(artistInputFields).then((data) => {
      createArtistCards();
    });
    // console.log(artistInputFields);
  });
  // renderArtist(
  //   { name: "the who", description: "british band" },
  //   favoriteArtistContainer
  // );
}
createArtistCards();

function handleDeleteArtist(id) {
  deleteArtist(id).then((data) => {
    createArtistCards();
    alert(data.message);
  });
}

// getArtist("86cbc00a-3850-4cfb-a410-6934aa19f40c").then((artist) => {
//   console.log(artist);
// });

// deleteArtist("86cbc00a-3850-4cfb-a410-6934aa19f40c");
