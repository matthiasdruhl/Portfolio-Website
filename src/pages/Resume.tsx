import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set up the worker for PDF.js using a local worker file
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf-worker/pdf.worker.min.js';

const Resume = () => {
  const [pageNumber] = useState<number>(1);

  function onDocumentLoadSuccess() {
    // Document loaded successfully
  }

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/Matthias_Druhl_Resume.pdf';
    link.download = 'Matthias_Druhl_Resume.pdf'; // Set the download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-[calc(100vh-3rem)] bg-background p-4">
      <div className="max-w-4xl mx-auto flex flex-col">
        {/* PDF Viewer */}
        <div className="flex justify-center">
          <Document
            file="/Matthias_Druhl_Resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<div className="text-white">Loading PDF...</div>}
          >
            <Page
              pageNumber={pageNumber}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </div>

        {/* Download Button - Now at the bottom and centered */}
        <div className="flex justify-center mt-4 mb-2">
          <button
            onClick={handleDownload}
            className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors flex items-center gap-2"
          >
            <span>📥</span>
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume; 