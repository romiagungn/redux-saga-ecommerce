import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { deleteProduct } from '../action'
import { connect } from 'react-redux';
// import CurrencyFormat from 'react-currency-format';

class Item extends Component {
    render() {
        return (
            <Fragment>
                <div className="col-md-3">
                    <div className="card">
                        <img className="card-img-top" src="https://images.unsplash.com/photo-1458724338480-79bc7a8352e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Card image cap" />
                        <div className="card-body d-flex flex-column pt-2">
                            <h5 className="card-title">{this.props.title}<img className="card-img"
                                src="http://clipart-library.com/new_gallery/98-985509_5-stars-transparent-google-review-logo.png"
                                width="10" height="50" alt="" /></h5>
                            <h6 className="my-2 mt-auto align-self"> {this.props.brand} </h6>
                            {/* <CurrencyFormat value={this.props.price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} renderText={value => <strong style={{ fontSize: '3vh' }} className="my-2 mt-auto align-self-start">{value}</strong>} /> */}
                            <strong style={{ fontSize: '3vh' }} className="my-2 mt-auto align-self-start">{this.props.price}</strong>
                        </div>
                        <div className="d-flex col-auto text-left" height="20">
                            <span className="">
                                <StarRatings
                                    rating={this.props.rate}
                                    starDimension="20px"
                                    starSpacing="2px"
                                    starRatedColor="#dc9019"
                                    numberOfStars={6}
                                    height="10px"
                                />
                            </span>
                        </div>
                        <div className="card-body d-flex flex-column">
                            <p className="card-text" style={{ fontSize: '1.5vh' }}>{this.props.description}.</p>
                            <div className="d-flex flex-column mb-2">
                                <button type="button" className="btn btn-success mr-2 mt-auto" onClick={this.props.remove}> delete </button>
                            </div>
                            <Link to="/detail">
                                <div className="d-flex flex-column">
                                    <button type="button" className="btn btn-success mr-2 mt-auto"><i className="fas fa-bars"></i> Detail
                            Item</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    remove: () => dispatch(deleteProduct(ownProps.id))
})

export default connect(
    null,
    mapDispatchToProps
)(Item)