import { Component } from "react";
import React from 'react';
import { Card } from 'antd';


class FoodComponent extends Component {
    render(){
        return(
            <div className="card">
                <Card title= {this.props.title} style={{ width: 300 }}>
                    <h2><b>Brand: </b>{this.props.brand}</h2>
                    <h3>{this.props.ingridients}</h3>
                </Card>
            </div>
        )
    }
}

FoodComponent.defaultProps = {
    brand : "Merk",
    ingridients : "Komposisi"
}

export default FoodComponent;