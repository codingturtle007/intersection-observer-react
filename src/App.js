import { useEffect } from 'react';
import './App.css';
import Card from './card';
import MyObserver from './observer';

function App() {
  const demo_cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

  const [is_visible, ref_container] = MyObserver({
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  });

  useEffect(() => {
    console.log("App mounted")
  }, [])

  return (
    <div className="App container-fluid">
      <h2 className="m-4">Intersection observer in react!</h2>
      <h4>Infinite Scrolling</h4>
      {
        demo_cards.map(card => <Card value={card} />)
      }
    </div>
  );
}

export default App;