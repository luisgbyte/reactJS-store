import React from "react";
import Head from "./Head";
import styles from "./Contato.module.css";

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Store" />
      <img src="https://i.imgur.com/9EWe6Ar.jpg" alt="máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>anonymous@gmail.com</li>
          <li>99999-9999</li>
          <li>Rua tal, 777</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
