import './HowItWorks.css';
import React, { useState, useEffect } from 'react';

const STEPS_URL = 'https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge';

const getLatestVersionContent = (step) => {
  let maxMilliseconds = Number.NEGATIVE_INFINITY,
    latestVersionContent;

  step.versionContent.forEach(version => {
    const timeInMilliseconds = Date.parse(version.effectiveDate);
    if (timeInMilliseconds > maxMilliseconds) {
      maxMilliseconds = timeInMilliseconds;
      latestVersionContent = version;
    }
  });

  return latestVersionContent;
}

const getSortedSteps = (steps) => {
  return steps.map(step => {
    const latestVersionContent = getLatestVersionContent(step);

    return {
      stepNumber: step.stepNumber,
      title: latestVersionContent.title,
      body: latestVersionContent.body
    }
  }).sort((a, b) => a.stepNumber - b.stepNumber);
}

function HowItWorks() {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    const fetchSteps = async () => {
      const response = await fetch(STEPS_URL);
      const json = await response.json();
      const sortedSteps = getSortedSteps(json);
      setSteps(sortedSteps);
    }

    fetchSteps();
  }, []);

  return (
    <div className="how-it-works-container">
      <h1>How It Works</h1>
      <ol className="steps-list">
        {steps.map(step => {
          return (
            <li 
              className="step"
              data-testid="step"
              key={step.stepNumber}>
                <div className="step-number">0{step.stepNumber}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-body">{step.body}</p>
            </li>
          )
        })}
      </ol>
    </div>
  );
}

export default HowItWorks;