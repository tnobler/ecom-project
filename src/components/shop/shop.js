import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Shop extends Component {

    componentDidMount() {
        const headerLinks = [
            {
                _id: 0,
                title: 'Login',
                path: '/signin'
            }
        ]
        this.props.setHeaderLinks(headerLinks);
        this.props.fetchShopCategories();
        this.props.fetchShopProducts();
            // filter products with links
    }
    render () {
        return (
            <div className='shop'>
                {/* shop searchBar Component */}
                {/* shop product Component */}
                {/* shop cart Component */}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { state }
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop



