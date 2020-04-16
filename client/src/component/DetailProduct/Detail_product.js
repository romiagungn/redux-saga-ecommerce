import React, { Component } from 'react';
import $ from "jquery";

export default class Detail extends Component {
    componentDidMount() {
        $("#tile-1 .nav-tabs a").click(function () {
            var position = $(this).parent().position();
            var width = $(this).parent().width();
            $("#tile-1 .slider").css({ "left": + position.left, "width": width });
        });
        var actWidth = $("#tile-1 .nav-tabs").find(".active").parent("li").width();
        var actPosition = $("#tile-1 .nav-tabs .active").position();
        $("#tile-1 .slider").css({ "left": + actPosition.left, "width": actWidth });
    }


    render() {
        return (
            <div className="container">
                <div className="card my-5">
                    <div className="card-header text-center bg-dark">
                        Detail Product
                </div>

                    <div className="card-body">
                        <div className="wrapper">
                            <div className="product-img">
                                <img src="http://bit.ly/2tMBBTd" height="420" width="327" />
                            </div>
                            <div className="product-info">
                                <div className="product-text">
                                    <h1>Harvest Vase</h1>
                                    <h2>by studio and friends</h2>
                                    <h4>Rp. 13.000.000</h4>
                                    <p>Harvest Vases are a reinterpretation of peeled fruits and vegetables as functional objects. The surfaces appear to be sliced and pulled aside, allowing room for growth. </p>
                                </div>
                                <div className="product-price-btn">
                                    <button type="button" className="mt-3">buy now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tile" id="tile-1">
                        <ul className="nav nav-tabs nav-justified" role="tablist">
                            <div className="slider"></div>
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="/" role="tab" aria-controls="home" aria-selected="true"><i className="fas fa-home"></i> Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"><i className="fas fa-id-card"></i> Profile</a>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">SADASDDSASADSDASDA</div>
                            <div className="tab-pane fade" id="a" role="tabpanel" aria-labelledby="profile-tab">Profile</div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}