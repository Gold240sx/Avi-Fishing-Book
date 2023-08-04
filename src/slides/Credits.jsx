import React from "react"
import Slide from "../components/Slide.jsx"
import VerticalSlide from "../components/VerticalSlide.jsx"

const Credits = () => {
	return (
		<VerticalSlide>
			<Slide>
				<div className="flex flex-col items-center w-screen h-screen pl-10 overflow-scroll text-center align-center justify-col ">
					<div className="flex flex-col m-auto">
						<p className="z-10 flex w-auto px-8 text-xl text-center text-gray-400 align-middle text-wrap ">
							Avi insert tons of thank you messages here...
						</p>
					</div>
				</div>
			</Slide>
			<Slide>
				<div className="flex flex-col items-center w-screen h-screen pl-10 overflow-scroll text-center align-center justify-col ">
					<div className="flex flex-col items-center justify-center gap-6 m-auto">
						<div className="flex flex-col ">
							<p className="z-10 flex w-auto px-8 text-xl text-center text-gray-400 align-middle text-wrap ">
								Michael: I Gotta thank Vecteezy and all the artists who created vector illustrations incorporated within
								this book. Without it, illustrating this book would have never happened. Also, thanks to the music Talents
								that created the tracks used in this project...
							</p>
						</div>
						<div className="flex flex-col ">
							<p className="z-10 flex w-auto px-8 text-xl text-center text-gray-400 align-middle text-wrap ">
								DRM-Free to use music and album covers supplied by https://pixabay.com.
							</p>
						</div>
					</div>
				</div>
			</Slide>
			<Slide>
				<div className="flex flex-col items-center w-screen h-screen pl-10 overflow-scroll text-center align-center justify-col ">
					<div className="flex flex-col m-auto">
						<p className="flex w-auto px-8 text-xl text-center text-gray-400 align-middle text-wrap">
							...Insert marketing pitch for your next book.
						</p>
						<div className="flex w-full gap-8 mt-10 h-fit">
							<div className="w-32 h-32 text-center bg-gray-500 ">Book 1</div>
							<div className="w-32 h-32 text-center bg-red-500 ">Book 2</div>
							<div className="w-32 h-32 text-center bg-teal-500 ">Book 3</div>
							<div className="w-32 h-32 text-center bg-orange-500 ">Book 4</div>
						</div>
					</div>
				</div>
			</Slide>
			<Slide>
				<div className="flex flex-col items-center w-screen h-screen pl-10 overflow-scroll text-center align-center justify-col ">
					<div className="flex flex-col m-auto">
						<p className="z-10 flex w-auto px-8 text-xl text-center text-gray-400 align-middle text-wrap ">
							...Thank you Avi for this opportunity to illustrate your story and include it in one of my portfolio projects!
							Don't let anyone tell you you're anything but the big fish!
						</p>
						<span className="mt-8 text-2xl text-white whitespace-nowrap">- Michael Martell</span>
					</div>
				</div>
			</Slide>
		</VerticalSlide>
	)
}

export default Credits
