"use client";

import Playlist from "@/components/Playlist/Playlist";
import { setInitialTracks } from "@/store/features/plailistSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getTracks } from "@/api/tracks";
import { trackType } from "@/type";
import { useEffect, useState } from "react";
import Filters from "@/components/Filters/Filters";
import styles from "./layout.module.css";

export default function MainTracksPage() {
  const dispatch = useAppDispatch();
  const [tracks, setTracks] = useState<trackType[]>([]);
  const filteredTracks = useAppSelector(
    (state) => state.playlist.filteredTracks
  );

  useEffect(() => {
    getTracks().then((tracksData) => {
      setTracks(tracksData);
      dispatch(setInitialTracks({ initialTracks: tracksData }));
    });
  }, [dispatch]);

  return (
    <>
      <h2 className={styles.centerblockH2}>Треки</h2>
      <Filters />
      <Playlist tracks={filteredTracks} playlist={tracks} />
      </>);
}
