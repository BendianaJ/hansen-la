import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WorkContent from './Work/WorkContent';
import AboutContent from './About/AboutContent';
import ContactContent from './Contact/ContactContent';
import HomeContent from './Home/HomeContent';
import Nav from './Nav';
import './App.css';

class App extends React.Component 
{
  state={inContent: false, inHome: true, inWork: false, isPageTransition: false}

  pageClick = () => {
    this.setState({inContent:true, inHome:false}) 
    console.log(this.state.inContent) 
}

  menuClick= () => {
    this.setState({inContent: false, inHome:false, inWork:false, isPageTransition: true})
    
    setTimeout(()=>this.setState({inContent: false, inHome: false, inWork:false, isPageTransition: false}),2000)
  }

  workClick= () => this.setState({inContent: true, inHome: false, inWork: true, isPageTransition: false})

  homeClick = () => {
    this.setState({inContent: false, inHome:true})
  }
  render()
  {
    return (
      <div className="App">
        <Router>
        <Nav isPageTransition={this.state.isPageTransition} pageClick={this.pageClick} homeClick={this.homeClick} inWork={this.state.inWork} workClick={this.workClick} inContent={this.state.inContent}/>
        <div onClick={this.menuClick} className={this.state.inContent ? 'menu-button' : 'noClass'}></div>
        <div className={this.state.inHome ? 'content' :
          this.state.inContent && !this.state.inHome ? 'c-selected' : 'content'  
        }>
          <div className={this.state.inHome ? 'f-opac' :
          this.state.inContent && !this.state.inHome ? 'f-opac' : 'h-opac'  
        }>
          <Switch>
            <Route path="/Work/Public" component={WorkContent}/>
            <Route path="/About" component={AboutContent}/>
            <Route path="/Contact" component={ContactContent}/>
            <Route path="/" component={HomeContent}/>
          </Switch>
          </div>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
