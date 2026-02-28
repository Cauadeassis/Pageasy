"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./style.module.css";
import calculatePrice, { Plan } from "./script";

export default function Home() {
    const [pages, setPages] = useState(1);
    const [plan, setPlan] = useState<Plan>("start");
    const [blog, setBlog] = useState(false);
    const [seo, setSeo] = useState(false);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        setPrice(calculatePrice({ pages, plan, blog, seo }));
    }, [pages, plan, blog, seo]);

    return (
        <div className={styles.body}>
            <header>
                <Image
                    src="/logo.jpeg"
                    alt="logo"
                    className={styles.logo}
                    width={52}
                    height={52}
                />
                <nav>
                    <a href="#inicio">Início</a>
                    <a href="#servicos">Serviços</a>
                    <a href="#portfolio">Portfólio</a>
                    <a href="#orcamento">Orçamento</a>
                    <a href="#contato">Contato</a>
                </nav>
            </header>

            <main>
                <section className={styles.hero} id="inicio">
                    <h1>Criamos sites profissionais para sua empresa</h1>
                    <p>Sites modernos, rápidos e que <b>geram clientes.</b></p>
                    <a href="#orcamento">Solicitar Orçamento</a>
                </section>

                <section id="servicos" className={styles.services}>
                    <p>Pacotes</p>
                    <h2>Nossos Serviços</h2>
                    <div className={styles.cardsContainer}>
                        <div>
                            <h3>Plano Start</h3>
                            <p>Ideal para empresas que querem sair do amadorismo! Aqui você encontra: Página institucional ou Portfólio, layout responsivo, hospedagem e mais!</p>
                        </div>
                        <div>
                            <h3>Plano Pro</h3>
                            <p>Estrutura profissional, sites com múltiplas páginas, menu de navegação, Google Maps integrado, SEO básico, hospedagem e suporte prioritário.</p>
                        </div>
                        <div>
                            <h3>Plano Elite</h3>
                            <p>Sistemas personalizados (micro S.A.A.S), sistemas de login, banco de dados, área administrativa e atualizações técnicas contínuas.</p>
                        </div>
                    </div>
                    <a href="#contato" className={styles.ctaLink}>Dúvidas? Entre em contato</a>
                </section>

                <section id="portfolio" className={styles.portfolio}>
                    <h2>Portfólio</h2>
                    <div className={styles.filtros}>
                        <button>Todos</button>
                        <button>Advogado</button>
                        <button>Clínica</button>
                    </div>
                    <div className={styles.cardsContainer} id="projetos">
                        <div>
                            <h3>Site Psicólogo Exemplo</h3>
                            <Image src="/sitePsicologia.png" alt="Site psicólogo" width={200} height={150} />
                            <p>Site moderno, que atende todas as necessidades do futuro cliente (Plano Pro).</p>
                            <a href="/site-psico/psicologo.html">Acessar</a>
                        </div>
                        <div>
                            <h3>Pet Shop</h3>
                            <Image src="/sitePetshop.png" alt="Site pet shop" width={200} height={150} />
                            <p>Site com agendamento online.</p>
                            <a href="#">Acessar</a>
                        </div>
                        <div>
                            <h3>Advocacia</h3>
                            <Image src="/siteAdvocacia.png" alt="Site advogados" width={200} height={150} />
                            <p>Site para advogados</p>
                            <a href="/site-academia/academia.html">Acessar</a>
                        </div>
                    </div>
                </section>

                <section id="orcamento" className={styles.orcamento}>
                    <h2>Simulador de Orçamento</h2>
                    <div className={styles.orcamentoForm}>
                        <label>
                            Páginas
                            <input
                                type="number"
                                min={1}
                                value={pages}
                                onChange={(e) => setPages(Math.max(1, Number(e.target.value)))}
                            />
                        </label>
                        <label>
                            Plano
                            <select value={plan} onChange={(e) => setPlan(e.target.value as Plan)}>
                                <option value="start">Start</option>
                                <option value="pro">Pro</option>
                                <option value="elite">Elite</option>
                            </select>
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                checked={blog}
                                onChange={(e) => setBlog(e.target.checked)}
                            />
                            Incluir Blog (+R$300)
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                checked={seo}
                                onChange={(e) => setSeo(e.target.checked)}
                            />
                            SEO Básico (+R$200)
                        </label>
                    </div>
                    <div className={styles.priceDisplay}>
                        <span>Total estimado</span>
                        R$ {price.toLocaleString("pt-BR")}
                    </div>
                </section>

                <section id="faq" className={styles.faq}>
                    <h2>Perguntas Frequentes</h2>
                    <div className={styles.faqList}>
                        <div className={styles.faqItem}>
                            <h3>Quanto tempo leva?</h3>
                            <p>De 5 a 15 dias dependendo do projeto.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Vocês oferecem suporte?</h3>
                            <p>Sim, oferecemos planos mensais.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Vocês são confiáveis?</h3>
                            <p>Sim, pode contar conosco!</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer id="contato">
                <h2>Contato</h2>
                <p>Email: contato@agencia.com</p>
                <p>WhatsApp: (32) 99999-9999</p>
                <div className={styles.footerLinks}>
                    <a href="https://wa.me/5532999999999">WhatsApp</a>
                    <a href="#orcamento">Solicitar Orçamento</a>
                </div>
            </footer>
        </div>
    );
}