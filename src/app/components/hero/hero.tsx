import Image from 'next/image';
import style from '../hero/hero.module.css';
import Link from 'next/link';

export default function Hero(){
    return (
        <section className={style.heroSection}>

            <div className={style.imageContainer}>

                <div className={style.textArea}>
                    <h1>
                        <span>Fisioterapia Pélvica</span> em Porto Alegre para quem merece <span>cuidado</span> de verdade
                        {/* <span>Cuidado</span> especializado para o seu <span>bem-estar</span> físico e íntimo */}
                    </h1>
                    <p>Atendimento especializado em saúde pélvica, massoterapia e estética, com escuta ativa, respeito e um cuidado que você sente desde o primeiro contato.</p>
                    <a href="https://wa.me/5551998797339?text=Oi%20Dani!%20%F0%9F%8C%BF%20Acabei%20de%20ver%20seu%20site%20e%20fiquei%20interessado(a)%20nos%20seus%20atendimentos.%20Gostaria%20de%20entender%20melhor%20como%20funciona%20e%20agendar%20um%20hor%C3%A1rio%20%F0%9F%92%AC%E2%9C%A8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primaryBtn">Quero agendar minha avaliação</a>
                </div>
                
            </div>

            <div className={style.iconsContainer}>

                <Link href={'tratamentos/fisioterapia-pelvica/'} className='flex flex-col items-center gap-4'>
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

                <Link href={'/tratamentos/massoterapia'} className='flex flex-col items-center gap-4'>
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

                <Link href={'/tratamentos/estetica'} className='flex flex-col items-center gap-4'>
                    <Image
                        src="/estetica-icon.svg" 
                        alt="Simbolo de estetica" 
                        priority
                        width={120}
                        height={80}
                        className="object-contain hover:scale-105 transition-transform duration-500"
                        />
                    <span className={style.iconLegend}>Estética Dermatofuncional</span>
                </Link>
            </div>
        </section>
    );
}