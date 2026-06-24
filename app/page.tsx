import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Timeline from '@/components/sections/Timeline'
import Skills from '@/components/sections/Skills'
import RelianceSports from '@/components/sections/RelianceSports'
import Achievements from '@/components/sections/Achievements'
import CAJourney from '@/components/sections/CAJourney'
import Insights from '@/components/sections/Insights'
import CaseStudy from '@/components/sections/CaseStudy'
import Education from '@/components/sections/Education'
import Contact from '@/components/sections/Contact'

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Timeline />
            <Skills />
            <RelianceSports />
            <Achievements />
            <CAJourney />
            <CaseStudy />
            <Education />
            <Insights />
            <Contact />
        </main>
    )
}
