import React from 'react'
import { render } from 'enzyme'
import { findDOMNode } from 'react-dom'
import TestUtils from 'react-dom/test-utils'
import { Nav, SubNav, NavItemGroup, NavItem } from '../index'

// Object.defineProperty(window.location, 'href', {
//   writable: true,
//   value: '/'
// })

describe('Nav', () => {
  const wrapper = (
    <Nav selectedId="1">
      <SubNav id="2" defaultOpen>
        <NavItemGroup>
          <NavItem id="3" />
          <NavItem id="4" />
        </NavItemGroup>
      </SubNav>
    </Nav>
  )
  it('should defaultOpen works', () => {
    jsdom.reconfigure({
      href: '/'
    })
    const instance = TestUtils.renderIntoDocument(wrapper)
    expect(findDOMNode(instance).querySelector('li').className).toContain(
      'open'
    )
  })
  it('should render correctly', () => {
    expect(render(wrapper)).toMatchSnapshot()
  })
})
