import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class LoadingForReturn extends Component {
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
                <TextField name="returnBroker" label='Broker' value={this.props.returnBroker} onChange={this.props.onChangeReturnBroker}></TextField><br/>
                <TextField name="returnBrokerProfit" label='Broker Profit' value={this.props.returnBrokerProfit} onChange={this.props.onChangeReturnBrokerProfit}></TextField><br />
                <TextField name="typeOfLoad" label='Type Of Load' value={this.props.typeOfLoad} onChange={this.props.onChangeTypeOfLoad}></TextField><br />
                <TextField name="returnFuel" label='Fuel' value={this.props.returnFuel} onChange={this.props.onChangeReturnFuel}></TextField><br />
                <TextField name="returnAdvance" label='Advance' value={this.props.returnAdvance} onChange={this.props.onChangeReturnAdvance}></TextField><br /><br/>
                {/*TODO: Add opload*/}
                <Button variant='contained' color="primary">Submit</Button><br/><br/>
            </form>
        )
    }
}

export default LoadingForReturn;