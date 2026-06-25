'use client'

import dynamic from 'next/dynamic'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

const HeroBackground = dynamic(() => import('@/components/three/HeroBackground'), { ssr: false })

export default function Hero() {
    return (
        <section
            id="hero"
            style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201, 162, 39, 0.08) 0%, transparent 70%), #0a0a0f',
            }}
        >
            {/* Three.js Background */}
            <HeroBackground />

            {/* Gradient overlay at bottom */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '200px',
                background: 'linear-gradient(to top, #0a0a0f, transparent)',
                zIndex: 1,
            }} />

            {/* Content */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                textAlign: 'center',
                padding: '0 1.5rem',
                maxWidth: '900px',
                margin: '0 auto',
            }}>
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'rgba(201, 162, 39, 0.12)',
                        border: '1px solid rgba(201, 162, 39, 0.3)',
                        borderRadius: '50px',
                        padding: '0.4rem 1.2rem',
                        marginBottom: '2rem',
                        fontSize: '0.85rem',
                        color: '#c9a227',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                    }}
                >
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#c9a227', display: 'inline-block', animation: 'pulseDot 2s ease-in-out infinite' }} />
                    Available for Opportunities
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
                        fontWeight: 900,
                        lineHeight: 1.05,
                        marginBottom: '1rem',
                    }}
                >
                    <span style={{
                        background: 'linear-gradient(135deg, #f0f0f5 0%, #a0a0b5 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>Gopi Krishna</span>
                    <br />
                    <span style={{
                        background: 'linear-gradient(135deg, #c9a227 0%, #e8c547 50%, #c9a227 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>Ananthula</span>
                </motion.h1>

                {/* Typing Effect */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
                        fontWeight: 600,
                        color: '#00d4ff',
                        marginBottom: '1.5rem',
                        minHeight: '2.5rem',
                    }}
                >
                    <TypeAnimation
                        sequence={[
                            'CA Finalist @ Reliance Industries',
                            2000,
                            'Finance Strategist & Business Analyst',
                            2000,
                            'Sports Business Leader',
                            2000,
                            'Future CFO & Chartered Accountant',
                            2000,
                        ]}
                        wrapper="span"
                        repeat={Infinity}
                        speed={50}
                    />
                </motion.div>

                {/* Bio line */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    style={{
                        fontSize: '1.05rem',
                        color: '#a0a0b5',
                        maxWidth: '600px',
                        margin: '0 auto 2.5rem',
                        lineHeight: 1.7,
                    }}
                >
                    Driving financial excellence at India&apos;s largest conglomerate while charting a path to becoming a distinguished Chartered Accountant.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    <button
                        className="btn-primary"
                        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                        id="hero-view-portfolio-btn"
                    >
                        View Portfolio ↓
                    </button>
                    <a
                        href="/resume/Gopi_Krishna_Resume.pdf"
                        download="Gopi_Krishna_Resume.pdf"
                        className="btn-secondary"
                        id="hero-download-resume-btn"
                    >
                        Download Resume ⬇
                    </a>
                    <a
                        href="https://www.linkedin.com/in/gopikrishna888"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                        id="hero-linkedin-btn"
                        style={{ borderColor: '#0077b5', color: '#0099d4' }}
                    >
                        LinkedIn →
                    </a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
                >
                    <div style={{
                        width: 28,
                        height: 48,
                        borderRadius: 14,
                        border: '2px solid rgba(201, 162, 39, 0.4)',
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '8px',
                    }}>
                        <motion.div
                            animate={{ y: [0, 14, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            style={{ width: 4, height: 4, borderRadius: '50%', background: '#c9a227' }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
