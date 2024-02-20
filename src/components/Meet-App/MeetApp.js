import meetAppImg from '../../images/meet-app.png'
import AOS from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

const MeetApp = () => {
  useEffect(() => {
    AOS.init({ delay: 500 })
  }, [])
  return (
    <div className="mx-10 relative mb-12">
      <img src={meetAppImg} alt="meet-app" className="w-full" />

      <div data-aos="fade-left" className="absolute top-[24%] left-[5%]">
        <p>Built out of frustration</p>
        <h2 className="font-extrabold text-5xl mt-4">Meet the ahead app</h2>
      </div>

      <div data-aos="fade-right" className="absolute bottom-[30%] right-[20%]">
        <p className="text-xl text-[#383838] font-[EuclidB] max-w-[380px]">
          A personalized pocket coach that provides bite- sized, science-driven
          tools to boost emotional intelligence.
          <br />
          <br />
          Think of it as a pocket cheerleader towards a better, more fulfilling.
        </p>
      </div>
    </div>
  )
}

export default MeetApp
