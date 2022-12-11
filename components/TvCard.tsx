import Image from 'next/image'
import Link from 'next/link'

export default function TvCard({ tv }: any) {
  return (
    <Link href={`/tv/${tv.id}`} passHref>
      <div className="bg-white shadow-sm rounded-md cursor-pointer">
        <Image src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} width={700} height={1050} className="rounded-t-md" alt={tv.title} />
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-1">{tv.name}</div>
          <p className="text-gray-700 text-base mb-1">{tv.first_air_date}</p>
        </div>
      </div>
    </Link>
  )
}