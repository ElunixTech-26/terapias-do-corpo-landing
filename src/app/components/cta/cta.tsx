import { BsWhatsapp } from "react-icons/bs";
import styles from "../cta/cta.module.css";
import Link from "next/link";

export default function Cta(){
    return (

        <section className={styles.cta} id="contact">
            <div className={styles.ctaContainer}>


                <div className="flex flex-col items-center">
                    <h2 className={styles.sectionTitle}>Entre em contato</h2>
                    <p className={styles.sectionDescription}>Estamos prontos para ajudar você.</p>
                </div>


                <div className={styles.ctaDivContainer}>

                    <BsWhatsapp  className={styles.wppIcon}/>

                    <div className="flex flex-col items-center gap-2 md:gap-0">
                        <h3>Atendimento Via Whatsapp</h3>
                        <p>Tire suas dúvidas e entenda qual o melhor procedimento para você.</p>
                    </div>

                    <a
                        href="https://wa.me/5551998797339?text=Oi%20Dani!%20%F0%9F%8C%BF%20Acabei%20de%20ver%20seu%20site%20e%20fiquei%20interessado(a)%20nos%20seus%20atendimentos.%20Gostaria%20de%20entender%20melhor%20como%20funciona%20e%20agendar%20um%20hor%C3%A1rio%20%F0%9F%92%AC%E2%9C%A8"
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