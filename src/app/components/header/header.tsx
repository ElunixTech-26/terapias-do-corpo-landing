'use client'

import Link from 'next/link';
import styles from './header.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function Header(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Função para fechar o menu ao clicar em um link
    const closeMenu = () => setIsMenuOpen(false);

    return(
        <header className={styles.header}>
            
            <div className={styles.headerContainer}>
                <Link href="/" className="flex items-center gap-2" >
                    <Image 
                        src="/header-logo.svg" 
                        alt="Logo Terapias do Corpo" 
                        width={180}  
                        height={60} 
                        className="h-auto w-36 md:w-48 z-9999"  
                        loading='eager'
                    />
                </Link>

                <nav className='hidden md:block'>
                    <ul className='flex items-center gap-12 font-medium'>
                        <li><Link className={styles.navLink} href={"/#"}>Home</Link></li>

                        <li><Link className={styles.navLink} 
                        href={'/tratamentos/fisioterapia-pelvica/'}>Fisioterapia Pélvica</Link></li>

                        <li><Link className={styles.navLink} href={"/tratamentos/estetica"}>Estética</Link></li>
                        <li><Link className={styles.navLink} href={"/tratamentos/massoterapia"}>Massoterapia</Link></li>
                        <li><Link className={styles.navLink} href={"/"}>Blog</Link></li>
                        <li><a className={`secondaryBtn`} 
                        href="https://wa.me/5551998797339?text=Oi%20Dani!%20%F0%9F%8C%BF%20Vi%20seu%20site%20e%20quero%20agendar%20uma%20avalia%C3%A7%C3%A3o.%20Pode%20me%20contar%20como%20funciona%3F"
                        target="_blank"
                        rel="noopener noreferrer">Contato</a></li>
                    </ul>
                </nav>

                {/* Hamburger Button */}
                <button
                    className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ""}`} 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
                {/* Mobile Menu */}
                <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuActive : ""}`}>
                    <ul className="font-inter">
                        <li><Link href="/#" onClick={closeMenu}>Home</Link></li>
                        <li><Link href={'/tratamentos/fisioterapia-pelvica/'}
                         onClick={closeMenu}>Fisioterapia Pélvica</Link></li>
                        <li><Link href="/tratamentos/estetica" onClick={closeMenu}>Estética</Link></li>
                        <li><Link href="/tratamentos/massoterapia" onClick={closeMenu}>Massoterapia</Link></li>
                        <li><Link href="/" onClick={closeMenu}>Blog</Link></li>

                        <div className={styles.mobileDivContato}>
                            <h2>Fale Conosco</h2>
                            <p>Entenda o seu caso e qual a melhor estratégia de tratamento para você.</p>
                            <a href="https://wa.me/5551998797339?text=Oi%20Dani!%20%F0%9F%8C%BF%20Vi%20seu%20site%20e%20quero%20agendar%20uma%20avalia%C3%A7%C3%A3o.%20Pode%20me%20contar%20como%20funciona%3F"
                            target="_blank"
                            rel="noopener noreferrer" className={`secondaryBtn`}>Agendar Avaliação</a>
                        </div>
                    </ul>
                </div>

            </div>
        </header>
    );
}