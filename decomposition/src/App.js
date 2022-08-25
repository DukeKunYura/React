import './App.css';
import Search from './components/Search';
import Header from './components/Header';
import Banner from './components/Banner';
import Widgets from './components/Widgets';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Search></Search>
      <Banner></Banner>
      <Widgets></Widgets>
    </div>
  );
}

export default App;
