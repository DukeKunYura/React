import etsy from './etsy.json'
import './App.css';
import Listing from './components/Listing';

function App() {

  const items = etsy


  return (
    <div className="App">
      <Listing items={items}></Listing>
    </div>
  );
}

export default App;
