import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        {palettes.map((palette) => {
          return <MiniPalette {...palette} />;
        })}
      </div>
    );
  }
}

export default PaletteList;
