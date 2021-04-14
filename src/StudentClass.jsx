import React, {Component} from "react";

export default class StudentClass extends Component
{
  
    render(){
        console.log(this.props.match.params.name);
        return(
            <>
            <h2>id {this.props.match.params.id}</h2>
            <h2>Name {this.props.match.params.name}</h2>
            <h2>age {this.props.match.params.age}</h2>
            </>
        )
    }
}