'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const contactLinks = [
    {
        icon: '💼',
        label: 'LinkedIn',
        value: 'Connect with Gopi Krishna',
        href: 'https://www.linkedin.com/in/gopikrishna888',
        color: '#0077b5',
        id: 'contact-linkedin',
    },
    {
        icon: '✉️',
        label: 'Email',
        value: 'gopikrishnaananthula@gmail.com',
        href: 'mailto:gopikrishnaananthula@gmail.com',
        color: '#c9a227',
        id: 'contact-email',
    },
    {
        icon: '📄',
        label: 'Resume',
        value: 'Download CV (PDF)',
        href: '/resume.pdf',
        color: '#2ecc71',
        download: true,
        id: 'contact-resume',
    },
]

export default function Contact() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

    return (
        <section id="contact" className="section-padding" style={{ background: 'var(--color-base)', position: 'relative', overflow: 'hidden' }}>
            {/* Ambient glow */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60%',
                height: '40%',
                background: 'radial-gradient(ellipse, rgba(201,162,39,0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div ref={ref} style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{ marginBottom: '3.5rem' }}
                >
                    <p style={{ color: '#c9a227', fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Let&apos;s Connect</p>
                    <h2 className="section-title">
                        Get In <span className="gradient-gold">Touch</span>
                    </h2>
                    <p style={{ color: '#a0a0b5', marginTop: '1rem', fontSize: '1.05rem', maxWidth: '550px', margin: '1rem auto 0', lineHeight: 1.7 }}>
                        Open to finance leadership opportunities, collaborations, and meaningful conversations about business strategy and CA journey.
                    </p>
                    <div className="shimmer-line" style={{ display: 'block', margin: '1.5rem auto 0' }} />
                </motion.div>

                {/* Contact cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                    {contactLinks.map((link, i) => (
                        <motion.a
                            key={link.id}
                            href={link.href}
                            id={link.id}
                            target={!link.download ? '_blank' : undefined}
                            rel={!link.download ? 'noopener noreferrer' : undefined}
                            download={link.download}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                            style={{ textDecoration: 'none' }}
                            whileHover={{ y: -6 }}
                        >
                            <div
                                className="card-premium"
                                style={{
                                    padding: '2rem 1.5rem',
                                    borderRadius: '16px',
                                    borderColor: `${link.color}25`,
                                    textAlign: 'center',
                                    transition: 'box-shadow 0.3s',
                                    cursor: 'pointer',
                                }}
                                onMouseEnter={(e) => {
                                    ; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 50px ${link.color}30`
                                }}
                                onMouseLeave={(e) => {
                                    ; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
                                }}
                            >
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{link.icon}</div>
                                <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1rem', color: link.color, marginBottom: '0.25rem' }}>{link.label}</div>
                                <div style={{ fontSize: '0.85rem', color: '#a0a0b5' }}>{link.value}</div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.7, delay: 0.7 }}
                >
                    <p style={{ color: '#606075', fontSize: '0.875rem', marginBottom: '1rem' }}>
                        Based in Mumbai, India · Open to remote opportunities across India
                    </p>
                    <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '50px',
                        background: 'rgba(201,162,39,0.08)',
                        border: '1px solid rgba(201,162,39,0.25)',
                        color: '#c9a227',
                        fontSize: '0.85rem',
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: 600,
                    }}>
                        🚀 Available for Finance Leadership Roles · CA 2025
                    </div>
                </motion.div>
            </div>

            {/* Footer */}
            <div style={{
                textAlign: 'center',
                marginTop: '5rem',
                paddingTop: '2.5rem',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                color: '#606075',
                fontSize: '0.8rem',
                fontFamily: 'Inter, sans-serif',
            }}>
                <p>© 2025 Gopi Krishna Ananthula · Built with precision 🏆</p>
            </div>
        </section>
    )
}
