import React from "react"
import Slide from "../components/Slide.jsx"
import VerticalSlide from "../components/VerticalSlide.jsx"
import TufPlay from "../assets/Images/TufPlay.png"
import corgiRepeat from "../assets/Images/corgi-repeat.jpg"

const Slide9 = () => {
	return (
		<Slide>
			{/* get the background repeat working */}
			{/* <div
				style={{
					backgroundImage: `url(${corgiRepeat})`,
					backgroundRepeat: "repeat",
					backgroundSize: "200px 200px", // Set the size of the repeating block
				}}
				className="absolute flex flex-col-reverse items-center justify-center w-screen h-screen bg-repeat text-start md:flex md:flex-row blur-sm">
				<div className="absolute w-screen h-screen bg-black/70"></div>
			</div> */}
			<div className="relative w-screen h-screen bg-blur-sm text-start md:flex md:flex-row">
				<div className="absolute inset-0 flex items-end justify-end overflow-hidden">
					{/* Use "inset-0" to position the image at the bottom right corner */}
					<img src={TufPlay} className="object-cover min-h-screen min-w-screen" />
				</div>
				<div className="absolute w-screen  h-[60vh] bg-gradient-to-b from-black/60 to-black/0">
					<p className="absolute z-10 flex w-full px-8 pt-10 pb-4 m-auto text-xl text-white h-fit text-wrap text-start lg:text-2xl">
						Then Tim played with Tuf. Tim gave Tuf a treat, then played more. George also gave Tuf a treat. George asked "Why do
						you love dogs so much?"
						<br />
						Tim said "because they're cute and fluffy!"
					</p>
				</div>
			</div>
		</Slide>
	)
}

export default Slide9
