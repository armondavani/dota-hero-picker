import React from 'react'

class OpenLeftButton extends React.Component {
  
  openSidebarContainer() {
    document.getElementById("RightsideContentBox").style.width = "150px"
    document.getElementById("CollapsibleContainerBox").style.width = "0px"
  } 
  
  render() {
    return (
      <div id="OpenLeftButtonDiv">
        <button 
          id="OpenLeftButton" 
          className="expandButtons"
          onClick={() => this.openSidebarContainer()}> 
          &lt;
        </button>
      
      
      </div> 
    )
  }
  
}

export default OpenLeftButton


