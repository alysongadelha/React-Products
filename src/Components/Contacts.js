import React from "react";
import styles from "./Contacts.module.css";
import foto from "../assets/imgs/me.jpeg";
import Head from "./Head";

const Contacts = () => {
  const infos = [
    "alyson_sud@hotmail.com",
    "956 359 751",
    "Rua Bento Jesus de Caraça",
  ];
  return (
    <section className={`${styles.contacts} animationLeft`}>
      <Head title="DrLysn | Contacts" description="Contact" />
      <img src={foto} alt="Myself" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.data}>
          {infos.map((info) => (
            <li key={info}>{info}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contacts;
