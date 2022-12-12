import EpisodeInfo from '../../../../../components/EpisodeInfo'

export async function getServerSideProps({ query }) {
    // Fetch data from external API
    const { id, seasonid, epid } = query
    const apiKey = process.env.API_KEY
    const res = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/season/${seasonid}/episode/${epid}?api_key=${apiKey}&language=en-US`
    )
    const data = await res.json()
    if (res.ok) {
        return {
            props: { EpisodeDetail: data, id, seasonid, epid }
        }
    }
  }

export default function epId({ EpisodeDetail, seasonid, epid, id }) {
    return (
      <div className="">
          <EpisodeInfo EpisodeDetail={EpisodeDetail} seasonid={seasonid} epid={epid} showid={id}/>
      </div>
    )
  }