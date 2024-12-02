import React from 'react';
import Profilecard from './component/Profilecard';

function App() {
  return (
    <div className="App">
      
      <Profilecard
        name="Huzaifa"
        age={19.5}
        occupation="Computer Science"
        location="Karachi"
      />
    </div>
  );
}

export default App;
