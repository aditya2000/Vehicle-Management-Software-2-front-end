import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class LoadingForReturn extends Component {
    state = {
        broker: '',
        brokerProfit: '',
        typeOfLoad: '',
        fuel: '',
        advance: '',
        bill: '',
    }

    render() {
        return(
            <div>
                <TextField name="broker" label='Broker'></TextField><br/>
                <TextField name="brokerProfit" label='Broker Profit'></TextField><br />
                <TextField name="typeOfLoad" label='Type Of Load'></TextField><br />
                <TextField name="fuel" label='Fuel'></TextField><br />
                <TextField name="advance" label='Advance'></TextField><br /><br/>
                {/*TODO: Add opload*/}
                <Button variant='contained' color="primary">Submit</Button><br/><br/>
            </div>
        )
    }
}

export default LoadingForReturn;