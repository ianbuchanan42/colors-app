import './App.css';
import Palette from './Palette';
import SeedColors from './seedColors';
import { generatePalette } from './colorHelper';

function App() {
  console.log(generatePalette(SeedColors[0]));
  return (
    <div>
      <Palette {...SeedColors[4]} />
    </div>
  );
}

export default App;
