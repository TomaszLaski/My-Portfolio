import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll"
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-custom fixed-top">
			<div className="container">
				<Link smooth={true} to="home" className="navbar-brand logo" href="#">
					Tomasz Łaski's Website
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<FontAwesomeIcon icon={faBars} style={{ color: "#eff9f2" }} />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<Link smooth={true} to="home" className="nav-link" offset={-110} href="#">
								Home <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link smooth={true} to="portfolio" className="nav-link" offset={-110} href="#">
								Portfolio
							</Link>
						</li>
						<li className="nav-item">
							<Link smooth={true} to="about" className="nav-link" offset={-110} href="#">
								About Me
							</Link>
						</li>
						<li className="nav-item">
							<Link smooth={true} to="contacts" className="nav-link" offset={-110} href="#">
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
