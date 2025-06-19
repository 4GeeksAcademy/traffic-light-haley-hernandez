import React, { useState } from "react";

//create your first component
const Home = () => {
	const [activeLight, setActiveLight] = useState(null);
	const toggleLightClick = (color) => { setActiveLight(color); }

	return (
		<div className="app">
			<div className="container">
				<div
					className={`red light ${activeLight === "red" ? "glow" : ""}`}
					onClick={() => toggleLightClick("red")}
				></div>
				<div
					className={`yellow light ${activeLight === "yellow" ? "glow" : ""}`}
					onClick={() => toggleLightClick("yellow")}
				></div>
				<div
					className={`green light ${activeLight === "green" ? "glow" : ""}`}
					onClick={() => toggleLightClick("green")}
				></div>
			</div>
		</div>
	);
};

export default Home;