import { deleteArtist } from "./artistApi.js";

export function renderArtist(artist, container) {
  console.log(artist);
  let artistContainer = document.createElement("article");
  let artistTitle = document.createElement("h2");
  artistTitle.textContent = artist.name;
  let artistImage = document.createElement("img");
  artistImage.src = `http://localhost:4000/${artist.image}`;

  let deleteArtistButton = document.createElement("button");
  deleteArtistButton.textContent = "Delete artist";

  deleteArtistButton.addEventListener("click", () => {
    deleteArtist(artist._id);
    // richiamare getArtists
    // aggiornare la UI
  });

  artistContainer.append(artistTitle);
  artistContainer.append(artistImage);
  artistContainer.append(deleteArtistButton);

  container.append(artistContainer);
}
