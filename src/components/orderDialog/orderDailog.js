import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';

import VerticalLinearStepper from '../orderTracker/orderTracker';


function Transition(props) {
    return <Slide direction="up" {...props} />;
  }

  
  class FullScreenDialog extends React.Component {
    state = {
      open: false,
    };
  
    handleClickOpen = () => {
      this.setState({ open: true });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };
  
    render() {
      const { classes } = this.props;
      return (
        <div>
          <Button onClick={this.handleClickOpen} variant='contained' color='primary'>Track</Button>
          <Dialog
            fullScreen
            open={this.state.open}
            onClose={this.handleClose}
            TransitionComponent={Transition}
          >
            <AppBar>
              <Toolbar>
                <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                  <CloseIcon />
                </IconButton>
                <Typography variant="title" color="inherit">
                  Order Tracker
                </Typography>
              </Toolbar>
            </AppBar>
            <br/><br/><br/><br/>
            <VerticalLinearStepper orderNumber={this.props.orderNumber}/>
                
          </Dialog>
        </div>
      );
    }
  }
  
  
  export default FullScreenDialog;