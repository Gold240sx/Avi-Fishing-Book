import { Children } from "react"

const Slide = ({ children }) => {
	return <div className={`w-full h-[100vh] Slide overflow-hidden`}>{children}</div>
}

export default Slide
