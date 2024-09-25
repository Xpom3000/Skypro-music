"use client";

import { postToken  } from "@/api/tracks";
import { UserContextType } from "@/type";
import { useRouter } from "next/navigation";
import { FC, PropsWithChildren, createContext, useState } from "react";

function getUserFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem("user") || "{}");
  } catch (error) {
    console.log(error);
    return null;
  }
}

function getTokenFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem("token") || "{}");
  } catch (error) {
    console.log(error);
    return null;
  }
}

const initialValue: UserContextType = {
  user: null,
  login: () => {},
  logout: () => {},
};

export const UserContext = createContext<UserContextType>(initialValue);
export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(getUserFromLocalStorage());
  const [token, setToken] = useState(getTokenFromLocalStorage());
  function login(
    newUser: number,
    loginData: { email: string; password: string }
  ) {
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    postToken(loginData).then((tokenData: any) => {
      setToken(tokenData);
      localStorage.setItem("token", JSON.stringify(tokenData));
      router.push("/");
    });
  }
  function logout() {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  return (
    <UserContext.Provider value={{ user, token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
