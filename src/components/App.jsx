// Libraries
import React, { useState } from "react";



// App
function App() {

  setInterval(updateTime, 1000);
  
  const now = new Date().toLocaleTimeString();

  // State
  const [time, setTime] = useState(now);

  function updateTime() {
    const current_time = new Date().toLocaleTimeString();

    setTime(current_time);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
