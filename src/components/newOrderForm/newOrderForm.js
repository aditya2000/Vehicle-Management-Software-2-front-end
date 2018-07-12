import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import './newOrderForm.css';

class FormDialog extends Component {
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
        const { fullScreen } = this.props;
        return (
            <div className="fab-button">
                <Button variant="fab" color="primary" onClick={this.handleClickOpen}><AddIcon /></Button>
                <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                className='dialog'
                >
                <DialogContent>
                    <div className='order-form'>
                        <Grid container spacing={24}>
                            <Grid item xs={12}>
                                <h2>Add New Order</h2>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth >
                                    <InputLabel htmlFor="adornment-amount">Serial No.</InputLabel>
                                    <Input/>
                                </FormControl> 
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth >
                                    <InputLabel htmlFor="adornment-amount">Date of Loading</InputLabel>
                                    <Input/>
                                </FormControl> 
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth >
                                    <InputLabel htmlFor="adornment-amount">Vehicle Number</InputLabel>
                                    <Input/>
                                </FormControl> 
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth >
                                    <InputLabel htmlFor="adornment-amount">Driver Name</InputLabel>
                                    <Input/>
                                </FormControl> 
                            </Grid> 
                        </Grid>

                        <Grid container spacing={24}>
                           <Grid item xs={12}>
                                <h2>Front</h2>
                           </Grid>
                           <Grid item xs={6}>
                           <FormControl fullWidth >
                                <InputLabel htmlFor="adornment-amount">From</InputLabel>
                                <Input/>
                            </FormControl>
                           </Grid>
                           <Grid item xs={6}>
                           <FormControl fullWidth >
                                <InputLabel htmlFor="adornment-amount">To</InputLabel>
                                <Input/>
                            </FormControl>
                           </Grid> 
                           <Grid item xs={6}>
                           <FormControl fullWidth >
                                <InputLabel htmlFor="adornment-amount">Weight</InputLabel>
                                <Input/>
                            </FormControl>
                           </Grid>
                           <Grid item xs={6}>
                           <FormControl fullWidth >
                                <InputLabel htmlFor="adornment-amount">Price Per Ton</InputLabel>
                                <Input/>
                            </FormControl>
                           </Grid>
                        </Grid>

                        <Grid container spacing={24}>
                           <Grid item xs={12}>
                                <h2>Return</h2>
                           </Grid>
                           <Grid item xs={6}>
                           <FormControl fullWidth >
                                <InputLabel htmlFor="adornment-amount">Return From</InputLabel>
                                <Input/>
                            </FormControl>
                           </Grid>
                           <Grid item xs={6}>
                           <FormControl fullWidth >
                                <InputLabel htmlFor="adornment-amount">Return To</InputLabel>
                                <Input/>
                            </FormControl>
                           </Grid> 
                           <Grid item xs={6}>
                           <FormControl fullWidth >
                                <InputLabel htmlFor="adornment-amount">Weight</InputLabel>
                                <Input/>
                            </FormControl>
                           </Grid>
                           <Grid item xs={6}>
                           <FormControl fullWidth >
                                <InputLabel htmlFor="adornment-amount">Price Per Ton</InputLabel>
                                <Input/>
                            </FormControl>
                           </Grid>
                        </Grid>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="secondary">
                    Cancel
                    </Button>
                    <Button variant='contained' color="primary" autoFocus>
                    Submit
                    </Button>
                </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default FormDialog;