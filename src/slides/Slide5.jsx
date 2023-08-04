import React from "react"
import Slide from "../components/Slide.jsx"
import fishFry from "../assets/Images/fishFry.png"
import ForestLake from "../assets/Images/ForestLake.jpg"

const Slide5 = () => {
	return (
		<Slide>
			{/* Add a lake background image */}
			<div className="flex flex-col-reverse items-center justify-center w-screen h-screen p-10 overflow-scroll text-center align-top md:flex md:flex-row">
				<img src={ForestLake} className="absolute object-cover h-screen blur-sm" />
				<div className="absolute w-screen h-screen bg-[#0c1d1b] opacity-40 "></div>
				<img src={fishFry} className="left-auto right-0 flex h-auto w-[75vw] md:w-1/3 z-10" />
				<p className="z-10 flex w-auto px-8 m-auto text-3xl text-center text-wrap lg:text-5xl">
					Then their father caught a salmon, then Tim caught a bass, then George caught a bass, then their mother caught a salmon.
					They went home to cook the fish for dinner.
				</p>
			</div>
		</Slide>
	)
}

export default Slide5
