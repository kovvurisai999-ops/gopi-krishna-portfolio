'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillGroups = {
    Finance: [
        { name: 'Financial Reporting (Ind AS)', level: 92 },
        { name: 'Statutory Audit', level: 90 },
        { name: 'Cost Optimization & Budgeting', level: 88 },
        { name: 'GST & Taxation', level: 85 },
        { name: 'IFRS & Ind AS Compliance', level: 82 },
        { name: 'Sports Finance & Revenue Analysis', level: 80 },
    ],
    Tools: [
        { name: 'SAP FICO', level: 85 },
        { name: 'Microsoft Excel (Advanced)', level: 95 },
        { name: 'Tally ERP', level: 88 },
        { name: 'Power BI / Dashboards', level: 75 },
        { name: 'ICAI Audit Software', level: 80 },
        { name: 'MS Office Suite', level: 92 },
    ],
    'Soft Skills': [
        { name: 'Strategic Thinking', level: 90 },
        { name: 'Leadership', level: 88 },
        { name: 'Communication & Presentation', level: 85 },
        { name: 'Problem Solving', level: 92 },
        { name: 'Stakeholder Management', level: 83 },
        { name: 'Attention to Detail', level: 96 },
    ],
}

type SkillTab = keyof typeof skillGroups

export default function Skills() {
    const [activeTab, setActiveTab] = useState<SkillTab>('Finance')
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section id="skills" className="section-padding" style={{ background: 'var(--color-surface)' }}>
            <div ref={ref} style={{ maxWidth: '900px', margin: '0 auto' }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <p style={{ color: '#c9a227', fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>What I Do</p>
                    <h2 className="section-title">
                        Skills <span className="gradient-gold">Dashboard</span>
                    </h2>
                    <div className="shimmer-line" style={{ display: 'block', margin: '1rem auto 0' }} />
                </motion.div>

                {/* Tab selector */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '2.5rem', flexWrap: 'wrap' }}
                >
                    {(Object.keys(skillGroups) as SkillTab[]).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            id={`skills-tab-${tab.toLowerCase().replace(' ', '-')}`}
                            style={{
                                padding: '0.625rem 1.5rem',
                                borderRadius: '50px',
                                border: activeTab === tab ? 'none' : '1.5px solid rgba(201,162,39,0.25)',
                                background: activeTab === tab
                                    ? 'linear-gradient(135deg, #c9a227, #e8c547)'
                                    : 'transparent',
                                color: activeTab === tab ? '#0a0a0f' : '#a0a0b5',
                                fontFamily: 'Outfit, sans-serif',
                                fontWeight: 700,
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </motion.div>

                {/* Skills list */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                    >
                        {skillGroups[activeTab].map((skill, i) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.06 }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                                    <span style={{ fontSize: '0.95rem', color: '#f0f0f5', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{skill.name}</span>
                                    <span style={{ fontSize: '0.85rem', color: '#c9a227', fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{skill.level}%</span>
                                </div>
                                <div style={{
                                    height: 8,
                                    background: 'rgba(255,255,255,0.06)',
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                                        transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease: 'easeOut' }}
                                        style={{
                                            height: '100%',
                                            borderRadius: 4,
                                            background: 'linear-gradient(90deg, #9a7a18, #c9a227, #e8c547)',
                                        }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}
