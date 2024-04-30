"use client";

import styles from "./CenterBlock.module.css";
import Filters from "../Filters/Filters";
import Search from "../Search/Search";
import Playlist from "../Playlist/Playlist"
import { trackType } from "@/type";
import { useEffect, useState } from "react";
import { getTracks } from "@/tracks";

export default function CenterBlock() {
  const [track, setTrack] = useState < trackType[] | ([])>;
  let tracksData: trackType[];

  useEffect
  getTracks().then((tracksData) => {
    setTrack(tracksData)
    dispatch(setInitialTracks({ initialTracks: tracksData}))
  })
    
  

  // try {
  //   tracksData = await getTracks();
  //   dispatch(setInitialTracks({ initialTracks: tracksData}))
  // }
  // catch (error: any) {
  //   throw new Error(error.messege)
  // }
  return (
    <div className={styles.mainCenterblock}>
      <Search />
      <h2 className={styles.centerblockH2}>Треки</h2>
      <Filters  tracksData/>
      <Playlist setTrack={setTrack} /> 
    </div>
  );
}
