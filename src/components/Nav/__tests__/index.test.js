import React from 'react'
import { shallow, render, mount } from 'enzyme'
import { Nav, SubNav, NavItemGroup, NavItem } from '..'

describe('<Nav>', () => {
  const navClassName = 'true-nav'

  describe('basic features', () => {
    it('should render successfully when there are only NavItems in Nav', () => {
      const wrapper = render(
        <Nav selectedId="1">
          <NavItem id="1" />
          <NavItem id="2" />
        </Nav>
      )
      expect(wrapper).toMatchSnapshot()
    })
    it('should render successfully when there are SubNavs in Nav', () => {
      const wrapper = render(
        <Nav selectedId="1">
          <SubNav>
            <NavItem id="2" />
            <NavItem id="3" />
          </SubNav>
        </Nav>
      )
      expect(wrapper).toMatchSnapshot()
    })
    it('should render successfully when there are NavItemGroup in SubNav', () => {
      const wrapper = render(
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
      expect(wrapper).toMatchSnapshot()
    })
    it('should keep Nav collapsed when there is no collapsed prop on Nav', () => {
      const wrapper = render(
        <Nav selectedId="1">
          <NavItem id="1" />
        </Nav>
      )
      expect(wrapper.find(`.${navClassName}--collapsed`)).toBeTruthy()
    })
    it('should keep Nav open when set collapsed prop to be false on Nav', () => {
      const wrapper = render(
        <Nav selectedId="1" collapsed={false}>
          <NavItem id="1" />
        </Nav>
      )
      expect(
        wrapper.find(`.${navClassName}`).hasClass(`${navClassName}--collapsed`)
      ).toBeFalsy()
    })
    it('should activate NavItem of which id equals to selectedId on Nav', () => {
      const wrapper = render(
        <Nav selectedId="1">
          <NavItem id="1" />
          <NavItem id="2" />
        </Nav>
      )
      expect(
        wrapper.find('[id="1"]').hasClass(`${navClassName}__item--active`)
      ).toBeTruthy()
    })
    it('should render custom width correctly when set Nav to a specific value', () => {
      const wrapper1 = mount(
        <Nav selectedId="1" width={200} collapsed={false}>
          <NavItem id="1" />
        </Nav>
      )
      const wrapper2 = mount(
        <Nav selectedId="1" width={200} collapsed>
          <NavItem id="1" />
        </Nav>
      )
      expect(wrapper1.find(`.${navClassName}`).prop('style').width).toEqual(200)
      expect(wrapper2.find(`.${navClassName}`).prop('style')?.width)
        .toBeUndefined
    })
    // TODO complete this test after migrated to testing-library
    it('should render hovered NavItem or SubNav correctly', () => {})
  })

  describe('open and close Nav/SubNav', () => {
    it('should open collapsed Nav correctly when click menu icon on the top', () => {})
    it('should open collapsed Nav and related SubNav correctly when click SubNav icon', () => {
      // and close other subnav
    })
    it('should open SubNav correctly when click SubNav title', () => {
      // Includes conversion of triangle icons
      // children can expand
    })
    it('should close expanded Nav correctly when click close button on the right top', () => {})
    it('should switch the menu icon and logo image correctly', () => {})
  })

  describe('callback event function', () => {
    it('should call event function successfully when click NavItem', () => {})
    it('should call event function successfully when click setting button on the bottom', () => {})
    it('should call event function successfully when click logout button on the bottom', () => {})
    it('should call event function successfully when click SubNav', () => {})
  })

  describe('icon on SubNav/NavItem', () => {
    it('should render icon correctly when set SubNav icon to svg url', () => {})
    it('should render icon correctly when set SubNav icon to Icon id', () => {})
    it('should render icon correctly when set NavItem icon to svg url', () => {})
    it('should render icon correctly when set NavItem icon to Icon id', () => {})
  })

  describe('corner cases which may throw error', () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
    afterEach(() => {
      errorSpy.mockReset()
    })
    afterAll(() => {
      errorSpy.mockRestore()
    })
    it('should throw error when there is no selectedId prop on Nav', () => {
      const wrapper = (
        <Nav collapsed>
          <NavItem id="1" />
        </Nav>
      )
      shallow(wrapper)
      expect(errorSpy.mock.calls.length).toBe(1)
    })
    it('should throw error when there is no id prop on NavItem', () => {
      const wrapper = (
        <Nav selectedId="1" collapsed>
          <NavItem />
        </Nav>
      )
      shallow(wrapper)
      expect(errorSpy.mock.calls.length).toBe(1)
    })
    it('should not throw error when some props of user are missing in Nav', () => {})
    it('should not throw error when there is no children in Nav', () => {})
    it('should not throw error when there is no children in SubNav', () => {})
    it('should not throw error when there is no children in NavItemGroup', () => {})
  })
})
