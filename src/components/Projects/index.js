import React from "react";
import "./Projects.css";

function Projects() {
	return (
		<section id="my-work" class="projects">
			<h2 class="section-title">Projects</h2>
			<ul>
				<div class="primary-project">
					<a href="https://protected-everglades-13471.herokuapp.com/">
						<img
							src="./assets/images/DnD-Character-Creation.jpg"
							alt="DnD Character Creation"
						/>
					</a>
					<div class="project-name">
						<h4>DnD Character Creation</h4>
						<p>Handlebars, SQL, NodeJS, APIs</p>
					</div>
				</div>

				<div class="column50">
					<div class="secondary-project-left">
						<a href="https://sccr0123.github.io/Formula-1-Frenzy/">
							<img
								src="./assets/images/Formula-1-Frenzy.jpg"
								alt="Formula 1 Frenzy"
							/>
						</a>
						<div class="project-name">
							<h4>Formula 1 Frenzy</h4>
							<p>HTML, Bootstrap, jQuery, APIs</p>
						</div>
					</div>

					<div class="secondary-project-left">
						<a href="https://github.com/Sccr0123/Personal-ReadMe-Generator/">
							<img
								src="./assets/images/Personal README Generator.jpg"
								alt="Personal README Generator"
							/>
						</a>
						<div class="project-name">
							<h4>Personal README Generator</h4>
							<p>Node.js</p>
						</div>
					</div>
				</div>

				<div class="column50">
					<div class="secondary-project-right">
						<a href="https://sccr0123.github.io/Weather-Temp-Dashboard/">
							<img
								src="./assets/images/Weather-Temp-Dashboard.jpg"
								alt="Weather-Temp-Dashboard"
							/>
						</a>
						<div class="project-name">
							<h4>Weather-Temp-Dashboard</h4>
							<p>JavaScript</p>
						</div>
					</div>

					<div class="secondary-project-right">
						<a href="https://sccr0123.github.io/Work-Day-Super-Scheduler/">
							<img
								src="./assets/images/Work-Day-Scheduler.jpg"
								alt="Work Day Super Scheduler"
							/>
						</a>
						<div class="project-name">
							<h4>Work Day Super Scheduler</h4>
							<p>HTML, JavaScript, APIs</p>
						</div>
					</div>
				</div>
			</ul>
		</section>
	);
}

export default Projects;
