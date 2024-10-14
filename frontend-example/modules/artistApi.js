import { backendUrl } from "./constants.js";

async function getArtists() {
  let response = await fetch(`${backendUrl}/api/artists/`);
  let artists = await response.json();
  return artists;
}

async function getArtist(artistId) {
  try {
    let response = await fetch(`${backendUrl}/api/artists/${artistId}`);
    if (response.status === 404) {
      throw new Error("band not found");
    }
    let artist = await response.json();
    return artist;
  } catch (error) {
    console.log(error);
  }
}

async function deleteArtist(artistId) {
  let response = await fetch(`${backendUrl}/api/artists/${artistId}`, {
    method: "DELETE",
  });
  let artist = await response.json();
  console.log(artist);
}

async function createArtist(artist) {
  let response = await fetch(`${backendUrl}/api/artists`, {
    method: "POST",
    // passare le info del form
    body: artist,
  });
  let createdArtist = await response.json();
  return createdArtist;
}

export { getArtists, getArtist, deleteArtist, createArtist };
