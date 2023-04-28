const Post = ({title, content}) => {
    return ( 
    
    <div className='shadow-xl min-h-[170px] md:min-h-[150px] rounded border hover:m-2 lg:hover:m-1 p-5 hover:shadow-none duration-300'>
    <h3 className='text-xl text-myblue font-bold'>{title}</h3>
    <p>{content}</p>
    </div> );
}
 
export default Post;