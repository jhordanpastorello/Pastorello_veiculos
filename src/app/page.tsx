import Image from "next/image";
import {MessageCircle, Instagram,  Facebook} from 'lucide-react'
import NavBar from "@/components/nav/navbar";



export default function Home() {
  
  return (
    
    <main className="flex h-screen w-screen items-center justify-center bg-[url('/images/bg.png')] bg-cover ">
      <NavBar/>
      <div className="fixed right-0 w-5/6 h-screen flex flex-col justify-start items-end ">
        <div className=" m-8 w-2/6 h-2/6 bg-zinc-700/60 rounded-2xl flex flex-col justify-center items-center text-center text-white">
          <h1 className="font-black text-3xl">QUERENDO TROCAR <br/> DE CARRO?</h1>
          <p className="font-semibold mt-8">
            Aqui é o melhor lugar, aproveite!!<br/>
            São ofertas espetaculares e recheadas de beneficios <br/>
            esperando apenas por você, não perca tempo !!!<br/>
            clique em saiba mais, e conheça nossas ofertas.
          </p>
          <button className="animate-bounce text-zinc-700 bg-yellow-400 mt-8 w-5/6 h-1/5 rounded-3xl font-black text-xl">
            <a href="https://wa.me/46999019800"> Saiba Mais!</a>
          </button>

        </div>
      </div>
    </main>
  );
}
