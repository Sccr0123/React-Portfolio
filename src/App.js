import React, { useState } from "react";
//Styling
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";


function App() {
	const [categories] = useState([
		{ name: "About", description: "Introduction and Links To Sites" },
		{ name: "Projects", description: "My Starred Projects On GitHub" },
		{ name: "Contact", description: "Differnet Ways To Reach Out To Me" },
		{ name: "Resume", description: "My Updated Resume" },
	]);
	const [currentCategory, setCurrentCategory] = useState("About");
	return (
		<div className="App">
			<Nav
				categories={categories}
				setCurrentCategory={setCurrentCategory}
				currentCategory={currentCategory}
			/>
			{currentCategory === "About" && <About />}
			{currentCategory === "Projects" && <Projects />}
			{currentCategory === "Contact" && <Contact />}
			{currentCategory === "Resume" && <Resume />}
			<Footer />
		</div>
	);
}

export default App;
