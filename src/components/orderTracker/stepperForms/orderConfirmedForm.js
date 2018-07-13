import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class OrderConfirmationForm extends Component {
    state = {
        broker: '',
        brokerProfit: '',
        bill:''
    }

    render() {
        return(
            <div>
                <TextField name="broker" label='Broker'></TextField><br />
                <TextField name="brokerProfit" label="Broker Profit"></TextField><br/><br/>
                {/*TODO: Uploading for Bills*/}
                <Button variant='contained' color="primary">Submit</Button><br /><br/>
            </div>
        )
    }
}

export default OrderConfirmationForm;