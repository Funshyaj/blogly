import Header from "@/components/Header";
import Post from "@/components/Post";

export const getStaticProps = async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();  

  return{
      props:{
       allposts:data
      }
  }
}

const Posts = ({allposts}) => {
    return ( <div className="min-h-screen">
{/* header */}
  <Header btnName={'Home'} route={''}/>

  {/* content */}
  <main className="px-5 pt-5">
    <h1 className='text-3xl font-bold mb-10'>Here are all the posts</h1>


    <div className='flex flex-col gap-5 lg:grid lg:grid-cols-2 '>

{/* mapping all posts */}
{allposts.map(post=>
(<Post 
  key={post.id}
title={post.title} 
content={post.body}
/>)
)}
</div>
  </main>
        
    </div> );
}
 
export default Posts;