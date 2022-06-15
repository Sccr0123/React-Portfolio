import React from "react";
import "./About.css";

function About() {
	return (
		<section id="about-me" className="intro m-3">
			{/* <img src="" alt="My Headshot" /> */}
			<ul>
				<div className="section-para">
					<h2>Introduction:</h2>
					<p>
						My name is Zach Thomas, and I am currently enrolled in
						the Michigan State University Coding Bootcamp. Being
						that I have always had an interest in technology, I have
						dedicated a great deal of my personal and professional time over the past
						years of my life to growing my knowledge on computers
						and software. I have attached my updated resume for your
						review. Please don't hesitate to reach out to me at
						(586) 243-4967 or sccr0123@gmail.com if you have any
						questions about the bootcamp, my resume, or if you
						would just like to dig deeper into my background with
						coding and software! Thank you for your time and
						consideration of me.
					</p>
					<div>
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
							<p>Node.js: 6 months</p>
							{/* <p>Placeholder</p> */}
						</div>

						<div className="column25">
							<p>Express.js: 6 months</p>
							<p>OOP: 6 months</p>
							<p>SQL: 6 months</p>
							{/* <p>Placeholder</p> */}
						</div>

						<div className="column25">
							<p>Responsive Design</p>
							<p>Customer Service: 10 Years</p>
							<p>Windows Office: 10+ years</p>

							{/* <p>Placeholder</p> */}
						</div>
					</div>
				</div>
			</ul>
		</section>
	);
}

export default About;
