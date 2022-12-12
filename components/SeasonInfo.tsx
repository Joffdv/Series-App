import Link from 'next/link'
import Image from 'next/image'

export default function SeasonInfo({ SeasonDetail, tvID}) {
  const epArray = SeasonDetail.episodes
  return (       
    <div className="text-center min-h-screen season-details md:mx-24">
      <div className="container mx-auto px-4 py-11 flex flex-col md:flex-row season-container place-content-center">
        <div>
          <h2 className="text-4xl md:text-5xl mt-4 md:mt-0 font-semibold text-gray-600">Season {SeasonDetail.season_number}</h2>
          <p className="text-gray-600 mt-8">
            {SeasonDetail.overview}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap flex-row justify-center h-full">
        {epArray.map((element, index) => {
          {if (element.still_path == null) {
            return (
              <div key={index+1} className="px-2 py-2 overflow-hidden">
                <Link href="/tv/[id]/season/[seasonid]/[epid]" as={`/tv/${tvID}/season/${SeasonDetail.season_number}/${index+1}`}>
                  <a key={index+2} className="flex flex-col">
                    <Image key={index+3} className="hover:opacity-70" src={'/HIYYPtZ_d.webp'} alt={element.name} width={1000} height={600} />
                    <p key={index+4} className="bg-gray-700 max-w-full break-words text-white text-sm md:text-lg md:py-5 leading-0 font-semibold py-2">{SeasonDetail.season_number} x {index+1} : {element.name}</p>
                  </a>
                </Link>
              </div>
            ) 
          } 
          else {
            return ( 
              <div key={index+1} className="px-2 py-2 rounded-md overflow-hidden"> 
                <Link href="/tv/[id]/season/[seasonid]/[epid]" as={`/tv/${tvID}/season/${SeasonDetail.season_number}/${index+1}`}>
                  <a key={index+2} className="flex flex-col">
                    <Image key={index+3} className="hover:opacity-70" src={`https://image.tmdb.org/t/p/w342${element.still_path}`} alt={element.name} width={1000} height={600} />
                    <p key={index+4} className="bg-gray-700 max-w-full break-words text-white text-sm md:text-xl md:py-5 leading-0 font-semibold py-2">{SeasonDetail.season_number} x {index+1} : {element.name}</p>
                  </a>
                </Link>
              </div>
            )
          }}
    })}
      </div>
    </div>
  )
}

