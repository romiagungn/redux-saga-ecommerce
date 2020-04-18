import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProduct } from '../action';
import Upload from './addForm/Upload'

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
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeRate = this.handleChangeRate.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleChangeBrand = this.handleChangeBrand.bind(this);
        this.handleChangeDetail = this.handleChangeDetail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTitle(event) {
        this.setState({ title: event.target.value });
    }

    handleChangeRate(event) {
        this.setState({ rate: event.target.value });
    }

    handleChangeDescription(event) {
        this.setState({ description: event.target.value });
    }

    handleChangePrice(event) {
        this.setState({ price: event.target.value });
    }

    handleChangeBrand(event) {
        this.setState({ brand: event.target.value });
    }

    handleChangeDetail(event) {
        this.setState({ detail_product: event.target.value });
    }

    handleSubmit(event) {

        this.props.add(this.state.title, this.state.rate, this.state.description, this.state.price, this.state.brand, this.state.detail_product)
        this.setState({ title: "", rate: "", description: "", price: "", brand: "", detail_product: "" });
        event.preventDefault();
    }

    render() {
        // console.log(this.state, 'ini props')
        return (
            <div className="container pt-4 pb-3">
                <div className="card shadow">
                    <div className="card-body pt-3 pb-3">
                        <h5 className="mb-0">
                            Add New Product
                    </h5>
                        <small className="text-muted">Detail your products and make them interested.</small>
                        <hr />
                        <form className="mt-4" onSubmit={this.handleSubmit}>

                            <div className="form-group row">
                                <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.handleChangeTitle} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="rate" className="col-sm-2 col-form-label">Rate</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" name="rate" value={this.state.rate} onChange={this.handleChangeRate} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" name="description" rows="3" value={this.state.description} onChange={this.handleChangeDescription}></textarea>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
                                <div className="input-group col-sm-10">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">Rp</div>
                                    </div>
                                    <input type="number" className="form-control" name="price" value={this.state.price} onChange={this.handleChangePrice} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="brand" className="col-sm-2 col-form-label">Brand</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" name="brand" value={this.state.brand} onChange={this.handleChangeBrand} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="detail-product" className="col-sm-2 col-form-label">Detail Product</label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" name="detail-product" rows="3" value={this.state.detail_product} onChange={this.handleChangeDetail}></textarea>
                                </div>
                            </div>

                            <div className="form-group row">
                                <Upload />
                            </div>

                            <button className="btn btn-success" type="submit" value="Submit">
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
    add: (title, rate, description, price, brand, detail_product) =>
        dispatch(addProduct(title, parseInt(rate), description, parseInt(price), brand, detail_product))
})

export default connect(
    null,
    mapDispatchToProps
)(FromAdd)