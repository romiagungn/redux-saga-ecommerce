import React, { Component } from 'react'
// import DescDetail from './DescDetail'
// import { Tabs, Tab, ToggleButtonGroup, ToggleButton, ButtonToolbar, Button } from 'react-bootstrap'
// import Star from '../MiniComponents/Stars'
// import BuyModal from './BuyModal'
import { connect } from "react-redux";
// import { voteProduct } from "../../action";
// import ItemTestimonial from './ItemTestimonials';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '',
            storage: '',
            quantity: 1,
            minimal: 1,
            maksimal: 5,
            showModal: false,
            rateMessage: 'Buruk',
            rateStars: 1
        };
    }

    setStars(value) {
        this.setState({ rateStars: value })
        this.changeRateMessage(value)
    }

    setColor(e) {
        this.setState({ color: e.target.value });
    }

    setStorage(e) {
        this.setState({ storage: e.target.value })
    }

    plusQuantity() {
        if (this.state.quantity < 5) {
            this.setState((state) => ({
                quantity: state.quantity + 1
            }))
        }
    }

    minusQuantity() {
        if (this.state.quantity > 1) {
            this.setState((state) => ({
                quantity: state.quantity - 1
            }))
        }
    }

    changeRateMessage(value) {
        switch (value) {
            case 1:
                this.setState({ rateMessage: 'Buruk' })
                break;

            case 2:
                this.setState({ rateMessage: 'Kurang Baik' })
                break;

            case 3:
                this.setState({ rateMessage: 'Cukup Baik' })
                break;

            case 4:
                this.setState({ rateMessage: 'Baik' })
                break;

            case 5:
                this.setState({ rateMessage: 'Sangat Baik' })
                break;

            default:
                break;
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="card my-5">
                        <div className="card-header text-center bg-dark">
                            Detail Product
                        </div>
                        <div className="card-body">
                            <div className="card">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card-body">
                                            <div className="text-center">
                                                {console.log('aduh', this.props.products)}
                                                <img src={this.props.products.file}
                                                    className="rounded" width="100%" height="100%" alt="..." />
                                                    <h4>{this.props.products.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.details.product
})

// const mapDispatchToProps = (dispatch) => ({
//     onVote: (id, vote) => { dispatch(voteProduct(id, vote)) },
// });

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(Detail);