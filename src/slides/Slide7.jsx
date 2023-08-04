import React from "react"
import Slide from "../components/Slide.jsx"
import VerticalSlide from "../components/VerticalSlide.jsx"
import NightTalk from "../assets/Images/Night-Talk.png"
import StarryNight from "../assets/Images/StarryNight.jpg"

const Slide7 = () => {
	return (
		<VerticalSlide>
			<Slide>
				{/* Night camping photo */}
				<img src={StarryNight} className="absolute object-cover w-screen h-screen blur-sm" />
				<div className="absolute w-screen h-screen bg-cyan-900 opacity-40"></div>
				<div className="flex bg-[#132938]  flex-col-reverse items-center justify-center w-screen h-screen overflow-scroll text-center align-top md:flex md:flex-row">
					<p className="z-10 flex w-auto px-8 m-auto text-3xl text-center text-wrap lg:text-5xl">
						When everyone was asleep, George went to the bathroom,and he saw Tim fishing, then he asked "What are you doing?"
						<br></br>
						<br></br>Tim said "I’m hungry so I’m fishing for food. Got it?"
					</p>
				</div>
			</Slide>
			<Slide>
				<div className="flex bg-gradient-to-b  from-[#24526F] to-[#3D5869]  flex-col-reverse items-center justify-center w-screen h-screen overflow-scroll text-center align-top md:flex md:flex-row">
					<img src={NightTalk} className="flex h-auto m-auto mx-auto align-middle " />
				</div>
			</Slide>
			<Slide>
				<div className="flex scroll-container overflow-scroll bg-[#51758C] flex-col-reverse items-center justify-center w-screen h-screen p-10 align-top text-start md:flex md:flex-row ">
					<img src={NightTalk} className="absolute object-cover w-screen h-screen blur-md" />
					<div className="absolute w-screen h-screen bg-cyan-900 opacity-40"></div>
					<div className="z-10 flex flex-col w-full gap-6 px-8 m-auto text-xl text-start text-wrap lg:text-2xl h-fit">
						<p className="px-4 py-1 bg-blue-500 rounded-full w-fit">George: "Did you catch anything?"</p>
						<p className="ml-auto text-right align-right max-w-[80vw] w-fit bg-gray-500 px-4 py-1 rounded-full">
							Tim: "Yes I caught a bass, although I don’t want to make a fire because I think it’s going to wake up everyone."
						</p>
						<p className="px-4 py-1 bg-blue-500 rounded-full w-fit">George: "I think it’s fine, just do it away from us."</p>
						<p className="ml-auto text-right align-right max-w-[80vw] w-fit bg-gray-500 px-4 py-1 rounded-full">
							Tim: "O.K. Do you want some?"
						</p>
						<p className="px-4 py-1 bg-blue-500 rounded-full w-fit">George: "No I’m fine."</p>
						<p className="ml-auto text-right align-right max-w-[80vw] w-fit bg-gray-500 px-4 py-1 rounded-full">
							Tim: "O.K. Bye!"
						</p>
						<p className="px-4 py-1 bg-blue-500 rounded-full w-fit">George: "Bye."</p>
					</div>
				</div>
			</Slide>
		</VerticalSlide>
	)
}

export default Slide7
