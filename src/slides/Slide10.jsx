import React from "react"
import Slide from "../components/Slide.jsx"
import Swimming from "../assets/Images/Swimming.png"

const Slide10 = () => {
	return (
		<Slide>
			{/* Add the water beach background */}
			<div className="flex flex-col items-center w-screen h-screen pl-10 overflow-scroll text-center align-center justify-col md:flex md:flex-row ">
				<img src={Swimming} className="flex w-auto h-96 mx-auto mt-auto absolute bottom-[5%] -right-20" />
				<p className="z-10 flex w-auto px-8 m-auto text-3xl text-center align-middle -translate-y-20 text-wrap lg:text-5xl">
					Then they had dinner and made a bonfire. Meanwhile they were swimming,making S'mores, and hot dogs.
				</p>
			</div>
		</Slide>
	)
}

export default Slide10
