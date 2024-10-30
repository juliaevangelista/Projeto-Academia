"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-row w-full items-center justify-between text-base p-4">
      <Link href="#logo" className="font-bold text-2xl">
        Leo & Cia Academia
      </Link>
      <div className="hidden md:flex items-center gap-[40px] h-[72px] px-8">
        <Link href="#section-video">Inicio</Link>
        <Link href="#section-benefits">Sobre Nós</Link>
        <Link href="#section-training">Treinos Disponíveis</Link>
        <Link href="#section-inspiring">Plano</Link>
        <Link href="#section-contact">Contato</Link>
      </div>
      <button className="hidden md:block bg-neutral-300 text-[#68686A] rounded-lg p-1">
        Junte-se a nós
      </button>
      <button
        className="md:hidden text-2xl"
        onClick={toggleMenu}
      >
        <FaBars />
      </button>
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 flex flex-col items-start gap-4 md:hidden">
          <Link href="#section-video" onClick={toggleMenu}>Inicio</Link>
          <Link href="#section-benefits" onClick={toggleMenu}>Sobre Nós</Link>
          <Link href="#section-training" onClick={toggleMenu}>Treinos Disponíveis</Link>
          <Link href="#section-inspiring" onClick={toggleMenu}>Plano</Link>
          <Link href="#section-contact" onClick={toggleMenu}>Contato</Link>
          <button
            className="bg-neutral-300 text-[#68686A] rounded-lg p-1 w-full"
            onClick={toggleMenu}
          >
            Junte-se a nós
          </button>
        </div>
      )}
    </div>
  );
};
