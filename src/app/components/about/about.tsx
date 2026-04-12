'use client';

import Image from "next/image";
import styles from "../about/about.module.css";
import { motion, Variants} from "framer-motion";

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
            Quem Somos
          </motion.h2>

          <motion.p variants={textVariants} className={styles.aboutDescription}>
            Fundada em 2021, nossa clínica nasceu com o propósito de oferecer um
            cuidado mais atento e humano à saúde e ao bem-estar. Atuamos com
            foco em fisioterapia pélvica e massoterapia, unindo conhecimento
            técnico, escuta ativa e um ambiente acolhedor para que cada paciente
            se sinta confortável e seguro durante todo o atendimento.
          </motion.p>
          
          <motion.p variants={textVariants} className={styles.aboutDescription}>
            Acreditamos que cuidar da saúde vai além do tratamento físico. Por
            isso, oferecemos atendimentos individualizados, respeitando as
            necessidades, limites e objetivos de cada pessoa, sempre com
            atenção, profissionalismo e compromisso com a qualidade de vida.
          </motion.p>

          <motion.div variants={textVariants} className="flex flex-col md:flex-row items-center gap-4">
            <button className={`secondaryBtn ${styles.secondaryBtn}`}>
              Fisioterapia Pélvica
            </button>
            <button className={`primaryBtn ${styles.primaryBtn}`}>
              Outros serviços
            </button>
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
            className={styles.imgStyle}
            src="/ambiente-externo-clinica.JPG"
            alt="Ambiente acolhedor da clínica Terapias do Corpo"
            width={500}
            height={500}
            priority 
          />
        </motion.div>

      </div>
    </section>
  );
}