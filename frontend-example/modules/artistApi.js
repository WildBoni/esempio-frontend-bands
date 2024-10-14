async function getArtists() {
  let response = await fetch("http://localhost:4000/api/artists/");
  let artists = await response.json();
  return artists;
}

async function getArtist(artistId) {
  try {
    let response = await fetch(`http://localhost:4000/api/artists/${artistId}`);
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
  let response = await fetch(`http://localhost:4000/api/artists/${artistId}`, {
    method: "DELETE",
  });
  let artist = await response.json();
  console.log(artist);
}

export { getArtists, getArtist, deleteArtist };
