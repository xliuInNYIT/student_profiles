import React from "react";

export default class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        e.preventDefault();
        const searchCriteria = e.target.value.trim();
        this.props.returnSearch(searchCriteria);
    }

    render(){
        return (
            <div>
                <input id="search" onKeyUp={e=>this.handleChange(e)} placeholder={this.props.holderText}/>
                <hr />
            </div>
        );
    }
}