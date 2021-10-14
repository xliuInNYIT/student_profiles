import React from "react"; 

export default class TagAddingBar extends React.Component{
    constructor(props){
        super(props);
        this.handleEnter = this.handleEnter.bind(this);
    }


    handleEnter(e){
        if (e.keyCode === 13) {
            e.preventDefault();
            const tagValue = e.target.value.trim();
            this.props.returnAdd(tagValue);
            e.target.value="";
        }
    }

    render(){
        return (
            <div>
                <input className="addTag" onKeyUp={e=>this.handleEnter(e)} placeholder="Add tag" />
            </div>
        );
    };
}



