'use client';

import Image from "next/image";
import styles from '../massoterapia/massoterapia.module.css';
import { motion, Variants } from "framer-motion";

export default function Massoterapia() {

    // Variantes para animações suaves
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 25 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8, ease: "easeOut" } 
        }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2 
            }
        }
    };

    return (
        <main className="overflow-x-hidden">
            <section className={styles.massoterapia}>
                
                {/* Hero Image - Fade in mais longo para suavidade */}
                <motion.div 
                    className={styles.heroImageWrapper}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <Image src="/massoterapia-foto-mobile.png" alt="Pessoa recebendo massagens" fill priority className={`${styles.image} md:hidden block`} />
                    <Image src="/massoterapia-foto-desktop-2.png" alt="Pessoa recebendo massagens" fill priority className={`${styles.image} hidden md:block`} />
                </motion.div>

                <div className="flex flex-col items-center mt-8 gap-12">
                    
                    {/* Bloco de Texto Introdutório */}
                    <motion.div 
                        className="flex flex-col text-center w-[90%] md:w-[75%] gap-2 mt-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeInUp} className={`${styles.title} mb-4`}>
                            Massoterapia
                        </motion.h2>
                        <motion.p variants={fadeInUp} className={styles.text}>
                            A massoterapia é um conjunto de técnicas de massagem usadas para promover o bem-estar físico e mental. Ela envolve a aplicação de movimentos manuais no corpo — como pressão, deslizamento e amassamento — com o objetivo de aliviar tensões musculares, melhorar a circulação sanguínea e reduzir o estresse.
                        </motion.p>
                        
                        <motion.p variants={fadeInUp} className={styles.text}>
                            Além do relaxamento, a massoterapia também pode ajudar em dores crônicas, recuperação muscular e até na ansiedade. Existem vários tipos, como massagem relaxante, terapêutica, esportiva e drenagem linfática, cada uma com finalidades específicas.
                        </motion.p>
                    </motion.div>

                    {/* Grid de Benefícios com Stagger */}
                    <motion.div 
                        className={styles.grid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                    >
                        <motion.div className={styles.gridItem} variants={fadeInUp} whileHover={{ scale: 1.05 }}>
                            <Image src="/massoterapia-icone-gota.svg" alt="icone" width={100} height={100} className={styles.gridImg} />
                            <p className={styles.gridItemTitle}>Melhora da Circulação Sanguínea</p>
                        </motion.div>
                        
                        <motion.div className={styles.gridItem} variants={fadeInUp} whileHover={{ scale: 1.05 }}>
                            <Image src="/massoterapia-icone-massagem.svg" alt="icone" width={150} height={150} className={styles.gridImg} />
                            <p className={styles.gridItemTitle}>Redução do Estresse</p>
                        </motion.div>
                        
                        <motion.div className={styles.gridItem} variants={fadeInUp} whileHover={{ scale: 1.05 }}>
                            <Image src="/massoterapia-icone-costas.svg" alt="icone" width={100} height={100} className={styles.gridImg} />
                            <p className={styles.gridItemTitle}>Alívio de dores e tensão</p>
                        </motion.div>
                    </motion.div>

                    <motion.a 
                        href="https://wa.me/5551998797339/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.massoBtn}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                    >
                        Agendar Horário
                    </motion.a>
                </div>
            </section>
        </main>
    )
}