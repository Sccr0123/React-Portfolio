import React, { useState } from "react";
import resume from "../../assets/pdf/Zachary-Thomas.pdf";
import "./Resume.css";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	return (
		<div>
			<a href={resume} download>
				<button target="_blank" className="mt-2">
					Download Resume
				</button>
			</a>

			<Document
				file={resume}
				onLoadSuccess={onDocumentLoadSuccess}
				onLoadError={console.error}
			>
				<Page pageNumber={1} />
				<Page pageNumber={2} />
				<Page pageNumber={3} />
			</Document>
		</div>
	);
}

export default Resume;
