"use client";
import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 font-Poppins">
            <div className="bg-pink-200/90 rounded-xl shadow-lg p-5 text-center max-w-xl w-full mb-5">
                <Image
                    src="/minhaFoto.jpg"
                    alt="Minha Foto"
                    width={150}
                    height={150}
                    priority
                    className="rounded-full object-cover mb-4 mx-auto"
                />
                <h2 className="text-2xl font-bold mb-2">Julia Simões Neves</h2>
                <p className="text-gray-700 mb-4 text-base">
                    Olá! Seja bem-vindo(a) ao meu site! Meu nome é Julia, sou estudante do curso Desenvolvimento de Sistemas pelo SENAI, e faço parte da Turma: 2TDS1 juntamente com os docentes: Marcelo Carboni & Thiago Ferreira.
                    Este projeto explora uma API de Filmes de Animação — tudo com um visual divertido e funcional. Abaixo você pode explorar meus projetos, conhecer as linguagens que utilizo, e conferir meu perfil profissional clicando nos ícones abaixo 🚀.
                </p>
                <div className="flex gap-5 justify-center mt-2 mb-6">
                    <a href="https://github.com/Julianeves01" target="_blank" rel="noopener noreferrer">
                        <Image src="/github.png" alt="GitHub" width={40} height={40} className="w-10 h-10 transition-transform duration-300 hover:scale-125" />
                    </a>
                    <a href="https://instagram.com/julia.s.neves" target="_blank" rel="noopener noreferrer">
                        <Image src="/instagram.png" alt="Instagram" width={40} height={40} className="w-10 h-10 transition-transform duration-300 hover:scale-125" />
                    </a>
                    <a href="https://www.linkedin.com/in/julia-nevess/" target="_blank" rel="noopener noreferrer">
                        <Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} className="w-10 h-10 transition-transform duration-300 hover:scale-125" />
                    </a>
                </div>
            </div>
        </div>
    );
}