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
                        src="/imagem-conceitual-trans.png"
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
                      Fisioterapia para a diversidade sexual e de gênero
                    </motion.h2>

                    <motion.p variants={textItemVariants}>
                       Encontrar um espaço de saúde onde seja possível se sentir acolhida(o), respeitada(o) e atendida(o) com seriedade nem sempre é algo simples. Na Terapias do Corpo, o cuidado é oferecido com escuta qualificada e atenção às singularidades de cada trajetória.
                    </motion.p>
                    
                    <motion.p variants={textItemVariants}>
                        A fisioterapia pode acompanhar diferentes demandas relacionadas à saúde de pessoas trans, incluindo o preparo e a recuperação de cirurgias de afirmação de gênero, bem como as funções do assoalho pélvico que impactam no conforto, funcionalidade e qualidade de vida.
                    </motion.p>

                    <motion.p variants={textItemVariants}>
                        Cada atendimento é conduzido de forma individualizada, considerando o corpo, o tempo e as necessidades de cada pessoa, em um espaço comprometido com respeito, segurança e cuidado ético.
                    </motion.p>
                    
                    <motion.a 
                        href="https://wa.me/5551998797339?text=Oi%20Dani!%20%F0%9F%8C%BF%20Vi%20o%20espa%C3%A7o%20de%20voc%C3%AAs%20e%20me%20senti%20acolhida.%20Gostaria%20de%20conversar%20sobre%20meu%20atendimento."
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={textItemVariants}
                        className="secondaryBtn"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                    Quero conversar sobre meu atendimento
                    </motion.a>
                </motion.div>

            </div>
        </section>
    );
}