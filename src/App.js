import React from 'react';
import './styles.css';  // Importing the stylesheet
import CreateRule from './components/CreateRule';
import EvaluateRule from './components/EvaluateRule';

function App() {
  return (
    <div className="App">
      <h1>Rule Engine with AST</h1>
      <CreateRule />
      <EvaluateRule />
    </div>
  );
}

export default App;