import React, { Component } from 'react';
import List from '../container/List';
import Carousel from "./Carousel";

export default class Box extends Component {
    render() {
        return (
                <div className="container">
                    
                <Carousel />
                <List />


            </div>

        );
    }
}