'use client'; 

import styles from "./authority.module.css";
import { BsAward, BsPersonVcard, BsHeart } from "react-icons/bs";
import { motion, Variants } from "framer-motion";

const cards = [
    {
        icon: BsAward, 
        title: "Baseado em Evidências",
        description: "Cada atendimento é guiado por protocolos científicos atualizados — porque você merece um cuidado que realmente funciona." 
    },
    {
        icon: BsPersonVcard,
        title: "100% Personalizado",
        description: "Começamos com uma avaliação completa para entender você — e criamos um protocolo pensado no seu corpo, no seu ritmo e nos seus objetivos."
    },
    {
        icon: BsHeart,
        title: "Espaço Seguro para Todo Corpo",
        description: "Aqui, pessoas cis e trans são recebidas com o mesmo respeito, cuidado e atenção. Um espaço pensado para que você se sinta segura desde o momento em que entra."
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
                    Por que pacientes escolhem a Terapias do Corpo
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