"use client";

import Playlist from "@/components/Playlist/Playlist";
import { setInitialTracks } from "@/store/features/plailistSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getTracks } from "@/store/tracks";
import { trackType } from "@/type";
import { useEffect, useState } from "react";

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

  return <Playlist
    // tracks={filteredTracks} playlist={tracks}
  />;
}
