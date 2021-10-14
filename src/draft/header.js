import React, { Component} from 'react';
export default class Header extends Component {
    render() {
        return (
            <div>
                <p>This is the Header</p>
                <HeaderText title="Test value"/> 
            </div>
        );
    }
}

class HeaderText extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log('get clicked');
        alert('handle Click');
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <p>{this.props.title}</p>
                <button onClick={this.handleClick}> click it!</button>
            </div>
        );         
    }
}