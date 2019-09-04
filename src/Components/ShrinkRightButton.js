import React from 'react'

class ShrinkRightButton extends React.Component {
  
  shrinkRightside() {
    document.getElementById("RightsideContentBox").style.width = "0px"
    document.getElementById("CollapsibleContainerBox").style.width = "30px"
  }
  
  
  render() {
    return (
      <div id="ShrinkRightButtonDiv">
        <button 
          id="ShrinkRightButton"
          className="expandButtons"
          onClick={() => this.shrinkRightside()}> 
          &gt; </button>
        
      </div> 
    )
  }
  
}

export default ShrinkRightButton


