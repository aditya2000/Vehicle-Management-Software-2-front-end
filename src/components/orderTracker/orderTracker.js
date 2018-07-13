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
import { getItems } from '../../actions/itemActions';


function getSteps() {
    return ['Order Confirmed', 'Reached HQ', 'Front Destination Reached', 'Loading For Return', 'Return Destination Reached'];
  }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <OrderConfirmationForm />;
      case 1:
        return <ReachedHQForm/>;
      case 2:
        return <FrontDestReachedForm/>;
      case 3: 
        return <LoadingForReturn />;
      case 4: 
        return <ReturnDestReached />;
      default:
        return 'Unknown step';
    }
  }

  

  class VerticalLinearStepper extends React.Component {
    state = {
      activeStep: 0,
    };
  
    handleNext = () => {
      this.setState(state => ({
        activeStep: state.activeStep + 1,
      }));
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
  
    render() {
      const steps = getSteps();
      const { activeStep } = this.state;
  
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
                    <div>{getStepContent(index)}</div>
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
            </Paper>
          )}
          </Grid>
          {
             activeStep > 0 && (
            <Grid item xs={6}>
              <OrderTrackInfo activeStep={activeStep}/>
            </Grid>
            )
          }

          </Grid>
        </div>
      );
    }
  }
  

  
  export default VerticalLinearStepper;