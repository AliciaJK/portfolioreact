import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PortfolioContainer from "./components/PortfolioContainer";
// import ProjectCard from './components/pages/ProjectCard';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PortfolioContainer/>
        {/* <ProjectCard/> */}
        <Footer />
        
      </div>
    );
  }
}
 
export default App;