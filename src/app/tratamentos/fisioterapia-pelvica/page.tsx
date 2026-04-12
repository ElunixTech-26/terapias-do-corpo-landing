'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./fisioPelvica.module.css";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { BsClock, BsDroplet, BsExclamationCircle, BsHeart, BsPersonAdd, BsPlusLg, BsSun, BsX } from "react-icons/bs";

const pelvCards = [
    { 
        icon: BsDroplet, 
        title: 'Incontinência Urinária', 
        text: 'Recupere a sua liberdade e segurança diária.',
        details: 'A perda involuntária de urina, seja ao tossir, rir ou praticar exercícios, não deve ser aceita como algo "normal" da idade ou do pós-parto. Através de um protocolo de reabilitação muscular, trabalhamos a coordenação e o fortalecimento do assoalho pélvico. O objetivo é devolver a você a confiança de viver sua rotina sem o medo constante de escapes, eliminando a dependência de protetores e absorventes.'
    },
    { 
        icon: BsExclamationCircle, 
        title: 'Dor Pélvica Crônica', 
        text: 'Alívio para tensões que impactam sua rotina.',
        details: 'Dores persistentes na região pélvica podem ser causadas por tensões musculares profundas, cicatrizes ou disfunções nervosas. Nosso tratamento utiliza técnicas de terapia manual, liberação miofascial e biofeedback para dessensibilizar a região e relaxar a musculatura sobrecarregada. É um processo focado em devolver o conforto e permitir que você volte a sentar, trabalhar e se exercitar sem limitações.'
    },
    { 
        icon: BsHeart, 
        title: 'Disfunções Sexuais', 
        text: 'Saúde e bem-estar para uma vida íntima plena.',
        details: 'O prazer e o conforto são pilares da qualidade de vida. Atuamos no tratamento de condições como o vaginismo (dificuldade de penetração) e a dispareunia (dor durante o sexo). Com uma abordagem humana e técnica, ajudamos a relaxar a musculatura pélvica e a aumentar o autoconhecimento corporal, transformando o desconforto em segurança para que você vivencie sua sexualidade de forma saudável e sem dor.'
    },
    { 
        icon: BsClock, 
        title: 'Pré e Pós-parto', 
        text: 'Preparação e recuperação para a maternidade.',
        details: 'Durante a gestação, preparamos o seu assoalho pélvico para suportar o peso extra e ganhar a flexibilidade necessária para o parto. No pós-parto, o foco é a reabilitação da parede abdominal e da musculatura pélvica, prevenindo a diástase e garantindo que seu corpo se recupere com força e funcionalidade, permitindo que você se dedique ao seu bebê com saúde e disposição.'
    },
    { 
        icon: BsSun, 
        title: 'Redesignação Sexual', 
        text: 'Apoio especializado na sua jornada de afirmação.',
        details: 'O acompanhamento fisioterapêutico é essencial no processo de cirurgia de afirmação de gênero. Atuamos na preparação dos tecidos no pré-operatório e na reabilitação pós-cirúrgica, auxiliando no manejo correto de dilatadores, no controle urinário e na recuperação da sensibilidade. É um suporte técnico focado em garantir a funcionalidade, o sucesso do procedimento e o seu bem-estar integral.'
    },
    { 
        icon: BsPersonAdd, 
        title: 'Fortalecimento Preventivo', 
        text: 'Mantenha sua saúde pélvica em dia.',
        details: 'Você não precisa esperar o sintoma aparecer para cuidar do seu "core" pélvico. Esse tratamento é ideal para atletas de alto impacto, mulheres que planejam engravidar ou quem busca um envelhecimento saudável. Através de exercícios específicos, mantemos a sustentação dos órgãos internos e a estabilidade postural, prevenindo disfunções futuras e garantindo longevidade funcional.'
    },
];

const quandoProcurar = [
    { img: "/escape-urina-foto.png", title: 'Escape de urina', description: 'Perda de urina ao tossir, rir, fazer esforço ou em outro momento.' },
    { img: "/relacao-sexual-foto.png", title: 'Relação sexual', description: 'Dor, queimação e desconforto durante o sexo, ou falta de lubrificação.' },
    { img: "/gravidez-foto.png", title: 'Pré e pós-parto', description: 'Dominar o períneo (antes ou depois) reduz o risco de complicações.' },
    { img: "/redesignacao-foto.png", title: 'Redesignação sexual', description: 'Necessidade de preparo ou reabilitação após cirurgias de gênero.' },
];

export default function FisioterapiaPelvica() {
    // ESTADO DO MODAL
    const [selectedCard, setSelectedCard] = useState<null | typeof pelvCards[0]>(null);

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    return (
        <main className="overflow-x-hidden"> 

            <section className={styles.firstSection}>
                <div className={styles.heroImageWrapper}>
                    <Image src="/fisio-pelvica-foto-mobile.png" alt="Mulher alongando" fill priority className={`${styles.image} md:hidden block`} />
                    <Image src="/fisio-pelvica-foto.svg" alt="Mulher alongando" fill priority className={`${styles.image} hidden md:block`} />
                </div>

                <div className={styles.initSectionText}>
                    <h2 className={styles.title}>O que é Fisioterapia Pélvica?</h2>
                    <div className={styles.textArea}>
                        <p className={styles.text}>A fisioterapia pélvica é uma área especializada voltada para a avaliação, prevenção e tratamento de disfunções do assoalho pélvico.</p>
                        <p className={styles.text}>Utiliza exercícios específicos e técnicas manuais para restaurar o funcionamento adequado dessa musculatura e melhorar a qualidade de vida.</p>
                    </div>

                    <motion.div 
                        className={styles.grid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                    >
                        {pelvCards.map((card, index) => {
                            const Icon = card.icon;
                            return (
                                <motion.div 
                                    key={index} 
                                    className={styles.card} 
                                    variants={fadeInUp} 
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    onClick={() => setSelectedCard(card)} // ABRE O MODAL
                                >
                                    <div className="flex-1 items-center flex flex-col gap-2">
                                        <Icon className={styles.icon}/>
                                        <h3>{card.title}</h3>
                                        <p className={styles.saibaMais}>{card.text}</p>
                                    </div>
                                        <p className={`${styles.saibaMais} underline`}>
                                            Saiba mais...
                                        </p>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>

            {/* SEÇÃO QUANDO PROCURAR (REDUZIDA PARA O EXEMPLO) */}
            <section className={styles.secondarySection}>
                <h2 className="text-white font-bold text-2xl mb-8">Quando nos procurar?</h2>
                <div className={styles.secondGrid}>
                    {quandoProcurar.map((card, index) => (
                        <div className={styles.secondCard} key={index}>
                            <Image src={card.img} alt={card.title} width={100} height={100} className={styles.secondCardImg}/>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* MODAL COM ANIMATE PRESENCE */}
            <AnimatePresence>
                {selectedCard && (
                    <div className={styles.modalOverlay} onClick={() => setSelectedCard(null)}>
                        <motion.div 
                            className={styles.modalContent}
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 40 }}
                            onClick={(e) => e.stopPropagation()}  
                        >
                            <button className={styles.closeBtn} onClick={() => setSelectedCard(null)}>
                                <BsX />
                            </button>
                            
                            <selectedCard.icon className={styles.modalIcon} />
                            <h2>{selectedCard.title}</h2>
                            <p>{selectedCard.details}</p>

                            <a href="https://wa.me/5551998797339" target="_blank" className="primaryBtn">
                                Agendar consulta para este caso
                            </a>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </main>
    );
}