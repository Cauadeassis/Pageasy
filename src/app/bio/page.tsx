"use client";

import styles from "./styles.module.scss";

export default function BioPage() {
  return (
    <div className={styles.body}>
      <h1>Nossa Equipe</h1>

      <h2>Caleb jorge</h2>
      <div className={styles.sb}>
        <p>
          Caleb é reconhecido pela sua comunicação clara e objetiva, sendo uma
          peça fundamental no contato com clientes e no entendimento das
          necessidades de cada projeto. Sua paciência e capacidade de escuta
          ajudam a transformar ideias em soluções digitais bem estruturadas.
          Mesmo em momentos de pressão ou prazos apertados, Caleb mantém a calma
          e a organização, contribuindo para que a equipe continue produtiva e
          focada nos resultados. Sua criatividade também se destaca na busca por
          soluções diferentes e eficientes para cada desafio. Além disso, possui
          um forte senso analítico e crítico, avaliando cada detalhe dos
          projetos para garantir qualidade, funcionalidade e uma boa experiência
          para o usuário final. Essa combinação entre comunicação, análise e
          criatividade faz com que Caleb seja essencial no processo de
          desenvolvimento e planejamento dos sites criados pela equipe.
        </p>
        <img
          src="img/caleb.jpeg"
          alt="caleb"
          width="50%"
          height="50%"
          className={styles.ft}
        />
      </div>

      <h2>joão vitor</h2>
      <div className={styles.sb}>
        <p>
          João Vitor é responsável por transformar ideias em experiências
          visuais modernas e funcionais. Como designer e desenvolvedor frontend,
          ele combina criatividade com conhecimento técnico para criar sites que
          não apenas chamam atenção, mas também oferecem uma navegação clara e
          eficiente. Com amplo domínio de tecnologias do frontend, João trabalha
          na construção da interface dos projetos, garantindo que cada detalhe —
          desde cores e tipografia até animações e responsividade — contribua
          para uma experiência agradável para o usuário. Além da parte técnica,
          João também possui um olhar estratégico para design digital, buscando
          sempre equilibrar estética, usabilidade e desempenho. Seu objetivo é
          desenvolver sites que representem bem cada empresa e que realmente
          ajudem os clientes a se destacar no ambiente online.
        </p>
        <img
          src="img/jv.jpeg"
          alt="jv"
          width="50%"
          height="50%"
          className={styles.ft}
        />
      </div>

      <h2>Cauã De Assis</h2>
      <div className={styles.sb}>
        <p>
          Cauã é desenvolvedor com amplo conhecimento em JavaScript puro e
          experiência no uso de ferramentas modernas que facilitam a manutenção
          e organização do código, além de contribuir para processos de
          integração contínua (CI). Possui experiência com tecnologias como
          React, Next.js e Node.js, trabalhando tanto no desenvolvimento da
          interface quanto na construção de sistemas completos. Seu foco é criar
          aplicações dinâmicas, rápidas e responsivas, utilizando as ferramentas
          mais modernas do mercado. Além do desenvolvimento visual, Cauã também
          atua na criação de sistemas que envolvem banco de dados e
          funcionalidades essenciais para empresas, como sistemas de login e
          autenticação de usuários, além de integrações como envio automático de
          e-mails para clientes.
        </p>
        <img
          src="img/caua.jpeg"
          alt="caua"
          width="50%"
          height="50%"
          className={styles.ft}
        />
      </div>
    </div>
  );
}
