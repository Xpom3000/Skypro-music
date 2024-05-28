import { getPlaylistTracks } from "@/api/tracks";

type CategoryType = {
  params: { id: string };
};

export default async function CategoryPage({ params }: CategoryType) {
  getPlaylistTracks(params.id);
  
  return (
    <>
      <div>Страница категорий {params.id}</div>
    </>
  );
}
