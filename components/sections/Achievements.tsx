'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const achievements = [
    {
        icon: '🏆',
        title: 'CA India Walkathon 2025',
        subtitle: '1st Place Winner',
        description: 'Clinched the top spot at the prestigious CA India Walkathon 2025, competing against hundreds of CA professionals across India.',
        color: '#c9a227',
        stat: 1,
        statLabel: 'National Rank',
        statSuffix: 'st',
        year: '2025',
    },
    {
        icon: '📜',
        title: 'ICAI Articleship',
        subtitle: 'Completed with Excellence',
        description: 'Successfully completed mandatory articleship training at KRAY & Associates with consistent excellence in audit and compliance projects.',
        color: '#00d4ff',
        stat: 3,
        statLabel: 'Years of Training',
        statSuffix: '+',
        year: '2022',
    },
    {
        icon: '🎯',
        title: 'Reliance Finance Excellence',
        subtitle: 'Top Performer',
        description: 'Identified ₹12Cr+ in cost optimization opportunities across the Sports & Media division, recognized by leadership.',
        color: '#9b59b6',
        stat: 12,
        statLabel: 'Crore Savings Identified',
        statSuffix: 'Cr',
        year: '2024',
    },
]

// Simple CSS confetti
function ConfettiEffect({ active }: { active: boolean }) {
    if (!active) return null
    const pieces = Array.from({ length: 30 }, (_, i) => i)
    const colors = ['#c9a227', '#e8c547', '#00d4ff', '#9b59b6', '#e74c3c', '#2ecc71']

    return (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 300, pointerEvents: 'none', overflow: 'hidden' }}>
            {pieces.map((i) => (
                <div
                    key={i}
                    className="confetti-piece"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: 0,
                        background: colors[Math.floor(Math.random() * colors.length)],
                        animationDelay: `${Math.random() * 1.5}s`,
                        animationDuration: `${2 + Math.random() * 2}s`,
                        width: `${4 + Math.random() * 8}px`,
                        height: `${4 + Math.random() * 8}px`,
                        borderRadius: Math.random() > 0.5 ? '50%' : '2px',
                    }}
                />
            ))}
        </div>
    )
}

export default function Achievements() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
    const [confettiActive, setConfettiActive] = useState(false)

    useEffect(() => {
        if (inView) {
            setTimeout(() => setConfettiActive(true), 500)
            setTimeout(() => setConfettiActive(false), 4000)
        }
    }, [inView])

    return (
        <section id="achievements" className="section-padding" style={{ background: 'var(--color-surface)', position: 'relative', overflow: 'hidden' }}>
            <ConfettiEffect active={confettiActive} />

            <div ref={ref} style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <p style={{ color: '#c9a227', fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Recognition</p>
                    <h2 className="section-title">
                        <span className="gradient-gold">Achievements</span> 🏆
                    </h2>
                    <div className="shimmer-line" style={{ display: 'block', margin: '1rem auto 0' }} />
                </motion.div>

                {/* Achievement cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {achievements.map((ach, i) => (
                        <motion.div
                            key={ach.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: i * 0.15 }}
                            style={{
                                position: 'relative',
                                padding: '2rem',
                                borderRadius: '16px',
                                background: `linear-gradient(135deg, rgba(26,26,38,0.9), rgba(18,18,26,0.9))`,
                                border: `1px solid ${ach.color}30`,
                                overflow: 'hidden',
                                cursor: 'default',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                            }}
                            whileHover={{ y: -6, boxShadow: `0 20px 60px ${ach.color}30` }}
                        >
                            {/* Glow corner */}
                            <div style={{
                                position: 'absolute',
                                top: -20,
                                right: -20,
                                width: 100,
                                height: 100,
                                borderRadius: '50%',
                                background: `radial-gradient(circle, ${ach.color}20, transparent 70%)`,
                            }} />

                            {/* Year badge */}
                            <div style={{
                                position: 'absolute',
                                top: '1.25rem',
                                right: '1.25rem',
                                background: `${ach.color}15`,
                                border: `1px solid ${ach.color}30`,
                                borderRadius: '20px',
                                padding: '0.25rem 0.75rem',
                                fontSize: '0.75rem',
                                color: ach.color,
                                fontFamily: 'Outfit, sans-serif',
                                fontWeight: 700,
                            }}>{ach.year}</div>

                            {/* Icon */}
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{ach.icon}</div>

                            {/* Title */}
                            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.2rem', color: '#f0f0f5', marginBottom: '0.3rem' }}>{ach.title}</h3>
                            <p style={{ color: ach.color, fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.75rem' }}>{ach.subtitle}</p>
                            <p style={{ fontSize: '0.875rem', color: '#a0a0b5', lineHeight: 1.65, marginBottom: '1.5rem' }}>{ach.description}</p>

                            {/* Counter */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'baseline',
                                gap: '0.25rem',
                                padding: '0.75rem 1rem',
                                borderRadius: '8px',
                                background: `${ach.color}08`,
                                border: `1px solid ${ach.color}20`,
                            }}>
                                <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '2rem', color: ach.color }}>
                                    {inView && <CountUp end={ach.stat} duration={2} delay={0.5 + i * 0.2} />}
                                </span>
                                <span style={{ color: ach.color, fontWeight: 700 }}>{ach.statSuffix}</span>
                                <span style={{ fontSize: '0.8rem', color: '#606075', marginLeft: '0.5rem' }}>{ach.statLabel}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
