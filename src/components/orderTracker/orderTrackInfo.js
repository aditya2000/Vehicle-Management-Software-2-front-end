import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './orderTracker.css';


class OrderTrackInfo extends Component {
    stepDetails = (stepNum) => {
        if(stepNum === 1) {
            return (
                <div>
                    <p>Broker: {this.props.step[stepNum-1].broker}</p>
                    <p>Broker Profit: {this.props.step[stepNum-1].brokerProfit}</p>
                </div>
            )
        } else if(stepNum === 2) {
            return (
                <div>
                    <p>Fuel: {this.props.step[stepNum-1].fuel}</p>
                    <p>Petrol Pump: {this.props.step[stepNum-1].petrolPump}</p>
                    <p>Advance: {this.props.step[stepNum-1].advance}</p>
                </div>
            )
        } else if(stepNum === 3) {
            return (
                <div>
                    <p>Payment: {this.props.step[stepNum-1].payment}</p>
                </div>
            )
        } else if(stepNum === 4) {
            return (
                <div>
                    <p>Broker: {this.props.step[stepNum-1].returnBroker}</p>
                    <p>Broker Profit: {this.props.step[stepNum-1].returnBrokerProfit}</p>
                    <p>Type of Load: {this.props.step[stepNum-1].typeOfLoad}</p>
                    <p>Fuel: {this.props.step[stepNum-1].returnFuel}</p>
                    <p>Advance: {this.props.step[stepNum-1].returnAdvance}</p>
                </div>
            )
        } else if(stepNum === 5) {
            return (
                <div>
                    <p>Payment: {this.props.step[stepNum-1].returnPayment}</p>
                </div>
            )
        }
    }
    createStep = (activeStep) => {
        let info = [];
        let activeStepName = this.props.activeStepName; 
        for(let i=1; i<=activeStep; i++){
          info.push(
                <div key={i}>
                    <h1>Step-{i}: {activeStepName[i-1]}</h1>
                    <div>{this.stepDetails(i)}</div>
                </div>
            );
        }
        return info;
    }
    render() {
        return (
            
            <div className="tracker">
              {this.createStep(this.props.activeStep)}
              
            </div>
        )
    }
}

export default OrderTrackInfo;