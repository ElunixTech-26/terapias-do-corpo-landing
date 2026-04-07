import Image from "next/image";
import styles from "./trans.module.css";

export default function Trans() {
    return (
        <section className={styles.trans}>
            <div className={styles.transContainer}>

                <div className={styles.imgContainer}>
                    <Image 
                        src="/trans-img.png"
                        alt="Atendimento humanizado para pessoas transgênero"
                        width={496}
                        height={560}
                        className={styles.imgStyle}
                    />
                </div>

                <div className={styles.textContainer}>
                    <h2>Atendimento Especializado em Pessoas Transgênero</h2>

                    {/* Dividido em dois parágrafos para melhor leitura e respiro */}
                    <p>
                        A clínica oferece um atendimento acolhedor e respeitoso para pessoas trans, com foco nas suas necessidades específicas. A fisioterapia pélvica é essencial nesse cuidado, auxiliando na preparação e recuperação de cirurgias de afirmação de gênero, além de contribuir para o controle urinário, função sexual e bem-estar geral.
                    </p>
                    <p>
                        Com uma abordagem individualizada, o atendimento promove mais conforto, autonomia e qualidade de vida, sempre respeitando a identidade de cada pessoa.
                    </p>
                    
                    <button className="secondaryBtn">Entender Meu Caso</button>
                </div>

            </div>
        </section>
    )
}