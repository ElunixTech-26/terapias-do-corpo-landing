import Image from "next/image";
import styles from '../estetica/estetica.module.css';

export default function Estetica(){
    return (
        <main>
            <section className={styles.estetica}>
                <div className={styles.heroImageWrapper}>
                    <Image src="/foto-capa-estetica-mobile-2.png" alt="Pessoa recebendo tratamentos estéticos" fill priority 
                    className={`${styles.image} md:hidden block`} />
                    <Image src="/foto-capa-estetica-desktop-3.png" alt="Pessoa recebendo tratamentos estéticos" fill priority
                    className={`${styles.image} hidden md:block`} />
                </div>

                <div className={styles.container}>
                    <h2 className={styles.title}>Procedimentos Estéticos</h2>

                    <div className={styles.textContainer}>
                        <p>Na clínica Terapias do Corpo, acreditamos que a verdadeira estética é o reflexo de um corpo saudável e bem cuidado. Nossos procedimentos não são apenas tratamentos isolados, mas sim protocolos desenvolvidos com rigor clínico e tecnologia para entregar resultados naturais e duradouros.</p>

                        <p>Unimos a precisão da fisioterapia especializada com o que há de mais moderno em bioengenharia tecidual. Seja para recuperar o contorno corporal, combater a flacidez ou promover o rejuvenescimento facial, nosso foco é oferecer uma experiência segura, confortável e totalmente personalizada para os seus objetivos.</p>
                    </div>

                    {/* <ul>
                        <li>
                            <b>Ciência a seu favor:</b> 
                            Protocolos baseados em evidências.
                        </li>

                        <li>
                            <b>Tecnologia de Ponta:</b>
                            Equipamentos de alta performance para resultados reais.
                        </li>

                        <li>
                            <b>Cuidado Humanizado:</b>
                            Um olhar atento às suas necessidades individuais.
                        </li>
                    </ul> */}

                    <div className={styles.grid}>

                        <div className={styles.card}>
                            <Image src="/laserterapia-estetica-foto.svg" 
                            alt="Foto de procedimento Estético - Laserterapia"
                            height={80}
                            width={80}
                            priority
                            className={styles.tratamentosImg} />

                            <div className="flex flex-col gap-2">
                                <h3 className={styles.cardTitle}>Laserterapia</h3>
                                <p className={styles.cardDescription}>
                                Estimula a regeneração celular, cicatrização de feridas, inflamações e aliviar dores agudas ou crônicas.
                                </p>
                            </div>
                        </div>
                        
                        <div className={styles.card}>
                            <Image src="/radiofrequencia-estetica-foto.svg"
                            alt="Foto de procedimento Estético - Radiofrequencia" 
                            height={80} 
                            width={80}
                            priority
                            className={styles.tratamentosImg}/>

                            <div className="flex flex-col gap-2">
                                <h3 className={styles.cardTitle}>Radiofrequência</h3>
                                <p className={styles.cardDescription}>
                                Combate flacidez facial e corporal, papada, rugas e linhas de expressão.
                                </p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Image src="/lipo-sem-corte-estetica-foto.svg" 
                            alt="Foto de procedimento Estético - Lipo sem corte" 
                            height={80} 
                            width={80}
                            priority
                            className={styles.tratamentosImg}/>

                            <div className="flex flex-col gap-2">
                                <h3 className={styles.cardTitle}>Lipo sem Corte</h3>
                                <p className={styles.cardDescription}>
                                Destruição das células de gordura que, posteriormente, serão eliminadas pelo corpo.
                                </p>
                            </div>
                        </div>

                    </div>

                    
                    <a href="https://wa.me/5551998797339?text=Oi%20Dani!%20%F0%9F%8C%BF%20Estou%20na%20se%C3%A7%C3%A3o%20de%estética%20do%20seu%20site%20e%20gostaria%20de%20saber%20como%20funciona%%20e%20ver%20os%20hor%C3%A1rios%20dispon%C3%ADveis%20para%20agendamento.%20%F0%9F%92%AC%E2%9C%A8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.esteticaBtn}`}>
                        Agendar Horário
                    </a>
                </div>
             </section>
        </main>
    )
}