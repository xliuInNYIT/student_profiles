import React from 'react';
import './App.css';
import ProfileList from './profiles/profileList';
import SearchBar from './profiles/searchBar';

class App extends React.Component {
  constructor(){
    super();
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchTag = this.handleSearchTag.bind(this);
    this.state={
      searchCriteria:'',
      searchTag:''
    }
  }

  handleSearchInput=function(searchCriteria){
    this.setState(()=>{
      return {
        searchCriteria
      }
    });
  }

  handleSearchTag=function(searchTag){
    this.setState(()=>{
      return {
        searchTag
      }
    });
  }

  render(){
    return (
      <div className="App">
        <SearchBar returnSearch={this.handleSearchInput} holderText={"Search by name"}/>
        <SearchBar returnSearch={this.handleSearchTag} holderText={"Search by Tag"}/>
        <p>{this.state.searchTag}</p>
        <ProfileList filter={this.state.searchCriteria} filterTag={this.state.searchTag}/>
      </div>
    );
  }
}

export default App;
