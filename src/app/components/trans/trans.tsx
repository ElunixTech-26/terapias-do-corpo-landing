'use client';

import Image from "next/image";
import styles from "./trans.module.css";
import { motion, Variants } from "framer-motion";

export default function Trans() {
    
     const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8, ease: "easeOut" } 
        }
    };

     const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

     const textItemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };

    return (
        <section className={styles.trans}>
            <div className={styles.transContainer}>

                {/* Bloco da Imagem */}
                <motion.div 
                    className={styles.imgContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    <Image 
                        src="/trans-img.png"
                        alt="Atendimento humanizado para pessoas transgênero"
                        width={496}
                        height={560}
                        className={styles.imgStyle}
                    />
                </motion.div>

                {/* Bloco de Texto com Stagger */}
                <motion.div 
                    className={styles.textContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <motion.h2 variants={textItemVariants}>
                        Atendimento Especializado em Pessoas Transgênero
                    </motion.h2>

                    <motion.p variants={textItemVariants}>
                        A clínica oferece um atendimento acolhedor e respeitoso para pessoas trans, com foco nas suas necessidades específicas. A fisioterapia pélvica é essencial nesse cuidado, auxiliando na preparação e recuperação de cirurgias de afirmação de gênero, além de contribuir para o controle urinário, função sexual e bem-estar geral.
                    </motion.p>
                    
                    <motion.p variants={textItemVariants}>
                        Com uma abordagem individualizada, o atendimento promove mais conforto, autonomia e qualidade de vida, sempre respeitando a identidade de cada pessoa.
                    </motion.p>
                    
                    <motion.button 
                        variants={textItemVariants}
                        className="secondaryBtn"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Entender Meu Caso
                    </motion.button>
                </motion.div>

            </div>
        </section>
    );
}