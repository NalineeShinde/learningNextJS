import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
           <Image src="/logo.png" width={130} height={80} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
            <Link href="/test"><a>Practice</a></Link>
        </nav>
     );
}
 
export default Navbar;