import Header from "@/components/Header"
import Post from "@/components/Post"
import { useEffect } from "react"

export default function Home() {

  // useEffect(){

  // };


  return(
<>
  <Header btnName={'All Posts'} route={'posts'}/>
    <main>
    {/* Hero section */}
<section className='flex justify-around h-[90vh] flex-col items-center px-5 mt-5'>
<div className='flex gap-10 flex-col'>
  <h2 className='text-5xl md:text-6xl lg:text-8xl font-bold text-center break-words [word-spacing:10px]'>Get your daily dose of
<br/>  
  <span>daily post</span>
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

  {/* template for a single post */}
  <Post 
title={'Title'} 
content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quo asperiores. Illum dignissimos, quidem, voluptate iste odio laborum molestias possimus reiciendis vero sunt doloremque laboriosam assumenda perspiciatis. Expedita, blanditiis totam!'}
/>

<Post 
title={'Title'} 
content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quo asperiores. Illum dignissimos, quidem, voluptate iste odio laborum molestias possimus reiciendis vero sunt doloremque laboriosam assumenda perspiciatis. Expedita, blanditiis totam!'}
/>

<Post 
title={'Title'} 
content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quo asperiores. Illum dignissimos, quidem, voluptate iste odio laborum molestias possimus reiciendis vero sunt doloremque laboriosam assumenda perspiciatis. Expedita, blanditiis totam!'}
/>

<Post 
title={'Title'} 
content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quo asperiores. Illum dignissimos, quidem, voluptate iste odio laborum molestias possimus reiciendis vero sunt doloremque laboriosam assumenda perspiciatis. Expedita, blanditiis totam!'}
/>
</div>
</section>
</main>
</>
  )

}
