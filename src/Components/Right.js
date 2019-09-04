import React from 'react'
import SavedGrid from './SavedGrid.js'
import OpenLeftButton from './OpenLeftButton.js'
import ShrinkRightButton from './ShrinkRightButton.js'
import CollapsibleContainer from './CollapsibleContainer.js'
import RightsideContent from './RightsideContent.js'

class Right extends React.Component {
  
  
  
  render() {
    return (
      <div id="RightBox">
      
      
      <CollapsibleContainer />
      <RightsideContent />
      
      
      </div> 
    )
  }
  
}

export default Right


