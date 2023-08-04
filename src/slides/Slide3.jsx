import React from "react"
import VerticalSlide from "../components/VerticalSlide"
import Slide from "../components/Slide"
import riverFishing from "../assets/Images/RiverFishing.png"
import georgeAndTuf2 from "../assets/Images/GeorgeAndTuf2.png"
import Sunset from "../assets/Images/Sunset.jpg"
import { useState, useEffect } from "react"

const Slide3 = () => {
	return (
		<>
			<VerticalSlide>
				<Slide>
					<div className="flex items-center justify-center w-screen h-screen overflow-scroll text-center align-top bg-[#7A766E]">
						<p className="flex w-3/4 px-8 m-auto text-2xl text-center text-wrap lg:text-3xl">
							There was once a boy named Tim, he was 10 and he lived on a mountain with a river. He liked to go fishing at the
							river. He always asked his parents to take him fishing and his parents always took him fishing there, so he can
							catch fish to cook. Tim liked to eat bass and salmon.{" "}
						</p>
						<img src={riverFishing} className="right-0 left-auto flex w-auto h-screen" />
					</div>
					<script></script>
				</Slide>
				<Slide>
					{/* Gradient bg-color with stars OR Wooden sign with the words */}
					<div className="flex  bg-gradient-to-b  from-[#3D3684] to-[#0D1031]  flex-col items-center justify-center w-screen h-screen text-center ">
						<img src={Sunset} className="absolute object-fill w-screen absolue h-sceen " />
						<p className="z-10 flex w-3/4 m-auto text-2xl text-center text-wrap lg:text-3xl mb-[5vh]">
							Tim had a brother named George. George, who sometimes also took him fishing. George was 23 and he loved to go
							fishing, also he loved the wilderness. They all lived in a wooden cabin, and they loved camping. Tim and George
							had a dog named "Tuf". He liked to go in the water and take fish too.
						</p>
					</div>
				</Slide>
				<Slide>
					<div className="flex items-center bg-gradient-to-r  to-[#151D30] from-[#0F1726]  justify-center w-screen h-screen overflow-hidden align-middle">
						<img src={georgeAndTuf2} className="top-0 z-50 object-cover object-bottom h-full" />
					</div>
				</Slide>
			</VerticalSlide>
		</>
	)
}

export default Slide3