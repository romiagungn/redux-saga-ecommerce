import React, { Fragment, Component } from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';
import { loadProduct } from '../action';
import { connect } from 'react-redux';

class List extends Component {
    componentDidMount() {
        this.props.loadProduct()
    }

    render() {
        console.log(this.props.data, 'ini item loh')
        const listItems = this.props.data.map((item, index) => 
            <Item key={index} product={{ ...item }} />
        );

        return (
            <Fragment>
                <div className="container">
                    <Link to="/add" className="no-underline">
                        <div className="wrap">
                            <button className="button btn-block">Add Product</button>
                        </div>
                    </Link>
                    <div className="row">
                        {listItems}
                    </div>
                </div>
            </Fragment>

        )
    }
}

const mapStateToProps = (state) => ({
    data: state.product
})

const mapDispatchToProps = (dispatch) => ({
    loadProduct: () => dispatch(loadProduct())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)