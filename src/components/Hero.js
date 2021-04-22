import React from "react";
import Typed from "react-typed";
import logo from "../laptop-img.svg";

const Hero = () => {
	return (
		<div id="home" className="hero-wraper">
			<div className="main-info">
				<div class="text-container">
					<h1>
						The Fastest Learning <br /> Junior Web Developer!
					</h1>
					<Typed
						className="typed-text"
						strings={["JavaScript", "React", "Html", "CSS"]}
						typeSpeed={50}
						backSpeed={70}
						loop
					/>
				</div>
				<img className="hero-logo" src={logo} alt="logo" />
			</div>
		</div>
	);
};

export default Hero;
