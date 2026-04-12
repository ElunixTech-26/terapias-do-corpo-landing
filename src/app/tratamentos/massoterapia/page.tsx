import Image from "next/image";
import styles from '../massoterapia/massoterapia.module.css';

export default function Massoterapia(){
    return (
        <main>
            <section className={styles.massoterapia}>
                <div className={styles.heroImageWrapper}>
                    <Image src="/massoterapia-foto-mobile.png" alt="Pessoa recebendo massagens" fill priority className={`${styles.image} md:hidden block`} />
                    <Image src="/massoterapia-foto-desktop-2.png" alt="Pessoa recebendo massagens" fill priority className={`${styles.image} hidden md:block`} />
                </div>

                    
                <div className="flex flex-col items-center mt-8 gap-12">
                    
                    <div className="flex flex-col text-center w-[75%] gap-2 mt-4">
                        <h2 className={`${styles.title} mb-4`}>Massoterapia</h2>
                        <p className={styles.text}>A massoterapia é um conjunto de técnicas de massagem usadas para promover o bem-estar físico e mental. Ela envolve a aplicação de movimentos manuais no corpo — como pressão, deslizamento e amassamento — com o objetivo de aliviar tensões musculares, melhorar a circulação sanguínea e reduzir o estresse.</p>
                        
                        <p className={styles.text}>Além do relaxamento, a massoterapia também pode ajudar em dores crônicas, recuperação muscular e até na ansiedade. Existem vários tipos, como massagem relaxante, terapêutica, esportiva e drenagem linfática, cada uma com finalidades específicas.</p>
                    </div>

                    <div className={styles.grid}>
                        
                        <div className={styles.gridItem}>
                            <Image src="/massoterapia-icone-gota.svg" alt="icone" width={100} height={100} className={styles.gridImg} />
                            <p className={styles.gridItemTitle}>Melhora da Circulação Sanguínea</p>
                        </div>
                        
                        <div className={styles.gridItem}>
                            <Image src="/massoterapia-icone-massagem.svg" alt="icone" width={150} height={150} className={styles.gridImg} />
                            <p className={styles.gridItemTitle}>Redução do Estresse</p>
                        </div>
                        
                        <div className={styles.gridItem}>
                            <Image src="/massoterapia-icone-costas.svg" alt="icone" width={100} height={100} className={styles.gridImg} />
                            <p className={styles.gridItemTitle}>Alívio de dores e tensão</p>
                        </div>
                    </div>

                    <a href="https://wa.me/5551998797339?text=Oi%20Dani!%20%F0%9F%8C%BF%20Estou%20na%20se%C3%A7%C3%A3o%20de%20massoterapia%20do%20seu%20site%20e%20gostaria%20de%20saber%20como%20funciona%20a%20massoterapia%20e%20ver%20os%20hor%C3%A1rios%20dispon%C3%ADveis%20para%20agendamento.%20%F0%9F%92%AC%E2%9C%A8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.massoBtn}`}>
                        Agendar Horário
                    </a>
                </div>
            </section>
        </main>
    )
}