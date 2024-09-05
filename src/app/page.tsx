import Image from "next/image";

import NavBar from "@/components/nav/navbar";



export default function Home() {
  
  return (
    
    <main className="flex h-screen w-screen items-center justify-center bg-[url('/images/bg.png')] bg-cover ">
      <NavBar/>
      <div className="fixed right-0 w-5/6 h-screen flex flex-col justify-start items-end max-sm:justify-center max-sm:items-center ">
        <div className=" m-8 max-sm:w-5/6 md:w-3/6 lg:w-3/6  masx-sm:h-5/6 lg:h-2/6 bg-zinc-700/60 rounded-2xl flex flex-col justify-center items-center text-center text-white">
          <h1 className="font-black max-sm:text-2xl ">QUERENDO TROCAR <br/> DE CARRO?</h1>
          <p className="max-sm:font-thin mt-6 m-4">
            Aqui é o melhor lugar, aproveite!!<br/>
            São ofertas espetaculares e recheadas de beneficios <br/>
            esperando apenas por você, não perca tempo !!!<br/>
            clique em saiba mais, e conheça nossas ofertas.
          </p>
          <button className="animate-bounce text-zinc-700 bg-yellow-400 mt-4 w-5/6 h-1/5 rounded-3xl font-black text-xl">
            <a href="https://wa.me/46999019800"> Saiba Mais!</a>
          </button>

        </div>
      </div>
    </main>
  );
}
