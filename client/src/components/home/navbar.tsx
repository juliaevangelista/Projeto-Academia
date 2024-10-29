import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="flex flex-row w-full items-center justify-center text-base">
      <Link href="#logo" className="mr-[100px] font-bold text-2xl">
        Leo & Cia Academia
      </Link>
      <nav className="flex justify-between items-center gap-[40px] h-[72px] px-8">
        <Link href="#" className="">
          Inicio
        </Link>
        <Link href="#" className="">
          Sobre Nós
        </Link>
        <Link href="#" className="">
          Treinos Disponiveis
        </Link>
        <Link href="#" className="">
          Plano
        </Link>
        <Link href="#" className="">
          Contato
        </Link>
      </nav>
      <button className="bg-slate-400 rounded-lg p-1 ml-[121.5px]">
        Junte-se a nós
      </button>
    </div>
  );
};
