import React from "react";
import MyPic from "../my-photo.jpg";

const AboutMe = () => {
	return (
		<div className="container py-5">
			<div className="row">
				<div className="col-lg-6 col-xm-12">
					<div className="photo-wrap mb">
						<img className="profile-img" src={MyPic} alt="Page Author" />
					</div>
				</div>
				<div className="col-lg-6 col-xm-12">
					<h1 className="about-heading">About Me</h1>
					<p>
						Hi! I am Tomasz, ambitious, eager to learn, patient and relentless
						beginner web developer. I am currently looking for my first job as a
						solution developer in the IT industry. Since you came here, please
						take a look at my work and rate it :) Critical opinions are even
						more than indicated, thanks to which I am polishing my skills as a
						Web Developer
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
