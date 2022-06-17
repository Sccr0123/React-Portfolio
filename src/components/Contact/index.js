import React, { useState } from "react";
import "./Contact.css";

import { validateEmail, capitalizeFirstLetter } from "../../utils/helpers";

function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errorMessage, setErrorMessage] = useState("");
	const { name, email, message } = formState;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!errorMessage) {
			setFormState({ [e.target.name]: e.target.value });
			console.log("Form", formState);
		}
	};

	const handleChange = (e) => {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage("The Email Is Invalid.");
			} else {
				setErrorMessage("");
			}
		} else {
			if (!e.target.value.length) {
				setErrorMessage(
					`A ${capitalizeFirstLetter(e.target.name)} Is Required.`
				);
			} else {
				setErrorMessage("");
			}
		}
	};

	return (
		<section className="d-flex align-items-center flex-column">
			<h2 class="section-title">Contact Me</h2>
			<form
				id="contact-form"
				className="login-form d-flex flex-column border border-dark m-3 p-3"
				onSubmit={handleSubmit}
			>
				<div className="d-flex justify-content-between">
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						name="name"
						defaultValue={name}
						onBlur={handleChange}
						className="float-right"
					/>
				</div>
				<div className="d-flex justify-content-between">
					<label htmlFor="email">Email Address:</label>
					<input
						type="email"
						name="email"
						defaultValue={email}
						onBlur={handleChange}
						className="float-right"
					/>
				</div>
				<div className="d-flex justify-content-between">
					<label htmlFor="message">Message:</label>
					<textarea
						name="message"
						rows="5"
						defaultValue={message}
						onBlur={handleChange}
						className="float-right w-100"
					/>
				</div>
				{errorMessage && (
					<div>
						<p className="error-text">{errorMessage}</p>
					</div>
				)}
				<button data-testid="button" type="submit">
					Submit
				</button>
			</form>
			<div id="contact-me" class="contact">
				<ul>
					<div class="section-para">
						<p>Phone Number: (586) 243-4967</p>
						<p>Email: sccr0123@gmail.com</p>
						<p>
							GitHub:{" "}
							<a href="https://github.com/Sccr0123">Sccr0123</a>
						</p>
					</div>
				</ul>
			</div>
		</section>
	);
}

export default Contact;
