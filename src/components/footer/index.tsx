import styles from "./styles.module.scss";

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Olá, bom dia!";
  if (hour >= 12 && hour < 18) return "Olá, boa tarde!";
  return "Olá, boa noite!";
};

const CONTACTS = {
  phone: "5532984061401",
  email: "pageasy.muriae@gmail.com",
  instagram: "pageasy_ltda",
};

export default function Footer() {
  const message = encodeURIComponent(getGreeting());

  return (
    <footer id="contato" className={styles.footer}>
      <h2>Contato</h2>
      <p>Email: {CONTACTS.email}</p>
      <div>
        <a href={`https://wa.me/${CONTACTS.phone}?text=${message}`}>WhatsApp</a>
        <a href={`https://instagram.com/${CONTACTS.instagram}`} target="_blank">
          Instagram
        </a>
        <a
          href={`mailto:${CONTACTS.email}?subject=Pedido&body=${message} Eu quero solicitar um serviço.`}
        >
          Email
        </a>
      </div>
    </footer>
  );
}
