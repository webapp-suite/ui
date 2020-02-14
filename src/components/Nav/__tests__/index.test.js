import React from 'react'
import { render } from 'enzyme'
import { Nav, SubNav, NavItemGroup, NavItem } from '..'

describe('<Nav>', () => {
  const navClassName = 'true-nav'
  it('should render successfully when there are only NavItems in Nav', () => {
    const wrapper = (
      <Nav selectedId="1">
        <NavItem id="1" />
        <NavItem id="2" />
      </Nav>
    )
    expect(render(wrapper)).toMatchSnapshot()
  })
  it('should render successfully when there are SubNavs in Nav', () => {
    const wrapper = (
      <Nav selectedId="1">
        <SubNav>
          <NavItem id="2" />
          <NavItem id="3" />
        </SubNav>
      </Nav>
    )
    expect(render(wrapper)).toMatchSnapshot()
  })
  it('should render successfully when there are NavItemGroup in SubNav', () => {
    const wrapper = (
      <Nav selectedId="1">
        <NavItem id="1" />
        <NavItem id="2" />
        <SubNav>
          <NavItem id="3" />
          <NavItem id="4" />
        </SubNav>
        <SubNav>
          <NavItemGroup>
            <NavItem id="4" />
            <NavItem id="5" />
          </NavItemGroup>
        </SubNav>
      </Nav>
    )
    expect(render(wrapper)).toMatchSnapshot()
  })
  it('should keep Nav collapsed when there is no collapsed prop on Nav', () => {
    const wrapper = (
      <Nav selectedId="1">
        <NavItem id="1" />
      </Nav>
    )
    expect(render(wrapper).find(`.${navClassName}--collapsed`)).toBeTruthy()
  })
  it('should keep Nav open when set collapsed prop to be false on Nav', () => {
    const wrapper = (
      <Nav selectedId="1" collapsed>
        <NavItem id="1" />
      </Nav>
    )
    expect(
      render(wrapper)
        .find(`.${navClassName}`)
        .hasClass(`.${navClassName}--collapsed`)
    ).toBeFalsy()
  })
})
