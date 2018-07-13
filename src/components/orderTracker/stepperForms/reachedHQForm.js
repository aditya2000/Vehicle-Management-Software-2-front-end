import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class ReachedHQForm extends Component {
    state = {
        fuel: '',
        petrolPump: '',
        advance:''
    }

    render() {
        return(
            <div>
                <TextField name="fuel" label='Fuel'></TextField><br />
                <TextField name="petrolPump" label="Petrol Pump"></TextField><br />
                <TextField name="advance" label="Advance"></TextField><br/><br/>
                <Button variant='contained' color="primary">Submit</Button><br/><br/>
            </div>
        )
    }
}

export default ReachedHQForm;