import React from "react"; 
import TagAddingBar from "./tagAddingBar";
import plus_img from "../icons/plus.png";
import minus_mig from "../icons/minus.png";

export default class ProfileEntry extends React.Component {
    constructor(props){
        super(props);
        this.state={
            expended:false,
            tags:[]
        }

        this.handleClick = this.handleClick.bind(this);
        this.extendButtonFunc = this.extendButtonFunc.bind(this);
        this.displayTagsFunc = this.displayTagsFunc.bind(this);
        this.gradeDisplayFunc = this.gradeDisplayFunc.bind(this);
        this.handleAddTag = this.handleAddTag.bind(this);

        this.entry = props.entry;
    }

    handleClick(){
        console.log('trigger click');
        this.setState((prevState)=>{
            return {
                expended: !prevState.expended
            }
        });
    }

    extendButtonFunc() {
        if(this.state.expended){
            return (
                <img className="extendButton" src={minus_mig} alt="minus" onClick={this.handleClick}></img>
            );
        }else{
            return (
                <img className="extendButton" src={plus_img} alt="plus" onClick={this.handleClick}></img>
            );
        }
    }

    gradeDisplayFunc(grades) {
        if(this.state.expended){
            const result = grades.map((grade) =>
            <li key={grade}>test score: {grade}</li>
            );
            return result;
        }else {
            let avg = 0;
            if(grades && grades.length > 0){
                let sum = 0;
                for(let i = 0; i < grades.length; i ++){
                    sum += parseInt(grades[i]);
                }

                avg = sum/grades.length;
            }

            return (
                <p>Average: {avg} %</p>
            );
        }
    }

    displayTagsFunc(){
        const tags = this.state.tags;
        return tags.map((tag) => 
            <div className="row" style={{backgroundColor:"lavender"}} key={tag}>{tag}</div>
        );
    }

    handleAddTag=function(addTag){
        this.setState((prevState)=>{
          return {
            tags: prevState.tags.concat(addTag)
          };
        });
      };

    render(){
        const filterTag = this.props.filterTag;
        if(filterTag){
            let tagFilter = false;
            this.state.tags.map((tag)=>{
                if(tag.includes(this.props.filterTag)){
                    tagFilter = true;
                }

                return null;
            });

            if(!tagFilter){
                return null;
            }
        }
        
        const {firstName, lastName, company, grades, id, pic, skill, email} = this.entry;
        const extendButton = this.extendButtonFunc();
        const gradeDisplay = this.gradeDisplayFunc(grades);
        const displayTags = this.displayTagsFunc();

        return (
            <div>
                <div className="row">
                    <img className="figureHead" src={pic} alt="logo" />
                </div>
                <div className="row">
                    <p hidden>id: {id}</p>
                    <h1>{firstName.toUpperCase()} {lastName.toUpperCase()}</h1>
                    <p>Email: {email}</p>
                    <p>Company: {company}</p>
                    <p>Skill: {skill}</p>
                    <div>{gradeDisplay}</div>
                    <div>{displayTags}</div>
                    <TagAddingBar returnAdd={this.handleAddTag}/>
                </div>
                <div className="row" style={{float:"right"}}>
                    {extendButton}
                </div>
                <hr />
            </div>
        );
    }
}