import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class OrderConfirmationForm extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefautlt();
        this.props.onSubmit();
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <TextField name="broker" label='Broker' value={this.props.broker} onChange={this.props.onChangeBroker}></TextField><br />
                <TextField name="brokerProfit" label="Broker Profit" value={this.props.brokerName} onChange={this.props.onChangeBrokerProfit}></TextField><br/><br/>
                {/*TODO: Uploading for Bills*/}
                <Button variant='contained' color="primary">Submit</Button><br /><br/>
            </form>
        )
    }
}

export default OrderConfirmationForm;