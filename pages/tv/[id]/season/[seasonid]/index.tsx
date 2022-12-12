import SeasonInfo from '../../../../../components/SeasonInfo'

export async function getServerSideProps({ query }) {
    // Fetch data from external API
    const { id, seasonid } = query
    const apiKey = process.env.API_KEY
    const res = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/season/${seasonid}?api_key=${apiKey}&language=en-US`
    )
    const data = await res.json()
    if (res.ok) {
        return {
            props: { SeasonDetail: data, id }
        }
    }
  }
  
  export default function SeasonDetail({ SeasonDetail, id}) {
    return (
      <div className="">
        <SeasonInfo SeasonDetail={SeasonDetail} tvID={id}/>
      </div>
    )
  }