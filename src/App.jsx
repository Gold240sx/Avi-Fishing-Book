import React, { useState, useEffect } from "react"
import { useMap } from "./context/MapContext"
import ProgressBar from "./components/progressBar"
import Controller from "./components/Controller"
import Slides from "./components/Slides"
import { motion, AnimatePresence } from "framer-motion"
import MusicPlayer from "./components/MusicPlayer"
import SmoothScrollbar from "smooth-scrollbar"
import SafariMusicPlayer from "./components/SafariMusicPlayer"
import "react-jinke-music-player/assets/index.css"
// import ReactJkMusicPlayer from "react-jinke-music-player"
import TruePlayer from "./components/TruePlayer"

function App() {
	const [prev, setPrev] = useState(0)
	const [totalSlides, setTotalSlides] = useState(Slides.length)
	const [btnClicked, setBtnClicked] = useState("load")
	const { map, slide, setSlide } = useMap()
	const [currentSlideCount, setCurrentSlideCount] = useState(1)

	const { currentVerticalSlide } = useMap()

	const vSlideHeight = currentSlideCount * 100 + "vh"

	const transition = {
		duration: 0.5,
		ease: "easeInOut",
	}

	const slideshowOptions = {
		pageCounter: true,
		progressBar: true,
		controller: true,
		uiColor: "#42AEF8",
		//  disabled slides cause controls: Either  50% opacity (50Percent) and gray or 0% opacity(hidden),
		disabled: "hidden",
		linearControls: true,
		verticalSlides: true,
		verticalScroll: true,
		musicPlayer: true,
	}

	const { setVertScroll } = useMap()
	const {
		pageCounter,
		progressBar,
		controller,
		uiColor,
		disabled,
		verticalSlides,
		musicPlayer,
		trueSlide,
		linearControls,
		verticalScroll,
	} = slideshowOptions

	const translation = () => {
		if (btnClicked === "load") {
			return "0"
		} else if (btnClicked === "left") {
			return "100%"
		} else if (btnClicked === "right") {
			return "-100%"
		} else if (btnClicked === "up") {
			return
		} else if (btnClicked === "down") {
			return
		}
	}

	const handleResize = () => {
		// Get the previous scroll position and previously visible slide index
		const previousScrollPosition = window.scrollY
		const previousVisibleSlideIndex = Math.floor(previousScrollPosition / (window.innerHeight * currentSlideCount))

		// Get the new VerticalSlide height after the window resize
		const newVerticalSlideHeight = window.innerHeight * currentSlideCount

		// Calculate the relative position of the previously visible slide within the newly resized VerticalSlide
		const relativePosition = previousScrollPosition / (previousVisibleSlideIndex * window.innerHeight)

		// Calculate the new scroll position based on the relative position and the new VerticalSlide height
		const newScrollPosition = relativePosition * newVerticalSlideHeight

		// Set the new scroll position to keep the same content in view after the resize
		window.scrollTo(0, newScrollPosition)
	}

	useEffect(() => {
		setVertScroll(verticalScroll)

		// Setup height of the presentation container to prevent slide overflow and grow for vertical slides
		function countSlidesWithSameFloatNumber(slide, map) {
			slide = slide
			const floatNumber = Math.floor(slide)
			return map.filter((s) => Math.floor(s) === floatNumber).length
		}
		const count = countSlidesWithSameFloatNumber(slide, map)
		setCurrentSlideCount(count)
	}, [slide, map, verticalScroll])

	useEffect(() => {
		// Handle window resize event
		// const handleResize = () => {
		// 	const vSlideHeight = currentSlideCount * window.innerHeight + "px"
		// 	const presContainer = document.querySelector(".pres-container")
		// 	if (presContainer) {
		// 		presContainer.style.height = vSlideHeight
		// 	}
		// }

		// Attach the resize event listener
		window.addEventListener("resize", handleResize)

		// Cleanup: remove the resize event listener
		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [currentSlideCount])

	const BrowserName = () => {
		let browserName = ""

		if (navigator.vendor.match(/google/i)) {
			browserName = "chrome/blink"
		} else if (navigator.vendor.match(/apple/i)) {
			browserName = "safari/webkit"
		} else if (navigator.userAgent.match(/firefox\//i)) {
			browserName = "firefox/gecko"
		} else if (navigator.userAgent.match(/edge\//i)) {
			browserName = "edge/edgehtml"
		} else if (navigator.userAgent.match(/trident\//i)) {
			browserName = "ie/trident"
		} else {
			browserName = navigator.userAgent + "\n" + navigator.vendor
		}
		// console.log(browserName)
		const safari = browserName === "safari/webkit"
		return safari
	}

	return (
		<>
			<div className="flex justify-center w-screen h-screen max-h-screen p-0 m-0 text-center">
				<div className={`relative pres-container w-full p-0 m-0 overflow-hidden`} style={{ height: vSlideHeight }}>
					{Slides().map((SlideContainer, index) => {
						return (
							<motion.div
								key={index}
								id={index + 1}
								initial={{
									opacity: 0,
									translateX: translation(),
								}}
								animate={
									index === slide - 1
										? {
												opacity: 1,
												translateX: "0",
										  }
										: {}
								}
								transition={{ transition }}
								exit={{ translateX: translation(), opacity: 0 }}
								className="absolute top-0 w-screen h-screen p-0 m-0 ">
								{/* Slide container may contain a single Slide or a Vertical Slide, hence a  slide container here */}
								<SlideContainer index={index + 1} />
							</motion.div>
						)
					})}
				</div>
				{controller && (
					<Controller
						slide={slide}
						setSlide={setSlide}
						map={map}
						linearControls={linearControls}
						prev={prev}
						setPrev={setPrev}
						btnClicked={btnClicked}
						setBtnClicked={setBtnClicked}
						totalSlides={totalSlides}
						uiColor={uiColor}
						disabled={disabled}
						verticalSlides={verticalSlides}
						className="fixed right-6 bottom-14 w-fit h-fit "
					/>
				)}
				{/* {!BrowserName() && <MusicPlayer />} */}
				{console.log(slide)}
				<SafariMusicPlayer preloadType="auto" PlaylistSelection={slide === 13 ? "Playlist2" : "Playlist"} />
				{/* <TruePlayer timeJump={0} /> */}
				{progressBar && (
					<ProgressBar
						Slide={slide}
						setSlide={setSlide}
						totalSlides={totalSlides}
						map={map}
						uiColor={uiColor}
						pageCounter={pageCounter}
					/>
				)}
			</div>
		</>
	)
}

export default App
