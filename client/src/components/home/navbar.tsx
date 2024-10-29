import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="flex flex-row w-full items-center justify-center text-base">
      <Link href="#logo" className="mr-[100px] font-bold text-2xl">
        Leo & Cia Academia
      </Link>
      <nav className="flex justify-between items-center gap-[40px] h-[72px] px-8">
        <Link href="#section-video" className="">
          Inicio
        </Link>
        <Link href="#section-benefits" className="">
          Sobre Nós
        </Link>
        <Link href="#section-training" className="">
          Treinos Disponiveis
        </Link>
        <Link href="#section-inspiring" className="">
          Plano
        </Link>
        <Link href="#section-contact" className="">
          Contato
        </Link>
      </nav>
      <button className="bg-neutral-300 text-[#68686A] rounded-lg p-1 ml-[121.5px]">
        Junte-se a nós
      </button>
    </div>
  );
};
