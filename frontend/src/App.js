import React, { useState } from 'react';
import './App.css';
import FileUpload from './components/FileUpload';
import AnalysisResults from './components/AnalysisResults';



function App() {
  const [fileData, setFileData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);


  const handleFileUpload = async (file) => {
    setIsLoading(true);
    setFileData(file); // Assuming file is the file data; adjust based on FileUpload implementation

    // Simulate file analysis (replace this with your actual file analysis API call)
    setTimeout(() => {
      const hasVulnerabilities = false; // Simulate analysis result

      setAnalysisResults({
        analysisCompleted: true,
        vulnerabilities: hasVulnerabilities ? [{ id: 1, description: "Example vulnerability", severity: "High" }] : [],
      });
      setIsLoading(false);
    }, 2000); // Simulate delay for analysis
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* File upload section */}
        {!analysisResults && (
          <>
            <p>Please upload your file to check for bugs.</p>
            <FileUpload onUpload={handleFileUpload} />
          </>
        )}

        {/* Loading and analysis review message */}
        {isLoading && (
          <div>
            <div className="loader"></div>
            <p>We are reviewing your code.</p>
          </div>
        )}

        {/* Display analysis results or 'no bugs' message */}
        {!isLoading && analysisResults && (
          <AnalysisResults results={analysisResults} />
        )}

        {/* Reset to allow another upload */}
        {analysisResults && !isLoading && (
          <button onClick={() => setAnalysisResults(null)}>Analyze another file</button>
        )}
      </header>
    </div>
  );
}

export default App;
