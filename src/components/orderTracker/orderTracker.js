import React from 'react';
import PropTypes from 'prop-types';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import OrderTrackInfo from '../orderTracker/orderTrackInfo';

import OrderConfirmationForm from './stepperForms/orderConfirmedForm';
import ReachedHQForm from './stepperForms/reachedHQForm';
import FrontDestReachedForm from './stepperForms/frontDestReachedForm';
import LoadingForReturn from './stepperForms/loadingForReturn';
import ReturnDestReached from './stepperForms/returnDestReached';
import { connect } from 'react-redux';
import { getSteps, addStep } from '../../actions/stepActions';


function getsSteps() {
    return ['Order Confirmed', 'Reached HQ', 'Front Destination Reached', 'Loading For Return', 'Return Destination Reached'];
  }
  
  /*function getStepContent(step) {
    switch (step) {
      case 0:
        return <OrderConfirmationForm 
          key="orderConfirmationForm"
          onSubmit={this.handleNext}
          broker={this.state.broker}
          brokerProfit={this.state.brokerProfit}
          onChangeBroker={this.handleChange('broker')}
          onChangeBrokerProfit={this.handleChange('brokerProfit')}
        />;
      case 1:
        return <ReachedHQForm
        key="reachedHQForm"
        onSubmit={this.handleNext}
        fuel={this.state.fuel}
        petrolPump={this.state.petrolPump}
        advance={this.state.advance}
        onChangeFuel={this.handleChange('fuel')}
        onChangePetrolPump={this.handleChange('petrolPump')}
        onChangeAdvance={this.handleChange('advance')}
        />;
      case 2:
        return <FrontDestReachedForm
        key="frontDestReachedForm"
        payment={this.state.payment}
        onChangePayment={this.handleChange('payment')}
        />;
      case 3: 
        return <LoadingForReturn 
        key="loadingForReturn"
        returnBroker={this.state.returnBroker}
        returnBrokerProfit={this.state.returnBrokerProfit}
        typeOfLoad={this.state.typeOfLoad}
        returnFuel={this.state.returnFuel}
        returnAdvance={this.state.returnAdvance}
        onChangeReturnBroker={this.handleChange('returnBroker')}
        onChangeReturnBrokerProfit={this.handleChange('returnBrokerProfit')}
        onChangeTypeOfLoad={this.handleChange('typeOfLoad')}
        onChangeReturnFuel={this.handleChange('returnFuel')}
        onChangeReturnAdvance={this.handleChange('returnAdvance')}
        />;
      case 4: 
        return <ReturnDestReached
        key="returnDestReached"
        returnPayment={this.state.returnPayment}
        onChangeReturnPayment={this.handleChange('returnPayment')}
        />;
      default:
        return 'Unknown step';
    }
  }
*/
  

  class VerticalLinearStepper extends React.Component {
    constructor(){
      super();
      this.state = {
        activeStep: 0,

        //orderNumber: this.props.orderNumber,
        
        broker: '',
        brokerProfit: null,

        fuel: null,
        petrolPump: '',
        advance: null,

        payment: null,

        returnBroker: '',
        returnBrokerProfit: null,
        typeOfLoad: '',
        returnFuel: null,
        returnAdvance: null,

        returnPayment: null
      };
      this.handleNext = this.handleNext.bind(this);
    }

    componentDidMount() {
      this.props.getSteps();
    }

    getStepContent(step) {
      switch (step) {
        case 0:
          return <OrderConfirmationForm 
            key="orderConfirmationForm"
            onSubmit={this.handleNext}
            broker={this.state.broker}
            brokerProfit={this.state.brokerProfit}
            onChangeBroker={this.handleChange('broker')}
            onChangeBrokerProfit={this.handleChange('brokerProfit')}
          />;
        case 1:
          return <ReachedHQForm
          key="reachedHQForm"
          onSubmit={this.handleNext}
          fuel={this.state.fuel}
          petrolPump={this.state.petrolPump}
          advance={this.state.advance}
          onChangeFuel={this.handleChange('fuel')}
          onChangePetrolPump={this.handleChange('petrolPump')}
          onChangeAdvance={this.handleChange('advance')}
          />;
        case 2:
          return <FrontDestReachedForm
          key="frontDestReachedForm"
          payment={this.state.payment}
          onChangePayment={this.handleChange('payment')}
          />;
        case 3: 
          return <LoadingForReturn 
          key="loadingForReturn"
          returnBroker={this.state.returnBroker}
          returnBrokerProfit={this.state.returnBrokerProfit}
          typeOfLoad={this.state.typeOfLoad}
          returnFuel={this.state.returnFuel}
          returnAdvance={this.state.returnAdvance}
          onChangeReturnBroker={this.handleChange('returnBroker')}
          onChangeReturnBrokerProfit={this.handleChange('returnBrokerProfit')}
          onChangeTypeOfLoad={this.handleChange('typeOfLoad')}
          onChangeReturnFuel={this.handleChange('returnFuel')}
          onChangeReturnAdvance={this.handleChange('returnAdvance')}
          />;
        case 4: 
          return <ReturnDestReached
          key="returnDestReached"
          returnPayment={this.state.returnPayment}
          onChangeReturnPayment={this.handleChange('returnPayment')}
          />;
        default:
          return 'Unknown step';
      }
    }

    handleNext = () => {
      
      this.setState(state => ({
        activeStep: state.activeStep + 1,
      }));
    
      const stepValues = {
        orderNumber: this.props.orderNumber,
        broker: this.state.broker,
        brokerProfit: this.state.brokerProfit,
        fuel: this.state.fuel,
        petrolPump: this.state.petrolPump,
        advance: this.state.advance,
        payment: this.state.payment,
        returnBroker: this.state.returnBroker,
        returnBrokerProfit: this.state.returnBrokerProfit,
        typeOfLoad: this.state.typeOfLoad,
        returnFuel: this.state.returnFuel,
        returnAdvance: this.state.returnAdvance,
        returnPayment: this.state.returnPayment
      }
      //TODO: call to backend
      this.props.addStep(stepValues);
    
    };
  
    handleBack = () => {
      this.setState(state => ({
        activeStep: state.activeStep - 1,
      }));
    };
  
    handleReset = () => {
      this.setState({
        activeStep: 0,
      });
    };

    handleChange(field) {
      return(e) => this.setState({[field]: e.target.value});
    }
  
    render() {
      const steps = getsSteps();
      const { activeStep } = this.state;
      const {stepsList} = this.props.steps;
      return (
        <div>
        <Grid container>
         <Grid item xs={6}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => {
              return (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                    <div>{this.getStepContent(index)}</div>
                    <div>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={this.handleBack}
                        >
                          Back
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={this.handleNext}
                        >
                          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                      </div>
                    </div>
                  </StepContent>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0}>
              <Typography>All steps completed - you&quot;re finished</Typography>
              <Button onClick={this.handleReset}>
                Reset
              </Button>
              <Button variant="contained" color="primary">Preview</Button>
            </Paper>
          )}
          </Grid>
          {
             activeStep > 0 && (
            <Grid item xs={6}>
              <OrderTrackInfo activeStep={activeStep} activeStepName={getsSteps(activeStep)} step={stepsList.filter(step => step.orderNumber === this.props.orderNumber)}/>
            </Grid>
            )
            
          }

          </Grid>
        </div>
      );
    }
  }
  

VerticalLinearStepper.propTypes = {
    getSteps: PropTypes.func.isRequired,
    steps: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    steps: state.steps
});
  
export default connect(mapStateToProps, {getSteps, addStep})(VerticalLinearStepper);