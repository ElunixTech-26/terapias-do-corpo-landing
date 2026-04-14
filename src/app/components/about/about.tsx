'use client';

import Image from "next/image";
import styles from "../about/about.module.css";
import { motion, Variants} from "framer-motion";
import Link from "next/link";

export default function About() {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>
        
        <motion.div 
          className={styles.aboutText}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} 
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h2 variants={textVariants} className={styles.aboutTitle}>
            Nascemos para cuidar de você com respeito
          </motion.h2>

          <motion.p variants={textVariants} className={styles.aboutDescription}>
           Mais de 15 anos em Porto Alegre, a Terapias do Corpo nasceu de uma convicção simples: toda pessoa merece cuidado de saúde com escuta, respeito e acolhimento real. Somos especializados em fisioterapia pélvica, massoterapia e estética dermatofuncional — e atendemos a todos os corpos, com atenção especial para pessoas trans que buscam um espaço verdadeiramente seguro.
          </motion.p>
          
          <motion.p variants={textVariants} className={styles.aboutDescription}>
            Acreditamos que cuidar vai além do físico. Por isso, cada atendimento começa pela escuta — entendendo quem você é, o que você sente e onde quer chegar. Aqui, você não é um protocolo. Você é uma pessoa.
          </motion.p>

          <motion.div variants={textVariants} className="flex flex-col md:flex-row items-center gap-4">
            <Link href={"/tratamentos/fisioterapia-pelvica"} className={`secondaryBtn ${styles.secondaryBtn}`} >
              Conheça a Fisioterapia Pélvica 
            </Link>
            
            <Link href={"/"} className={`primaryBtn ${styles.primaryBtn}`} >
              Quero ler o blog
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} 
        >
          <Image
            className={`${styles.imgStyle} hidden md:block`}
            src="/painel-terapias-do-corpo.png"
            alt="Painel com serviços da Clínica Terapias do Corpo"
            width={500}
            height={500}
            priority 
          />
        </motion.div>

      </div>
    </section>
  );
}