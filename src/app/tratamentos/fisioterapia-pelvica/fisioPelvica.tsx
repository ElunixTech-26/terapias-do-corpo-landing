'use client';

import { useState } from "react";
import Image from "next/image";
import styles from "./fisioPelvica.module.css";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { BsClock, BsDroplet, BsExclamationCircle, BsHeart, BsPersonAdd, BsSun, BsWhatsapp, BsX } from "react-icons/bs";

const pelvCards = [
    { 
        icon: BsDroplet, 
        title: 'Incontinência Urinária', 
        text: 'Recupere a sua liberdade e segurança diária.',
        details: 'A perda involuntária de urina não deve ser aceita como algo "normal" da idade ou do pós-parto. Através de um protocolo de reabilitação muscular, trabalhamos a coordenação e o fortalecimento do assoalho pélvico. O objetivo é devolver a você a confiança de viver sua rotina sem o medo constante de escapes, eliminando a dependência de protetores e absorventes, entre outros desconfortos.'
    },
    { 
        icon: BsExclamationCircle, 
        title: 'Dor Pélvica Crônica', 
        text: 'Dor que não passa tem tratamento.',
        details: 'A dor pélvica crônica pode ter diferentes origens, incluindo tensões musculares profundas, cicatrizes, alterações nervosas e condições como a endometriose. A fisioterapia pélvica oferece um cuidado individualizado, voltado ao alívio da dor, ao relaxamento da musculatura e à recuperação da funcionalidade.',
        secondDetail: 'Com isso, busca-se mais conforto, liberdade de movimento e melhor qualidade de vida na rotina.'
    },
    { 
        icon: BsHeart, 
        title: 'Disfunções Sexuais', 
        text: 'Sua vida íntima pode — e deve — ser sem dor.',
        details: 'O conforto e a saúde sexual são aspectos importantes do bem-estar. A fisioterapia pélvica atua no cuidado de quadros como vaginismo, dor na penetração e outras disfunções associadas ao assoalho pélvico.',
        secondDetail: 'O atendimento é conduzido de forma cuidadosa e individualizada, com foco na melhora da função, no relaxamento muscular e na promoção de mais conforto, segurança e qualidade de vida.'
    },
    { 
        icon: BsClock, 
        title: 'Pré e Pós-parto', 
        text: 'Preparação e recuperação para a maternidade.',
        details: 'A fisioterapia pélvica pode acompanhar diferentes fases da gestação e do pós-parto, oferecendo suporte ao corpo diante das mudanças que ocorrem nesse período. Durante a gravidez, o cuidado busca favorecer adaptação, conforto e preparo da musculatura pélvica para o parto.',
        secondDetail: 'No pós-parto, o atendimento é voltado à recuperação funcional da parede abdominal e do assoalho pélvico, contribuindo para o restabelecimento do corpo com mais segurança, força e bem-estar no dia a dia.'
    },
    { 
        icon: BsSun, 
        title: 'Afirmação de Gênero', 
        text: 'Pré e pós-operatório em cirurgias de afirmação de gênero',
        details: 'O acompanhamento fisioterapêutico pode ser um recurso importante no preparo e na recuperação de cirurgias de afirmação de gênero, incluindo procedimentos como vaginoplastia e mamoplastia masculinizadora. No período pré-operatório, o cuidado pode contribuir para o preparo dos tecidos, para a orientação do corpo e para uma recuperação mais consciente e assistida.',
        secondDetail: 'No pós-operatório, o atendimento é conduzido de forma individualizada, com foco na funcionalidade, no manejo de cicatrizes, na mobilidade tecidual, na recuperação da sensibilidade e em aspectos que favorecem conforto, adaptação e qualidade de vida ao longo do processo de reabilitação'
    },
    { 
        icon: BsPersonAdd, 
        title: 'Fortalecimento Preventivo', 
        text: 'Não espere o sintoma aparecer para se cuidar.',
        details: 'O cuidado com o assoalho pélvico também pode ter um papel preventivo, contribuindo para a manutenção da função, da estabilidade e da sustentação ao longo do tempo. Esse acompanhamento pode ser indicado em diferentes contextos, como na prática de atividades de alto impacto, no planejamento gestacional e na promoção de um envelhecimento mais funcional e saudável.',
        secondDetail: 'Por meio de exercícios específicos e condutas individualizadas, o tratamento busca favorecer equilíbrio muscular, suporte aos órgãos pélvicos e melhor integração entre postura, movimento e funcionalidade no dia a dia.'
    },
];

const quandoProcurar = [
    { img: "/escape-urina-foto.png", title: 'Escape de urina', description: 'Perda de urina ao tossir, rir, fazer esforço ou em outro momento.' },
    { img: "/relacao-sexual-foto.png", title: 'Relação sexual', description: 'Dor, queimação e desconforto durante o sexo, ou falta de lubrificação.' },
    { img: "/gravidez-foto.png", title: 'Pré e pós-parto', description: 'Dominar o períneo (antes ou depois) reduz o risco de complicações.' },
    { img: "/redesignacao-foto.png", title: 'Cirurgias de Afirmação de gênero', description: 'Preparo pré-operatório ou reabilitação após cirurgias de afirmação de gênero.' },
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
                    <Image src="/foto-capa-fisioterapia-pelvica-mobile.png" alt="Imagem conceitual da região Pélvica" fill priority className={`${styles.image} md:hidden block`} />
                    <Image src="/foto-capa-fisioterapia-pelvica-desktop.png" alt="Imagem conceitual da região Pélvica" fill priority className={`${styles.image} hidden md:block`} />
                </div>

                <div className={styles.initSectionText}>
                    <h2 className={styles.title}>O que é Fisioterapia Pélvica?</h2>
                    <div className={styles.textArea}>

                        <p className={styles.text}>A fisioterapia pélvica é uma especialidade voltada à avaliação, prevenção e tratamento das disfunções do assoalho pélvico — conjunto de músculos e tecidos responsáveis pela sustentação de órgãos como bexiga, útero e intestino.</p>

                        <p className={styles.text}>Por meio de exercícios específicos, técnicas manuais e recursos terapêuticos individualizados, o tratamento busca melhorar a função dessa musculatura, promovendo mais conforto, funcionalidade e qualidade de vida no dia a dia.</p>
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
                            <div className={styles.modalTextDiv}>
                                <p>{selectedCard.details}</p>
                                <p>{selectedCard?.secondDetail}</p>
                            </div>

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