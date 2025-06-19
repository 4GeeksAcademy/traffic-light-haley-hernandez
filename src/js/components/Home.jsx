import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
	const [activeLight, setActiveLight] = useState(null);
	const toggleLightClick = (color) => { setActiveLight(color); }

	// addings notes here to make sure i understand what my code is doing..
	useEffect(() => {
    // set up an interval to change lights automatically
    const interval = setInterval(() => {
      // ligh order it will change: red → green → yellow → red
      if (activeLight === "red") {
        setActiveLight("green");
      } else if (activeLight === "green") {
        setActiveLight("yellow");
      } else if (activeLight === "yellow") {
        setActiveLight("red");
      }
    }, 3000); // this means change every 3 seconds (3000 milliseconds)

    
    return () => clearInterval(interval);
  }, [activeLight]); //re-run if clicked

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