import React from 'react';
//import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';

const styles = {
  root: {
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    '& hover': { cursor: 'pointer' },
  },
  colors: {
    backgroundColor: '#dae1e4',
    height: '150px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '.8rem',
    position: 'relative',
    paddingBottom: '0.5rem',
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem',
  },
  miniColor: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-3.5px',
  },
};

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors } = props;
  const minColorBoxes = colors.map((color) => {
    return (
      <div
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
        key={color.name}
      />
    );
  });
  return (
    <div className={classes.root}>
      <div className={classes.colors}>{minColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

// MiniPalette.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(MiniPalette);
