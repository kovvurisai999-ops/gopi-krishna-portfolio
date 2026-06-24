'use client'

import { useEffect } from 'react'

export default function ScrollProgress() {
    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
            document.documentElement.style.setProperty('--scroll-progress', `${progress}%`)
        }
        window.addEventListener('scroll', updateScrollProgress, { passive: true })
        return () => window.removeEventListener('scroll', updateScrollProgress)
    }, [])

    return <div id="scroll-progress-bar" aria-hidden="true" />
}
