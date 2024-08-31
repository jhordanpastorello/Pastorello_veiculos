`use client`

import NavBar from "@/components/nav/navbar";

let Veiculos =[
  {
    id:"1",
    image:"/images/carros/iveco.HEIC",
    name:"Logo Pastorello Veiculos",
    valor:99.999,
  },
  {
    id:"1",
    image:"/images/carros/iveco.HEIC",
    name:"Logo Pastorello Veiculos",
    valor:99.999,
  },
  {
    id:"1",
    image:["/images/carros/iveco.HEIC"],
    name:"Logo Pastorello Veiculos",
    valor:99.999,
  },
  {
    id:"1",
    image:"/images/carros/iveco.HEIC",
    name:"Logo Pastorello Veiculos",
    valor:99.999,
  },
  {
    id:"1",
    image:"/images/carros/iveco.HEIC",
    name:"Logo Pastorello Veiculos",
    valor:99.999,
  },
]

export default function Estoque() {

  

  return (
    <main className="flex h-screen w-screen items-center justify-center bg-[url('/images/bgest.png')] bg-cover ">
      <NavBar/>
      <div className=" fixed right-0 scrollbar scrollbar-thumb-yellow-400 overflow-auto scroll-smooth accent-transparent h-screen w-5/6 pt-8 pb-8 grid grid-cols-4 gap-12 justify-center items-center text-center">
      {Veiculos.map(veiculo => (
        <div key={veiculo.id} className="w-72 h-96 bg-slate-300 rounded-2xl shadow-2xl">
        <div className="image w-full h-56 bg-zinc-600 rounded-t-2xl"><img className="w-full h-56 rounded-t-2xl shadow-lg" src={`${veiculo.image ? veiculo.image : ""}`} alt="Imagem não Encontrada" /></div>
        <div className="nome">
          <h2 className="w-full p-2 bg-slate-300 font-bold text-lg">{veiculo.name}</h2>
        </div>
        <div className="preco w-full bg-slate-300 font-black text-5xl">
          <h1>
            {veiculo.valor}
          </h1>
        </div>
        <button className="w-4/5 min-h-12 mt-2 bg-yellow-400 rounded-full text-zinc-800 hover:bg-zinc-800 hover:text-yellow-400">
          <a className="font-black" href="http://wa.me/46999019800">SAIBA MAIS</a>
        </button>
      </div>
      ))}
        

      </div>
    </main>
  );
}
