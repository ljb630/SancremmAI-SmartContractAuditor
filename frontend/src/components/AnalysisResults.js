import React from 'react';

// Updated props to include isLoading
const AnalysisResults = ({ isLoading, results }) => {
  // Handle loading state
  if (isLoading) {
    return <p>Loading... <br /> We are reviewing your code.</p>;
  }

  // Display when waiting for user to upload a file
  if (!results) {
    return <p>Please upload your file to check for bugs.</p>;
  }

  // Handle analysis results
  return (
    <div className="results-box">
      <h2>Analysis Results</h2>
      {results.analysisCompleted ? (
        results.vulnerabilities && results.vulnerabilities.length > 0 ? (
          <ul className="results-list">
            {results.vulnerabilities.map((vuln, index) => (
              <li key={index}>
                <strong>Severity:</strong> {vuln.severity} - <strong>Description:</strong> {vuln.description}
              </li>
            ))}
          </ul>
        ) : (
          // Display if no vulnerabilities are found
          <p>No bugs - free code.</p>
        )
      ) : (
        // Display while waiting for analysis to complete
        <p>Awaiting analysis results...</p>
      )}
    </div>
  );
};

export default AnalysisResults;
