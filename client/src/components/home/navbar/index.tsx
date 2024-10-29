import React from "react";

export const Navbar = () => {
  return (
    <div className="flex flex-row w-full items-center justify-center text-base">
      <a href="#logo" className="mr-[100px] font-bold text-2xl">
        Leo & Cia Academia
      </a>
      <nav className="flex justify-between items-center gap-[40px] h-[72px] px-8">
        <a href="#" className="">
          Inicio
        </a>
        <a href="#" className="">
          Sobre Nós
        </a>
        <a href="#" className="">
          Treinos Disponiveis
        </a>
        <a href="#" className="">
          Plano
        </a>
        <a href="#" className="">
          Contato
        </a>
      </nav>
      <button className="bg-slate-400 rounded-lg p-1 ml-[121.5px]">Junte-se a nós</button>
    </div>
  );
};
