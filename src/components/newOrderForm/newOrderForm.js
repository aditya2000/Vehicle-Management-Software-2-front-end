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

import { connect } from 'react-redux';
import { addItem } from '../../actions/itemActions';

class FormDialog extends Component {
    state = {
        open: false,
        orderNumber: null,
        date: null,
        vehicleNumber: null,
        driverName: null,
        from: '',
        to: '',
        weight: null,
        pricePerTon: null,
        returnFrom: '',
        returnTo: '',
        returnWeight: null,
        returnPricePerTon: null
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            orderNumber: this.state.orderNumber,
            date: this.state.date,
            vehicleNumber: this.state.vehicleNumber,
            driverName: this.state.driverName,
            from: this.state.from,
            to: this.state.to,
            weight: this.state.weight,
            pricePerTon: this.state.pricePerTon,
            returnFrom: this.state.returnFrom,
            returnTo: this.state.returnTo,
            returnWeight: this.state.returnWeight,
            returnPricePerTon: this.state.returnPricePerTon
        }

        this.props.addItem(newItem);

        this.handleClose();
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
                        <form onSubmit={this.onSubmit}>
                        <Grid container spacing={24}>
                            <Grid item xs={12}>
                                <h2>Add New Order</h2>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth >
                                    <InputLabel htmlFor="orderNumber">Order No.</InputLabel>
                                    <Input name='orderNumber' onChange={this.onChange}/>
                                </FormControl> 
                            </Grid>
                            <Grid item xs={6}>
                            <TextField
                                id="date"
                                label="Date of Loading"
                                type="date"
                                name="date"
                                InputLabelProps={{
                                    shrink: true,
                                  }}
                                onChange={this.onChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth >
                                    <InputLabel htmlFor="vehicleNumber">Vehicle Number</InputLabel>
                                    <Input name="vehicleNumber" onChange={this.onChange}/>
                                </FormControl> 
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth >
                                    <InputLabel htmlFor="driverName">Driver Name</InputLabel>
                                    <Input name="driverName" onChange={this.onChange}/>
                                </FormControl> 
                            </Grid> 
                        </Grid>

                        <Grid container spacing={24}>
                           <Grid item xs={12}>
                                <h2>Front</h2>
                           </Grid>
                           <Grid item xs={6}>
                           <FormControl fullWidth >
                                <InputLabel htmlFor="from">From</InputLabel>
                                <Input name="from" onChange={this.onChange}/>
                            </FormControl>
                           </Grid>
                           <Grid item xs={6}>
                           <FormControl fullWidth >
                                <InputLabel htmlFor="to">To</InputLabel>
                                <Input name="to" onChange={this.onChange}/>
                            </FormControl>
                           </Grid> 
                           <Grid item xs={6}>
                           <FormControl fullWidth >
                                <InputLabel htmlFor="weight">Weight</InputLabel>
                                <Input name="weight" onChange={this.onChange}/>
                            </FormControl>
                           </Grid>
                           <Grid item xs={6}>
                           <FormControl fullWidth >
                                <InputLabel htmlFor="pricePerTon">Price Per Ton</InputLabel>
                                <Input name="pricePerTon" onChange={this.onChange}/>
                            </FormControl>
                           </Grid>
                        </Grid>

                        <Grid container spacing={24}>
                           <Grid item xs={12}>
                                <h2>Return</h2>
                           </Grid>
                           <Grid item xs={6}>
                           <FormControl fullWidth >
                                <InputLabel htmlFor="returnFrom">Return From</InputLabel>
                                <Input name="returnFrom" onChange={this.onChange}/>
                            </FormControl>
                           </Grid>
                           <Grid item xs={6}>
                           <FormControl fullWidth >
                                <InputLabel htmlFor="returnTo">Return To</InputLabel>
                                <Input name="returnTo" onChange={this.onChange}/>
                            </FormControl>
                           </Grid> 
                           <Grid item xs={6}>
                           <FormControl fullWidth >
                                <InputLabel htmlFor="returnWeight">Weight</InputLabel>
                                <Input name="returnWeight" onChange={this.onChange}/>
                            </FormControl>
                           </Grid>
                           <Grid item xs={6}>
                           <FormControl fullWidth >
                                <InputLabel htmlFor="returnPricePerTon">Price Per Ton</InputLabel>
                                <Input name="returnPricePerTon" onChange={this.onChange}/>
                            </FormControl>
                           </Grid>
                        </Grid>
                        <br/><br />
                        <Button variant='contained' color="primary" onClick={this.onSubmit} autoFocus>
                          Submit
                        </Button>
                        </form>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="secondary">
                    Cancel
                    </Button>
                </DialogActions>
                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, {addItem})(FormDialog);