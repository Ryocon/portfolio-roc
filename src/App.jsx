import './App.css'
import styled from 'styled-components'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
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
