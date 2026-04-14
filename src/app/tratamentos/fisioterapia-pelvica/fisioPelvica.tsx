'use client';

import { useState } from "react";
import Image from "next/image";
import styles from "./fisioPelvica.module.css";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { BsClock, BsDroplet, BsExclamationCircle, BsHeart, BsPersonAdd, BsPlusLg, BsSun, BsWhatsapp, BsX } from "react-icons/bs";

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
        text: 'Dor que não passa tem tratamento.',
        details: 'Dores persistentes na região pélvica podem ser causadas por tensões musculares profundas, cicatrizes ou disfunções nervosas. Nosso tratamento utiliza técnicas de terapia manual, liberação miofascial e biofeedback para dessensibilizar a região e relaxar a musculatura sobrecarregada. É um processo focado em devolver o conforto e permitir que você volte a sentar, trabalhar e se exercitar sem limitações.'
    },
    { 
        icon: BsHeart, 
        title: 'Disfunções Sexuais', 
        text: 'Sua vida íntima pode — e deve — ser sem dor.',
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
        text: 'Suporte técnico e humano em cada etapa da sua transição.',
        details: 'O acompanhamento fisioterapêutico é essencial no processo de cirurgia de afirmação de gênero. Atuamos na preparação dos tecidos no pré-operatório e na reabilitação pós-cirúrgica, auxiliando no manejo correto de dilatadores, no controle urinário e na recuperação da sensibilidade. É um suporte técnico focado em garantir a funcionalidade, o sucesso do procedimento e o seu bem-estar integral.'
    },
    { 
        icon: BsPersonAdd, 
        title: 'Fortalecimento Preventivo', 
        text: 'Não espere o sintoma aparecer para se cuidar.',
        details: 'Você não precisa esperar o sintoma aparecer para cuidar do seu "core" pélvico. Esse tratamento é ideal para atletas de alto impacto, mulheres que planejam engravidar ou quem busca um envelhecimento saudável. Através de exercícios específicos, mantemos a sustentação dos órgãos internos e a estabilidade postural, prevenindo disfunções futuras e garantindo longevidade funcional.'
    },
];

const quandoProcurar = [
    { img: "/escape-urina-foto.png", title: 'Escape de urina', description: 'Perda de urina ao tossir, rir, fazer esforço ou em outro momento.' },
    { img: "/relacao-sexual-foto.png", title: 'Relação sexual', description: 'Dor, queimação e desconforto durante o sexo, ou falta de lubrificação.' },
    { img: "/gravidez-foto.png", title: 'Pré e pós-parto', description: 'Dominar o períneo (antes ou depois) reduz o risco de complicações.' },
    { img: "/redesignacao-foto.png", title: 'Redesignação sexual', description: 'Preparo pré-operatório ou reabilitação após cirurgias de afirmação de gênero.' },
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

                        <p className={styles.text}>A fisioterapia pélvica é uma especialidade que avalia, previne e trata disfunções do assoalho pélvico — o conjunto de músculos que sustenta a bexiga, o útero e o intestino.</p>

                        <p className={styles.text}>Por meio de exercícios específicos e técnicas manuais, o tratamento restaura a função dessa musculatura e devolve qualidade de vida — com resultados que você sente na rotina.</p>
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
                <h2 className="text-white font-bold text-2xl mb-8">Você se identifica com alguma dessas situações?</h2>
                <div className={styles.secondGrid}>
                    {quandoProcurar.map((card, index) => (
                        <div className={styles.secondCard} key={index}>
                            <Image src={card.img} alt={card.title} width={100} height={100} className={styles.secondCardImg}/>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>

                <a href="https://wa.me/5551998797339?text=Oi%20Dani!%20%F0%9F%8C%BF%20Tenho%20interesse%20em%20fisioterapia%20p%C3%A9lvica.%20Pode%20me%20contar%20como%20funciona%20a%20avalia%C3%A7%C3%A3o%3F"
                target="_blank"
                className={styles.miniCta}>
                    <BsWhatsapp className={styles.wppIcon}/>
                    <span>Agendar uma Avaliação</span>
                </a>
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

                            <a href="https://wa.me/5551998797339?text=Oi%20Dani!%20%F0%9F%8C%BF%20Tenho%20interesse%20em%20fisioterapia%20p%C3%A9lvica.%20Pode%20me%20contar%20como%20funciona%20a%20avalia%C3%A7%C3%A3o%3F"
                            target="_blank"
                            className="primaryBtn">
                                Quero tratar esse caso
                            </a>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>


            {/* Seção Sobre a Fisioterapeuta */}
            <section className={styles.sobreAFisio}>
                <div className={styles.sobreAFisioContainer}>
                    <motion.div 
                        className={styles.textAboutSection}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                    >
                        <motion.h3 variants={fadeInUp} className={styles.aboutTitle}>Daniele Elgert</motion.h3>
                        <motion.div variants={fadeInUp} className={styles.textContainer}>
                            <p className={styles.aboutText}>Sou fisioterapeuta e atuo na área de Fisioterapia pélvica, acompanhando pessoas com diferentes disfunções do assoalho pélvico por meio de um cuidado individualizado, sensível e comprometido com a funcionalidade e a qualidade de vida.</p>

                            <p className={styles.aboutText}>
                            Minha trajetória também se constrói no campo do Ensino na Saúde, por meio do mestrado, da participação em pesquisas e oficinas, e do interesse na formação de profissionais mais preparados para cuidar da população LGBTQIA+ com respeito, responsabilidade e escuta qualificada.</p>

                            <p className={styles.aboutText}>
                            Tenho atenção especial ao cuidado pré e pós-operatório em cirurgias de afirmação de gênero, articulando prática clínica, ensino e produção de conhecimento em saúde
                            </p>

                            <p className={styles.aboutText}>CREFITO: 381746-F</p>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className={styles.imageWrapperSobre}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    > 
                        <Image 
                            src="/fisioterapeuta-dani.JPG" 
                            alt="Daniele Elgert"
                            fill
                            priority
                            className={styles.aboutImg}
                        />
                    </motion.div>
                </div>
            </section>

        </main>
    );
}