import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { deleteProduct } from '../action'
import { connect } from 'react-redux';
// import { ToggleButtonGroup, ToggleButton, ButtonToolbar } from 'react-bootstrap'
// import CurrencyFormat from 'react-currency-format';

class Item extends Component {

    render() {
        return (
            <Fragment>
                <div className="col-md-3">
                    <div className="card pb-2">
                        <img className="card-img-top card-max" src={this.props.file} alt="Card image cap" />
                        <div className="card-body d-flex flex-column pt-2">
                            <h5 className="card-title">{this.props.title}</h5>
                            <h6 className="my-2 mt-auto align-self"> {this.props.brand} </h6>
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
                                <button type="button" className="btn btn-dark mr-2 mt-auto" onClick={this.props.remove}>
                                <i className="fas fa-trash mr-1"></i>
                                    Delete </button>
                            </div>
                            <Link to="/detail" className="no-underline">
                                <div className="d-flex flex-column ">
                                    <button type="button" className="btn btn-dark mr-2 "><i className="fas fa-bars mr-1"></i>
                                    Detail Item</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </Fragment >
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