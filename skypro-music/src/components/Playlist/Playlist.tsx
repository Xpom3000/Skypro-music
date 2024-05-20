import classNames from "classnames";
import styles from "./Playlist.module.css";
import Track from "../Track/Track";
import { getTracks } from "@/store/tracks";
import { trackType } from "@/type";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setInitialTracks } from "@/store/features/plailistSlice";
import { useEffect, useState } from "react";

export default function Playlist() {
  const dispatch = useAppDispatch();
  const [tracks, setTracks] = useState<trackType[]>([]);
  const filteredTracks = useAppSelector((state) => state.playlist.filteredTracks);

  useEffect(() => {
    getTracks().then((tracksData) => {
      setTracks(tracksData);
      dispatch(setInitialTracks({ initialTracks: tracksData }));
      
    });
    
  }, [dispatch])

  return (
    <div
      className={classNames(styles.centerblockContent, styles.playlistContent)}
    >
      <div className={classNames(styles.contentTitle, styles.playlistTtitle)}>
        <div className={classNames(styles.playlistTitleCol, styles.col01)}>
          Трек
        </div>
        <div className={classNames(styles.playlistTitleCol, styles.col02)}>
          Исполнитель
        </div>
        <div className={classNames(styles.playlistTitleCol, styles.col03)}>
          Альбом
        </div>
        <div className={classNames(styles.playlistTitleCol, styles.col04)}>
          <svg className={styles.playlistTitleSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-watch" />
          </svg>
        </div>
      </div>
      <div className={classNames(styles.contentPlaylist, styles.playlist)}>
        {filteredTracks.map((track) => (
          <Track key={track.id} track={track} tracksData={tracks} />
        ))}
      </div>
    </div>
  );
}
