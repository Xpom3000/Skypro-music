import classNames from "classnames";
import styles from "./Playlist.module.css";
import Track from "../Track/Track";
import { getTracks } from "@/store/tracks";
import { trackType } from "@/type";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Volume from "../Volume/Volume";

type PlaylistType = {
  setTrack: (param: trackType) => void;
};

export default function Playlist({ setTrack }: PlaylistType) {
  // let tracksData: trackType[];
  // try {
  //   tracksData = await getTracks();
  // } catch (error: any) {
  //   throw new Error(error.message);
  // }
  const [volume, setVolume] = useState<number>(0.5);
  const [tracksData, setTracksData] = useState<trackType[]>([]);
  const audioRef = useRef<null | HTMLAudioElement>(null);
  useEffect(() => {
    getTracks()
      .then((data: trackType[]) => setTracksData(data))
      .catch((error: any) => {
        throw new Error(error.message);
      });
  }, []);

  const handleVolume = (event: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.volume = Number(event.target.value);
      setVolume(audioRef.current.volume);
    }
  };

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
        {tracksData.map((trackData) => (
          <Track
            onClick={() => setTrack(trackData)}
            key={trackData.id}
            name={trackData.name}
            author={trackData.author}
            album={trackData.album}
            duration_in_seconds={trackData.duration_in_seconds}
          />
        ))}

        {/* <Volume
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolume}
        /> */}
      </div>
    </div>
  );
}
