import TvCard from './TvCard'

export default function PopularTv({ tvs }: any) {
  return (
    <div className="bg-gray-700 container max-w-7xl mx-auto pb-10 px-4">
      <h1 className="text-white text-2xl mt-8 mb-5">What&#39;s Popular</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {tvs.map(tv => <TvCard tv={tv} key={tv.id} />)}
      </div>
    </div>
  )
}