import { deleteArtist, getArtist, getArtists } from "./modules/artistApi.js";
import { renderArtist } from "./modules/artistUI.js";

let artistsContainer = document.querySelector("#artists-container");
// let favoriteArtistContainer = document.querySelector("#favorite-artist");

async function createArtistCards() {
  let artists = await getArtists();
  // aggiorno il DOM con le card degli artisti
  artists.map((artist) => {
    // funzione che prende un artista, crea la card e la inserisce in un contenitore
    renderArtist(artist, artistsContainer);
  });

  // renderArtist(
  //   { name: "the who", description: "british band" },
  //   favoriteArtistContainer
  // );
}

createArtistCards();

getArtist("86cbc00a-3850-4cfb-a410-6934aa19f40c").then((artist) => {
  console.log(artist);
});

// deleteArtist("86cbc00a-3850-4cfb-a410-6934aa19f40c");

console.log("ciao");
