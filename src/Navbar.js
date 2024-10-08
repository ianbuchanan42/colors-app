import React, { Component } from 'react';
import Slider from 'rc-slider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex', open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleFormatChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  }

  closeSnackbar() {
    this.setState({ open: false });
  }
  render() {
    const { level, changeLevel, singleColorPalette } = this.props;
    const { format, open } = this.state;
    return (
      <header className='Navbar'>
        <div className='logo'>
          <Link to='/'>reactcolorpicker</Link>
        </div>
        {!singleColorPalette && (
          <div className='slider-container'>
            <span>Level: {level}</span>
            <div className='slider'>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                onChange={changeLevel}
                step={100}
              />
            </div>
          </div>
        )}

        <div className='select-container'>
          <Select
            className='select'
            value={format}
            onChange={this.handleFormatChange}
          >
            <MenuItem value='hex'>HEX - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgb(255,255,255, 1.0)</MenuItem>
          </Select>
        </div>

        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={open}
          autoHideDuration={3000}
          message={
            <span id='message-id'>
              Format Changed To {format.toUpperCase()}
            </span>
          }
          ContentProps={{ 'aria-describedby': 'message-id' }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color='inherit'
              key='close'
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>,
          ]}
        ></Snackbar>
      </header>
    );
  }
}

export default Navbar;
