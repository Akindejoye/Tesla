import Header from './components/Header';
import Home from './components/Home';
import { useState } from 'react';

const App = () => {

  const [burgerStatus, setBurgerStatus] = useState(false);

  const handleClick = () => {
    setBurgerStatus(!burgerStatus)
  }

  return (
    <div className="App">
      <Header handleClick={handleClick} burgerStatus={burgerStatus} />
      <Home burgerStatus={burgerStatus} />
    </div>
  );
}

export default App;
