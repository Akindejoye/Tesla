import Header from './components/Header';
import Home from './components/Home';
import { useState } from 'react';

const App = () => {

  //burgerStatus state, controls the sidebar(BurgerNav).It was lifted from the Header
  //component to here in other to be used in the Home Component to
  //control the scrollbar when the sidebar is active
  //and also we lifted the event handler function 'handleClick' along with it.

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
