import classNames from "classnames";
import styles from "./Playlist.module.css";
import Track from "../Track/Track";
import { getTracks } from "@/tracks";
import { trackType } from "@/type";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { setCurrentTrack } from "@/store/features/plailistSlice";

type PlaylistType = {
  setTrack: (param: trackType) => void;
};

export default  async function Playlist({ setTrack }: PlaylistType) {
  let tracksData: trackType[];
  try {
    tracksData = await getTracks();
  } catch (error: any) {
    throw new Error(error.message);
  }
  const dispatch = useAppDispatch();
  // const [tracksData, setTracksData] = useState<trackType[]>([]);
  // useEffect(() => {
  //   getTracks()
  //     .then((data: trackType[]) => setTracksData(data))
  //     .catch((error: any) => {
  //       throw new Error(error.message);
  //     });
  // }, []);

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
            onClick={() => dispatch(setCurrentTrack( trackData ))}
            key={trackData.id}
            name={trackData.name}
            author={trackData.author}
            album={trackData.album}
            // id={0}
            // release_date={""}
            // genre={""}
            // duration_in_seconds={0}
            // logo={null}
            // track_file={""}
            // stared_user={[]}
          />
        ))}
      </div>
    </div>
  );
}
