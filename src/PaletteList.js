import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <MiniPalette></MiniPalette>
        {palettes.map((palette) => {
          return (
            <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
          );
        })}
      </div>
    );
  }
}

export default PaletteList;
