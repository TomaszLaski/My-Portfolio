import React from "react";
import Insta from "../instagram.jpg";
import Netflix from "../netflix.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
	const openPopupboxInstagram = () => {
		const content = (
			<>
				<img
					className="portfolio-image-popupbox"
					src={Insta}
					alt="Instagram Clone Project"
				/>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
					expedita repudiandae nam labore! Nesciunt, nihil quod?
				</p>
				<b>GitHub: </b>{" "}
				<a
					className="hyper-link"
					onClick={() =>
						window.open("https://github.com/TomaszLaski/instagram-clone")
					}
				>
					https://github.com/TomaszLaski/instagram-clone
				</a>
				<br />
				<b> Demo:</b>{" "}
				<a
					className="hyper-link"
					onClick={() =>
						window.open(
							"https://instagram-clone-react-app.herokuapp.com/",
							"_blank"
						)
					}
				>
					https://instagram-clone-react-app.herokuapp.com/
				</a>
			</>
		);
		PopupboxManager.open({ content });
		PopupboxManager.update({
			content,
			config: {
				titleBar: {
					text: "Instagram Clone",
				},
			},
		});
	};

	const openPopupboxNetflix = () => {
		const content = (
			<>
				<img
					className="portfolio-image-popupbox"
					src={Netflix}
					alt="Netflix Clone Project"
				/>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
					expedita repudiandae nam labore! Nesciunt, nihil quod?
				</p>
				<b>GitHub: </b>{" "}
				<a
					className="hyper-link"
					onClick={() =>
						window.open("https://github.com/TomaszLaski/netflix-clone")
					}
				>
					https://github.com/TomaszLaski/netflix-clone
				</a>
				<br />
				<b> Demo:</b>{" "}
				<a
					className="hyper-link"
					onClick={() =>
						window.open(
							"https://netflix-clone-react-app.herokuapp.com",
							"_blank"
						)
					}
				>
					https://netflix-clone-react-app.herokuapp.com/
				</a>
			</>
		);
		PopupboxManager.open({ content });
		PopupboxManager.update({
			content,
			config: {
				titleBar: {
					text: "Netflix Clone",
				},
			},
		});
	};
	const popupboxConfigNetflix = {
		titleBar: {
			enable: true,
			text: "Netflix Clone",
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	const popupboxConfigInstagram = {
		titleBar: {
			enable: true,
			text: "Instagram Clone",
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	return (
		<div id="portfolio" className="portfolio-wrapper">
			<div className="container">
				<h1 className="text-uppercase text-center py-5">portfolio</h1>
				<div className="image-box-wrapper row justify-content-center">
					<div
						className="portfolio-image-box Insta"
						onClick={openPopupboxInstagram}
					>
						<img
							className="portfolio-image"
							src={Insta}
							alt="Instagram Clone"
						/>
						<div className="overflow"></div>
						<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
					</div>

					<div
						className="portfolio-image-box netflix"
						onClick={openPopupboxNetflix}
					>
						<img
							className="portfolio-image"
							src={Netflix}
							alt="Netflix Clone"
						/>
						<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
						<div className="overflow"></div>
					</div>
				</div>
			</div>
			<PopupboxContainer {...popupboxConfigInstagram} />
			<PopupboxContainer {...popupboxConfigNetflix} />
		</div>
	);
};

export default Portfolio;
