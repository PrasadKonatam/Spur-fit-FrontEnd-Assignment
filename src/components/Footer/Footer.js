import { FaLocationDot } from 'react-icons/fa6'
import { FaEnvelope } from 'react-icons/fa'

import logo from '../../images/logo.png'

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center border-t-[1px] border-solid border-t-[#ebebf2] py-9 bg-[#f5f5f5]">
      <img src={logo} alt="logo" className="h-20 w-20 rounded-[12px]" />
      <p className="text-[#6242ea] text-[32px] font-semibold">ahead</p>

      <div className="flex justify-center items-center gap-16 mt-8">
        <div className="flex items-center gap-1">
          <p className="bg-[#99f0d7] rounded-full flex justify-center items-center h-7 w-7">
            <FaLocationDot />
          </p>
          <p>Auguststraße 26, 10117 Berlin</p>
        </div>
        <div className="flex items-center gap-1">
          <p className="bg-[#99f0d7] rounded-full flex justify-center items-center h-7 w-7">
            <FaEnvelope />
          </p>
          <p>hi@ahead-app.com</p>
        </div>
      </div>

      <img
        src="https://ahead-app.com/images/app-store.svg"
        alt="app-store"
        className="mt-8"
      />

      <p className="mt-8">© 2022 Ahead app. All right reserved</p>
    </div>
  )
}

export default Footer
