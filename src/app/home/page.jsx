"use client"
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <Image src="/minhaFoto.jpg" alt="Minha foto" className={styles.image} width={200} height={200} priority />
                <h2 className={styles.name}>Julia Simões Neves</h2>
                <p>
                Olá! Seja bem-vindo(a) ao meu site! Meu nome é Julia, sou estudante do curso Desenvolvimento de Sistemas pelo SENAI, e faço parte da Turma: 2TDS1 juntamente com os docentes: Marcelo Carboni & Thiago Ferreira.
                Nesse site estou explorando o universo das APIs com um toque bibliotecário. Este projeto usa minha API de Biblioteca para mostrar livros e autores — tudo com um visual divertido e funcional. Abaixo você pode explorar meus projetos, conhecer as linguagens que utilizo, e conferir meu perfil profissional clicando nos ícones abaixo 🚀.
                </p>
            </div>
            <div className={styles.icons}>
                <a href="https://github.com/Julianeves01" target="_blank" rel="noopener noreferrer">
                    <Image src="/github.png" alt="GitHub" className={styles.icon} width={32} height={32}/>
                </a>
                <a href="https://instagram.com/julia.s.neves" target="_blank" rel="noopener noreferrer">
                    <Image src="/instagram.png" alt="Instagram" className={styles.icon} width={32} height={32} />
                </a>
                <a href="https://www.linkedin.com/in/julia-nevess/" target="_blank" rel="noopener noreferrer">
                    <Image src="/linkedin.png" alt="Linkedin" className={styles.icon} width={32} height={32} />
                </a>
            </div>
            <div className={styles.buttonContainer}>
                <Link href="/" className={styles.button}>Página Inicial</Link>
                <Link href="/apiinfo" className={styles.button}>Ver Catálogo</Link>
            </div>
        </div>
    );
}