"use client";

import styles from "./styles.module.scss";
import Header from "../../components/header";
import Image from "next/image";

export default function EquipePage() {
  const NAV_LINKS = [
    { id: "#geral", label: "Geral" },
    { id: "#joao", label: "João" },
    { id: "#caua", label: "Cauã" },
    { id: "#caleb", label: "Caleb" },
  ];
  return (
    <div className={styles.body}>
      <Header links={NAV_LINKS} voltar={true} />
      <h1>Nossa Equipe</h1>
      <section id="geral">
        <h2>Em geral</h2>
        <p>
          Todos temos cerca de 2 anos de experiência, somos desenvolvedores
          Júnior. Usamos as ferramentas mais modernas do mercado e fazemos certo
          uso de IA, apesar de ela não participar de tarefas sensíveis e
          importantes, como as que envolvem banco de dados.
        </p>
      </section>
      <section id="joao">
        <h2>João</h2>
        <div>
          <Image
            src="/siteAdvocacia.png"
            alt="João"
            width={180}
            height={180}
            className={styles.image}
          />
          <p>
            É nosso designer e desenvolvedor frontend, criando sites que não só
            funcionam, mas que chamam atenção. Além disso, faz contato com novos
            clientes e toma conta da recepção.
          </p>
        </div>
      </section>
      <section id="caua">
        <h2>Cauã</h2>
        <div>
          <Image
            src="/siteAdvocacia.png"
            alt="Cauã"
            width={180}
            height={180}
            className={styles.image}
          />
          <p>
            Toma conta da qualidade interna do código, simplificando,
            organizando e facilitando atualizações. Possui uma base sólida em
            JavaScript e trabalha com React, Next e Node, trabalhando tanto no
            desenvolvimento da interface quanto na criação de sistemas internos.
          </p>
        </div>
      </section>
      <section id="caleb">
        <h2>Caleb</h2>
        <div>
          <Image
            src="/siteAdvocacia.png"
            alt="Caleb"
            width={180}
            height={180}
            className={styles.image}
          />
          <p>
            Caleb é um engenheiro de software com conhecimentos em várias
            linguagens de programação, desde Java e JavaScript até Python e PHP.
            Além disso, toma conta de aspectos externos relacionados à equipe,
            como preço das páginas, divisão do lucro, divisão de tarefas e
            regras de negócios.
          </p>
        </div>
      </section>
    </div>
  );
}
