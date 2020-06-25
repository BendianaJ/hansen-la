import React from 'react';
import Project from './Project';
import '../App.css';

class ProjectContainer extends React.Component {

    state = {activeIndex:null, anyActive:false, transition:false}

    closeBox = (index) => {
        
        this.setState({activeIndex:index, anyActive:true, transition:true})
        // const transition = () =>{
        //    this.setState({activeIndex:null, anyActive:false, transition:false})
        // }
        setTimeout(()=>{
            this.setState({activeIndex:null, anyActive:false, transition:false})
        },1000)
    }

    handleClick = index => {
        let currentState = this.state.anyActive
        !currentState ? (this.setState({activeIndex:index, anyActive:true, transition:false})) : 
        (console.log('click off'))
    }

    
    render () {
        const projects = this.props.projects
        return (
            
            projects.map((proj, i)=>{
                return (
                    <Project
                        key={proj.name}
                        name={proj.name}
                        index={i}
                        isActive={this.state.activeIndex === i}
                        anyActive={this.state.anyActive}
                        isTransition={this.state.transition}
                        handleClick={this.handleClick}
                        closeBox={this.closeBox}
                        settings={this.state}
                        projectPhotos={proj.projectPhotos}
                    />
                )
            })
            
        )
    }
}

export default ProjectContainer;