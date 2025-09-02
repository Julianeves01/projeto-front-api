"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from './apiinfo.module.css';

export default function ApiInfo() {
    return (
        <div className={styles.container}>
            {/* Header com gradiente vermelho */}
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <div className={styles.heroSection}>
                        <div className={styles.iconContainer}>
                            <span className={styles.heroIcon}>📚</span>
                        </div>
                        <h1 className={styles.mainTitle}>
                            Documentação da API Cinema
                        </h1>
                        <p className={styles.subtitle}>
                            Explore nossa API completa de filmes com informações detalhadas sobre cinema, 
                            atores, diretores e muito mais
                        </p>
                    </div>
                </div>
            </header>

            {/* Conteúdo Principal */}
            <main className={styles.main}>
                {/* Seção de Introdução */}
                <section className={styles.introSection}>
                    <div className={styles.introCard}>
                        <div className={styles.imageSection}>
                            <Image
                                src="/image/cinema.png"
                                alt="Cinema API"
                                width={120}
                                height={120}
                                className={styles.apiImage}
                            />
                        </div>
                        <div className={styles.textSection}>
                            <h2 className={styles.introTitle}>Cinema API REST</h2>
                            <p className={styles.introDescription}>
                                Uma API robusta que oferece acesso completo a informações cinematográficas. 
                                Explore dados sobre filmes, gêneros, diretores, elenco e classificações 
                                com endpoints simples e respostas em JSON.
                            </p>
                            <div className={styles.badges}>
                                <span className={styles.badge}>REST</span>
                                <span className={styles.badge}>JSON</span>
                                <span className={styles.badge}>Gratuita</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Grid de Cards */}
                <section className={styles.cardsSection}>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <div className={styles.cardIcon}>
                                <span>📖</span>
                            </div>
                            <h3 className={styles.cardTitle}>Documentação Completa</h3>
                            <p className={styles.cardText}>
                                Acesse nossa documentação detalhada com exemplos práticos
                            </p>
                            <a 
                                href="https://api.sampleapis.com/movies/animation"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.cardButton}
                            >
                                Ver Documentação →
                            </a>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.cardIcon}>
                                <span>🔗</span>
                            </div>
                            <h3 className={styles.cardTitle}>URL Base da API</h3>
                            <p className={styles.cardText}>
                                Endpoint principal para todas as requisições
                            </p>
                            <code className={styles.codeSnippet}>
                                https://api.sampleapis.com/movies
                            </code>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.cardIcon}>
                                <span>🎬</span>
                            </div>
                            <h3 className={styles.cardTitle}>Testar Agora</h3>
                            <p className={styles.cardText}>
                                Explore nossa coleção de filmes em tempo real
                            </p>
                            <Link href="/entidade" className={styles.cardButton}>
                                Explorar Filmes →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Seção de Endpoints */}
                <section className={styles.endpointsSection}>
                    <h2 className={styles.sectionTitle}>Endpoints Disponíveis</h2>
                    
                    <div className={styles.endpointCard}>
                        <div className={styles.endpointHeader}>
                            <span className={styles.methodBadge}>GET</span>
                            <code className={styles.endpointPath}>/movies</code>
                        </div>
                        <h4 className={styles.endpointTitle}>Listar todos os filmes</h4>
                        <p className={styles.endpointDescription}>
                            Retorna uma lista completa com todos os filmes disponíveis no catálogo
                        </p>
                    </div>

                    <div className={styles.endpointCard}>
                        <div className={styles.endpointHeader}>
                            <span className={styles.methodBadge}>GET</span>
                            <code className={styles.endpointPath}>/movies/{"{id}"}</code>
                        </div>
                        <h4 className={styles.endpointTitle}>Buscar filme por ID</h4>
                        <p className={styles.endpointDescription}>
                            Retorna informações detalhadas de um filme específico através do seu ID único
                        </p>
                    </div>
                </section>

                {/* Estrutura de Resposta */}
                <section className={styles.responseSection}>
                    <h2 className={styles.sectionTitle}>Estrutura da Resposta JSON</h2>
                    
                    <div className={styles.attributesGrid}>
                        <div className={styles.attributeItem}>
                            <code className={styles.attributeKey}>id</code>
                            <span className={styles.attributeDesc}>Identificador único</span>
                        </div>
                        <div className={styles.attributeItem}>
                            <code className={styles.attributeKey}>title</code>
                            <span className={styles.attributeDesc}>Título do filme</span>
                        </div>
                        <div className={styles.attributeItem}>
                            <code className={styles.attributeKey}>genre</code>
                            <span className={styles.attributeDesc}>Gênero cinematográfico</span>
                        </div>
                        <div className={styles.attributeItem}>
                            <code className={styles.attributeKey}>director</code>
                            <span className={styles.attributeDesc}>Nome do diretor</span>
                        </div>
                        <div className={styles.attributeItem}>
                            <code className={styles.attributeKey}>poster</code>
                            <span className={styles.attributeDesc}>URL do pôster</span>
                        </div>
                        <div className={styles.attributeItem}>
                            <code className={styles.attributeKey}>cast</code>
                            <span className={styles.attributeDesc}>Elenco principal</span>
                        </div>
                    </div>
                </section>

                {/* Navegação */}
                <section className={styles.navigationSection}>
                    <div className={styles.navButtons}>
                        <Link href="/" className={styles.navButton}>
                            ← Voltar ao Início
                        </Link>
                        <Link href="/entidade" className={styles.navButtonPrimary}>
                            Explorar Filmes 🎬
                        </Link>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className={styles.footer}>
                <p className={styles.footerText}>
                    © 2025
                </p>
            </footer>
        </div>
    );
}