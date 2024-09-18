import React, { useState } from "react";
import GetJoke from "./components/GetAxiosComponent";

function App() {
  const [jokeId, setJokeId] = useState(1);
  return (
    <div className="jokes-container">
      <h2 className="jokes-title">JOKES</h2>
     
     <button onClick={() => setJokeId((prevId) => prevId + 1)} className="next-btn">
        Next joke
      </button>
      <GetJoke jokeId={jokeId} />
     </div>
 
  );
}

export default App;
