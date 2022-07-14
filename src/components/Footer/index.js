import React from "react";
import "./Footer.css";
import { BsGithub, BsLinkedin, MdEmail } from "react-icons/bs";

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
				<a href="mailto:sccr0123@gmail.com">
					<MdEmail />
				</a>
			</div>
		</section>
	);
}

export default Footer;
