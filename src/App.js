import React, { useState, Component } from 'react'
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Modal from '@material-ui/core/Modal';

import AddIcon from '@material-ui/icons/Add';

import LinearProgress from '@material-ui/core/LinearProgress';

import AddRecordDialog from './AddRecordDialog'

import Collapse from '@material-ui/core/Collapse';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const styles2 = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const mapStateToProps = stateRedux => {
	return {
    records: stateRedux.records,
    openRecordsModal: stateRedux.openRecordsModal
	};
};

function ButtonAppBar(props) {
  const [collapseShow, setCollapseShow] = useState(false)
  const { classes, dispatch } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={()=>setCollapseShow(!collapseShow)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Plannee
          </Typography>
          <Button color="inherit">Your Goal</Button>
          <Button color="inherit" onClick={() => dispatch({ type: "toggleRecordsModal" })}>Revenue and Expense Records</Button>
        </Toolbar>
        <Collapse in={collapseShow} timeout="auto" unmountOnExit>
          <Button color="inherit">Your Goal</Button>
          <Button color="inherit" onClick={() => dispatch({ type: "toggleRecordsModal" })}>Revenue and Expense Records</Button>
        </Collapse>
      </AppBar>
    </div>
  );
}
ButtonAppBar = withStyles(styles)(connect(mapStateToProps)(ButtonAppBar));

function RecordsTable(props) {
  const { classes, dispatch } = props;
  const {records, openRecordsModal} = props;

  return (
    <Paper className={classes.root} elevation={1}>
      <center><Typography component="h1" variant="h4" gutterBottom style={{paddingTop:10}}>Revenue and Expense Records</Typography></center>
      <div style={{
        textAlign: "right",
        padding: 10
      }}>
        <AddRecordDialog></AddRecordDialog>
      </div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Revenue (THB)</TableCell>
            <TableCell>Expense (THB)</TableCell>
            <TableCell>Remaining (THB)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map((row,i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {i + 1}
              </TableCell>
              <TableCell>{row.date.toLocaleString()}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.income}</TableCell>
              <TableCell>{row.outcome}</TableCell>
              <TableCell>{row.remaining}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div style={{
        textAlign: "right",
        padding: 10
      }}>
        <Button variant="contained" color="secondary" onClick={() => dispatch({ type: "toggleRecordsModal" })}>Close</Button>
      </div>
    </Paper>
  );
}
RecordsTable = withStyles(styles2)(connect(mapStateToProps)(RecordsTable))

class App extends Component {
  render() {
    const {records, openRecordsModal} = this.props;
    
    return (
      <div className="App">
        <ButtonAppBar></ButtonAppBar>
        <div className="bodyDiv">
          <div>
            <div><b>อยากได้รถ</b></div>
            <LinearProgress variant="determinate" value={75} />
          </div>
        </div>
        <Modal open={openRecordsModal} style={{overflow:"scroll"}}>
          <RecordsTable></RecordsTable>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
