import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class ReturnDestReached extends Component {
    state = {
        payment: '',
        pud: '',
    }

    render() {
        return(
            <div>
                <TextField name="payment" label='Payment'></TextField><br/><br/>
                {/*TODO: Add opload*/}
                <Button variant='contained' color="primary">Submit</Button><br/><br/>
            </div>
        )
    }
}

export default ReturnDestReached;