import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './appbar.css';

class AppTitle extends Component {
    render() {
        return(
            <div className='app-bar'>
                <AppBar position="static">
                    <Toolbar>
                        <h1>Truck App</h1>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default AppTitle;