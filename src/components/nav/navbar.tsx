import Image from "next/image";
import {MessageCircle, Instagram,  Facebook} from 'lucide-react'

export default function NavBar() {
  return (
   
      <nav className="fixed left-0 w-1/6 h-screen flex flex-col justify-between items-center text-center">
        <Image className="m-8" src="/images/logo.png" 
        width={240}
        height={500}
        quality={100}
        alt="Logo"/>

      <div className="flex flex-col text-white text-left font-black text-2xl ">
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
      <div className="m-8 flex">
        <a href="https://www.instagram.com/pastorelloveiculos/" className="h-10 w-10 m-0 flex justify-center">
        <Instagram color="yellow" size={20}/>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61561449397900" className="h-10 w-10 m-0 flex justify-center">
          <Facebook color="yellow" size={20}/>
        </a>
        <a href="https://wa.me/46999019800" className="h-10 w-10 m-0 flex justify-center">
          <MessageCircle color="yellow" size={20}/>
        </a>
      </div>
      </nav>
      
  );
}
