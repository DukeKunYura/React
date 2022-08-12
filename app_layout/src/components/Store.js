import React, { Component } from 'react';
import CardsView from './CardsView';
import IconSwitch from './IconSwitch';
import ListView from './ListView';

export default class Store extends Component {

    constructor() {
        super();
        this.state = {
            selected: "view_module"

        }
    }

    onSwitch = () => {
        if (this.state.selected === "view_module") {
            this.setState({
                selected: "view_list"
            })
        }
        else {
            this.setState({
                selected: "view_module"
            })
        }

        console.log(this.state.selected)

    };



    render() {

        const products = [{
            name: "Nike Metcon 2",
            price: "130",
            color: "red",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
        }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "green",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
        }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "blue",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
        }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "black",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
        }, {
            name: "Nike free run",
            price: "170",
            color: "black",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
        }, {
            name: "Nike Metcon 3",
            price: "150",
            color: "green",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
        }];

        return (
            <div>
                <IconSwitch icon={this.state.selected} onSwitch={this.onSwitch}></IconSwitch>
                {this.state.selected !== "view_module" ? (<CardsView products={products}></CardsView>) : (<ListView products={products}></ListView>)}

            </div>
        )
    }
}
