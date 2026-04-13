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
                        src="/foto-conceitual-trans.png"
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
                      Um espaço feito para você, do jeito que você merece
                    </motion.h2>

                    <motion.p variants={textItemVariants}>
                       Sabemos que encontrar um espaço de saúde que realmente respeite quem você é pode ser difícil. Na Terapias do Corpo, você é recebida pelo seu nome, tratada com respeito e cuidada por uma equipe que entende as necessidades do corpo trans. A fisioterapia pélvica atua na preparação e recuperação de cirurgias de afirmação de gênero, no controle urinário, na função sexual e no bem-estar como um todo.
                    </motion.p>
                    
                    <motion.p variants={textItemVariants}>
                        Cada atendimento é pensado para o seu corpo, no seu tempo. Porque autonomia, conforto e qualidade de vida não são privilégios — são o mínimo que você merece.
                    </motion.p>
                    
                    <motion.a 
                        href="https://wa.me/5551998797339/"
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