'use client'; 

import styles from "./authority.module.css";
import { BsAward, BsPersonVcard, BsHeart } from "react-icons/bs";
import { motion, Variants } from "framer-motion";

const cards = [
    {
        icon: BsAward, 
        title: "Método Profissional",
        description: "Contamos com atendimento especializado em fisioterapia pélvica, baseado em evidências científicas e atualização constante." 
    },
    {
        icon: BsPersonVcard,
        title: "100% Personalizado",
        description: "Após uma avaliação completa, elaboramos um protocolo individualizado, respeitando suas necessidades, objetivos e ritmo de evolução."
    },
    {
        icon: BsHeart,
        title: "Atendimento Humanizado",
        description: "Nosso espaço é inclusivo e possui foco no atendimento de pessoas cis e trans, garantindo conforto, privacidade e respeito em cada consulta."
    },
];

export default function Authority() {

    const titleVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, 
            },
        },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { 
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.6
            } 
        }
    };

    return(
        <section className={styles.authority}>
            <div className={styles.container}>

                <motion.h2 
                    className={styles.authorityTitle}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={titleVariants}
                >
                    O diferencial que faz a diferença!
                </motion.h2>

                <motion.div 
                    className={styles.grid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }} 
                    variants={containerVariants}
                >
                    {cards.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div 
                                key={index} 
                                className={styles.card}
                                variants={cardVariants}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }} 
                            >
                                <div className={styles.iconWrapper}>
                                    <Icon className={styles.iconElement} />
                                </div>

                                <h2 className={styles.cardTitle}>{item.title}</h2>
                                <p className={styles.cardDescription}>{item.description}</p>
                            </motion.div>
                        )
                    })}
                </motion.div>

            </div>
        </section>
    )
}