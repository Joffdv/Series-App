import Image from 'next/image'

export default function Cast({ cast }) {
  return (
    <div className="mt-1">
      <h1 className="text-xl font-bold mb-2">Series Cast:</h1>
      <ul className="relative flex overflow-x-scroll pb-2.5">
        {cast.map((actor) => {
          return (
            <li className="w‐[140px] min-w-[140px] shadow-3xl pb-2.5 m-2.5">
              <a>
                <Image src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} width={138} height={175} />
              </a>
              <p className="text-[1em] text-ellipsis overflow-hidden px-2.5 pt-2.5">
                <a className="font-bold">{actor.original_name}</a>
              </p>
              <p className="text-[0.9em] text-ellipsis overflow-hidden px-2.5">{actor.character}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}