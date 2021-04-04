import Head from 'next/head'
import Articlelist from '../components/ArticleList'

export default function Home({articles}) {
  return (
    <div>
      <Head>
        <title>web dev news</title>
        <meta name='keywords' content='web development programming'/>
      </Head>
      <h1>welcome to next</h1>

      <Articlelist articles={articles}/>
    </div>
  )
}


export const getStaticProps = async () => {
  const url = `https://jsonplaceholder.typicode.com/posts?_limit=6`
  const res = await fetch(url)
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}
