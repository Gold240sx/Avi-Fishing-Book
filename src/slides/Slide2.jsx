import React from "react"
import Slide from "../components/Slide"

export default function Slide2() {
	return (
		<Slide>
			<div className="flex flex-col justify-center w-screen h-screen gap-0 text-2xl text-center">
				<h3 className="mb-8 text-5xl">Credits</h3>
				<p className="-mb-16 text-white">
					<span className="text-slate-400">Written by: </span>
					Avi Werner
				</p>
				<p className="mt-16 text-base text-white">
					<span className="text-slate-400">Illustrated and code by: </span>
					Michael Martell
				</p>
				<p className="mt-16 text-base text-white">
					<span className="text-slate-400">Music by: </span>
					RomanSenykmusic
					<br />
					<span className="ml-[62px] text-slate-500">&</span> LemonMusicStudio
				</p>
			</div>
		</Slide>
	)
}
