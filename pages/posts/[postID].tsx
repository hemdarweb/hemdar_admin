import { NextPage, GetStaticProps, GetStaticPropsContext } from 'next';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostIDPageProps {
  post: Post | null;
}

const PostID: NextPage<PostIDPageProps> = ({ post }) => {
  return (
    <div>
      <h1>Post ID Page</h1>
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Post not found.</p>
      )}
    </div>
  );
};

export default PostID;

export const getStaticProps: GetStaticProps<PostIDPageProps> = async (context: GetStaticPropsContext) => {
  const { params } = context;
  if (params && params.postID) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`);
    const post: Post = await response.json();
    
    console.log(params?.postID)
    return {
      props: {
        post,
      },
    };
  }

  return {
    props: {
      post: null,
    },
  };
};

export async function getStaticPaths() {
  // Assuming you have 100 posts with IDs from 1 to 100

  // const paths = Array.from({ length: 100 }, (_, index) => ({ params: { postID: String(index + 1) } }));
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    const post = await response.json();
    const paths = post.map((post:Post)=>{
       return {params:{postID:`${post.id}`}}
    })

  return {
    paths,
    fallback: false,
  };
}