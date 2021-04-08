import React from "react";
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
	RedditShareButton,
	RedditIcon,
	LinkedinShareButton,
	LinkedinIcon,
} from "react-share";

const Footer = () => {
	return (
		<div id="footer" className="footer">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-2 col-sm-6">
						<div className="row">
							<div className="col">
								<a className="footer-nav">Home</a>
								<br />
								<a className="footer-nav">About me</a>
								<br />
								<a className="footer-nav">Portfolio</a>
								<br />
								<a className="footer-nav">Contacts</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6">
						{/* place for future features */}
					</div>
					<div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
						<h3 className="footer-text-center">Share my work:</h3>
						<div className="d-flex justify-content-center">
							<FacebookShareButton
								url={"https://github.com/TomaszLaski"}
								quote={"The Fastest Learning Junior Web Developer"}
								hashtag="#javascript"
							>
								<FacebookIcon className="mx-3" size={36} />
							</FacebookShareButton>
							<TwitterShareButton
								url={"https://github.com/TomaszLaski"}
								quote={"The Fastest Learning Junior Web Developer"}
								hashtag="#javascript"
							>
								<TwitterIcon className="mx-3" size={36} />
							</TwitterShareButton>
							<RedditShareButton
								url={"https://github.com/TomaszLaski"}
								quote={"The Fastest Learning Junior Web Developer"}
								hashtag="#javascript"
							>
								<RedditIcon className="mx-3" size={36} />
							</RedditShareButton>
							<LinkedinShareButton
								url={"https://github.com/TomaszLaski"}
								quote={"The Fastest Learning Junior Web Developer"}
								hashtag="#javascript"
							>
								<LinkedinIcon className="mx-3" size={36} />
							</LinkedinShareButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
