import classNames from "classnames";
import styles from "./Playlist.module.css";
import Track from "../Track/Track";
import { getTracks } from "@/tracks";
import { TrackType } from "@/type";

export default async function Playlist() {
  let tracksData: TrackType[];

  try {
    tracksData = await getTracks();
  } catch (error: any) {
    throw new Error(error.message);
  }
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
        {tracksData.map((trackData) => {
          <Track
            key={trackData.id}
            name={trackData.name}
            author={trackData.author}
            album={trackData.album}
          />;
        })}
      </div>
    </div>
  );
}

// Обратите внимание, что функция компонента также является асинхронной
//   export default async function HomePage() {
//

//     return <main>/* Некий контент */</main>;
