import React from "react"
import Slide from "../components/Slide.jsx"

const Slide11 = () => {
	return (
		<Slide>
			{/* Fadein slide */}
			<div className="flex flex-col items-center w-screen h-screen pl-10 overflow-scroll text-center align-center justify-col md:flex md:flex-row ">
				<p className="z-10 flex w-auto px-8 m-auto text-6xl text-center align-middle text-wrap">The End!</p>
			</div>
		</Slide>
	)
}

export default Slide11
