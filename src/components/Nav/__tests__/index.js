import React from 'react'
import { findDOMNode } from 'react-dom'
import TestUtils from 'react-dom/test-utils'
import { Nav, NavItem } from '../index'

// Object.defineProperty(window.location, 'href', {
//   writable: true,
//   value: '/'
// })

describe('Nav', () => {
  it('should defaultOpen works', () => {
    jsdom.reconfigure({
      href: '/'
    })
    const instance = TestUtils.renderIntoDocument(
      <Nav selectedId="1">
        <NavItem id="2" defaultOpen>
          <NavItem id="3" />
          <NavItem id="4" />
        </NavItem>
      </Nav>
    )
    expect(findDOMNode(instance).querySelector('li').className).toContain('open')
  })
})
