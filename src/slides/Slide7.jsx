import React from "react"
import Slide from "../components/Slide.jsx"
import VerticalSlide from "../components/VerticalSlide.jsx"
import NightTalk from "../assets/Images/Night-Talk.png"

const Slide7 = () => {
	return (
		<VerticalSlide>
			<Slide>
				{/* Night camping photo */}
				<div className="flex bg-[#132938] flex-col-reverse items-center justify-center w-screen h-screen overflow-scroll text-center align-top md:flex md:flex-row">
					<p className="flex w-auto px-8 m-auto text-3xl text-center text-wrap lg:text-5xl">
						When everyone was asleep, George went to the bathroom,and he saw Tim fishing, then he asked "What are you doing?"
						<br></br>
						<br></br>Tim said "I’m hungry so I’m fishing for food. Got it?"
					</p>
				</div>
			</Slide>
			<Slide>
				<div className="flex flex-col-reverse items-center justify-center w-screen h-screen overflow-scroll text-center align-top md:flex md:flex-row">
					<img src={NightTalk} className="flex h-screen m-auto mx-auto align-middle " />
				</div>
			</Slide>
			<Slide>
				{/* I honestly don't know what to put here */}
				<div className="flex bg-[#51758C] flex-col-reverse items-center justify-center w-screen h-screen p-10 overflow-scroll align-top text-start md:flex md:flex-row ">
					<p className="flex w-auto px-8 m-auto text-3xl text-start text-wrap lg:text-5xl">
						George: "Did you catch anything?" <br></br>
						<br></br>Tim: "Yes I caught a bass, although I don’t want to make a fire because I think it’s going to wake up
						everyone." <br></br>
						<br></br>George: "I think it’s fine, just do it away from us." <br></br>
						<br></br>Tim: "O.K. Do you want some?" <br></br>
						<br></br>George: "No I’m fine."<br></br>
						<br></br> Tim: "O.K. Bye!" <br></br>
						<br></br> George: "Bye."
					</p>
				</div>
			</Slide>
		</VerticalSlide>
	)
}

export default Slide7
