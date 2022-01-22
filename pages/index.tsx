import Biography from './biography'
import Contact from './contact'
import Experiences from './experiences'
import Profile from './profile'
import Projects from './projects'
import Skills from './skills'

export default function Home() {
  return (
    <div>
      <section id="profile">
        <Profile />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experiences">
        <Experiences />
      </section>
      <section id="biography">
        <Biography />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}
