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

class AddRecordDialog extends React.Component {
  state = {
    outcome: 0,
    income: 0,
    remaining: 0,
    description: ""
  };

  handleClickOpen = () => {
    this.props.dispatch({ type: "toggleAddRecordDialog" })
  };

  handleClose = () => {
    this.props.dispatch({ type: "toggleAddRecordDialog" })
  };
  
  handleInputChange = e => {
		const value = e.target.value;
		const name = e.target.name;

		this.setState({
			[name]: value
    });
  };
  
  handleSubmit = () => {
    this.props.dispatch({
      type: "add_record",
      payload: this.state
    })
    
    this.props.dispatch({ type: "toggleAddRecordDialog" })
  }

  render() {
    const {records, openAddRecordDialog} = this.props;
    
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}><AddIcon /> Add</Button>
        <Dialog
          open={openAddRecordDialog}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add revenue and/or expense</DialogTitle>
          <DialogContent>
            {/*<DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>*/""}
            <TextField
              autoFocus
              margin="dense"
              name="income"
              label="Revenue"
              type="number"
              onChange={this.handleInputChange}
              fullWidth
            />
            <TextField
              margin="dense"
              name="outcome"
              label="Expense"
              type="number"
              onChange={this.handleInputChange}
              fullWidth
            />
            <TextField
              margin="dense"
              name="description"
              label="Description"
              type="text"
              onChange={this.handleInputChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary" onClick={this.handleSubmit}>
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
    openAddRecordDialog: stateRedux.openAddRecordDialog
	};
};

export default connect(mapStateToProps)(AddRecordDialog)