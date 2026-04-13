import Image from 'next/image';
import styles from '../footer/footer.module.css';
import Link from 'next/link';
import { BsClock, BsEnvelope, BsInstagram, BsMailbox, BsMailbox2, BsPhone, BsTelephone, BsTelephonePlus, BsWhatsapp } from 'react-icons/bs';

export default function Footer(){

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={`${styles.coluna} gap-4`}>
          <div className='flex items-center gap-4'>
            <Image 
                src="/logo.svg" 
                alt="Logo Terapias do Corpo" 
                width={50}  
                height={50} 
                className={styles.logo}
                // className="h-auto w-36 md:w-48"  
                loading='eager'
            />
            <span className={styles.title}>Terapias do Corpo<br/> Espaço de Saúde</span>
          </div>
          <p className={styles.brandDescription}>
            Cuidado especializado em fisioterapia pélvica e massoterapia, com atendimento humanizado e personalizado para promover saúde, bem-estar e qualidade de vida.
          </p>
        </div>
      

        <div>
          <h3 className={styles.title}>Navegação</h3>

          <ul className={styles.navList}>
           <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/tratamentos/fisioterapia-pelvica"}>Fisioterapia Pélvica</Link>
            </li>
            <li>
              <Link href={"/tratamentos/massoterapia"}>Massoterapia</Link>
            </li>
            <li>
              <Link href={"/tratamentos/estetica"}>Estética</Link>
            </li>
            <li>
              <Link href={"/#contact"}>Contato</Link>
            </li>
          </ul>
        </div>

        <div className={`${styles.coluna} gap-3`}>
          <h3 className={styles.title}>Contatos</h3>

          <a href="https://www.google.com/maps/place/R.+Visc.+de+Pelotas,+289+-+Passo+d'Areia,+Porto+Alegre+-+RS,+91030-530/"
           className={styles.navContact}>
           Rua Visconde de Pelotas 289 - Passo da Areia, Porto Alegre - Rio Grande do Sul 90540-050</a>

          <a href="https://wa.me/5551998797339?text=Oi%20Dani!%20%F0%9F%8C%BF%20Acabei%20de%20ver%20seu%20site%20e%20fiquei%20interessado(a)%20nos%20seus%20atendimentos. %20Gostaria%20de%20entender%20melhor%20como%20funciona%20e%20agendar%20um%20hor%C3%A1rio%20%F0%9F%92%AC%E2%9C%A8"
          target="_blank"
          rel="noopener noreferrer" className={`${styles.navContact} flex items-center gap-2`}>
            <BsTelephone />
            (51) 998797339</a>

          <a href='mailto:elgert.fisioterapeuta@gmail.com' className={`${styles.navContact} flex items-center gap-2`}>
            <BsEnvelope />
            elgert.fisioterapeuta@gmail.com</a>

          <div className='flex items-center gap-2 mt-2'>
            <a href="https://www.instagram.com/dialogosdapelve/"
              target="_blank"
              rel="noopener noreferrer">
              <BsInstagram className='text-white hover:scale-108 transition-transform duration-500'/>
            </a>

          <a href="https://wa.me/5551998797339?text=Oi%20Dani!%20%F0%9F%8C%BF%20Acabei%20de%20ver%20seu%20site%20e%20fiquei%20interessado(a)%20nos%20seus%20atendimentos. %20Gostaria%20de%20entender%20melhor%20como%20funciona%20e%20agendar%20um%20hor%C3%A1rio%20%F0%9F%92%AC%E2%9C%A8"
          target="_blank"
          rel="noopener noreferrer">
          <BsWhatsapp className='text-white hover:scale-105 transition-transform duration-500'/>
          </a>
          </div>
        </div>


        <div className={`${styles.coluna} gap-2`}>
          <h3 className={styles.title}>Horário de Atendimento</h3> 
          <p className={`${styles.navHour} flex items-center gap-2`}>
            <BsClock /> 
            Segunda à sexta: 9h - 19h
          </p>
          
          <p className={styles.navHour}>
            Disponibilidade aos finais de semana mediante agendamento.
          </p>
        </div>

      </div>

      <div className={styles.bottomBar}>
        <p className='text-white'>© {currentYear} Terapias do Corpo - Todos os direitos reservados.</p>
        <p className="mt-2 md:mt-0 text-[10px] opacity-80 text-white">Developed By  
        <Link className="text-white text-sm" href={"https://Elunix.tech"}> Elunix<span className="text-blue-500">.</span></Link>
        </p>
      </div>


    </footer>
  )
}