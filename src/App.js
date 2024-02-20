import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HeroSection from './components/Hero-Section/HeroSection'
import MeetApp from './components/Meet-App/MeetApp'
import OpenVacn from './components/OpenVacan/OpenVacn'
import StartTest from './components/Start-Test/StartTest'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <MeetApp />
      <StartTest />
      <OpenVacn />
      <Footer />
    </div>
  )
}

export default App
