import './App.css';
import { Route, Routes } from 'react-router-dom';
//import Palette from './Palette';
//import SeedColors from './seedColors';
//import { generatePalette } from './colorHelper';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<h1>test</h1>} />
      <Route exact path='/palette/:id' element={<h1>test 2</h1>} />
    </Routes>

    // <div>
    //   <Palette palette={generatePalette(SeedColors[4])} />
    // </div>
  );
}

export default App;
