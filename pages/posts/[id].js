import Header from "@/components/Header";

export const getStaticPaths = async =>{

}

const PostDetasils = () => {
    return ( <div>
{/* header */}
<Header btnName={'Back'} route={'posts'}/>
<main className="min-h-screen">
     <h1>deets</h1>
</main>
        
    </div> );
}
 
export default PostDetasils;