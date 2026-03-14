import styles from "./styles.module.scss";

export const PAGES = [
  {
    id: "institutional",
    title: "Página Institucional",
    description:
      "Uma página que apenas ilustra a sua empresa. Por exemplo, o cardápio de um restaurante. Não envolve banco de dados nem cadastro de usuários. Nós fazemos layout responsivo, SEO e hospedagem.",
    price: 750,
  },
  {
    id: "multi-institutional",
    title: "Multi-Institucional",
    description:
      "Estrutura profissional, interativa, com múltiplas páginas, menu de navegação, Google Maps integrado e uma certa lógica interna. Um exemplo disso seria o nosso próprio portfólio.",
    price: 1300,
  },
  {
    id: "web-application",
    title: "Aplicação Web",
    description:
      "Site com autorização e autenticação, sistema de cadastro e login, envio automatizado de email para os clientes. Um exemplo disso seria o Instagram.",
    price: 2000,
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className={styles.servicesSection}>
      <h2>Nossos Serviços</h2>
      <div className={styles.cardsContainer}>
        {PAGES.map((page) => (
          <div key={page.title}>
            <h3>{page.title}</h3>
            <p>{page.description}</p>
          </div>
        ))}
      </div>
      <a href="#contato">Dúvidas? Entre em contato</a>
    </section>
  );
}
