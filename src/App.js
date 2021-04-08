import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Particles from "react-particles-js";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Particles
				params={{
					particles: {
						number: {
							value: 20,
							density: {
								enable: true,
								value_area: 800,
							},
						},
						line_linked: {
							enable: false,
						},
						move: {
							speed: 1,
							out_mode: "out",
						},
						shape: {
							type:  "circle",
						},
						color: {
							value: "#CCC",
						},
						size: {
							value: 30,
							random: false,
							anim: {
								enable: true,
								speed: 4,
								size_min: 10,
								sync: false,
							},
						},
					},
					retina_detect: false,
				}}
			/>
			<Navbar />
			<Hero />
			<Portfolio />
			<AboutMe />
			<Contacts />
			<Footer />
		</>
	);
}

export default App;
