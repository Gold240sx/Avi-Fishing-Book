import React from "react"
import Slide from "../components/Slide.jsx"
import VerticalSlide from "../components/VerticalSlide.jsx"
import AcornSoup from "../assets/Images/AcornSoup.png"
import FamMeal from "../assets/Images/FamilyMeal.png"
import picnic from "../assets/Images/picnic.jpg"

const Slide8 = () => {
	return (
		<VerticalSlide>
			<Slide>
				{/* Make the bowl of soup image smaller */}
				<div className="flex flex-col-reverse items-center justify-center w-screen h-screen gap-16 p-10 pr-16 overflow-scroll text-center align-top md:flex md:flex-row">
					<img src={picnic} className="absolute w-screen h-screen blur-sm" />
					<div className="absolute w-screen h-screen bg-white/70"></div>
					<p className="z-10 text-3xl text-red-600 lg:text-5xl">
						In the morning everyone woke up and ate acorns and filtered water. Then they went home and for the first time in 2
						days got a real meal.
					</p>
					<img src={AcornSoup} className="z-10 flex w-1/3 h-auto m-auto mx-auto align-middle" />
				</div>
			</Slide>
			<Slide className="relative w-screen h-screen">
				{/* Add the white wooden wall */}
				<div className="flex flex-col-reverse items-center justify-center w-screen h-screen p-10 overflow-scroll text-center align-top bg-zinc-100 md:flex md:flex-row">
					<img src={FamMeal} className="flex m-auto mx-auto align-middle " />
				</div>
			</Slide>
		</VerticalSlide>
	)
}

export default Slide8
