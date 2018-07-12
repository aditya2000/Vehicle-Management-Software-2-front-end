import React, {Component} from 'react';
import AppTitle from '../appbar/appbar';
import DashCard from '../dashcards/dashcards';
import FormDialog from '../newOrderForm/newOrderForm';

class DashBoard extends Component {
    render() {
        return(
            <div>
                <AppTitle/>
                <FormDialog />
                <DashCard/>
            </div>
        )
    }
}

export default DashBoard;