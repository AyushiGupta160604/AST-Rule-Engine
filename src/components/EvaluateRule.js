import React, { useState } from 'react';
import axios from 'axios';

function EvaluateRule() {
  const [ruleId, setRuleId] = useState('');
  const [userData, setUserData] = useState('');
  const [result, setResult] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const parsedUserData = JSON.parse(userData); 
//       const res = await axios.post(`http://localhost:5000/api/rules/evaluate/${ruleId}`, parsedUserData);
//       setResult(res.data.result);
//       setRuleId('');
//       setUserData('');
//     } catch (err) {
//       console.error('Error evaluating rule', err);
//     }
//   };
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parsedUserData = JSON.parse(userData);
      console.log('Parsed User Data:', parsedUserData);
      const res = await axios.post(`http://localhost:5000/api/rules/evaluate/${ruleId}`, parsedUserData);
      console.log('Response from Server:', res.data);
      setResult(res.data.result);
      setRuleId('');
      setUserData('');
    } catch (err) {
      console.error('Error evaluating rule', err);
    }
  };
  

  return (
    <div>
      <h2>Evaluate a Rule</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ruleId}
          onChange={(e) => setRuleId(e.target.value)}
          placeholder="Enter rule ID"
          required
        />
        <textarea
          value={userData}
          onChange={(e) => setUserData(e.target.value)}
          placeholder='Enter user data as JSON (e.g., {"age": 35, "department": "Sales"})'
          required
        />
        <button type="submit">Evaluate Rule</button>
      </form>

      {result !== null && (
        <div>
          <h3>Evaluation Result: {result ? 'Eligible' : 'Not Eligible'}</h3>
        </div>
      )}
    </div>
  );
}

export default EvaluateRule;