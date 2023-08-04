import React from "react"
import Slide from "../components/Slide.jsx"
import VerticalSlide from "../components/VerticalSlide.jsx"
import dogFishing from "../assets/Images/dogFishing.png"
import FamFishing from "../assets/Images/FamFishing.jpg"
import YetiBookReading from "../assets/Images/yeti/YetiBookReading.png"
import MistyLake from "../assets/Images/mistyLake.jpg"
import IceCave from "../assets/Images/IceCave.jpg"
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
				<div className="flex bg-[#0D3133] items-center justify-center w-screen h-screen overflow-scroll text-center align-top md:flex md:flex-row">
					<img src={MistyLake} className="absolute object-cover w-screen h-screen blur-sm" />
					<div className="z-10 w-screen h-screen bg-white opacity-40"></div>
					<p className="absolute z-10 flex w-auto px-16 m-auto text-3xl text-center text-black text-wrap lg:text-5xl">
						Once they were surviving in the woods with Tuf, and they went to the river near them. Tuf went in the water and took
						out a baby bluegill. Their father and mother caught a bass and Tim and George caught a salmon and they put them in
						water to keep them fresh.
					</p>
				</div>
			</Slide>
			<Slide>
				<div className="flex items-center bg-gradient-to-r  to-[#151D30] from-[#0F1726]  justify-center w-screen h-screen overflow-hidden align-middle">
					<img src={dogFishing} className="top-0 z-50 object-cover w-full h-full bottom" />
				</div>
			</Slide>
			<Slide>
				<div className="relative flex items-center justify-center w-screen h-screen overflow-hidden align-middle">
					<img src={IceCave} className="absolute top-0 object-cover w-full h-full bottom" />
					<div className="z-10 -translate-y-[94px] flex items-center justify-center object-center px-12 py-6 m-auto mx-16 text-center align-middle bg-white rounded-full w-fit h-fit">
						<p className="z-50 mx-auto text-xl font-bold text-black align-center h-fit w-fit text-wrap lg:text-2xl">
							If you're wondering how they cooked the fish then I`ll tell you. They took wood and fur and they used a knife
							and flint to set the fire. Plus they used a fishing knife to kill the fish and cook it. Also they brought clean
							water to rinse the fish off.
						</p>
						<div className=" rotate-[100deg] translate-y-[10vh] -translate-x-[25vw] absolute border-b-white border-[40px] z-10 border-l-transparent border-r-transparent border-t-transparent h-16 w-16"></div>
					</div>
					<div className="absolute items-center justify-center w-64 h-auto overflow-hidden left-4 bottom-5">
						<img src={YetiBookReading} className="z-50 object-contain" />
					</div>
				</div>
			</Slide>
		</VerticalSlide>
	)
}

export default Slide6
