import Image from "next/image";
import styles from "./space.module.css";

export default function Space(){
    return(
        <section className={styles.spaceSection}>
            <div className={styles.container}>

                <div className={styles.header}>
                    <h2 className={styles.title}>Nosso Espaço</h2>
                    <p className={styles.subtitle}>Um ambiente seguro, acolhedor e pensado para o seu maior conforto.</p>
                </div>

                <div className={styles.bentoGrid}>      
                      
                    <div className={`${styles.bentoItem} ${styles.mainImage}`}>
                        <Image src="/IMG_5622.JPG" alt="Sala de atendimento principal" fill className={styles.img} />
                    </div>
                    
                    <div className={`${styles.bentoItem} ${styles.detailImage2}`}>
                        <Image src="/ambiente-mobile.JPG" alt="Sala de atendimento principal" fill className={styles.img} />
                    </div>
                    
                    <div className={`${styles.bentoItem} ${styles.detailImage1}`}>
                        <Image src="/IMG_5606.JPG" alt="Detalhe do ambiente acolhedor" fill className={styles.img} />
                    </div>
{/*                     
                    <div className={`${styles.bentoItem} ${styles.detailImage2}`}>
                        <Image src="/IMG_5568.JPG" alt="Recepção e equipamentos" fill className={styles.img} />
                    </div> */}
                </div>
            
            </div>
        </section>
    )
}