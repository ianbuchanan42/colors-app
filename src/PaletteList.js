import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@mui/styles';
//import { } from '@mui/icons-material';

const styles = {
  root: {
    height: '100vh',
    display: 'flex',
    backgroundColor: 'blue',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white',
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%',
  },
};

class PaletteList extends Component {
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((palette) => {
              return (
                <Link to={`/palette/${palette.id}`}>
                  <MiniPalette {...palette} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
