import { UserContext } from "@/contexts/user";
import { useContext } from "react";

export function useUser() {
  return useContext(UserContext);
}
