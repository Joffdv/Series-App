import Head from 'next/head'
import axios from 'axios'
import Hero from '../components/Hero'
import PopularTv from '../components/PopularTv'
import { server } from '../config'

export default function Home({ tvs }) {
  return (
    <div className="bg-gray-700">
      <Hero />
      <PopularTv tvs={tvs.results} />
    </div>
  )
}

export async function getStaticProps() {
  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const tvs = res.data;

  return {
    props: { tvs }
  }
}