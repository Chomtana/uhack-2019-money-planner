import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

import { connect } from 'react-redux'

const mapStateToProps = stateRedux => {
	return {
    records: stateRedux.records,
    openRecordsModal: stateRedux.openRecordsModal,
    goals: stateRedux.goals,
    achivements: stateRedux.achivements,
    level: stateRedux.level,
    exp: stateRedux.exp,
    isOnLandingPage: stateRedux.isOnLandingPage
	};
};

const styles = {
  root: {
    flexGrow: 1,
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    zIndex: 9999
  },
};

class BottomNavigation extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper square className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab icon={<PhoneIcon />} label="Summary"  />
          <Tab icon={<FavoriteIcon />} label="Goals" href="#tab-goals"  />
          <Tab icon={<PersonPinIcon />} label="Rewards" href="#tab-rewards" />
        </Tabs>
      </Paper>
    );
  }
}

BottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps)(BottomNavigation));