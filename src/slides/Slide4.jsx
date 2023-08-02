import React from "react"
import Slide from "../components/Slide.jsx"
import Scene2 from "../assets/Images/Bobcat-Fish-W-George-Scene.png"

const Slide4 = () => {
	return (
		<Slide>
			{/* Center the words */}
			<img
				src={Scene2}
				className="w-screen m-0 object-fit max-h-none max-w-none"
				style={{ margin: "unset", maxWidth: "unset", maxHeight: "unset", display: "flex", verticalAlign: "unset" }}
			/>
			<div className="flex bg-[#717C27] flex-col items-center justify-center w-screen h-screen overflow-scroll text-center align-top item-center overflow-scrolll">
				<p className="flex w-3/4 m-auto mt-6 text-3xl text-center align-center text-wrap">
					One summer day, Tim and his family went fishing, and Tim saw a bobcat with a fish in its mouth. He said to George, “Look
					at that bobcat”. George said, “Wow what type of fish is that?” Tim said “I don`t know”. George said, “OK”.
				</p>
			</div>
		</Slide>
	)
}

export default Slide4