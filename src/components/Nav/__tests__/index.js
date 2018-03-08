import React from 'react'
import { findDOMNode } from 'react-dom'
import TestUtils from 'react-dom/test-utils'
import { Nav, IndexNavItem } from '../index'

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
      <Nav href="/">
        <IndexNavItem defaultOpen>
          <IndexNavItem href="test" />
        </IndexNavItem>
      </Nav>
    )
    expect(findDOMNode(instance).querySelector('li').className).toContain('open')
  })
})
