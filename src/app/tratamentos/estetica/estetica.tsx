'use client';

import Image from "next/image";
import styles from '../estetica/estetica.module.css';
import { motion, Variants } from "framer-motion";

export default function Estetica() {

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.7, ease: "easeOut" } 
        }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2 // Sequência suave entre título, textos e cards
            }
        }
    };

    return (
        <main className="overflow-x-hidden">
            <section className={styles.estetica}>
                
                <motion.div 
                    className={styles.heroImageWrapper}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <Image src="/foto-capa-estetica-mobile-2.png" alt="Tratamentos estéticos" fill priority 
                        className={`${styles.image} md:hidden block`} />
                    <Image src="/foto-capa-estetica-desktop-3.png" alt="Tratamentos estéticos" fill priority
                        className={`${styles.image} hidden md:block`} />
                </motion.div>

                <motion.div 
                    className={styles.container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                >
                    <motion.h2 variants={fadeInUp} className={styles.title}>
                        Estética Dermatofuncional em Porto Alegre
                    </motion.h2>

                    <motion.div className={styles.textContainer} variants={fadeInUp}>
                        <p>Na clínica Terapias do Corpo, acreditamos que a verdadeira estética é o reflexo de um corpo saudável e bem cuidado. Nossos procedimentos não são apenas tratamentos isolados, mas sim protocolos desenvolvidos com rigor clínico e tecnologia para entregar resultados naturais e duradouros.</p>

                        <p>Unimos a base da fisioterapia especializada com tecnologia de ponta para tratar flacidez, contorno corporal e rejuvenescimento facial. O resultado é uma experiência segura, confortável e completamente adaptada ao que você precisa.</p>
                    </motion.div>

                    {/* Grid de Cards */}
                    <motion.div className={styles.grid} variants={staggerContainer}>

                        {/* Card Laserterapia */}
                        <motion.div className={styles.card} variants={fadeInUp} whileHover={{ y: -8 }}>
                            <Image src="/laserterapia-estetica-foto.svg" alt="Laserterapia" height={80} width={80} priority className={styles.tratamentosImg} />
                            <div className="flex flex-col gap-2">
                                <h3 className={styles.cardTitle}>Laserterapia</h3>
                                <p className={styles.cardDescription}>
                                    Estimula a regeneração celular e acelera a cicatrização, com ação anti-inflamatória e alívio de dores agudas e crônicas.
                                </p>
                            </div>
                        </motion.div>
                        
                        {/* Card Radiofrequência */}
                        <motion.div className={styles.card} variants={fadeInUp} whileHover={{ y: -8 }}>
                            <Image src="/radiofrequencia-estetica-foto.svg" alt="Radiofrequencia" height={80} width={80} priority className={styles.tratamentosImg}/>
                            <div className="flex flex-col gap-2">
                                <h3 className={styles.cardTitle}>Radiofrequência</h3>
                                <p className={styles.cardDescription}>
                                    Combate flacidez facial e corporal, papada, rugas e linhas de expressão.
                                </p>
                            </div>
                        </motion.div>

                        {/* Card Lipo sem Corte */}
                        <motion.div className={styles.card} variants={fadeInUp} whileHover={{ y: -8 }}>
                            <Image src="/lipo-sem-corte-estetica-foto.svg" alt="Lipo sem corte" height={80} width={80} priority className={styles.tratamentosImg}/>
                            <div className="flex flex-col gap-2">
                                <h3 className={styles.cardTitle}>Lipo sem Corte</h3>
                                <p className={styles.cardDescription}>
                                    Elimina células de gordura localizada de forma não invasiva — o próprio corpo faz o resto.
                                </p>
                            </div>
                        </motion.div>
                        

                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex justify-center"
                    >
                        <a href="https://wa.me/5551998797339?text=Oi%20Dani!%20%F0%9F%8C%BF%20Vi%20os%20procedimentos%20est%C3%A9ticos%20de%20voc%C3%AAs%20e%20quero%20saber%20qual%20%C3%A9%20o%20ideal%20para%20mim."
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.esteticaBtn}
                        >
                            Quero agendar minha sessão
                        </a>
                    </motion.div>
                </motion.div>
            </section>
        </main>
    );
}