import Hero from './components/Hero'
import Experience from './components/Experience'
import Packages from './components/Packages'
import Skills from './components/Skills'
import Education from './components/Education'
import Footer from './components/Footer'
import Spotlight from './components/ui/Spotlight'
import ScrollProgress from './components/ui/ScrollProgress'

const App = () => (
    <>
        <ScrollProgress />
        <Spotlight />
        <main className="relative z-10 mx-auto flex max-w-3xl flex-col gap-20 px-6 md:gap-24 md:px-8">
            <Hero />
            <Experience />
            <Packages />
            <Skills />
            <Education />
            <Footer />
        </main>
    </>
)

export default App
