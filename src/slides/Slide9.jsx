import React from "react"
import Slide from "../components/Slide.jsx"
import VerticalSlide from "../components/VerticalSlide.jsx"
import TufPlay from "../assets/Images/TufPlay.png"
import corgiRepeat from "../assets/Images/corgi-repeat.jpg"

const Slide9 = () => {
	return (
		<VerticalSlide>
			<Slide>
				{/* get the background repeat working */}
				<div className="flex flex-col-reverse items-center justify-center w-screen h-screen overflow-scroll align-top text-start md:flex md:flex-row ">
					<div style={{ backgroundImage: corgiRepeat }} className="bg-repeat blur-sm" />
					{/* <div className="absolute w-screen h-screen bg-white/70"></div> */}
					<p className="z-10 flex w-auto px-8 m-auto text-3xl text-wrap text-start lg:text-5xl">
						Then Tim played with Tuf. Tim gave Tuf a treat, then played more. George also gave Tuf a treat.
						<br></br>
						<br></br>
						George asked "Why do you love dogs so much?" <br></br>
						<br></br>Tim said "because they're cute and fluffy!"
					</p>
				</div>
			</Slide>
			<Slide>
				{/* Prevent horizontal stretching on all these full slide images */}
				<div className="flex flex-col-reverse items-center justify-center w-screen h-screen overflow-scroll text-center align-top md:flex md:flex-row">
					<img src={TufPlay} className="flex h-screen m-auto mx-auto align-middle " />
				</div>
			</Slide>
		</VerticalSlide>
	)
}

export default Slide9
