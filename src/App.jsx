import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Experiencie from './components/Experiencie'
import AppGrid from './components/AppGrid'
import { projects_data } from './data/portfolio'
import Certifications from './components/Certifications'

const App = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-40 flex flex-col gap-8 md:gap-10 lg:gap-12">
        <Hero/>
        <AppGrid
          title="Aplicaciones"
          projects={projects_data.mvps}
          columns="lg:grid-cols-4"
        />
        <AppGrid
          title="Herramientas"
          projects={projects_data.tools}
          columns="lg:grid-cols-3"
        />
        <Certifications/>
        <Experiencie/>
        <About/>
    </div>
  )
}

export default App