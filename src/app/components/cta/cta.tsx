import { BsWhatsapp } from "react-icons/bs";
import styles from "../cta/cta.module.css";
import Link from "next/link";

export default function Cta(){
    return (

        <section className={styles.cta} id="contact">
            <div className={styles.ctaContainer}>


                <div className="flex flex-col items-center gap-2">
                    <h2 className={styles.sectionTitle}>Pronto para cuidar de você</h2>
                    <p className={styles.sectionDescription}>Agende sua avaliação e dê o primeiro passo para o seu bem-estar.</p>
                </div>


                <div className={styles.ctaDivContainer}>

                    <BsWhatsapp  className={styles.wppIcon}/>

                    <div className="flex flex-col items-center gap-2 md:gap-0">
                        <h3>Atendimento Via Whatsapp</h3>
                        <p>Tire suas dúvidas e entenda qual o melhor procedimento para você.</p>
                    </div>

                    <a
                        href="https://wa.me/5551998797339?text=Oi%20Dani!%20%F0%9F%8C%BF%20Vi%20seu%20site%20e%20quero%20agendar%20uma%20avalia%C3%A7%C3%A3o.%20Pode%20me%20contar%20como%20funciona%3F"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaButton}>
                        <BsWhatsapp className={styles.btnIcon}/>
                        Chamar no WhatsApp Agora
                    </a>

                </div>
            
            </div>
        </section>

    )
}