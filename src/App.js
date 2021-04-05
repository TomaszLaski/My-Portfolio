import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Particles from "react-particles-js";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";

function App() {
	return (
		<>
			<Particles
				params={{
					particles: {
						color: {
							value: ["#03674f"],
						},
						line_linked: {
							color: "#78a1bb",
							opacity: 1,
						},
						number: {
							value: 25,
							density: {
								enable: true,
								value_area: 900,
							},
						},
						shape: {
							type: "circle",
							stroke: {
								width: 6,
								color: "#2D62F7",
							},
						},
					},
				}}
			/>
			<Navbar />
			<Hero />
			<Portfolio />
			<AboutMe />
			<Contacts />
		</>
	);
}

export default App;
