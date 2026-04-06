import styles from "./authority.module.css"
import { BsAward, BsPersonVcard, BsHeart } from "react-icons/bs"

const cards = [
    {
        icon: BsAward, 
        title: "Método Profissional",
        description: "Contamos com atendimento especializado em fisioterapia pélvica, baseado em evidências científicas e atualização constante." 
    },
    {
        icon: BsPersonVcard,
        title: "100% Personalizado",
        description: "Após uma avaliação completa, elaboramos um protocolo individualizado, respeitando suas necessidades, objetivos e ritmo de evolução."
    },
    {
        icon: BsHeart,
        title: "Atendimento Humanizado",
        description: "Nosso espaço é inclusivo e possui foco no atendimento de pessoas cis e trans, garantindo conforto, privacidade e respeito em cada consulta."
    },
]

export default function Authority() {
    return(
        <section className={styles.authority}>
            <div className={styles.container}>

                <h2 className={styles.authorityTitle}>O diferencial que faz a diferença!</h2>

                <div className={styles.grid}>
                    {cards.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className={styles.card}>
                                <div className={styles.iconWrapper}>
                                    <Icon className={styles.iconElement} />
                                </div>

                                <h2 className={styles.cardTitle}>{item.title}</h2>
                                <p className={styles.cardDescription}>{item.description}</p>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}