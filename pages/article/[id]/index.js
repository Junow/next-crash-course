import Link from 'next/link'
import {useRouter} from 'next/router'

const Article = ({articles}) => {
  return (
    <>
      <h1>{articles.title}</h1>
      <p>{articles.body}</p>
      <br/>
      <Link href='/'>Go Back</Link>
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const articles = await res.json()

  const ids = articles.map(article => article.id)
  const paths = ids.map(id => ({params: {id: id.toString()}}))

  return {
    paths,
    fallback: false,
  }
}

export default Article
