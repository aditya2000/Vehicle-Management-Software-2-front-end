import React, {Component} from 'react';
import AppTitle from '../appbar/appbar';
import DashCard from '../dashcards/dashcards';
import FormDialog from '../newOrderForm/newOrderForm';

import { connect } from 'react-redux';
import { getItems } from '../../actions/itemActions';
import PropTypes from 'prop-types';

class DashBoard extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    render() {
        const { items } = this.props.item;
        return(
            <div>
                <AppTitle/>
                <FormDialog />
                {items.map(item => <DashCard itemOrder={item} key={item.orderNumber}/>)}
            </div>
        )
    }
}

DashBoard.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems })(DashBoard);