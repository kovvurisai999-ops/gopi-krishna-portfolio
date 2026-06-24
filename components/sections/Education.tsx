'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const educationItems = [
    {
        degree: 'CA Finalist',
        institution: 'ICAI — Institute of Chartered Accountants of India',
        period: '2019 – Present',
        description: 'Pursuing the most rigorous professional qualification in Indian finance. Cleared Foundation and Intermediate. Currently preparing for CA Finals.',
        icon: '📜',
        color: '#c9a227',
        badge: 'IN PROGRESS',
    },
    {
        degree: 'BBA — Bachelor of Business Administration',
        institution: 'Osmania University, Hyderabad',
        period: '2016 – 2019',
        description: 'Graduated with distinction. Focused on Business Management, Accounting, and Economics.',
        icon: '🎓',
        color: '#9b59b6',
        badge: 'COMPLETED',
    },
    {
        degree: 'ICAI Articleship Certificate',
        institution: 'KRAY & Associates, Hyderabad',
        period: '2020 – 2022',
        description: 'Successfully completed mandatory 3-year articleship training covering audits, taxation, and compliance.',
        icon: '📋',
        color: '#00d4ff',
        badge: 'CERTIFIED',
    },
]

export default function Education() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section id="education" className="section-padding" style={{ background: 'var(--color-surface)' }}>
            <div ref={ref} style={{ maxWidth: '900px', margin: '0 auto' }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <p style={{ color: '#c9a227', fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Qualifications</p>
                    <h2 className="section-title">
                        Education & <span className="gradient-gold">Certifications</span>
                    </h2>
                    <div className="shimmer-line" style={{ display: 'block', margin: '1rem auto 0' }} />
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {educationItems.map((item, i) => (
                        <motion.div
                            key={item.degree}
                            initial={{ opacity: 0, x: -40 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: i * 0.15 }}
                            className="card-premium"
                            style={{
                                padding: '2rem',
                                borderRadius: '14px',
                                borderColor: `${item.color}25`,
                                display: 'flex',
                                gap: '1.5rem',
                                flexWrap: 'wrap',
                                alignItems: 'flex-start',
                                transition: 'transform 0.3s',
                            }}
                            whileHover={{ y: -4 }}
                        >
                            {/* Icon */}
                            <div style={{
                                width: 56,
                                height: 56,
                                minWidth: 56,
                                borderRadius: '14px',
                                background: `${item.color}12`,
                                border: `1px solid ${item.color}30`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.8rem',
                            }}>{item.icon}</div>

                            {/* Content */}
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                                    <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#f0f0f5' }}>{item.degree}</h3>
                                    <span style={{
                                        background: `${item.color}15`,
                                        border: `1px solid ${item.color}30`,
                                        borderRadius: '20px',
                                        padding: '0.2rem 0.75rem',
                                        fontSize: '0.7rem',
                                        color: item.color,
                                        fontWeight: 700,
                                        fontFamily: 'Outfit, sans-serif',
                                        letterSpacing: '1px',
                                    }}>{item.badge}</span>
                                </div>
                                <div style={{ color: item.color, fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem' }}>{item.institution}</div>
                                <div style={{ color: '#606075', fontSize: '0.8rem', marginBottom: '0.75rem' }}>📅 {item.period}</div>
                                <p style={{ fontSize: '0.875rem', color: '#a0a0b5', lineHeight: 1.65 }}>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
