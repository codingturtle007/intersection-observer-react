import { useEffect, useState } from 'react';
import './App.css';
import Card from './card';
import { fakeAPI } from './helpers';
import MyObserver from './observer';

function App() {
  const [demo_cards, setDemoCards] = useState([]);
  const  [is_visible, ref_container] = MyObserver({
    root: null,
    rootMargin: '0px',
    threshold: 1    
  });

  useEffect(() => {
    is_visible && fakeAPI(demo_cards.length).then(data => {
      setDemoCards([ ...demo_cards, ...data ])
    }).catch(err => {
      console.log("error", err);
    })     
  }, [is_visible])

  return (
    <div className="App container-fluid">
      <h2 className="m-4">Intersection observer in react!</h2>
      <h4>Infinite Scrolling</h4>
      {
        demo_cards.map(card => <Card value={card.index} url={card.url} />)
      }
      <div ref={ ref_container } />
    </div>
  );
}

export default App;