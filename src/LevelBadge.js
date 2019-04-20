import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';

import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux'

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});

class LevelBadge extends React.Component {
  state = {
    loading: false,
    success: false,
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleButtonClick = () => {
    if (!this.state.loading) {
      this.setState(
        {
          success: false,
          loading: true,
        },
        () => {
          this.timer = setTimeout(() => {
            this.setState({
              loading: false,
              success: true,
            });
          }, 2000);
        },
      );
    }
  };

  render() {
    const { loading, success } = this.state;
    const { classes } = this.props;
    const buttonClassname = classNames({
      [classes.buttonSuccess]: success,
    });
    
    const {level, exp} = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Fab color="primary" className={buttonClassname}>
            <Typography variant="h5" color="inherit">{level}</Typography>
          </Fab>
          <CircularProgress size={68} className={classes.fabProgress} variant="static" value={exp}></CircularProgress>
        </div>
      </div>
    );
  }
}

LevelBadge.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = stateRedux => {
	return {
    records: stateRedux.records,
    openRecordsModal: stateRedux.openRecordsModal,
    goals: stateRedux.goals,
    achivements: stateRedux.achivements,
    level: stateRedux.level,
    exp: stateRedux.exp
	};
};

export default connect(mapStateToProps)(withStyles(styles)(LevelBadge));