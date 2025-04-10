import { useState } from 'react';  
import PollOption from './PollOption';  
import './App.css';  

function App() {  
  const initialOptions = [  
    { option: 'Dog', count: 0 },  
    { option: 'Cat', count: 0 },  
    { option: 'Rat', count: 0 },  
  ];  

  const [options, setOptions] = useState(initialOptions);  

  const handleVote = (pet) => {  
    const updatedOptions = options.map((option) =>  
      option.option === pet ? { ...option, count: option.count + 1 } : option  
    );  
    setOptions(updatedOptions);  
  };  

  const getLeader = () => {  
    return options.reduce((prev, current) => {  
      return current.count > prev.count ? current : prev;  
    });  
  };  

  const leader = getLeader();  

  return (  
    <div className="App">  
      <h1>Vote for Your Favorite Pet!</h1>  
      {options.map((option) => (  
        <PollOption  
          key={option.option}  
          label={option.option}  
          count={option.count}  
          onVote={() => handleVote(option.option)}  
        />  
      ))}  
      <h2>Current Leader: {leader.option} with {leader.count} votes</h2>  
    </div>  
  );  
}  

export default App;  