import React from 'react'

export default function OpenVacn() {
  return (
    <div className="h-[100vh]" id="work">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-extrabold text-4xl">Open vacancies</h2>

        <div className="flex flex-wrap gap-6 mt-10">
          <div className="bg-[#fefbec] rounded-[18px] p-7 card">
            <h3 className="font-semibold text-lg">
              Senior Full-Stack Engineer
            </h3>
            <ul className="list-disc ml-5">
              <li>Full-time position</li>
              <li>Berlin or remote</li>
              <li>€6S-85k. 0.5-1.50% equity share options</li>
            </ul>

            <button
              type="button"
              className="bg-black text-white py-2 px-6 rounded-[22px] mt-2 card-btn"
            >
              See details
            </button>
          </div>

          <div className="bg-[#fefbec] rounded-[18px] p-7 card">
            <h3 className="font-semibold text-lg">Senior Designer</h3>
            <ul className="list-disc ml-5">
              <li>Full-time position</li>
              <li>Berlin or remote</li>
              <li>€40-55k, 0.25-0.50% equity share options</li>
            </ul>

            <button
              type="button"
              className="bg-black text-white py-2 px-6 rounded-[22px] mt-2 card-btn"
            >
              See details
            </button>
          </div>

          <div className="bg-[#fefbec] rounded-[18px] p-7 card">
            <h3 className="font-semibold text-lg">Superstar Internr</h3>
            <ul className="list-disc ml-5">
              <li>Full-time position</li>
              <li>Berlin or remote</li>
              <li>€20-24k, 0.5-1.50% equity share options</li>
            </ul>

            <button
              type="button"
              className="bg-black text-white py-2 px-6 rounded-[22px] mt-2 card-btn"
            >
              See details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
