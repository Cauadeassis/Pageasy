"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./styles.module.scss";

import Header from "../components/header";
import Carousel from "../components/carousel";
import ServicesSection from "../components/servicesSection";
import BudgetSimulator from "../components/budgetSimulator";
import FACSection from "../components/FACsection";
import Footer from "../components/footer";

export default function Home() {
  const router = useRouter();

  const NAV_LINKS = [
    { id: "#inicio", label: "Início" },
    { id: "#portfolio", label: "Portfólio" },
    { id: "#servicos", label: "Serviços" },
    { id: "#orcamento", label: "Orçamento" },
    { id: "#faq", label: "Perguntas" },
    { id: "#equipe", label: "Nossa equipe" },
    { id: "#contato", label: "Contato" },
  ];

  return (
    <div className={styles.body}>
      <Header links={NAV_LINKS} />

      <main>
        <section className={styles.hero} id="inicio">
          <h1>Criamos sites profissionais para sua empresa</h1>
          <p>
            Páginas modernas, simples e que <b>geram clientes.</b>
          </p>
          <a href="#orcamento">Solicitar orçamento</a>
        </section>
        <Carousel />
        <ServicesSection />
        <BudgetSimulator />
        <FACSection />
        <section id="equipe" className={styles.developersSection}>
          <h2>Nossa equipe</h2>
          <p>
            Conheça a fundo cada um dos desenvolvedores da Pageasy, para
            entender melhor como a nossa empresa funciona.
          </p>
          <Link className={`${styles.link} link`} href="/equipe">
            Conhecer
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
