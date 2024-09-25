const apiUrl = "https://webdev-music-003b5b991590.herokuapp.com/catalog/";
const apiUrlPlaylist = "https://webdev-music-003b5b991590.herokuapp.com/catalog/selection";

export async function getTracks({ id}: { id: any; }) {
  const res = await fetch(apiUrl + "track/all/");

  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }
  const responseData = await res.json();
  return responseData.data;
}

export async function getPlaylistTracks(id: string) {
  const res = await fetch(apiUrlPlaylist + id, {
    method: "GET",
    cache:"no-cache"
  } );

  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }
  const date = await res.json();
  return date.items;
}
