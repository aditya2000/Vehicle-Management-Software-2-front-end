import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class ReachedHQForm extends Component {
    constructor(){
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
                <TextField name="fuel" label='Fuel' value={this.props.fuel} onChange={this.props.onChangeFuel}></TextField><br />
                <TextField name="petrolPump" label="Petrol Pump" value={this.props.petrolPump} onChange={this.props.onChangePetrolPump}></TextField><br />
                <TextField name="advance" label="Advance" value={this.props.advance} onChange={this.props.onChangeAdvance}></TextField><br/><br/>
                <Button variant='contained' color="primary">Submit</Button><br/><br/>
            </form>
        )
    }
}

export default ReachedHQForm;