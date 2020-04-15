import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProduct } from '../action';

class FromAdd extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: "",
            rate: "",
            description: "",
            price: "",
            brand: "",
            detail_product: ""
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleRateChange = this.handleRateChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleBrandChange = this.handleBrandChange.bind(this);
        this.handleDetailChange = this.handleDetailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleRateChange(event) {
        this.setState({ rate: event.target.value });
    }

    handleDescriptionChange(event) {
        this.setState({ description: event.target.value });
    }

    handlePriceChange(event) {
        this.setState({ price: event.target.value });
    }

    handleBrandChange(event) {
        this.setState({ brand: event.target.value });
    }

    handleDetailChange(event) {
        this.setState({ detail_product: event.target.value });
    }

    handleSubmit(event) {
        if (this.state.title && this.state.rate && this.state.description && this.state.price && this.state.brand && this.state.detail_product) {
            this.props.addProduct(this.state.title, this.state.rate, this.state.description, this.state.price, this.state.brand, this.state.detail_product)
            this.setState({ title: "", rate: "", description: "", price: "", brand: "", detail_product: "" });
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className="container pt-4">
                <div className="card shadow">
                    <div className="card-body">
                        <h5 className="mb-0">
                            Add New Product
                    </h5>
                        <small className="text-muted">Detail your products and make them interested.</small>
                        <hr />
                        <form className="mt-4">
                            <div className="form-group row">
                                <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" name="title" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="rate" className="col-sm-2 col-form-label">Rate</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" name="rate" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" name="description" rows="3"></textarea>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
                                <div className="input-group col-sm-10">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">Rp</div>
                                    </div>
                                    <input type="number" className="form-control" name="price" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="brand" className="col-sm-2 col-form-label">Brand</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" name="brand" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="detail-product" className="col-sm-2 col-form-label">Detail Product</label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" name="detail-product" rows="3"></textarea>
                                </div>
                            </div>
                            <button className="btn btn-success">
                                <i className="fa fa-save mr-sm-2"></i>Save
                        </button>
                            <Link to="/">
                                <button className="btn">
                                    Cancel
                            </button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addProduct: (title, description, brand, price, detail_product) =>
        dispatch(addProduct(title, description, brand, price, detail_product))
})

export default connect(
    null,
    mapDispatchToProps
)(FromAdd)