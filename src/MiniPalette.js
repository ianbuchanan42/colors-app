import React from 'react';
//import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';

const styles = {
  root: {
    backgroundColor: 'purple',
    border: '3px solid teal',
    '& h1': {
      color: 'red',
    },
  },
};

function MiniPalette(props) {
  const { classes } = props;
  console.log(classes);
  return (
    <div className={classes.root}>
      <h1>min P</h1>;
    </div>
  );
}

// MiniPalette.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(MiniPalette);
