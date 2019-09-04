import React from 'react'
import SavedGrid from './SavedGrid.js'
import ShrinkRightButton from './ShrinkRightButton.js'


class RightsideContent extends React.Component {
  
  
  render() {
    return (
      <div id="RightsideContentBox">
        
        <div className="hidden">test</div>
        <ShrinkRightButton />
        <SavedGrid />
        
      </div> 
    )
  }
  
}

export default RightsideContent


