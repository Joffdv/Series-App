import Link from 'next/link'
import Image from 'next/image'

export default function SeasonCards({ seasonCards, tv }) {
  return (
    <div className="season-cards flex flex-row flex-wrap justify-start">
      <h1 className="my-2 font-bold text-xl">Seasons:</h1>
      {seasonCards.map((season) => {
        return (
          <div className="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/5 xl:my-2 xl:px-2 xl:w-1/5">
            <div className="rounded-md overflow-hidden">
              <Image className="w-full" title={season.name} src={`https://image.tmdb.org/t/p/w342${season.poster_path}`} alt={season.name} width={1500} height={2250}/>
              <div className="flex text-gray-600 justify-center text-xl leading-0 font-semibold py-2">{season.name}</div>
            </div>
          </div> 
         )
      })}
    </div>
  )
}

export async function getStaticProps(context) {
  const { id, seasonid } = context.params;
  const res = await axios(`${server}/${id}/season/${seasonid}?api_key=${process.env.API_KEY}&language=en-US`);
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
