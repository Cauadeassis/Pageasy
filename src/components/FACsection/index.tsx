import styles from "./styles.module.scss";

const FAQ = [
  {
    question: "Quanto tempo leva?",
    answer: "De 5 a 15 dias dependendo do projeto.",
  },
  {
    question: "Vocês oferecem suporte?",
    answer: "Sim, oferecemos planos mensais.",
  },
  { question: "Vocês são confiáveis?", answer: "Sim, pode contar conosco!" },
];

export default function FACSection() {
  return (
    <section id="faq" className={styles.FAQSection}>
      <h2>Perguntas Frequentes</h2>
      <div>
        {FAQ.map((item) => (
          <div key={item.question} className={styles.QAItem}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
