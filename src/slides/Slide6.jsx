import React from "react"
import Slide from "../components/Slide.jsx"
import VerticalSlide from "../components/VerticalSlide.jsx"
import dogFishing from "../assets/Images/dogFishing.png"
import FamFishing from "../assets/Images/FamFishing.jpg"
import YetiBookReading from "../assets/Images/yeti/YetiBookReading.png"
// import VerticalSlide from "../components/VerticalSlide.jsx"

const Slide6 = () => {
	return (
		<VerticalSlide>
			<Slide>
				<div className="flex bg-[#20450B] items-center justify-center w-screen h-screen overflow-hidden align-middle">
					<img src={FamFishing} className="absolute z-40 w-auto h-screen opacity-50 blur-md" />
					<div className="absolute w-screen h-screen bg-black/40"></div>
					<img src={FamFishing} className="z-50 object-contain" />
				</div>
			</Slide>
			<Slide>
				{/* Add another lake photo */}
				<div className="flex flex-col-reverse bg-[#0D3133] items-center justify-center w-screen h-screen p-10 overflow-scroll text-center align-top md:flex md:flex-row">
					<p className="flex w-auto px-8 m-auto text-3xl text-center text-wrap lg:text-5xl">
						Once they were surviving in the woods with Tuf, and they went to the river near them. Tuf went in the water and took
						out a baby bluegill. Their father and mother caught a bass and Tim and George caught a salmon and they put them in
						water to keep them fresh.
					</p>
				</div>
			</Slide>
			<Slide>
				<div className="flex items-center justify-center w-screen h-screen overflow-hidden align-middle">
					<img src={dogFishing} className="z-50 object-contain" />
				</div>
			</Slide>
			<Slide>
				<div className="relative flex items-center justify-center w-screen h-screen overflow-hidden align-middle">
					<p className="flex w-auto px-8 m-auto text-3xl text-center text-wrap lg:text-5xl">
						If you're wondering how they cooked the fish then I`ll tell you. They took wood and fur and they used a knife and
						flint to set the fire. Plus they used a fishing knife to kill the fish and cook it. Also they brought clean water to
						rinse the fish off.
					</p>
					<div className="absolute items-center justify-center w-64 h-auto overflow-hidden left-4 bottom-5">
						<img src={YetiBookReading} className="z-50 object-contain" />
					</div>
				</div>
			</Slide>
		</VerticalSlide>
	)
}

export default Slide6
