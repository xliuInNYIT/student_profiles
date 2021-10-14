import React from "react";
import fetchStudentProfiles from "../API/fetchStudentProfiles";
import ProfileEntry from "./profileEntry";

export default class ProfileList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            profiles: []
        }

        this.isFiltered = this.isFiltered.bind(this);
    }

    isFiltered(profile, filter){
        if(!filter) {
            return false;
        }

        const {firstName, lastName} = profile;
        const fullname = firstName + " " + lastName;
        return !fullname.toLowerCase().includes(filter.toLowerCase());
        // Filtered means we don't want it.
        // whatever left is what we want.
        // thus if contains return false, not filter it
        // return true means we are going to dump this one.
    }

    componentDidMount(){
        const jsonResult = JSON.parse(fetchStudentProfiles());
        this.setState(() =>{
            return {
                profiles: jsonResult.students
            };
        });
    }

    render () {
        const profileListRender = this.state.profiles.map((profile)=>{
            try{
                if(this.isFiltered(profile, this.props.filter)){
                    return null;
                }else {
                    return (
                        <div key={profile.id}>
                            <ProfileEntry entry={profile} filterTag={this.props.filterTag}/>
                        </div>
                    );
                }
            }catch(e){
                console.warn(e.message);
            }

            return null;
        });

        return (
            <div>
                {profileListRender}
            </div>
            
        );
    }
}
    