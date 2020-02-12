import PropTypes from 'prop-types'
import React from 'react'

export function MenuIcon ({ className }) {
  return (
    <svg width="22" height="22" className={className}>
      <g fill="#FFF" fillRule="evenodd">
        <path d="M0 1.01A1 1 0 0 1 1.002 0h19.996A1 1 0 0 1 22 1.01v1.98A1 1 0 0 1 20.998 4H1.002A1 1 0 0 1 0 2.99V1.01z" />
        <rect y="9" width="22" height="4" rx="1" />
        <rect y="18" width="22" height="4" rx="1" />
      </g>
    </svg>
  )
}

MenuIcon.propTypes = {
  className: PropTypes.string
}
