import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: 'hex' };
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeFormat(val) {
    this.setState({ format: val });
  }

  gatherShades(palette, colorToFilterBy) {
    //console.log({ palette, colorToFilterBy });
    const shades = [];
    const allColors = palette.colors;
    for (const key in allColors) {
      shades.push(
        allColors[key].filter(
          (color) => color.id === colorToFilterBy.toLowerCase()
        )
      );
    }
    //console.log({ shades });
    return shades.slice(1);
  }
  render() {
    const { format } = this.state;
    const { paletteName, emoji, id } = this.props.palette;
    //console.log('shades ', this._shades);
    const colorBoxes = this._shades.map((color) => {
      //console.log(color, color.name);
      //console.log('P', this.props.palette);
      color = color[0];
      return (
        <ColorBox
          key={color.name}
          name={color.name}
          background={color[format]}
          showLink={false}
        />
      );
    });
    //console.log({ colorBoxes });
    return (
      <div className='SingleColorPalette Palette'>
        <Navbar handleChange={this.changeFormat} singleColorPalette={true} />

        <div className='Palette-colors'>
          {colorBoxes}
          <div className='ColorBox go-back'>
            <Link
              className='back-button'
              to={`../../palette/${id}/`}
              onClick={(e) => e.stopPropagation()}
            >
              Go Back
            </Link>
          </div>
        </div>

        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
