'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const roadmap = [
    {
        stage: '1',
        title: 'BBA Graduation',
        year: '2019',
        desc: 'Completed Bachelor of Business Administration with distinction, laying a strong foundation in business and finance.',
        color: '#9b59b6',
        icon: '🎓',
    },
    {
        stage: '2',
        title: 'CA Foundation & Intermediate',
        year: '2019–2020',
        desc: 'Cleared CA Foundation and Intermediate exams, joining the rigorous ICAI qualification pathway.',
        color: '#3498db',
        icon: '📚',
    },
    {
        stage: '3',
        title: 'Articleship at KRAY & Associates',
        year: '2020–2022',
        desc: '3 years of hands-on training in statutory audits, tax compliance, and financial reporting under ICAI regulations.',
        color: '#c9a227',
        icon: '📊',
    },
    {
        stage: '4',
        title: 'Finance Executive at Reliance',
        year: '2022–Present',
        desc: 'Joined India\'s largest conglomerate, driving finance operations for Sports, Media & Retail divisions.',
        color: '#00d4ff',
        icon: '🏢',
    },
    {
        stage: '5',
        title: 'CA Final Examination',
        year: '2025',
        desc: 'Appearing for the most prestigious accounting examination in India — the ICAI CA Final.',
        color: '#2ecc71',
        icon: '⚡',
        current: true,
    },
    {
        stage: '6',
        title: 'Future CFO',
        year: '2026+',
        desc: 'The ultimate goal — leading enterprise finance as a Chief Financial Officer, driving organizational growth.',
        color: '#e8c547',
        icon: '🚀',
        future: true,
    },
]

export default function CAJourney() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section id="ca-journey" className="section-padding" style={{ background: 'var(--color-base)' }}>
            <div ref={ref} style={{ maxWidth: '900px', margin: '0 auto' }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <p style={{ color: '#c9a227', fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>The Roadmap</p>
                    <h2 className="section-title">
                        CA <span className="gradient-gold">Journey</span>
                    </h2>
                    <p style={{ color: '#a0a0b5', maxWidth: '500px', margin: '1rem auto 0', fontSize: '0.95rem' }}>
                        From BBA graduate to CA Finalist at India&apos;s largest company — a story of relentless pursuit.
                    </p>
                    <div className="shimmer-line" style={{ display: 'block', margin: '1rem auto 0' }} />
                </motion.div>

                {/* Roadmap nodes */}
                <div style={{ position: 'relative' }}>
                    {/* Vertical line */}
                    <div style={{
                        position: 'absolute',
                        left: '2.5rem',
                        top: 0,
                        bottom: 0,
                        width: 2,
                        background: 'linear-gradient(to bottom, #9b59b6, #3498db, #c9a227, #00d4ff, #2ecc71, #e8c547)',
                        opacity: 0.4,
                    }} />

                    {roadmap.map((node, i) => (
                        <motion.div
                            key={node.stage}
                            initial={{ opacity: 0, x: -40 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
                            style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem', position: 'relative' }}
                        >
                            {/* Stage circle */}
                            <div style={{
                                width: 48,
                                height: 48,
                                minWidth: 48,
                                borderRadius: '50%',
                                background: node.current
                                    ? `linear-gradient(135deg, ${node.color}, ${node.color}aa)`
                                    : node.future
                                        ? 'rgba(232,197,71,0.08)'
                                        : `${node.color}15`,
                                border: `2px solid ${node.color}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.25rem',
                                zIndex: 2,
                                boxShadow: node.current ? `0 0 25px ${node.color}60` : 'none',
                                animation: node.current ? 'pulseDot 2s ease-in-out infinite' : 'none',
                            }}>
                                {node.icon}
                            </div>

                            {/* Content */}
                            <div
                                className="card-premium"
                                style={{
                                    flex: 1,
                                    padding: '1.25rem 1.5rem',
                                    borderRadius: '12px',
                                    borderColor: `${node.color}25`,
                                    opacity: node.future ? 0.7 : 1,
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#f0f0f5' }}>
                                        {node.title}
                                    </h3>
                                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                        {node.current && (
                                            <span style={{
                                                background: `${node.color}20`,
                                                border: `1px solid ${node.color}`,
                                                borderRadius: '20px',
                                                padding: '0.15rem 0.6rem',
                                                fontSize: '0.7rem',
                                                color: node.color,
                                                fontWeight: 700,
                                                fontFamily: 'Outfit, sans-serif',
                                                animation: 'pulseDot 2s ease-in-out infinite',
                                            }}>● CURRENT</span>
                                        )}
                                        {node.future && (
                                            <span style={{
                                                background: 'rgba(232,197,71,0.1)',
                                                border: '1px dashed rgba(232,197,71,0.4)',
                                                borderRadius: '20px',
                                                padding: '0.15rem 0.6rem',
                                                fontSize: '0.7rem',
                                                color: '#e8c547',
                                                fontFamily: 'Outfit, sans-serif',
                                            }}>GOAL</span>
                                        )}
                                        <span style={{ fontSize: '0.8rem', color: node.color, fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>{node.year}</span>
                                    </div>
                                </div>
                                <p style={{ fontSize: '0.875rem', color: '#a0a0b5', lineHeight: 1.65 }}>{node.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
