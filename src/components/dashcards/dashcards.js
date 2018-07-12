import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './dashcards.css';

class DashCard extends Component {
    render() {
        return (
            <div className='card'>
                <Card>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={4}>
                                <h3>Vehicle No.</h3>
                            </Grid>
                            <Grid item xs={4}>
                                <h1>Order</h1>
                            </Grid>
                            <Grid item xs={4}>
                                <h3>Date</h3>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={4}>
                                <h1>From</h1>
                                <p>270 Ton</p>
                            </Grid>
                            <Grid item xs={4}>
                               <h2>Front</h2>
                            </Grid>
                            <Grid item xs={4}>
                                <h1>To</h1>
                                <p>Rs 1800 / Ton</p>
                            </Grid>
                        </Grid>
                        
                        <Grid container>
                            <Grid item xs={4}>
                                <h1>From</h1>
                                <p>270 Ton</p>
                            </Grid>
                            <Grid item xs={4}>
                                <h2>Return</h2>
                            </Grid>
                            <Grid item xs={4}>
                                <h1>To</h1>
                                <p>Rs 1800 / Ton</p>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default DashCard;