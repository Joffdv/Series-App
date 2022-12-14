import axios from 'axios'
import { server } from '../../../config'
import Image from 'next/image'
import Meta from '../../../components/Meta'
import SeasonCards from '../../../components/SeasonCards'

export default function Movie({ tv }) {
  return (
    <div className="container max-w-4xl mx-auto pt-6">
      <Meta title={tv.name} />
      <div className="px-3">
        <Image src={`https://image.tmdb.org/t/p/original${tv.backdrop_path}`} width={1000} height={600} className="rounded-md" alt={tv.title} />
        <h1 className="font-bold text-xl my-2">{tv.name}</h1>
        <p className="text-gray-600 text-sm">{tv.number_of_seasons === 1 ? "Season: ": "Seasons: "} <span className="font-bold">{tv.number_of_seasons}</span></p>
        <p className="text-gray-600 text-sm">Episodes: <span className="font-bold">{tv.number_of_episodes}</span></p>
        <p className="text-gray-600 text-sm mt-4">{tv.overview}</p>
        <p className="mt-5 text-gray-600 text-sm">Creators: <span className="font-bold">{tv.created_by.map(created_by => created_by.name).join(', ')}</span></p>
        <p className="text-gray-600 text-sm">Genres: <span className="font-bold">{tv.genres.map(genre => genre.name).join(', ')}</span></p>
        <p className="text-gray-600 text-sm">Release Date: <span className="font-bold">{tv.first_air_date}</span></p>
        <SeasonCards seasonCards={tv.seasons} tv={tv}/>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await axios(`${server}/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const tv = res.data;

  return {
    props: { tv }
  }
}

export async function getStaticPaths() {
  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const tvs = res.data.results;

  const ids = tvs.map(tv => tv.id);
  const paths = ids.map(id => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false
  }
}