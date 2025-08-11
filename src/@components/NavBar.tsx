import Image from 'next/image';
import SideBar from './SideBar';
export default function NavBar() {
    return (
        <nav className='flex flex-row items-center gap-2 h-16 px-4 bg-stone-50 text-black'>
            <ul className="flex flex-row items-center font-bold gap-4 w-full">
                <li className='flex flex-row font-black items-center gap-2'>
                <Image src="/logo2.jpg" alt="Logo" width={50} height={50} />
                    <a href="#home">MCE E-CELL</a>
                </li>
                <ul className='hidden md:flex flex-row items-center gap-4 ml-auto'>
                <li className=''><a href="#about">About Us</a></li>
                <li className=''><a href="#services">Meet the Team</a></li>
                <li className=''><a href="#contact">Contact</a></li>
                </ul>
                <SideBar />
            </ul>
        </nav>
    )
}