
import './App.css';
import people from "./data";
import Carousal from './Carousel';

function App() {
  return (
    <div className="App">
     <h1>Carousal</h1>
      <Carousal data={people} />
    </div>
  );
}

export default App;
