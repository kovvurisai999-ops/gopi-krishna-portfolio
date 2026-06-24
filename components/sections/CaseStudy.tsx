'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function CaseStudy() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

    const sections = [
        {
            label: 'Problem',
            icon: '🎯',
            color: '#e74c3c',
            content:
                'Reliance Sports & Media division had fragmented budget tracking across 5 sub-entities, leading to 18% overspending versus approved budgets and delayed financial reporting to stakeholders.',
        },
        {
            label: 'Approach',
            icon: '⚙️',
            color: '#c9a227',
            content:
                'Designed a unified cost monitoring framework using SAP FICO and Excel dashboards. Implemented variance analysis reports with weekly automated alerts and leadership visibility into real-time spend.',
        },
        {
            label: 'Outcome',
            icon: '✅',
            color: '#2ecc71',
            content:
                'Reduced budget overruns by 67% in 2 quarters. Identified ₹12Cr+ in avoidable expenses. Consolidated reporting cycle cut from 21 days to 7 days, improving decision-making velocity.',
        },
    ]

    return (
        <section id="case-study" className="section-padding" style={{ background: 'var(--color-base)' }}>
            <div ref={ref} style={{ maxWidth: '900px', margin: '0 auto' }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center', marginBottom: '3.5rem' }}
                >
                    <p style={{ color: '#c9a227', fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Project Spotlight</p>
                    <h2 className="section-title">
                        Case <span className="gradient-gold">Study</span>
                    </h2>
                    <p style={{ color: '#a0a0b5', marginTop: '1rem', fontSize: '0.95rem' }}>
                        Budget Optimization Framework — Reliance Sports Division
                    </p>
                    <div className="shimmer-line" style={{ display: 'block', margin: '1rem auto 0' }} />
                </motion.div>

                {/* Case study cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                    {sections.map((sec, i) => (
                        <motion.div
                            key={sec.label}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            style={{
                                padding: '2rem',
                                borderRadius: '16px',
                                background: `linear-gradient(135deg, ${sec.color}08, rgba(18,18,26,0.9))`,
                                border: `1px solid ${sec.color}25`,
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            <div style={{ position: 'absolute', top: -10, right: -10, fontSize: '4rem', opacity: 0.07, userSelect: 'none' }}>{sec.icon}</div>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: sec.color,
                                fontFamily: 'Outfit, sans-serif',
                                fontWeight: 800,
                                fontSize: '0.85rem',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                marginBottom: '1rem',
                            }}>
                                <span>{sec.icon}</span> {sec.label}
                            </div>
                            <p style={{ fontSize: '0.925rem', color: '#c0c0d0', lineHeight: 1.75 }}>{sec.content}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Result banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    style={{
                        marginTop: '2.5rem',
                        padding: '1.5rem 2rem',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, rgba(201,162,39,0.12), rgba(0,212,255,0.06))',
                        border: '1px solid rgba(201,162,39,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.5rem',
                        flexWrap: 'wrap',
                    }}
                >
                    <span style={{ fontSize: '2.5rem' }}>🏆</span>
                    <div>
                        <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#f0f0f5' }}>Results recognized by Finance Leadership</div>
                        <div style={{ color: '#a0a0b5', fontSize: '0.875rem', marginTop: '0.25rem' }}>Framework adopted across 3 sports entities — IPL, Pro Kabaddi, and Athletics divisions.</div>
                    </div>
                    <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                        <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '2rem', color: '#c9a227' }}>₹12Cr+</div>
                        <div style={{ fontSize: '0.8rem', color: '#606075' }}>Cost Savings</div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
