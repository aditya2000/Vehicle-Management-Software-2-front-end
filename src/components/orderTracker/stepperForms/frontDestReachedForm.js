import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class FrontDestReachedForm extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <TextField name="payment" label='Payment' value={this.props.payment} onChange={this.props.onChangePayment}></TextField><br/><br/>
                {/*TODO: Add opload*/}
                <Button variant='contained' color="primary">Submit</Button><br/><br/>
            </form>
        )
    }
}

export default FrontDestReachedForm;