import React from "react"
import Slide from "../components/Slide.jsx"
import Swimming from "../assets/Images/Swimming.png"
import Summer from "../assets/Images/summer.jpg"

const Slide10 = () => {
	return (
		<Slide>
			{/* Add the water beach background */}
			<div className="flex flex-col items-center w-screen h-screen overflow-scroll text-center align-center justify-col md:flex md:flex-row ">
				<div className="absolute inset-0 flex items-end justify-end overflow-hidden">
					{/* Use "inset-0" to position the image at the bottom right corner */}
					<img src={Summer} className="object-cover min-h-screen min-w-screen opacity-90 blur" />
				</div>
				<img src={Swimming} className="flex w-auto h-96 mx-auto mt-auto absolute bottom-[5%] -right-20" />
				<p className="z-10 flex w-auto px-8 mt-[20vh] mb-auto text-3xl text-center align-Top text-wrap lg:text-5xl text-black">
					Then they had dinner and made a bonfire. Meanwhile they were swimming,making S'mores, and hot dogs!
				</p>
			</div>
		</Slide>
	)
}

export default Slide10
