"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";
import Carousel from "./components/carousel";
import ServicesSection from "./components/servicesSection";
import BudgetSimulator from "./components/budgetSimulator";
import FACSection from "./components/FACsection";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.body}>
      <header>
        <Image
          src="/logo.png"
          alt="logo"
          className={styles.logo}
          width={52}
          height={52}
        />
        <nav>
          <a href="#inicio">Início</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#servicos">Serviços</a>
          <a href="#orcamento">Orçamento</a>
          <a href="#faq">Perguntas</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section className={styles.hero} id="inicio">
          <h1>Criamos sites profissionais para sua empresa</h1>
          <p>
            Sites modernos, rápidos e que <b>geram clientes.</b>
          </p>
          <a href="#orcamento">Solicitar orçamento</a>
        </section>
        <Carousel /> {/* Para ver como é, visite components/carousel*/}
        <ServicesSection />
        <BudgetSimulator />{" "}
        {/* Para ver como é, visite components/budgetSimulator*/}
        <FACSection /> {/* Para ver como é, visite components/FACsection*/}
        {/* Seção que deve ser implementada em breve
          <section id="desenvolvedores" className={styles.developersSection}>
            <h2>Nossos Desenvolvedores</h2>
            <p>Conheça a fundo cada um dos desenvolvedores da Pageasy, e como nossa empresa funciona.</p>
            <button onClick={() => router.push("/bio")}>Conhecer</button>
          </section> 

          CSS

          .developersSection {
  text-align: center;

  & button {
    margin: 1rem 0;
    text-decoration: none;
    transition: var(--transition);
    border: none;
    border-radius: var(--radius-sm);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    color: var(--white);
    background-color: var(--blue-600);
    padding: 0.875rem 2.25rem;
    box-shadow: var(--shadow-md);
    animation: fadeUp 0.8s 0.3s ease both;

    &:hover {
      background-color: var(--blue-700);
      box-shadow: var(--shadow-lg);
      transform: translateY(5px);
    }
  }
}
        */}
      </main>

      <footer id="contato" className={styles.footer}>
        <h2>Contato</h2>
        <p>Email: pageasy.muriae@gmail.com</p>
        <p>WhatsApp: +55 (32) 98406-1401</p>
        <div className={styles.footerLinks}>
          <a href="https://wa.me/5532984061401">WhatsApp</a>
          <a href="#orcamento">Solicitar Orçamento</a>
        </div>
      </footer>
    </div>
  );
}
