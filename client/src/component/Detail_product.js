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
                        <div className="card">
                            <div className="media">
                                <img src="https://images.unsplash.com/photo-1458724338480-79bc7a8352e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                                    className="w-25" alt="..." />
                                <div className="media-body ml-2">
                                    <h1> MACAM HARIMAU </h1>
                                    <h1> MACAM HARIMAU </h1>
                                    <h1> MACAM HARIMAU </h1>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="tile" id="tile-1">
                        <ul className="nav nav-tabs nav-justified" role="tablist">
                            <div className="slider"></div>
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><i className="fas fa-home"></i> Home</a>
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