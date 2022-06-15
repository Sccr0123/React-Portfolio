import React, { useState } from "react";
//Styling
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Compnonents
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
	const [categories] = useState([
		{ name: "About", description: "Introduction and Links To Sites" },
		{ name: "Projects", description: "My Starred Projects On GitHub" },
		{ name: "Resume", description: "My Updated Resume" },
		{ name: "Contact", description: "Differnet Ways To Reach Out To Me" },
	]);
	const [currentCategory, setCurrentCategory] = useState("About");
	return (
		<div className="App">
			<Nav
				categories={categories}
				setCurrentCategory={setCurrentCategory}
				currentCategory={currentCategory}
			/>
			{currentCategory === "About" && (
				<About currentCategory={currentCategory} />
			)}
			{currentCategory === "Projects" && (
				<Projects currentCategory={currentCategory} />
			)}
		</div>
	);
}

export default App;
