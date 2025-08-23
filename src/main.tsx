  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import NavbarPages from './components/navbar'
  import HeroSection from './components/heroSection'
  import FooterPage from './components/footer'

  import './index.css'
  
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <NavbarPages/>
      <HeroSection/>
      <FooterPage/>


    </StrictMode>,
  )
