import Image from "next/image";
import styles from "../about/about.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>
        
        <div className={styles.aboutText}>
          <h2 className={styles.aboutTitle}>Quem Somos</h2>

          <p className={styles.aboutDescription}>
            Fundada em 2021, nossa clínica nasceu com o propósito de oferecer um
            cuidado mais atento e humano à saúde e ao bem-estar. Atuamos com
            foco em fisioterapia pélvica e massoterapia, unindo conhecimento
            técnico, escuta ativa e um ambiente acolhedor para que cada paciente
            se sinta confortável e seguro durante todo o atendimento.
          </p>
          <p className={styles.aboutDescription}>
            Acreditamos que cuidar da saúde vai além do tratamento físico. Por
            isso, oferecemos atendimentos individualizados, respeitando as
            necessidades, limites e objetivos de cada pessoa, sempre com
            atenção, profissionalismo e compromisso com a qualidade de vida.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className={`secondaryBtn ${styles.secondaryBtn}`}>
              Fisioterapia Pélvica
            </button>
            <button className={`primaryBtn ${styles.primaryBtn}`}>
              Outros serviços
            </button>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            className={styles.imgStyle}
            src="/IMG_5625.JPG"
            alt="Ambiente acolhedor da clínica Terapias do Corpo"
            width={500}
            height={500}
            priority 
          />
        </div>
      </div>
    </section>
  );
}