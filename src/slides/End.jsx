import React from "react"
import Slide from "../components/Slide.jsx"
import VerticalSlide from "../components/VerticalSlide.jsx"
import Bobcat from "../assets/Images/Yeti/Bobcat.png"

const End = () => {
	return (
		<Slide>
			<div className="absolute flex flex-col items-center justify-center w-screen h-screen gap-16 p-10 pr-16 overflow-scroll text-center align-top md:flex md:flex-row">
				<img src={Bobcat} className="z-10 h-[60vh] flex m-auto mx-auto align-middle " />
			</div>
			<div className="flex flex-col items-center w-screen h-screen pl-10 overflow-scroll text-center align-center justify-col ">
				<div className="flex flex-col gap-10 mt-auto mb-20">
					<p className="z-10 flex w-auto px-8 m-auto text-4xl text-center align-bottom text-wrap">Has anyone seen my pet cat?</p>
				</div>
			</div>
		</Slide>
	)
}

export default End
