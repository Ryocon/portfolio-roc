// import './App.css'
import styled from 'styled-components'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const Container = styled.div`
  height: 100vh;
  background-color: #fbfffe;
  `

function App() {

  return (
    <Container>
     <Hero />
     <About />
     <Projects />
     <Contact />
    </Container>
  )
}

export default App
