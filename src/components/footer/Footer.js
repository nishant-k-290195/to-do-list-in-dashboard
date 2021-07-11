
import React from 'react'
import footerStyles from './Footer.module.css'

const year = new Date().getFullYear()

const footer = () => {
  return (
    <div className={footerStyles.footer_container}>
      <p>Copyright © {year}</p>
    </div>
  )
}

export default footer
