'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const timelineItems = [
    {
        period: '2020 – 2022',
        role: 'Article Assistant',
        company: 'KRAY & Associates',
        location: 'Hyderabad',
        color: '#c9a227',
        icon: '📊',
        description: 'Completed articleship training under ICAI regulations. Gained hands-on exposure to statutory audits, tax filings, and financial reporting for SME clients.',
        tags: ['Statutory Audit', 'Tax Filing', 'Tally ERP', 'GST'],
        side: 'left',
    },
    {
        period: '2022 – Present',
        role: 'Finance Executive',
        company: 'Reliance Industries Limited',
        location: 'Mumbai / Navi Mumbai',
        color: '#00d4ff',
        icon: '🏢',
        description: 'Working with India\'s largest conglomerate across Sports, Media & Retail divisions. Focused on Ind AS compliance, cost optimization, budget management, and financial analysis.',
        tags: ['Ind AS', 'Cost Optimization', 'Sports Finance', 'SAP', 'Budget Management'],
        side: 'right',
    },
    {
        period: 'Expected 2025',
        role: 'Chartered Accountant',
        company: 'ICAI',
        location: 'India',
        color: '#9b59b6',
        icon: '🎓',
        description: 'Final examination on the path to becoming a fully qualified Chartered Accountant — and eventually, a CFO.',
        tags: ['CA Finals', 'ICAI', 'Future CFO'],
        side: 'left',
    },
]

export default function Timeline() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section id="timeline" className="section-padding" style={{ background: 'var(--color-base)' }}>
            <div ref={ref} style={{ maxWidth: '1000px', margin: '0 auto' }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <p style={{ color: '#c9a227', fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>My Journey</p>
                    <h2 className="section-title">
                        Career <span className="gradient-gold">Timeline</span>
                    </h2>
                    <div className="shimmer-line" style={{ display: 'block', margin: '1rem auto 0' }} />
                </motion.div>

                {/* Timeline */}
                <div style={{ position: 'relative' }}>
                    {/* Center line */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 2,
                        top: 0,
                        bottom: 0,
                        background: 'linear-gradient(to bottom, #c9a227, #00d4ff, #9b59b6)',
                        opacity: 0.4,
                    }} />

                    {timelineItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.2 + i * 0.2 }}
                            style={{
                                display: 'flex',
                                justifyContent: item.side === 'left' ? 'flex-end' : 'flex-start',
                                paddingLeft: item.side === 'right' ? '55%' : 0,
                                paddingRight: item.side === 'left' ? '55%' : 0,
                                marginBottom: '3rem',
                                position: 'relative',
                            }}
                        >
                            {/* Dot on center line */}
                            <div style={{
                                position: 'absolute',
                                left: '50%',
                                top: '1.5rem',
                                transform: 'translateX(-50%)',
                                width: 20,
                                height: 20,
                                borderRadius: '50%',
                                background: item.color,
                                border: '3px solid var(--color-base)',
                                boxShadow: `0 0 20px ${item.color}80`,
                                zIndex: 2,
                            }} />

                            {/* Card */}
                            <div className="card-premium" style={{ padding: '1.5rem', borderRadius: '12px', borderColor: `${item.color}30`, width: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                                    <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                                    <div>
                                        <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#f0f0f5' }}>{item.role}</div>
                                        <div style={{ color: item.color, fontSize: '0.9rem', fontWeight: 600 }}>{item.company}</div>
                                    </div>
                                </div>
                                <div style={{ fontSize: '0.8rem', color: '#606075', marginBottom: '0.75rem' }}>
                                    📅 {item.period} · 📍 {item.location}
                                </div>
                                <p style={{ fontSize: '0.9rem', color: '#a0a0b5', lineHeight: 1.6, marginBottom: '0.75rem' }}>{item.description}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                    {item.tags.map((tag) => (
                                        <span key={tag} style={{
                                            fontSize: '0.72rem',
                                            padding: '0.2rem 0.6rem',
                                            borderRadius: '20px',
                                            background: `${item.color}15`,
                                            border: `1px solid ${item.color}30`,
                                            color: item.color,
                                            fontFamily: 'Inter, sans-serif',
                                        }}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
