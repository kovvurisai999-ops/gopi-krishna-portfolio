'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '₹500Cr+', label: 'Assets Managed' },
    { value: '1st', label: 'CA Walkathon 2025' },
    { value: 'Big4', label: 'Audit Exposure' },
]

export default function About() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

    return (
        <section id="about" className="section-padding" style={{ background: 'var(--color-surface)' }}>
            <div ref={ref} style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <p style={{ color: '#c9a227', fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Who I Am</p>
                    <h2 className="section-title">
                        <span className="gradient-gold">About Me</span>
                    </h2>
                    <div className="shimmer-line" style={{ display: 'block', margin: '1rem auto 0' }} />
                </motion.div>

                {/* Content grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                    {/* Avatar / Initials block */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <div style={{ position: 'relative' }}>
                            <div style={{
                                width: 260,
                                height: 260,
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, rgba(201,162,39,0.15), rgba(0,212,255,0.08))',
                                border: '3px solid rgba(201,162,39,0.4)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 0 60px rgba(201,162,39,0.2)',
                                overflow: 'hidden',
                            }}>
                                <img
                                    src="/images/gopi_krishna.jpeg"
                                    alt="Gopi Krishna"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                            {/* Orbit badge */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                                style={{ position: 'absolute', top: -15, left: -15, right: -15, bottom: -15, borderRadius: '50%' }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: '#c9a227',
                                    color: '#0a0a0f',
                                    fontSize: '0.65rem',
                                    fontWeight: 800,
                                    padding: '3px 8px',
                                    borderRadius: '12px',
                                    fontFamily: 'Outfit, sans-serif',
                                    whiteSpace: 'nowrap',
                                    boxShadow: '0 0 15px rgba(201,162,39,0.4)',
                                }}>GOPI KRISHNA</div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Bio text */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <p style={{ fontSize: '1.05rem', color: '#a0a0b5', lineHeight: 1.85, marginBottom: '1.25rem' }}>
                            I&apos;m <strong style={{ color: '#f0f0f5' }}>Gopi Krishna Ananthula</strong> — a CA Finalist currently working at <strong style={{ color: '#c9a227' }}>Reliance Industries Limited</strong>, India&apos;s largest conglomerate by market capitalization.
                        </p>
                        <p style={{ fontSize: '1.05rem', color: '#a0a0b5', lineHeight: 1.85, marginBottom: '1.25rem' }}>
                            With over 3 years of hands-on experience spanning statutory audits, Ind AS compliance, cost optimization, and sports finance, I bridge the gap between technical accounting precision and strategic business thinking.
                        </p>
                        <p style={{ fontSize: '1.05rem', color: '#a0a0b5', lineHeight: 1.85, marginBottom: '2rem' }}>
                            A <strong style={{ color: '#00d4ff' }}>first-place finisher</strong> at CA India Walkathon 2025 and a driven professional aiming to become a future <strong style={{ color: '#c9a227' }}>CFO</strong>.
                        </p>
                        <a
                            href="https://www.linkedin.com/in/gopikrishna888"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            id="about-linkedin-btn"
                        >
                            Connect on LinkedIn →
                        </a>
                    </motion.div>
                </div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem', marginTop: '3.5rem' }}
                >
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="card-premium"
                            style={{ textAlign: 'center', padding: '1.5rem 1rem' }}
                        >
                            <div style={{
                                fontFamily: 'Outfit, sans-serif',
                                fontSize: '2rem',
                                fontWeight: 800,
                                background: 'linear-gradient(135deg, #c9a227, #e8c547)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                marginBottom: '0.25rem',
                            }}>{stat.value}</div>
                            <div style={{ fontSize: '0.8rem', color: '#606075', fontFamily: 'Inter, sans-serif' }}>{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
