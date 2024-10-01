const apiUrl = "https://webdev-music-003b5b991590.herokuapp.com/catalog/";
const apiUrlPlaylist = "https://webdev-music-003b5b991590.herokuapp.com/catalog/selection";
const apiUrlCategory = "https://skypro-music-api.skyeng.tech/catalog/selection/";
const apiUrlToken = "https://webdev-music-003b5b991590.herokuapp.com/user/token/";
const apiUrlTrack = "https://skypro-music-api.skyeng.tech/catalog/track/";
const apiUrlFavoriteTracks = "https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/";
const appiUrlRefreshToken = "https://webdev-music-003b5b991590.herokuapp.com/user/token/refresh/";

export async function getTracks() {
  const res = await fetch(apiUrl );

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

export async function postToken({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const res = await fetch(apiUrlToken, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      "content-type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }
  console.log(res);

  return res.json();

}

export async function deleteFavoriteTracks(id: number, token: string) {
  const res = await fetch(apiUrlTrack + id + "/favorite/", {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(JSON.stringify(res.status));
  }

  return res.json();
}

export async function getFavoriteTracks(token: string) {
  const res = await fetch(apiUrlFavoriteTracks, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(JSON.stringify(res.status));
  }

  const data = await res.json();
  return data;
}

export async function getCategoryTracks(id: string) {
  const res = await fetch(apiUrlCategory + id, {
    method: "GET",
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }

  const data = await res.json();
  return data.items;
}

export async function refreshToken(token: string) {
  const res = await fetch(appiUrlRefreshToken , {
    method: "POST",
    body: JSON.stringify({
      refresh: token,
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      "content-type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }

  return res.json();
}