import './App.css';
import { Route, Routes } from 'react-router-dom';
import Palette from './Palette';
import SeedColors from './seedColors';
import { generatePalette } from './colorHelper';
import PaletteList from './PaletteList';

function App() {
  const routes = SeedColors.map((color, index) => {
    return (
      <Route
        exact
        path={`/palette/${color.id}`}
        element={<Palette palette={generatePalette(SeedColors[index])} />}
      />
    );
  });

  return (
    <Routes>
      <Route exact path='/' element={<PaletteList palettes={SeedColors} />} />
      {routes}
    </Routes>

    // <div>
    //   <Palette palette={} />
    // </div>
  );
}

export default App;
