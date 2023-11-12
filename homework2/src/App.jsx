
import './App.css';
import Card from './components/Card/Card';

import cources from './data/data';

function App() {
  return (
    <>
      {cources.map((item) => <div key={item.id}><Card item={item}/></div> )}    
    </>  
  )
}

export default App;
