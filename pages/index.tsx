import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div style={{background:'red',textAlign:'center'}}>
      <Link href='/posts'>
        <h1>
          Post
        </h1>
      </Link>
    </div>
  )
}

export default Home
