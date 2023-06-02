import React from 'react'

import { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostPageProps {
  post: Post[];
}

const  Post: NextPage<PostPageProps> = ({post}) => {
  return (<>
       <div>POST PAGE</div>
       {post.map((post)=>{

        return <>

        <Link href={`/posts/${post.id}`}>
        <div key={post.id}>
        {post.id}
        </div>
        <div>
        {post.title}
        </div>
        </Link>
        </>
       })}
       </>
  )
}

export default Post
export async function getStaticProps<GetStaticProps>(){

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return {
        props:{
            post :data
        }
    }
}

