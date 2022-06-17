import React from "react";
import "./Footer.css";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

function Footer() {
	return (
		<section>
			<div>
				<a href="https://github.com/Sccr0123">
					<BsGithub />
				</a>
				<a href="https://www.linkedin.com/in/zachary-thomas-038a4581/">
					<BsLinkedin />
				</a>
				<a href="https://www.instagram.com/zacht0123/">
					<BsInstagram />
				</a>
			</div>
		</section>
	);
}

export default Footer;
