import React, { Component } from 'react';
import List from '../container/List';

export default class Box extends Component {
    render() {
        return (
            <div>

                <div className="container">
                    <div className="jumbotron jumbotron-fluid bg-cover mb-0">
                        <div className="overlay"></div>
                        <div className="container text-center">
                            <h1 className="display-4">E-COMMERCE</h1>
                            <p className="lead">
                                WELCOME TO THE JUNGLE
                            </p>
                        </div>
                    </div>
                </div>
                <List />


            </div>

        );
    }
}