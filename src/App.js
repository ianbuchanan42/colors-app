import './App.css';
import { Route, Routes } from 'react-router-dom';
import Palette from './Palette';
import SeedColors from './seedColors';
import { generatePalette } from './colorHelper';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';

function App() {
  const moreColors = [];
  const paletteRoutes = SeedColors.map((color, index) => {
    const generatedPalette = generatePalette(SeedColors[index]);
    // not ideal and not for production, bad idea!!!
    for (const individualColor of color.colors) {
      const path = `/palette/${color.id}/${individualColor.name.toLowerCase()}`;
      //console.log({ individualColor, generatedPalette });
      moreColors.push(
        <Route
          exact
          path={path}
          key={individualColor.name}
          element={
            <SingleColorPalette
              palette={generatedPalette}
              colorId={individualColor.name}
            />
          }
        />
      );
    }

    //console.log(moreColors);

    return (
      <Route
        exact
        path={`/palette/${color.id}`}
        element={<Palette palette={generatedPalette} />}
        key={color.id}
      />
    );
  });

  return (
    <Routes>
      <Route
        exact
        path='/'
        element={<PaletteList palettes={SeedColors} key='home' />}
      />
      {paletteRoutes}
      {moreColors}
    </Routes>
  );
}

export default App;
