import React from 'react'
import { withSiteData } from 'react-static'

import { css } from '@emotion/core'

export default withSiteData(() => (
  <div style={{ textAlign: 'center' }}>
    <h1 css={css`
    color: blue;
    `}>Welcome to React-Static</h1>
  </div>
))
