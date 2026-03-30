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

        <header className='flex items-center justify-around'>
            
            <div className={styles.headerContainer}>
                <Link href="/" className="flex items-center gap-2 z-[1001]" >
                    <Image 
                        src="/header-logo.svg" 
                        alt="Logo Terapias do Corpo" 
                        width={100} 
                        height={100} 
                        className="h-auto w-48"
                        loading='eager'
                    />
                </Link>

                <nav className='hidden md:block'>
                    <ul className='flex items-center gap-8'>

                        <li><Link className={styles.navLink} href={"/"}>Home</Link></li>
                        <li><Link className={styles.navLink} href={"/"}>Fisioterapia</Link></li>
                        <li><Link className={styles.navLink} href={"/"}>Outros Serviços</Link></li>
                        <li><Link className={styles.navLink} href={"/"}>Blog</Link></li>
                        <li><Link className={styles.navLinkBtn} href={"/"}>Contato</Link></li>
                    
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
                        
                        <li><Link href="/" onClick={closeMenu}>Home</Link></li>
                        <li><Link href="/" onClick={closeMenu}>Fisioterapia</Link></li>
                        <li><Link href="/" onClick={closeMenu}>Outros Serviços</Link></li>
                        <li><Link href="/" onClick={closeMenu}>Blog</Link></li>

                        <div className={styles.mobileDivContato}>
                            <h2>Fale Conosco</h2>
                            <p>Entenda o seu caso e qual a melhor estratégia de tratamento para você.</p>
                            <button>Agendar Avaliação</button>
                        </div>
                    </ul>
                </div>



            </div>

            
        </header>

        
    );
}