import React, { useState } from 'react';
import axios from 'axios';

function CreateRule() {
  const [ruleString, setRuleString] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/rules/create', { ruleString });
      setResponse(res.data);
      setRuleString('');
    } catch (err) {
      console.error('Error creating rule', err);
    }
  };

  return (
    <div>
      <h2>Create a Rule</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ruleString}
          onChange={(e) => setRuleString(e.target.value)}
          placeholder="Enter rule string"
          required
        />
        <button type="submit">Create Rule</button>
      </form>

      {response && (
        <div>
          <h3>Rule Created:</h3>
          <p>ID: {response._id}</p>
          <p>Rule: {response.ruleString}</p>
        </div>
      )}
    </div>
  );
}

export default CreateRule;