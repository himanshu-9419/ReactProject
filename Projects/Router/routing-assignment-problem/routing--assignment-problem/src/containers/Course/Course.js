import React, { Component } from 'react';

class Course extends Component {
    render () {
        let id=this.props.match.params.id;
        let queryParam=new URLSearchParams(this.props.location.search);
        let title;
        for(let a of queryParam.entries()){
            if(a[0]=="coursename") title=a[1];
        }
        return (
            <div>
                <h1>{title}</h1>
                <p>You selected the Course with ID:{id}</p>
            </div>
        );
    }
}

export default Course;