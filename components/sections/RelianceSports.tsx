'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const responsibilities = [
    {
        icon: '📈',
        title: 'Financial Analysis',
        desc: 'Managing financial analysis for IPL team operations, ticketing revenue, and broadcast partnerships.',
    },
    {
        icon: '⚽',
        title: 'Sports Budget Management',
        desc: 'Overseeing multi-crore budgets for Reliance Foundation sports initiatives and athlete development programs.',
    },
    {
        icon: '📋',
        title: 'Compliance & Reporting',
        desc: 'Ensuring Ind AS compliance for sports division entities, preparing consolidated financial statements.',
    },
    {
        icon: '🤝',
        title: 'Stakeholder Coordination',
        desc: 'Coordinating with Big 4 audit teams, legal counsel, and internal finance leadership for quarterly reviews.',
    },
]

const impacts = [
    { metric: '₹12Cr+', desc: 'Cost savings identified', color: '#c9a227' },
    { metric: '40+', desc: 'Compliance audits supported', color: '#00d4ff' },
    { metric: '100%', desc: 'On-time financial closings', color: '#9b59b6' },
    { metric: '5★', desc: 'Stakeholder satisfaction', color: '#e74c3c' },
]

export default function RelianceSports() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section id="reliance" className="section-padding" style={{ background: 'var(--color-base)' }}>
            <div ref={ref} style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <p style={{ color: '#00d4ff', fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Current Role</p>
                    <h2 className="section-title">
                        Reliance <span className="gradient-teal">Sports & Media</span>
                    </h2>
                    <p style={{ color: '#a0a0b5', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}>
                        Finance Executive at India&apos;s largest conglomerate — driving financial excellence in Sports, Media &amp; Retail divisions.
                    </p>
                    <div style={{
                        display: 'inline-block',
                        width: 60,
                        height: 3,
                        background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)',
                        marginTop: '1rem',
                    }} />
                </motion.div>

                {/* Company badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.5rem',
                        background: 'linear-gradient(135deg, rgba(0,212,255,0.08), rgba(10,10,15,0.8))',
                        border: '1px solid rgba(0,212,255,0.25)',
                        borderRadius: '16px',
                        padding: '1.5rem 2rem',
                        marginBottom: '3rem',
                        flexWrap: 'wrap',
                    }}
                >
                    <div style={{
                        background: 'linear-gradient(135deg, #0a3d62, #1a6fa0)',
                        borderRadius: '12px',
                        padding: '0.875rem 1.5rem',
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: 800,
                        fontSize: '1.3rem',
                        color: '#fff',
                        letterSpacing: '-0.5px',
                    }}>RIL</div>
                    <div>
                        <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.2rem', color: '#f0f0f5' }}>Reliance Industries Limited</div>
                        <div style={{ color: '#00d4ff', fontSize: '0.9rem' }}>Finance Executive — Sports, Media & Retail Division</div>
                        <div style={{ color: '#606075', fontSize: '0.8rem', marginTop: '0.25rem' }}>2022 – Present · Navi Mumbai, India</div>
                    </div>
                    <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                        <div style={{ fontSize: '0.8rem', color: '#606075' }}>India&apos;s Largest</div>
                        <div style={{ color: '#c9a227', fontWeight: 700, fontFamily: 'Outfit, sans-serif' }}>₹19 Lakh Cr Market Cap</div>
                    </div>
                </motion.div>

                {/* Responsibilities */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                    {responsibilities.map((r, i) => (
                        <motion.div
                            key={r.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                            className="card-premium"
                            style={{ padding: '1.5rem', borderRadius: '12px' }}
                            onMouseEnter={(e) => {
                                ; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'
                                    ; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,212,255,0.4)'
                            }}
                            onMouseLeave={(e) => {
                                ; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                                    ; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,162,39,0.2)'
                            }}
                        >
                            <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.75rem' }}>{r.icon}</span>
                            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#f0f0f5', marginBottom: '0.5rem' }}>{r.title}</h3>
                            <p style={{ fontSize: '0.875rem', color: '#a0a0b5', lineHeight: 1.65 }}>{r.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Impact metrics */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem' }}>
                    {impacts.map((imp, i) => (
                        <motion.div
                            key={imp.desc}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                            style={{
                                textAlign: 'center',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                background: `linear-gradient(135deg, ${imp.color}08, rgba(18,18,26,0.8))`,
                                border: `1px solid ${imp.color}25`,
                            }}
                        >
                            <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '2.2rem', color: imp.color }}>{imp.metric}</div>
                            <div style={{ fontSize: '0.8rem', color: '#606075', marginTop: '0.25rem' }}>{imp.desc}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
