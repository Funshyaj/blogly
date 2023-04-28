import Link from "next/link";


const Header = ({btnName, route}) => {
    return ( <div>
        <header className="flex justify-between p-5">
            <h4 className="font-bold text-2xl">
            <span className="text-3xl">B</span>
            logly</h4>
            <Link href={`/${route}`} className="btn">{btnName}</Link>
        </header>
    </div> );
}
 
export default Header;