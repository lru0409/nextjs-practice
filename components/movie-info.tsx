import { API_URL } from '../app/(home)/page';

async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();
  return json;
}

export default async function MovieInfo({ id }: { id: string }) {
  const videos = await getMovie(id);
  return <div>{JSON.stringify(videos)}</div>;
}
