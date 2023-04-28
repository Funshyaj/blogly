import Header from "@/components/Header";

export const getStaticPaths = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
// getting all the posts to individual routes
   const paths = data.map(post=>{
        return{
            params: {id:post.id.toString()}
        }
    })
        return {
          paths,
          fallback: false
      }
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    const post = await res.json();
  
    return {
      props: {post:post},
    }
  }

const PostDetasils = ({post}) => {
    return ( <div>
{/* header */}
<Header btnName={'Back'} route={'posts'}/>
<main className="min-h-screen">
     <h1>{post.title}</h1>
     <br />
     <br />
     <p>{post.body}</p>
</main>
        
    </div> );
}
 
export default PostDetasils;