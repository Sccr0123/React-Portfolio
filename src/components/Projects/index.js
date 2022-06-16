import React, { useState, useEffect } from "react";
import "./Projects.css";

function Projects() {
	const [repos, setRepos] = useState([]);

	useEffect(() => {
		fetch("https://api.github.com/users/Sccr0123/starred?per_page=6")
			.then((response) => response.json())
			.then((data) => setRepos(data));
	}, []);

	if (!repos) return <div>Loading...</div>;

	console.log(repos);

	return (
		<section id="my-work">
			<h2 className="section-title">Projects</h2>
			<ul>
				{repos.map((repo, id) => (
					<div className="column50" key={id}>
						<div className="secondary-project-left">
							<img
								src={`${repo.html_url}/tree/main/preview/screenshot.png`}
								alt={`${repo.name} Preview`}
							/>
							{console.log(
								`${repo.html_url}/tree/main/preview/screenshot.png`
							)}
							<div className="project-name">
								<a href={repo.html_url}>
									<h4>{repo.name}</h4>
								</a>
								<p>{repo.description}</p>
							</div>
						</div>
					</div>
				))}
			</ul>
		</section>
	);
}

export default Projects;
