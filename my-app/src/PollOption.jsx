import React from 'react';  
import './PollOption.css';  

function PollOption({ label, count, onVote }) {  
  return (  
    <div className="poll-option">  
      <span>{label}: {count}</span>  
      <button onClick={onVote}>Vote</button>  
    </div>  
  );  
}  

export default PollOption;  