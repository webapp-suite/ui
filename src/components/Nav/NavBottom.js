import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import Button from '../Button'

export default function NavBottom ({ user, onSettingClick, onLogoutClick }) {
  return (
    <div className={`${prefixCls}-nav__bottom`}>
      <div className={`${prefixCls}-nav__bottom-image`}>
        <img
          className={`${prefixCls}-nav__bottom-image-icon`}
          src={user.avatar}
          alt="Avatar"
        />
      </div>
      <div className={`${prefixCls}-nav__bottom-user`}>
        <span className={`${prefixCls}-nav__bottom-user-name`}>
          {user.name}
        </span>
        <span className={`${prefixCls}-nav__bottom-user-company`}>
          {user.company}
        </span>
      </div>
      <div className={`${prefixCls}-nav__bottom-logout`}>
        <Button
          icon="logout"
          onClick={e => onLogoutClick(e)}
          className={cx(
            `${prefixCls}-nav__btn-icon`,
            `${prefixCls}-nav__bottom-logout-icon`
          )}
        />
      </div>
      <div className={`${prefixCls}-nav__bottom-settings`}>
        <Button
          icon="settings"
          onClick={e => onSettingClick(e)}
          className={cx(
            `${prefixCls}-nav__btn-icon`,
            `${prefixCls}-nav__bottom-settings-icon`
          )}
        />
      </div>
    </div>
  )
}

NavBottom.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    company: PropTypes.string
  }),

  onSettingClick: PropTypes.func,
  onLogoutClick: PropTypes.func
}
