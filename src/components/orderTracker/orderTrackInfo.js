import React, {Component} from 'react';


class OrderTrackInfo extends Component {
    state = {
        brokerStep1: 'brokerStep1',
        brokerProfitStep1: 'brokerProfitStep1',
    }
    createStep = (activeStep) => {
        let info = [];
        for(let i=1; i<=activeStep; i++){
          info.push(
                <div key={i}>
                    <h1>Step-{i}: Order Confirmed</h1>
                    <p>{this.state.brokerStep1}</p>
                    <p>{this.state.brokerProfitStep1}</p>
                </div>
            );
        }
        return info;
    }
    render() {
        return (
            <div>
              {this.createStep(this.props.activeStep)}
            </div>
        )
    }
}

export default OrderTrackInfo;