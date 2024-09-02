import Image from "next/image";
import {MessageCircle, Instagram,  Facebook} from 'lucide-react'

export default function NavBar() {
  return (
   
      <nav className="fixed left-0 w-1/6 h-screen flex flex-col justify-between p-2 items-center text-center">
        <Image className="sm:m-24 lg:m-8" src="/images/logo.png" 
        width={240}
        height={500}
        quality={100}
        alt="Logo"/>

      <div className="flex flex-col text-white text-left font-black sm:text-lg md:text-2xl ">
        <a className="hover:text-3xl m-2" href="/">
          <h2>Home</h2>
        </a>
        <a className="hover:text-3xl m-2" href="../pages/estoque">
          <h2>Estoque</h2>
        </a>
        <a className="hover:text-3xl m-2" href="#">
          <h2>Sobre</h2>
        </a>
      </div>
      <div className="m-4 flex">
        <a href="https://www.instagram.com/pastorelloveiculos/" className="sm:h-5 sm:w-5 lg:h-10 lg:w-10 m-0 flex justify-center">
        <Instagram color="yellow" size={20}/>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61561449397900" className="sm:h-5 sm:w-5 lg:h-10 lg:w-10 m-0 flex justify-center">
          <Facebook color="yellow" size={20}/>
        </a>
        <a href="https://wa.me/46999019800" className="sm:h-5 sm:w-5 lg:h-10 lg:w-10 m-0 flex justify-center">
          <MessageCircle color="yellow" size={20}/>
        </a>
      </div>
      </nav>
      
  );
}
