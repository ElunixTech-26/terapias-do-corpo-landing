'use client';

import Image from "next/image";
import styles from '../massoterapia/massoterapia.module.css';
import { motion, Variants } from "framer-motion";

export default function Massoterapia() {

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
                
                {/* Hero Image */}
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
                            Massoterapia em Porto Alegre 
                        </motion.h2>
                        <motion.p variants={fadeInUp} className={styles.text}>
                           A massoterapia reúne técnicas manuais terapêuticas aplicadas ao corpo para aliviar tensões, melhorar a circulação e restaurar o equilíbrio físico e mental. Mais do que relaxamento, é um cuidado que o seu corpo sente — e que a sua mente agradece.
                        </motion.p>
                        
                        <motion.p variants={fadeInUp} className={styles.text}>
                            Atuamos com diferentes abordagens — massagem relaxante, terapêutica e drenagem linfática — indicadas para dores crônicas, recuperação muscular, ansiedade e bem-estar geral. Na sua avaliação, identificamos qual técnica faz mais sentido para o que você precisa agora.
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
                            <p className={styles.gridItemTitle}>Menos Estresse, Mais Leveza</p>
                        </motion.div>
                        
                        <motion.div className={styles.gridItem} variants={fadeInUp} whileHover={{ scale: 1.05 }}>
                            <Image src="/massoterapia-icone-costas.svg" alt="icone" width={100} height={100} className={styles.gridImg} />
                            <p className={styles.gridItemTitle}>Corpo Livre de Tensão</p>
                        </motion.div>
                    </motion.div>

                    <motion.a 
                        href="https://wa.me/5551998797339?text=Oi%20Dani!%20%F0%9F%8C%BF%20Quero%20agendar%20uma%20sess%C3%A3o%20de%20massoterapia.%20Tem%20hor%C3%A1rio%20dispon%C3%ADvel%3F"
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
                        Quero agendar minha sessão
                    </motion.a>
                </div>
            </section>
        </main>
    )
}