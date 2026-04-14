'use client';

import Image from "next/image";
import styles from "./space.module.css";
import { motion, Variants } from "framer-motion";

export default function Space() {
  
   const headerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.2  
      } 
    }
  };

   const gridContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,  
        delayChildren: 0.3    
      }
    }
  };

   const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        ease: [0.215, 0.61, 0.355, 1]  
      } 
    }
  };

  return (
    <section className={styles.spaceSection}>
      <div className={styles.container}>

        {/* Header Animado */}
        <motion.div 
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={headerVariants}
        >
          <motion.h2 variants={headerVariants} className={styles.title}>
            Conheça nosso espaço
          </motion.h2>
          <motion.p variants={headerVariants} className={styles.subtitle}>
            Cada detalhe do nosso espaço foi pensado para que você se sinta bem antes mesmo do atendimento começar.
          </motion.p>
        </motion.div>

        {/* Bento Grid Animada */}
        <motion.div 
          className={styles.bentoGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={gridContainerVariants}
        > 
          {/* Imagem Principal */}
          <motion.div 
            className={`${styles.bentoItem} ${styles.mainImage}`}
            variants={itemVariants}
          >
            <Image src="/ambiente-clinica-1.JPG" alt="Sala de atendimento principal" fill className={styles.img} />
          </motion.div>
          
          {/* Detalhe 2 */}
          <motion.div 
            className={`${styles.bentoItem} ${styles.detailImage2}`}
            variants={itemVariants}
          >
            <Image src="/IMG_5568.JPG" alt="Sala de atendimento mobile" fill className={styles.img} />
          </motion.div>
          
          {/* Detalhe 1 */}
          <motion.div 
            className={`${styles.bentoItem} ${styles.detailImage1}`}
            variants={itemVariants}
          >
            <Image src="/ambiente-clinica-2.JPG" alt="Detalhe do ambiente acolhedor" fill className={styles.img} />
          </motion.div>
        </motion.div>
      
      </div>
    </section>
  );
}