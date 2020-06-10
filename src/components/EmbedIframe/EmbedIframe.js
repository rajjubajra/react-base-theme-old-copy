import React, { useState } from 'react'
import Iframe from './Iframe'

export default function EmbedIframe() {

  const iframeCode = 'https://player.vimeo.com/video/426518312';

  return (
    <div>
      <Iframe iframe_uri={iframeCode} />
    </div>
  )
}
