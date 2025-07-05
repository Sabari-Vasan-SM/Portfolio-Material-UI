import type React from "react"

interface CareerObjectiveCardProps {
  isFlipped: boolean
}

const CareerObjectiveCard: React.FC<CareerObjectiveCardProps> = ({ isFlipped }) => {
  return (
    <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front bg-white rounded-xl shadow-md p-6 flex flex-col justify-center items-center h-full">
          <div className="text-2xl md:text-3xl font-bold text-center leading-tight">
            <span className="text-black">MechanicalPrecision</span>
            <span className="text-black">, </span>
            <span className="text-black">ITEfficiency</span>
            <span className="text-black">, </span>
            <span className="text-black">Future-ReadySolutions</span>
          </div>
          <p className="text-base md:text-lg text-center mt-4 text-gray-700">
            Crafting innovative solutions at the intersection of mechanical engineering and information technology.
          </p>
        </div>
        <div className="flip-card-back bg-gray-800 text-white rounded-xl shadow-md p-6 flex flex-col justify-center items-center h-full">
          <p className="text-lg md:text-xl font-bold text-center leading-tight">
            Driven by innovation, committed to excellence.
          </p>
          <p className="text-base md:text-lg text-center mt-4">
            Seeking opportunities to leverage expertise in mechanical systems and IT infrastructure to develop
            future-ready solutions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CareerObjectiveCard
