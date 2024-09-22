import './App.css';
import Palette from './Palette';
import SeedColors from './seedColors';

function App() {
  return (
    <div>
      <Palette {...SeedColors[4]} />
    </div>
  );
}

export default App;
