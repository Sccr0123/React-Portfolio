import React from "react";
import "./Nav.css";

function Nav({ categories, setCurrentCategory, currentCategory }) {
	return (
		<header>
			<h1 className="m-3 mx-0 p-3">Zachary Thomas's Portfolio</h1>
			<nav className="m-3">
				<ul>
					{categories.map((category, id) => (
						<li
							key={id}
							onClick={() => {
								setCurrentCategory(category.name);
							}}
						>
							{category.name}
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Nav;
