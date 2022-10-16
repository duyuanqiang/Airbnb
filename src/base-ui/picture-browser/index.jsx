import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { BrowserWrapper } from './style'

const PictureBrowser = memo((props) => {
  return (
    <BrowserWrapper>
      <div className="content">
        
      </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  picturesData: PropTypes.array
}

export default PictureBrowser