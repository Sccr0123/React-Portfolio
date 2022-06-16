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

	return (
		<section id="my-work">
			<h2 className="section-title">Projects</h2>
			<ul className="d-flex flex-wrap justify-content-center">
				{repos.map((repo, id) => (
					<a href={repo.html_url}>
						<div
							className="column50 m-3 border border-dark"
							key={id}
						>
							<div className="project">
								<img
									className="border-bottom border-dark"
									src={`https://raw.githubusercontent.com/Sccr0123/${repo.name}/main/preview/screenshot.jpg`}
									alt={`${repo.name} Preview`}
								/>

								<div className="project-name">
									<h4>{repo.name}</h4>
									<p>{repo.description}</p>
								</div>
							</div>
						</div>
					</a>
				))}
			</ul>
		</section>
	);
}

export default Projects;
