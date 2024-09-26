import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import './ColorBox.css';
import chroma from 'chroma-js';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    // console.log('copy');
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const { name, background, id, paletteId, showLink } = this.props;
    const { copied } = this.state;
    const isDarkColor = chroma(background).luminance() <= 0.08;
    const isLightColor = chroma(background).luminance() >= 0.7;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background: background }} className='ColorBox'>
          <div
            style={{ background: background }}
            className={`copy-overlay ${copied && 'show'}`}
          />
          <div className={`copy-message ${copied && 'show'}`}>
            <h2>copied!</h2>
            <p className={isLightColor ? 'dark-text' : ''}>{background}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span className={isDarkColor ? 'light-text' : ''}>{name}</span>
            </div>
            <button
              className={isLightColor ? 'copy-button dark-text' : 'copy-button'}
            >
              Copy
            </button>
          </div>
          {showLink && (
            <Link
              // janky!!!!!
              to={`../../palette/${paletteId}/${id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span
                className={isLightColor ? 'see-more dark-text' : 'see-more'}
              >
                More
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
