import React from "react"
import Slide from "../components/Slide.jsx"
import VerticalSlide from "../components/VerticalSlide.jsx"
import YetiBook from "../assets/Images/yeti/YetiBookReading.png"
import Morning from "../assets/Images/yeti/morning.png"
import HawaiianDance from "../assets/Images/yeti/aloha.png"
import Scare from "../assets/Images/yeti/scare.png"
import Weightlifting from "../assets/Images/yeti/Yeti-weightlift.png"
import Dancing from "../assets/Images/yeti/music.png"

const PostStory2 = () => {
	return (
		<VerticalSlide>
			<Slide>
				<div className="flex flex-col-reverse items-center justify-center w-screen h-screen gap-16 p-10 pr-16 overflow-scroll text-center align-top md:flex md:flex-row">
					<img src={YetiBook} className="z-10 flex w-[50vw] h-auto m-auto mx-auto align-middle md:w-1/3" />
					<p className="z-10 text-3xl text-gray-400 -translate-y-8 md:translate-y-0 lg:text-5xl">
						...Yeah Yeah, Credits are great and all but I'm sure you've all been dying to know how I'm doing!
					</p>
				</div>
				<div className="flex flex-col items-center w-screen h-screen pl-10 overflow-scroll text-center align-center justify-col ">
					<div className="flex flex-col gap-10 m-auto">
						<p className="z-10 flex w-auto px-8 m-auto text-4xl text-center align-middle text-wrap">Well I'm glad you asked!</p>
					</div>
				</div>
			</Slide>
			<Slide>
				<div className="flex flex-col-reverse items-center justify-center w-screen h-screen gap-16 p-10 pr-16 overflow-scroll text-center align-top md:flex md:flex-row">
					<div className="flex absolute items-center justify-center w-screen h-screen overflow-hidden align-middle  rotate-[5deg]">
						<img src={Morning} className="top-0 z-50 object-cover w-full h-full bottom" />
					</div>
					<div className="absolute w-screen h-screen bg-white/10"></div>
					<div className="flex flex-col mt-auto">
						<p className="z-10 flex w-auto px-8 py-1 mt-auto text-4xl text-black bg-white shadow-md text-bottom text-wrap shadow-black">
							I woke up early, ready to conquer the world!
						</p>
					</div>
				</div>
			</Slide>
			<Slide>
				<div className="flex flex-col items-center w-screen h-screen pl-10 overflow-scroll text-center align-center justify-col ">
					<div className="flex flex-col gap-10 m-auto">
						<p className="z-10 flex w-auto px-8 m-auto text-4xl text-center align-middle text-wrap">
							...then pet hampster ran away. Thanks for reminding me.
						</p>
						<p className="z-10 flex w-auto px-8 m-auto text-4xl text-center align-middle text-wrap">
							Other than that, I've just been studying and other stuff like:
						</p>
					</div>
				</div>
			</Slide>
			<Slide>
				<div className="flex flex-col-reverse items-center justify-center w-screen h-screen gap-16 p-10 pr-16 text-center align-top md:flex md:flex-row">
					<div className="absolute flex items-center justify-center w-screen h-screen overflow-visible align-middle ">
						<img src={HawaiianDance} className="top-0 h-[95%] rotate-[355deg] bottom" />
					</div>
					<div className="absolute w-screen h-screen bg-white/10"></div>
					<div className="flex flex-col mt-auto">
						<p className="z-10 flex w-auto px-8 py-1 mt-auto text-4xl text-black bg-white shadow-md text-bottom text-wrap shadow-black">
							I tried out as a Hawaiian Luau dancer.
						</p>
					</div>
				</div>
			</Slide>
			<Slide>
				<div className="flex flex-col items-center w-screen h-screen pl-10 overflow-scroll text-center align-center justify-col ">
					<div className="flex flex-col m-auto">
						<p className="z-10 flex w-auto px-8 m-auto text-4xl text-center align-middle text-wrap">... The stage broke.</p>
					</div>
				</div>
			</Slide>
			<Slide>
				<div className="flex flex-col-reverse items-center justify-center w-screen h-screen gap-16 p-10 pr-16 text-center align-top md:flex md:flex-row">
					<div className="absolute flex items-center justify-center w-screen h-screen overflow-visible align-middle ">
						<img src={Scare} className="top-0 h-[95%] rotate-[355deg] bottom" />
					</div>
					<div className="absolute w-screen h-screen bg-white/10"></div>
					<div className="flex flex-col mt-auto">
						<p className="z-10 flex w-auto px-8 py-1 mt-auto text-4xl text-black bg-white shadow-md text-bottom text-wrap shadow-black">
							Oh I scared the kids at school!
						</p>
					</div>
				</div>
			</Slide>
			<Slide>
				<div className="flex flex-col-reverse items-center justify-center w-screen h-screen gap-16 p-10 pr-16 text-center align-top md:flex md:flex-row">
					<div className="absolute flex items-center justify-center w-screen h-screen overflow-visible align-middle ">
						<img src={Weightlifting} className="top-0 h-[95%] rotate-[355deg] bottom" />
					</div>
					<div className="absolute w-screen h-screen bg-white/10"></div>
					<div className="flex flex-col mt-auto">
						<p className="z-10 flex w-auto px-8 py-1 mt-auto text-4xl text-black bg-white shadow-md text-bottom text-wrap shadow-black">
							I competed in a weightlifting contest! But then security chased me off stage.
						</p>
					</div>
				</div>
			</Slide>
			<Slide>
				<div className="flex flex-col-reverse items-center justify-center w-screen h-screen gap-16 p-10 pr-16 text-center align-top md:flex md:flex-row">
					<div className="absolute flex items-center justify-center w-screen h-screen overflow-visible align-middle ">
						<img src={Dancing} className="top-0 h-[95%] rotate-[355deg] bottom" />
					</div>
					<div className="absolute w-screen h-screen bg-white/10"></div>
					<div className="flex flex-col mt-auto">
						<p className="z-10 flex w-auto px-8 m-auto text-4xl text-center text-black align-middle bg-white text-wrap">
							Finally I ended the day dancing to my favorite music!
						</p>
						<p className="z-10 flex w-auto px-8 m-auto text-4xl text-center text-black align-middle bg-white text-wrap">
							...There's only one problem!
						</p>
					</div>
				</div>
			</Slide>
		</VerticalSlide>
	)
}

export default PostStory2
