import signImg from '../../images/sign.jpg'

const StartTest = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <p className="text-lg">We take privacy seriously</p>
        <h2 className="font-extrabold text-4xl mt-3">Before you get started</h2>
        <p className="max-w-[830px] text-center text-3xl mt-5">
          "We won't share your answers with anyone (and won't ever tell you
          which friends said what about you)"
        </p>
        <div className="flex justify-center items-end mt-5">
          <p>with love,</p>
          <img src={signImg} alt="sign" className="w-[200px]" />
        </div>
        <button
          type="button"
          className="bg-black text-white rounded-[24px] py-2 px-7 mt-5 mb-3"
        >
          Start a test
        </button>
        <p>Take only 5 minutes</p>
      </div>
    </div>
  )
}

export default StartTest
