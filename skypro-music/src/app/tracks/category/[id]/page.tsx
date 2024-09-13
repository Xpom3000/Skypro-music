import { getPlaylistTracks } from "@/api/tracks";
import Playlist from "@/components/Playlist/Playlist";
import styles from "../../layout.module.css";

type CategoryType = {
  params: { id: string };
};

export default async function CategoryPage({ params }: CategoryType) {
  const tracksData = await getPlaylistTracks(params.id);
  let centerBlockTitle;
  switch (params.id) {
    case "1":
      centerBlockTitle = "Плейлист дня";
      break;
    case "2":
      centerBlockTitle = "100 танцевальных хитов";
      break;
    case "3":
      centerBlockTitle = "Инди заряд";
      break;
    case "liked":
      centerBlockTitle = "Мой плейлист";
      break;
    default:
      centerBlockTitle = "Треки";
      break;
  }
  return (
    <>
      <h2 className={styles.centerblockH2}>{centerBlockTitle}</h2>
      <Playlist tracks={tracksData} playlist={tracksData} />
    </>
  );
}
