import Header from "@/components/Header"
import Post from "@/components/Post"

export const getStaticProps = async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();  
  // this cuts out the first 6 post
  const recommendedData = data.slice(0,6);
  // this cuts out from post 7 to 10
  const others = data.slice(6,10);

  return{
      props:{
        rec_posts:recommendedData,
        other_posts:others
      }
  }
}

export default function Home({rec_posts,other_posts}) {


  return(
<>
  <Header btnName={'All Posts'} route={'posts'}/>
    <main>
    {/* Hero section */}
<section className='flex justify-around h-[90vh] flex-col items-center px-5 mt-5'>
<div className='flex gap-10 flex-col'>
  <h2 className='text-5xl md:text-6xl lg:text-8xl font-bold text-center break-words [word-spacing:10px]'>Get your daily dose of
<br/>  
  <span>daily posts</span>
</h2>
<p className='text-center text-base lg:px-44'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero tenetur commodi voluptatem repudiandae dolorem voluptatum facilis quasi velit quaerat. Vitae aut ad debitis voluptatibus optio magnam eius? Sapiente, accusantium!</p>

</div>

<a href="#post" className='btn'>Get started</a>

</section>
{/* end of Hero section */}



 {/* posts list section */}
<section className='p-5' id='post'>
  <h2 className='text-3xl font-bold mb-10'>Recommended posts for you</h2>

<div className='flex flex-col gap-5 lg:grid lg:grid-cols-2 '>

{/* mapping some posts */}
{rec_posts.map(post=>
(<div key={post.id}>
  <Post 
    id={post.id}
  title={post.title} 
  content={post.body}
  />
  </div>)
)}
  
</div>
</section>

 {/* posts list section */}
 <section className='p-5' >
  <h2 className='text-3xl font-bold mb-10'>Some other posts you may like</h2>

<div className='flex flex-col gap-5 lg:grid lg:grid-cols-2 '>

{/* mapping some posts */}
{other_posts?.map(post=>
(
<div key={post.id}>
<Post 
  id={post.id}
title={post.title} 
content={post.body}
/>
</div>)
)}
  
</div>
</section>

</main>
</>
  )

}
