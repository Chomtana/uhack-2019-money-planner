import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux'

import AddIcon from '@material-ui/icons/Add';

class AddGoalDialog extends React.Component {
  state = {
    outcome: 0,
    income: 0,
    remaining: 0,
    description: "",
    step: 1
  };

  handleClickOpen = () => {
    this.props.dispatch({ type: "toggleGoalModal" })
  };

  handleClose = () => {
    this.props.dispatch({ type: "toggleGoalModal" })
  };
  
  handleInputChange = e => {
		/*const value = e.target.value;
		const name = e.target.name;

		this.setState({
			[name]: value
    });*/
  };
  
  handleSubmit = () => {
    /*this.props.dispatch({
      type: "add_record",
      payload: this.state
    })
    
    this.props.dispatch({ type: "toggleAddRecordDialog" })*/
    this.props.dispatch({ type: "enableGoal", payload: 2})
    
    this.props.dispatch({ type: "toggleGoalModal" })
    
  }

  render() {
    const {records, openGoalModal} = this.props;
    
    return (
      <div>
        <Dialog
          open={openGoalModal}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Goal</DialogTitle>
          <DialogContent>
            {/*<DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>*/""}
            <TextField
              autoFocus
              margin="dense"
              name="name"
              label="What you want to do"
              type="text"
              onChange={this.handleInputChange}
              fullWidth
            />
            <TextField
              margin="dense"
              name="around"
              label="Cost (THB)"
              type="number"
              onChange={this.handleInputChange}
              fullWidth
            />
            <TextField
              margin="dense"
              name="duration"
              label="Duration (in years)"
              type="number"
              onChange={this.handleInputChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
            <Button color="primary" onClick={this.handleSubmit}>
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = stateRedux => {
	return {
    records: stateRedux.records,
    openGoalModal: stateRedux.openGoalModal
	};
};

export default connect(mapStateToProps)(AddGoalDialog)