import { getPlaylistTracks } from "@/api/tracks";
import Playlist from "@/components/Playlist/Playlist";

type CategoryType = {
  params: { id: string };
};

export default async function CategoryPage({ params }: CategoryType) {
  const tracksData = await getPlaylistTracks(params.id);
  return (
    <>
      <Playlist tracks={tracksData} playlist={tracksData}/>
    </>
  );
}
