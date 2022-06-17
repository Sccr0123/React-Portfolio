import React, { useState } from "react";
import file from "../../assets/pdf/Zachary-Thomas.pdf";
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
			<Document
				file={file}
				onLoadSuccess={onDocumentLoadSuccess}
				onLoadError={console.error}
			>
				<Page pageNumber={1} />
				<Page pageNumber={2} />
			</Document>
		</div>
	);
}

export default Resume;
