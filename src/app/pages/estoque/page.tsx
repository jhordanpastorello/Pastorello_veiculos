`use client`

import NavBar from "@/components/nav/navbar";
import { useEffect, useState } from "react";

let Veiculos =[
  {
    id:"1",
    image:[

      { id:"1",
        img:"/images/carros/versa/foto1.jpg"
      },
      { id:"2",
        img:"/images/carros/versa/foto2.jpg"
      },
      { id:"3",
        img:"//images/carros/versa/foto3.jpg"
      },
      { id:"4",
        img:"/images/carros/versa/foto4.jpg"
      },
      { id:"5",
        img:"/images/carros/versa/foto5.jpg"
      },
      { id:"6",
        img:"//images/carros/versa/foto6.jpg"
      },
      { id:"7",
        img:"/images/carros/versa/foto7.jpg"
      },
      { id:"8",
        img:"/images/carros/versa/foto8.jpg"
      },
      { id:"9",
        img:"/images/carros/versa/foto9.jpg"
      },
      { id:"10",
        img:"/images/carros/versa/foto10.jpg"
      },
      { id:"11",
        img:"/images/carros/versa/foto11.jpg"
      },
    ],
    name:"Nissan Versa Unique 2016",
    valor:"62.900",
  },
  {
    id:"2",
    image:[

      { id:"1",
        img:"/images/carros/golf-2013/foto1.jpg"
      },
      { id:"2",
        img:"/images/carros/golf-2013/foto2.jpg"
      },
      { id:"3",
        img:"//images/carros/golf-2013/foto3.jpg"
      },
      { id:"4",
        img:"/images/carros/golf-2013/foto4.jpg"
      },
      { id:"5",
        img:"/images/carros/golf-2013/foto5.jpg"
      },
      { id:"6",
        img:"//images/carros/golf-2013/foto6.jpg"
      },
      { id:"7",
        img:"/images/carros/golf-2013/foto7.jpg"
      },
      { id:"8",
        img:"/images/carros/golf-2013/foto8.jpg"
      },
    ],
    name:"Golf Sportline 2013",
    valor:"55.900",
  },
  {
    id:"3",
    image:[

      { id:"1",
        img:"/images/carros/sonata/foto1.jpg"
      },
      { id:"2",
        img:"/images/carros/sonata/foto2.jpg"
      },
      { id:"3",
        img:"/images/carros/sonata/foto3.jpg"
      },
      { id:"4",
        img:"/images/carros/sonata/foto4.jpg"
      },
      { id:"5",
        img:"/images/carros/sonata/foto5.jpg"
      },
      { id:"6",
        img:"/images/carros/sonata/foto6.jpg"
      },
      { id:"7",
        img:"/images/carros/sonata/foto7.jpg"
      },
      { id:"8",
        img:"/images/carros/sonata/foto8.jpg"
      },
      { id:"9",
        img:"/images/carros/sonata/foto9.jpg"
      },
      { id:"10",
        img:"/images/carros/sonata/foto10.jpg"
      },
      { id:"11",
        img:"/images/carros/sonata/foto11.jpg"
      },
      { id:"12",
        img:"/images/carros/sonata/foto12.jpg"
      },
      { id:"13",
        img:"/images/carros/sonata/foto13.jpg"
      },
    ],
    name:"Hyundai Sonata 2012",
    valor:"63.900",
  },
  {
    id:"4",
    image:[

      { id:"1",
        img:"/images/carros/audi-2015/foto1.jpg"
      },
      { id:"2",
        img:"/images/carros/audi-2015/foto2.jpg"
      },
      { id:"3",
        img:"/images/carros/audi-2015/foto3.jpg"
      },
      { id:"4",
        img:"/images/carros/audi-2015/foto4.jpg"
      },
      { id:"5",
        img:"/images/carros/audi-2015/foto5.jpg"
      },
      { id:"6",
        img:"/images/carros/audi-2015/foto6.jpg"
      },
      { id:"7",
        img:"/images/carros/audi-2015/foto7.jpg"
      },
      { id:"8",
        img:"/images/carros/audi-2015/foto8.jpg"
      },
      { id:"9",
        img:"/images/carros/audi-2015/foto9.jpg"
      },
      { id:"10",
        img:"/images/carros/audi-2015/foto10.jpg"
      },
      { id:"11",
        img:"/images/carros/audi-2015/foto11.jpg"
      },
      { id:"12",
        img:"/images/carros/audi-2015/foto12.jpg"
      },
      { id:"13",
        img:"/images/carros/audi-2015/foto13.jpg"
      },
    ],
    name:"Audi A3 Sedan FSI 2015",
    valor:"72.900",
  },
  {
    id:"5",
    image:[

      { id:"1",
        img:"/images/carros/hb20/foto1.jpg"
      },
      { id:"2",
        img:"/images/carros/hb20/foto2.jpg"
      },
      { id:"3",
        img:"/images/carros/hb20/foto3.jpg"
      },
      { id:"4",
        img:"/images/carros/hb20/foto4.jpg"
      },
      { id:"5",
        img:"/images/carros/hb20/foto5.jpg"
      },
      { id:"6",
        img:"/images/carros/hb20/foto6.jpg"
      },
      { id:"7",
        img:"/images/carros/hb20/foto7.jpg"
      },
      { id:"8",
        img:"/images/carros/hb20/foto8.jpg"
      },
      { id:"9",
        img:"/images/carros/hb20/foto9.jpg"
      },
      { id:"10",
        img:"/images/carros/hb20/foto10.jpg"
      },
      { id:"11",
        img:"/images/carros/hb20/foto11.jpg"
      },
      { id:"12",
        img:"/images/carros/hb20/foto12.jpg"
      },
      { id:"13",
        img:"/images/carros/hb20/foto13.jpg"
      },
    ],
    name:"Hyundai HB20 2022",
    valor:"82.900",
  },
  {
    id:"6",
    image:[

      { id:"1",
        img:"/images/carros/l200/foto1.jpg"
      },
      { id:"2",
        img:"/images/carros/l200/foto2.jpg"
      },
      { id:"3",
        img:"/images/carros/l200/foto3.jpg"
      },
      { id:"4",
        img:"/images/carros/l200/foto4.jpg"
      },
      { id:"5",
        img:"/images/carros/l200/foto5.jpg"
      },
      { id:"6",
        img:"/images/carros/l200/foto6.jpg"
      },
      { id:"7",
        img:"/images/carros/l200/foto7.jpg"
      },
      { id:"8",
        img:"/images/carros/l200/foto8.jpg"
      },
      { id:"9",
        img:"/images/carros/l200/foto9.jpg"
      },
      { id:"10",
        img:"/images/carros/l200/foto10.jpg"
      },
      { id:"11",
        img:"/images/carros/l200/foto11.jpg"
      },
      { id:"12",
        img:"/images/carros/l200/foto12.jpg"
      },
      { id:"13",
        img:"/images/carros/l200/foto13.jpg"
      },
    ],
    name:"Mitsubishi L200 2005",
    valor:"54.900",
  },
  {
    id:"7",
    image:[

      { id:"1",
        img:"/images/carros/onix/foto1.jpg"
      },
      { id:"2",
        img:"/images/carros/onix/foto2.jpg"
      },
      { id:"3",
        img:"/images/carros/onix/foto3.jpg"
      },
      { id:"4",
        img:"/images/carros/onix/foto4.jpg"
      },
      { id:"5",
        img:"/images/carros/onix/foto5.jpg"
      },
      { id:"6",
        img:"/images/carros/onix/foto6.jpg"
      },
      { id:"7",
        img:"/images/carros/onix/foto7.jpg"
      },
      { id:"8",
        img:"/images/carros/onix/foto8.jpg"
      },
      { id:"9",
        img:"/images/carros/onix/foto9.jpg"
      },
      { id:"10",
        img:"/images/carros/onix/foto10.jpg"
      },
      { id:"11",
        img:"/images/carros/onix/foto11.jpg"
      },
      { id:"12",
        img:"/images/carros/onix/foto12.jpg"
      },
      { id:"13",
        img:"/images/carros/onix/foto13.jpg"
      },
    ],
    name:"Chevrolet Onix LTZ 2014",
    valor:"49.900",
  },
  {
    id:"8",
    image:[

      { id:"1",
        img:"/images/carros/s10/foto1.jpg"
      },
      { id:"2",
        img:"/images/carros/s10/foto2.jpg"
      },
      { id:"3",
        img:"/images/carros/s10/foto3.jpg"
      },
      { id:"4",
        img:"/images/carros/s10/foto4.jpg"
      },
      { id:"5",
        img:"/images/carros/s10/foto5.jpg"
      },
      { id:"6",
        img:"/images/carros/s10/foto6.jpg"
      },
      { id:"7",
        img:"/images/carros/s10/foto7.jpg"
      },
      { id:"8",
        img:"/images/carros/s10/foto8.jpg"
      },
      { id:"9",
        img:"/images/carros/s10/foto9.jpg"
      },
      { id:"10",
        img:"/images/carros/s10/foto10.jpg"
      },
      { id:"11",
        img:"/images/carros/s10/foto11.jpg"
      },
      { id:"12",
        img:"/images/carros/s10/foto12.jpg"
      },
      { id:"13",
        img:"/images/carros/s10/foto13.jpg"
      },
    ],
    name:"Chevrolet S10 2013",
    valor:"82.900",
  },
  
]

export default function Estoque() {

  
  
  return (
    <main className="flex h-screen w-screen items-center justify-center bg-[url('/images/bgest.png')] bg-cover ">
      <NavBar/>
      <div className=" fixed right-0 scrollbar scrollbar-thumb-yellow-400 overflow-auto scroll-smooth accent-transparent h-screen w-5/6 pt-8 pb-8 grid 2xl:grid-cols-4 md:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1 gap-12 justify-center items-center content-center text-center">
      {Veiculos.map(veiculo => (
        <div key={veiculo.id} className="w-72 h-96 bg-slate-300 rounded-2xl shadow-2xl">
        <div className="image w-full h-56 bg-zinc-600 rounded-t-2xl flex  justify-center items-center"><img className="w-full h-56 rounded-t-2xl shadow-lg" src={`${veiculo.image[0].img}`} alt="" /> </div>
        <div className="nome">
          <h2 className="w-full p-2 bg-slate-300 font-bold text-xl">{veiculo.name}</h2>
        </div>
        <div className="preco w-full bg-slate-300 font-black text-5xl">
          <h1>
            {veiculo.valor}
          </h1>
        </div>
        <button className="w-4/5 min-h-8 mt-4 bg-yellow-400 rounded-full text-zinc-800 hover:bg-zinc-800 hover:text-yellow-400">
          <a className="font-black" href="http://wa.me/46999019800">SAIBA MAIS</a>
        </button>
      </div>
      ))}
        

      </div>
    </main>
  );
}
