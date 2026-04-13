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
                        Procedimentos Estéticos
                    </motion.h2>

                    <motion.div className={styles.textContainer} variants={fadeInUp}>
                        <p>Na clínica Terapias do Corpo, acreditamos que a verdadeira estética é o reflexo de um corpo saudável e bem cuidado. Nossos procedimentos não são apenas tratamentos isolados, mas sim protocolos desenvolvidos com rigor clínico e tecnologia para entregar resultados naturais e duradouros.</p>

                        <p>Unimos a precisão da fisioterapia especializada com o que há de mais moderno em bioengenharia tecidual. Seja para recuperar o contorno corporal, combater a flacidez ou promover o rejuvenescimento facial, nosso foco é oferecer uma experiência segura, confortável e totalmente personalizada para os seus objetivos.</p>
                    </motion.div>

                    {/* Grid de Cards */}
                    <motion.div className={styles.grid} variants={staggerContainer}>

                        {/* Card Laserterapia */}
                        <motion.div className={styles.card} variants={fadeInUp} whileHover={{ y: -8 }}>
                            <Image src="/laserterapia-estetica-foto.svg" alt="Laserterapia" height={80} width={80} priority className={styles.tratamentosImg} />
                            <div className="flex flex-col gap-2">
                                <h3 className={styles.cardTitle}>Laserterapia</h3>
                                <p className={styles.cardDescription}>
                                    Estimula a regeneração celular, cicatrização de feridas, inflamações e alivia dores agudas ou crônicas.
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
                                    Destruição das células de gordura que, posteriormente, serão eliminadas pelo corpo.
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
                        <a href="https://wa.me/5551998797339/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.esteticaBtn}
                        >
                            Agendar Horário
                        </a>
                    </motion.div>
                </motion.div>
            </section>
        </main>
    );
}