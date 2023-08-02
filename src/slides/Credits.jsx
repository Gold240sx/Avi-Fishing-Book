import React from "react"
import Slide from "../components/Slide.jsx"
import VerticalSlide from "../components/VerticalSlide.jsx"

const Credits = () => {
	return (
		<Slide>
			{/* Timeout Slide */}
			{/* Add all the frames of the yeti! */}
			<div className="flex flex-col items-center w-screen h-screen pl-10 overflow-scroll text-center align-center justify-col md:flex md:flex-row ">
				<p className="z-10 flex w-auto px-8 m-auto text-4xl text-center align-middle text-wrap">
					...But we all know you wanted to know how I'm doing!
				</p>
				<p className="z-10 flex w-auto px-8 m-auto text-4xl text-center align-middle text-wrap">...Well I'm glad you asked!</p>
				<p className="z-10 flex w-auto px-8 m-auto text-4xl text-center align-middle text-wrap">
					... I stole a hotdog when they weren't looking.
				</p>
			</div>
		</Slide>
	)
}

export default Credits
