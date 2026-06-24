'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const posts = [
    {
        tag: 'Audit Insights',
        tagColor: '#c9a227',
        icon: '🔍',
        title: 'What 40+ Audits Taught Me About Business Risk',
        excerpt: 'Lessons from real-world statutory audits — the red flags every CFO should watch for in quarterly reports.',
        readTime: '5 min read',
    },
    {
        tag: 'Taxation',
        tagColor: '#00d4ff',
        icon: '📋',
        title: 'GST Compliance: Avoiding Common Pitfalls in Large Enterprises',
        excerpt: 'A practical guide to GST reconciliation challenges and how Ind AS interacts with tax planning at scale.',
        readTime: '7 min read',
    },
    {
        tag: 'Sports Finance',
        tagColor: '#9b59b6',
        icon: '⚽',
        title: 'The Business of IPL: How Sports Finance Works at Reliance',
        excerpt: 'A deep dive into ticketing revenue, broadcast rights, player valuations, and the financial architecture of cricket franchises.',
        readTime: '8 min read',
    },
    {
        tag: 'CA Journey',
        tagColor: '#2ecc71',
        icon: '📖',
        title: 'Balancing a Full-Time Job While Preparing for CA Finals',
        excerpt: 'My personal framework for managing Reliance responsibilities and intensive CA Final exam preparation simultaneously.',
        readTime: '6 min read',
    },
]

export default function Insights() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section id="insights" className="section-padding" style={{ background: 'var(--color-surface)' }}>
            <div ref={ref} style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <p style={{ color: '#c9a227', fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Knowledge Hub</p>
                    <h2 className="section-title">
                        Finance <span className="gradient-gold">Insights</span>
                    </h2>
                    <div className="shimmer-line" style={{ display: 'block', margin: '1rem auto 0' }} />
                </motion.div>

                {/* Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
                    {posts.map((post, i) => (
                        <motion.div
                            key={post.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                            className="card-premium"
                            style={{ padding: '1.75rem', borderRadius: '14px', cursor: 'pointer', transition: 'transform 0.3s' }}
                            whileHover={{ y: -6 }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <span style={{
                                    background: `${post.tagColor}15`,
                                    border: `1px solid ${post.tagColor}30`,
                                    color: post.tagColor,
                                    borderRadius: '20px',
                                    padding: '0.2rem 0.75rem',
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    fontFamily: 'Outfit, sans-serif',
                                }}>{post.tag}</span>
                                <span style={{ fontSize: '1.5rem' }}>{post.icon}</span>
                            </div>
                            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#f0f0f5', lineHeight: 1.4, marginBottom: '0.75rem' }}>{post.title}</h3>
                            <p style={{ fontSize: '0.875rem', color: '#a0a0b5', lineHeight: 1.65, marginBottom: '1.25rem' }}>{post.excerpt}</p>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <span style={{ fontSize: '0.8rem', color: '#606075' }}>⏱ {post.readTime}</span>
                                <span style={{ color: post.tagColor, fontSize: '0.85rem', fontWeight: 600 }}>Read More →</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
