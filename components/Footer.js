import Link from "next/link";

const Footer = () => {
    return ( 
        <footer className="flex h-[30vh] p-5 justify-between">
<div className="flex flex-col gap-5 justify-center">
    <h2 className="text-white font-bold text-2xl">Contact Us now</h2>
    <a href="" className="text-gray-300">Funshoajayi29@gmail.com</a>
    <a href="" className="text-gray-300">+2348078559693</a>
</div>

<div className="flex items-end">
    <Link href='/'>
<h4 className="font-bold text-2xl">
            <p className="text-3xl text-white inline">B</p>
            logly</h4>
</Link>
</div>



        </footer>
    );
}
 
export default Footer;