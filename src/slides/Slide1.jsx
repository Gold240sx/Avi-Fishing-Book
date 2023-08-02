import React, { useEffect, useState } from "react"
import Slide from "../components/Slide"
import Sky from "../assets/Images/sky.png"
import Trees from "../assets/Images/trees.png"
import Hill from "../assets/Images/hill.png"
import Fire from "../assets/Images/campfire.png"
import Avi from "../assets/Images/Avi.png"
import AviGreet from "../assets/Images/Avi-Greet.png"
import AviThanks from "../assets/Images/Avi-Thanks.png"
import AviEnjoy from "../assets/Images/Avi-Enjoy.png"
import BookTitle from "../assets/Images/BookTitle.png"

export default function Slide1() {
	const [step, setStep] = useState(1)

	useEffect(() => {
		if (step === 1) {
			setTimeout(() => {
				setStep(step + 1)
			}, 200)
			return
		} else if (step < 3) {
			setTimeout(() => {
				setStep(step + 1)
			}, 450)
			return
		} else if (step < 6) {
			setTimeout(() => {
				setStep(step + 1)
			}, 3000)
		}
	}, [step])

	return (
		<>
			<Slide>
				<div className="relative flex h-[100vh] w-screen flex-col">
					<img
						src={Sky}
						className="absolute m-0 h-[80vh] max-h-none w-screen max-w-none object-cover"
						style={{ margin: "unset", maxWidth: "unset", maxHeight: "unset", display: "flex", verticalAlign: "unset" }}
					/>
					<img src={Trees} className="absolute bottom-[140px] left-0 right-0 w-full scale-125 overflow-visible" />
					<img src={Hill} className="absolute -bottom-10 left-0 right-0 min-h-[14rem] w-full scale-125 overflow-visible" />
					{step === 2 && <img src={Avi} className="absolute z-50 w-1/2 min-h-64 bottom-10 left-4" />}
					{step === 3 && <img src={AviGreet} className="absolute z-50 w-1/2 min-h-64 bottom-10 left-4" />}
					{step === 4 && <img src={AviThanks} className="absolute z-50 w-1/2 min-h-64 bottom-10 left-4" />}
					{step === 5 && <img src={AviEnjoy} className="absolute z-50 w-1/2 min-h-64 bottom-10 left-4" />}
					{step !== 6 && <img src={Fire} className="absolute z-40 w-1/6 min-h-40 bottom-16 right-24" />}
					{step === 6 && (
						<div className="flex items-center justify-center w-screen h-screen overflow-hidden align-middle aspect-square">
							<img
								src={BookTitle}
								className="absolute z-50 flex justify-center h-auto m-auto align-middle min-h-64 aspect-square"
							/>
							<div className="z-40 aspect-square h-full max-h-[80vh] w-auto max-w-[80vw] scale-90 rounded-full bg-[#927C6B/0] shadow-2xl shadow-black"></div>
						</div>
					)}
				</div>
			</Slide>
		</>
	)
}
