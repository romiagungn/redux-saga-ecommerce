import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

export default function Item(props) {
    return (
        <Fragment>
            <div className="col-md-3">
                <div className="card">
                    <img className="card-img-top" src="https://images.unsplash.com/photo-1458724338480-79bc7a8352e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Card image cap" />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{props.product.title}<img className="card-img"
                            src="http://clipart-library.com/new_gallery/98-985509_5-stars-transparent-google-review-logo.png"
                            width="10" height="50" alt="" /></h5>
                        <h6 className="my-2 mt-auto align-self"> {props.product.brand} </h6>
                    </div>
                    <div className="d-flex col-auto text-left pr-0">
                        <span className="">
                            <StarRatings
                                rating={props.product.rate}
                                starDimension="20px"
                                starSpacing="2px"
                                starRatedColor="#dc9019"
                                numberOfStars={6}
                            />
                        </span>
                    </div>
                    <div className="card-body d-flex flex-column">
                        <p className="card-text" style={{ fontSize: '2vh' }}>{props.product.description}.</p>
                        <strong style={{ fontSize: '3vh' }} className="my-2 mt-auto align-self-end">Rp. {props.product.price},-</strong>
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