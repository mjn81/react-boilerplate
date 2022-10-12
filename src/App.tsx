import React from 'react';
import './styles/index.css';
import Image from './41173653.jpeg';

const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      {count}
      <button onClick={() => setCount(c => c+1)}>add</button>
      <img src={Image} alt="image" />
    </div>
  )
}

export default App;