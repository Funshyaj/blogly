import Header from "@/components/Header";
import Post from "@/components/Post";

const Posts = () => {
    return ( <div className="min-h-screen">
{/* header */}
  <Header btnName={'Home'} route={''}/>

  {/* content */}
  <main className="px-5 pt-5">
    <h1 className='text-3xl font-bold mb-10'>Here are all the post for you...</h1>


    <div className='flex flex-col gap-5 lg:grid lg:grid-cols-2 '>

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
  </main>
        
    </div> );
}
 
export default Posts;