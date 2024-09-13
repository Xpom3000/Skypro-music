import classNames from "classnames";
import styles from "./Playlist.module.css";
import Track from "../Track/Track";
import { trackType } from "@/type";

export default function Playlist({tracks, playlist}:{tracks: trackType[], playlist: trackType[]}) {
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
        {tracks.map((track) => (
          <Track key={track.id} track={track} tracksData={playlist} />
        ))}
      </div>
    </div>
  );
}
