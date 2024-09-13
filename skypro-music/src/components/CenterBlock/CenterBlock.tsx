"use client";

import styles from "./CenterBlock.module.css";
// import Filters from "../Filters/Filters";
import Search from "../Search/Search";
import { useAppDispatch } from "@/store/hooks";
import { setPlaylistNumber } from "@/store/features/plailistSlice";

type centerBlockType = {
  playlistID: string,
  isFilter: boolean,
};

export default function CenterBlock({
  children
}: Readonly<{                                                                              
  children: React.ReactNode;
}>, { playlistID, isFilter }: centerBlockType) {
  const dispatcher = useAppDispatch();
  dispatcher(setPlaylistNumber(playlistID)); 

  return (
    <div className={styles.mainCenterblock}>
      <Search />
      {children}
    </div>
  );
}
