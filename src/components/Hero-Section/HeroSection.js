import { FaStar } from 'react-icons/fa'
import AOS from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import heroImg from '../../images/hero.png'

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ delay: 500 })
  }, [])

  return (
    <div className="mx-10 relative mb-12">
      <img src={heroImg} alt="hero-img" className="w-full" />

      <div data-aos="fade-left" className="absolute bottom-[35%] left-[8%]">
        <p>Ahead app</p>
        <h2 className="font-extrabold text-5xl max-w-[380px] mt-4">
          Master your life by mastering emotions
        </h2>

        <div className="mt-9 flex">
          <img
            src="https://ahead-app.com/images/app-store.svg"
            alt="app-store"
          />
          <div className="flex flex-col justify-between gap-1 ml-3">
            <div className="flex items-center gap-1">
              <FaStar color="#ffd037" />
              <FaStar color="#ffd037" />
              <FaStar color="#ffd037" />
              <FaStar color="#ffd037" />
              <FaStar color="#ffd037" />
            </div>
            <p>100+ AppStore Reviews</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
