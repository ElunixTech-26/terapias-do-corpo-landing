import Image from 'next/image';
import style from '../hero/hero.module.css';
import Link from 'next/link';

export default function Hero(){
    return (
        <section className={style.heroSection}>

            <div className={style.imageContainer}>

                <div className={style.textArea}>
                    <h1>
                        <span>Cuidado</span> especializado para o seu <span>bem-estar</span> físico e íntimo
                    </h1>
                    <p>Fisioterapia pélvica especializada e massoterapia com atendimento humanizado, respeitoso e individualizado.</p>
                    <button>AGENDAR AVALIAÇÃO</button>
                </div>
                
            </div>

            <div className={style.iconsContainer}>

                <Link href={'#'} className='flex flex-col items-center gap-4'>
                    <Image
                        src="/pelvi-icon.svg" 
                        alt="Simbolo representando uma pelvi" 
                        priority
                        width={120}
                        height={80}
                        className="object-contain hover:scale-105 transition-transform duration-500"
                    />
                    <span className={style.iconLegend}>Fisioterapia Pélvica</span>
                </Link>

                <Link href={'#'} className='flex flex-col items-center gap-4'>
                    <Image
                        src="/masso-icon.svg" 
                        alt="Simbolo de massoterapia" 
                        priority
                        width={120}
                        height={80}
                        className="object-contain hover:scale-105 transition-transform duration-500"
                    />
                    <span className={style.iconLegend}>Massoterapia</span>
                </Link>

                <Link href={'#'} className='flex flex-col items-center gap-4'>
                    <Image
                        src="/estetica-icon.svg" 
                        alt="Simbolo de estetica" 
                        priority
                        width={120}
                        height={80}
                        className="object-contain hover:scale-105 transition-transform duration-500"
                        />
                    <span className={style.iconLegend}>Procedimentos Estéticos</span>
                </Link>
            </div>
        </section>
    );
}