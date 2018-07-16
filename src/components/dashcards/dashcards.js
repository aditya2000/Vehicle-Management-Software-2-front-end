import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FullScreenDialog from '../orderDialog/orderDailog';
import './dashcards.css';

import { connect } from 'react-redux';
import { deleteItem } from '../../actions/itemActions';
import PropTypes from 'prop-types';

class DashCard extends Component {

    onDeleteClick = (orderNumber) => {
        this.props.deleteItem(orderNumber);
    }

    render() {
        return (
            <div className='card'>
                <Card>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={4}>
                                <h3>Vehicle No. : {this.props.itemOrder.vehicleNumber}</h3>
                            </Grid>
                            <Grid item xs={4}>
                                <h1>Order No. : {this.props.itemOrder.orderNumber}</h1>
                            </Grid>
                            <Grid item xs={4}>
                                <h3>Date: {this.props.itemOrder.date}</h3>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={4}>
                                <h1>{this.props.itemOrder.from}</h1>
                                <p>{this.props.itemOrder.weight} Tons</p>
                            </Grid>
                            <Grid item xs={4}>
                               <h2>Front</h2>
                            </Grid>
                            <Grid item xs={4}>
                                <h1>{this.props.itemOrder.to}</h1>
                                <p>Rs {this.props.itemOrder.pricePerTon} / Ton</p>
                            </Grid>
                        </Grid>
                        
                        <Grid container>
                            <Grid item xs={4}>
                                <h1>{this.props.itemOrder.returnFrom}</h1>
                                <p>{this.props.itemOrder.returnWeight} Tons</p>
                            </Grid>
                            <Grid item xs={4}>
                                <h2>Return</h2>
                            </Grid>
                            <Grid item xs={4}>
                                <h1>{this.props.itemOrder.returnTo}</h1>
                                <p>Rs {this.props.itemOrder.returnPricePerTon} / Ton</p>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <FullScreenDialog orderNumber={this.props.itemOrder.orderNumber}/><br /><br/>
                                <Button variant="outlined" color="secondary" onClick={this.onDeleteClick.bind(this, this.props.itemOrder.orderNumber)}>Delete</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    item: state.item
}


export default connect(mapStateToProps,  { deleteItem })(DashCard);