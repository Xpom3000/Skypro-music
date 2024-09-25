
const apiUrlIn = "https://webdev-music-003b5b991590.herokuapp.com/user/login/"

type SigninType = {
  email: string;
  password: string;
};

export async function signin({ email, password }: SigninType) {
  try {
    const res = await fetch(apiUrlIn, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
          "content-type": "application/json",
        },
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      if (res.status === 400) {
        throw new Error(JSON.stringify(errorData));
      } else if (res.status === 401) {
        throw new Error(errorData.detail || "Ошибка авторизации");
      } else if (res.status === 500) {
        throw new Error("Сервер сломался");
      } else {
        throw new Error("Неизвестная ошибка");
      }
    }

    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
