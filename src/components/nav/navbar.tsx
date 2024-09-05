import Image from "next/image";
import {MessageCircle, Instagram,  Facebook, House, Store, CircleAlert } from 'lucide-react'

export default function NavBar() {
  return (
   
      <nav className="fixed left-0 w-1/6 h-screen flex flex-col justify-between items-center sm:p-0 md:p-6 lg:p-8 text-center">
        <Image className="max-sm:mt-4 ml-2 -mt-4" src="/images/logo.png" 
        width={180}
        height={300}
        quality={100}
        alt="Logo"/>

      <div className="flex flex-col  sm:m-16 md:m-0 text-white text-left sm:font-bold md:font-black sm:text-base md:text-2xl ">
        <a className="sm:hover:text-lg md:hover:text-3xl sm:m-0 md:m-2 flex content-center justfy-center items-center  w-32 h-16 rounded-xl" href="/">
          <House size={20} className="max-sm:ml-12 m-2 stroke-2"/> <h2 className="max-sm:hidden ">Home</h2>
        </a>
        <a className="sm:hover:text-lg md:hover:text-3xl sm:m-0 md:m-2 flex  content-center justfy-center items-center   w-32 h-16 rounded-xl" href="../pages/estoque">
          <Store size={20} className="max-sm:ml-12 m-2 stroke-2"/> <h2 className="max-sm:hidden ">Loja</h2>
        </a>
        <a className="sm:hover:text-lg md:hover:text-3xl sm:m-0 md:m-2 flex  content-center justfy-center items-center   w-32 h-16 rounded-xl" href="#">
          <CircleAlert size={20} className="max-sm:ml-12 m-2 stroke-2 "/> <h2 className="max-sm:hidden ">Sobre</h2>
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
