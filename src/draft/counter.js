import React, { Component} from 'react';
import User from './functionTest';

export default class Counter extends Component {
    constructor(props){
        super(props);

        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    render(){
        return (
            <div>
                <User name="Leo" age="24"/>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }

    handleAddOne(){
        console.log('plus one');
        this.setState((prevState) =>{
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne(){
        console.log('minus one');
        this.setState((prevState) =>{
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset(){
        console.log('reset');
        this.setState(() =>{
            return {
                count: 0
            };
        });
    }
}