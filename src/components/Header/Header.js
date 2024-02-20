import logo from '../../images/logo.png'

const Header = () => {
  return (
    <header className="sticky top-0 z-[1000] bg-white">
      <nav className="flex justify-around items-center py-7">
        <a href="/">
          <img src={logo} alt="logo" className="h-20 w-20 rounded-[12px]" />
        </a>

        <ul className="flex justify-center items-center gap-8">
          <li>
            <a href="/" className="text-base text-[#383838] font-[EuclidB]">
              Emotions
            </a>
          </li>
          <li>
            <a href="/" className="text-base text-[#383838] font-[EuclidB]">
              Manifesto
            </a>
          </li>
          <li>
            <a href="/" className="text-base text-[#383838] font-[EuclidB]">
              Self-awareness test
            </a>
          </li>
          <li>
            <a
              href="/#work"
              className="text-base text-[#383838] font-[EuclidB]"
            >
              Work with Us
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="bg-black text-white font-[EuclidB] h-11 w-36 rounded-[20px]"
        >
          Download app
        </button>
      </nav>
    </header>
  )
}

export default Header
