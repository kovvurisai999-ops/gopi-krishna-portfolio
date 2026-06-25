'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#timeline', label: 'Career' },
    { href: '#skills', label: 'Skills' },
    { href: '#reliance', label: 'Reliance' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#ca-journey', label: 'CA Journey' },
    { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleNavClick = (href: string) => {
        setMenuOpen(false)
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav
            id="main-nav"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                transition: 'all 0.3s ease',
                background: scrolled
                    ? 'rgba(10, 10, 15, 0.95)'
                    : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(201, 162, 39, 0.15)' : 'none',
                padding: '1rem 2rem',
            }}
        >
            <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Logo */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                    <span style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: 800,
                        fontSize: '1.4rem',
                        background: 'linear-gradient(135deg, #c9a227, #e8c547)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>GK</span>
                    <span style={{ color: '#606075', fontSize: '0.8rem', fontFamily: 'Inter, sans-serif' }}>CA Finalist</span>
                </button>

                {/* Desktop Links */}
                <ul style={{ display: 'flex', listStyle: 'none', gap: '0.25rem', alignItems: 'center' }}
                    className="hidden md:flex">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <button
                                onClick={() => handleNavClick(link.href)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: '#a0a0b5',
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '0.875rem',
                                    fontWeight: 500,
                                    padding: '0.5rem 0.875rem',
                                    borderRadius: '6px',
                                    transition: 'all 0.2s ease',
                                }}
                                onMouseEnter={(e) => {
                                    ; (e.target as HTMLButtonElement).style.color = '#c9a227'
                                        ; (e.target as HTMLButtonElement).style.background = 'rgba(201, 162, 39, 0.08)'
                                }}
                                onMouseLeave={(e) => {
                                    ; (e.target as HTMLButtonElement).style.color = '#a0a0b5'
                                        ; (e.target as HTMLButtonElement).style.background = 'none'
                                }}
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                    <li>
                        <a
                            href="/resume/Gopi_Krishna_Resume.pdf"
                            download="Gopi_Krishna_Resume.pdf"
                            className="btn-primary"
                            style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
                        >
                            Resume ↓
                        </a>
                    </li>
                </ul>

                {/* Mobile Hamburger */}
                <button
                    id="hamburger-btn"
                    className="flex md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                        background: 'none',
                        border: '1px solid rgba(201, 162, 39, 0.3)',
                        borderRadius: '6px',
                        padding: '0.5rem',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                    }}
                    aria-label="Toggle navigation menu"
                >
                    {[0, 1, 2].map((i) => (
                        <span key={i} style={{
                            display: 'block',
                            width: '22px',
                            height: '2px',
                            background: '#c9a227',
                            borderRadius: '2px',
                            transition: 'transform 0.3s',
                            transform: menuOpen
                                ? i === 0 ? 'rotate(45deg) translate(4px, 4px)'
                                    : i === 1 ? 'scaleX(0)'
                                        : 'rotate(-45deg) translate(4px, -4px)'
                                : 'none',
                        }} />
                    ))}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div style={{
                    background: 'rgba(10, 10, 15, 0.98)',
                    backdropFilter: 'blur(20px)',
                    borderTop: '1px solid rgba(201, 162, 39, 0.15)',
                    padding: '1rem 2rem 1.5rem',
                }}>
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => handleNavClick(link.href)}
                            style={{
                                display: 'block',
                                width: '100%',
                                textAlign: 'left',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: '#a0a0b5',
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '1rem',
                                padding: '0.75rem 0',
                                borderBottom: '1px solid rgba(255,255,255,0.05)',
                                transition: 'color 0.2s',
                            }}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    )
}
