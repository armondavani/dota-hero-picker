import React from 'react'
import FilterSelector from './FilterSelector.js'

class Left extends React.Component {
  
  testFunction() {
    document.getElementById("LeftBox").style.backgroundColor = "lightblue"
  } 
  
  
  render() {
    return (
      <div id="LeftBox">
      
      <FilterSelector />
      <button onClick={() => this.testFunction()}></button>
      
      </div> 
    )
  }
  
  
}

export default Left


