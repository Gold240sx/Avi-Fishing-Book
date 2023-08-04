import React from "react"
import Slide from "../components/Slide.jsx"
import VerticalSlide from "../components/VerticalSlide.jsx"
import AcornSoup from "../assets/Images/AcornSoup.png"
import FamMeal from "../assets/Images/FamilyMeal.png"
import picnic from "../assets/Images/picnic.jpg"
import WoodWall from "../assets/Images/WoodWall.jpg"

const Slide8 = () => {
	return (
		<VerticalSlide>
			<Slide>
				{/* Make the bowl of soup image smaller */}
				<div className="flex flex-col-reverse items-center justify-center w-screen h-screen gap-16 p-10 pr-16 overflow-scroll text-center align-top md:flex md:flex-row">
					<img src={picnic} className="absolute w-screen h-screen blur-sm" />
					<div className="absolute w-screen h-screen bg-white/70"></div>
					<p className="z-10 text-3xl text-red-600 -translate-y-8 md:translate-y-0 lg:text-5xl">
						In the morning everyone woke up and ate acorns and filtered water. Then they went home and for the first time in 2
						days got a real meal.
					</p>
					<img src={AcornSoup} className="z-10 flex w-[50vw] h-auto m-auto mx-auto align-middle md:w-1/3" />
				</div>
			</Slide>
			<Slide className="relative w-screen h-screen">
				{/* Add the white wooden wall */}
				<div className="flex flex-col-reverse items-center justify-center w-screen h-screen p-10 overflow-scroll text-center align-top bg-zinc-100 md:flex md:flex-row">
					<img src={WoodWall} className="absolute flex m-auto mx-auto ml-8 align-middle w-fit opacity-10" />
					<div className="absolute bottom-0 w-screen h-1/3 bg-zinc-300"></div>
					<img src={FamMeal} className="z-10 flex m-auto mx-auto ml-8 align-middle w-fit" />
				</div>
			</Slide>
		</VerticalSlide>
	)
}

export default Slide8
