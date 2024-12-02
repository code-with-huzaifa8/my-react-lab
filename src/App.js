import React from 'react';
import Profilecard from './component/Profilecard';
import ProductCard from './component/productcard';

function App() {
  return (
    <div className="App">
      
      <Profilecard
        name="Huzaifa"
        age={19.5}
        occupation="Computer Science"
        location="Karachi"
      />
      <ProductCard
        title="Smartphone"
        description="Latest model with all the features you need"
        price={999.99}
        imageUrl="https://example.com/smartphone.jpg"
      />
    </div>
  );
}

export default App;

// git add .
// git commit -m "anything"
// git push 