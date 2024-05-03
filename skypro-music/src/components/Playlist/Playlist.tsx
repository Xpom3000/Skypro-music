import classNames from "classnames";
import styles from "./Playlist.module.css";
import Track from "../Track/Track";
import { getTracks } from "@/store/tracks";
import { trackType } from "@/type";


export default async function Playlist() {
  let tracksData: trackType[];
  try {
    tracksData = await getTracks();
  } catch (error: any) {
    throw new Error(error.message);
  }

  return (
    <div className={classNames(styles.centerblockContent, styles.playlistContent)}>
      <div className={classNames(styles.contentTitle, styles.playlistTtitle)}>
        <div className={classNames(styles.playlistTitleCol, styles.col01)}>Трек</div>
        <div className={classNames(styles.playlistTitleCol, styles.col02)}>Исполнитель</div>
        <div className={classNames(styles.playlistTitleCol, styles.col03)}>Альбом</div>
        <div className={classNames(styles.playlistTitleCol, styles.col04)}>
          <svg className={styles.playlistTitleSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-watch" />
          </svg>
        </div>
      </div>
      <div className={classNames(styles.contentPlaylist, styles.playlist)}>
        {tracksData.map((track) => (
          <Track
            key={track.id}
            track={track}
            tracksData={tracksData } />
        ))}
      </div>
    </div>
  );
}
