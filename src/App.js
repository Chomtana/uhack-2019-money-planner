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
import HelpingStep from './HelpingStep'

import Collapse from '@material-ui/core/Collapse';

import PieA from './PieA'
import LevelBadge from './LevelBadge'
import AddGoalDialog from './AddGoalDialog'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Grid from '@material-ui/core/Grid';

import BottomNavigation from './BottomNavigation'

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
    openRecordsModal: stateRedux.openRecordsModal,
    goals: stateRedux.goals,
    achivements: stateRedux.achivements,
    level: stateRedux.level,
    exp: stateRedux.exp,
    isOnLandingPage: stateRedux.isOnLandingPage
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
          <Button color="inherit" onClick={() => dispatch({ type: "toggleGoalModal" })}>Add Goal</Button>
          <Button color="inherit" onClick={() => dispatch({ type: "toggleRecordsModal" })}>Revenue and Expense Records</Button>
        </Toolbar>
        <Collapse in={collapseShow} timeout="auto" unmountOnExit>
          <Button color="inherit" onClick={() => dispatch({ type: "toggleGoalModal" })}>Add Goal</Button>
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
    const {records, openRecordsModal, goals, achivements, level, exp, isOnLandingPage} = this.props;
    
    return (
      <div className="App">
        <BottomNavigation></BottomNavigation>
        <ButtonAppBar></ButtonAppBar>
        <div className="container">
          <div style={{display:"flex", alignItems:"center", padding:10}}>
            <LevelBadge></LevelBadge>
            <div>
              <Typography variant="h4" style={{margin:0,marginLeft:10}}>
                Welcome! Chomtana
              </Typography>     
              <Typography variant="body1" style={{margin:0,marginLeft:10}}>
                Level {level} <LinearProgress variant="determinate" value={exp} />
              </Typography>     
            </div>   
          </div>
          {isOnLandingPage ? <div>
            <Typography variant="h4">
              Revenue And Expense Record
            </Typography>
          </div>: ""}
          {!isOnLandingPage ? <div>

            <div className="bodyDiv" id="tab-rewards"> 
              <Typography variant="h4" gutterBottom>
                <img src={require("./uhack/img.png")} alt="reward" width = {50}/>
                &nbsp;For Level {level+1}
              </Typography>
              <Grid container spacing={16}>
                {achivements.map((ac)=>ac.unlock==level+1?
                  <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          style={{height:200}}
                          image={ac.picture}
                          title={ac.title}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {ac.title}
                          </Typography>
                          <Typography component="p">
                            {ac.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                :"")}
              </Grid>

            </div>
            <div className="bodyDiv" id="tab-goals">
              <Typography variant="h4" gutterBottom>
                <img src = {require("./uhack/goal.png")} width = {35} /> Your Goals
              </Typography>
              {goals.map((goal,goali)=>(goal.active?<>
                <Paper style={{padding:10}}>
                  <Typography variant="h5" gutterBottom>{goal.name}
                    <Typography variant="body1" gutterBottom>
                      <i>({goal.around} THB)</i>
                    </Typography>
                  </Typography>

                  <LinearProgress variant="determinate" value={goal.percent} />
                  <div style={{
                    display:"flex",
                    justifyContent:"space-between"
                  }}>
                    {goal.percent < 100 ? <>
                    <Typography variant="body1" gutterBottom>
                      Before: {parseInt(goal.before/12)} years {goal.before%12} months remaining
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {goal.percent} %
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      After: {parseInt(goal.after/12)} years {goal.after%12} months remaining
                    </Typography>
                    </>
                    : <>                
                      <Typography variant="body1" gutterBottom>
                        &nbsp;
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Completed
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        &nbsp;
                      </Typography>
                    </>}
                  </div>
                  <HelpingStep 
                    steps={goal.steps}
                    stepsContent={goal.stepsContent}
                    activeStep={goal.activeStep}
                  ></HelpingStep>
                  <div style={{display:"flex",justifyContent:"space-around"}}>
                    <PieA></PieA>
                      {achivements.map((ac)=>ac.place==goali?
                        <Grid container style={{maxWidth: 450}}>
                          <Card>
                            <CardActionArea>
                              <CardMedia
                                style={{height:200}}
                                image={ac.picture}
                                title={ac.title}
                              />
                              <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                  {ac.title}
                                </Typography>
                                <Typography component="p">
                                  {ac.description}
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </Grid>
                      :"")}
                  </div>
                </Paper>
                <br></br>
              </>:""))}

            </div>

          </div>:""}
        </div>
        
        <Modal open={openRecordsModal} style={{overflow:"scroll"}}>
          <RecordsTable></RecordsTable>
        </Modal>
        <AddGoalDialog></AddGoalDialog>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
