import './App.css';
import HookUser from './components/HookUser';

const urlData = "http://localhost:7070/data";
const urlError = "http://localhost:7070/error";
const urlLoading = "http://localhost:7070/loading";

function App() {
  return (
    <div className="App">
      <HookUser url={urlData} />
      <HookUser url={urlError} />
      <HookUser url={urlLoading} />

    </div>
  );
}

export default App;
