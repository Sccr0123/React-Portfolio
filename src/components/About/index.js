import React from "react";
import "./About.css";

import Headshot from "../../assets/images/Zach Thomas Headshot.jpg";

function About() {
	return (
		<section className="intro m-3">
			<div className="pt-3">
				<h2>Introduction:</h2>
				<p>
					My name is Zach Thomas, and I am currently enrolled in the
					Michigan State University Coding Bootcamp. Being that I have
					always had an interest in technology, I have dedicated a
					great deal of my personal and professional time over the
					past years of my life to growing my knowledge on computers
					and software. I have attached my updated resume for your
					review. Thank you for your time and consideration of me.
				</p>
				<div className="pt-3">
					<h3>Skills:</h3>

					<div className="column25">
						<p>ReactJS: 6 months</p>
						<p>HTML 5: 6 months</p>
						<p>Advanced CSS: 6 months</p>
						<p>JavaScript: over 6 months</p>
					</div>

					<div className="column25">
						<p>jQuery: 6 months</p>
						<p>APIs: 6 months</p>
						<p>SQL: 6 months</p>
						<p>MongoDB: 6 months</p>
					</div>

					<div className="column25">
						<p>Express.js: 6 months</p>
						<p>OOP: 6 months</p>
						<p>Node.js: 6 months</p>
						{/* <p>Placeholder</p> */}
					</div>

					<div className="column25">
						<p>Customer Service: 10 Years</p>
						<p>Windows Office: 10+ years</p>
						<p>Responsive Design</p>
						{/* <p>Placeholder</p> */}
					</div>
				</div>
			</div>
			<img src={Headshot} alt="My Headshot" />
		</section>
	);
}

export default About;
