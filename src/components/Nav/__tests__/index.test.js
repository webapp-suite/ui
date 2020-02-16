import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Nav, SubNav, NavItemGroup, NavItem } from '..'

describe('<Nav>', () => {
  const navClassName = 'true-nav'

  describe('basic features', () => {
    it('should render successfully when there are only NavItems in Nav', () => {
      const { container } = render(
        <Nav selectedId="1">
          <NavItem id="1" />
          <NavItem id="2" />
        </Nav>
      )
      expect(container).toMatchSnapshot()
    })
    it('should render successfully when there are SubNavs in Nav', () => {
      const { container } = render(
        <Nav selectedId="1">
          <SubNav>
            <NavItem id="2" />
            <NavItem id="3" />
          </SubNav>
        </Nav>
      )
      expect(container).toMatchSnapshot()
    })
    it('should render successfully when there are NavItemGroup in SubNav', () => {
      const { container } = render(
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
      expect({ container }).toMatchSnapshot()
    })
    it('should keep Nav collapsed when there is no collapsed prop on Nav', () => {
      const { getByTestId } = render(
        <Nav selectedId="1" data-testid="nav">
          <NavItem id="1" />
        </Nav>
      )
      expect(getByTestId('nav')).toHaveClass(`${navClassName}--collapsed`)
    })
    it('should keep Nav open when set collapsed prop to be false on Nav', () => {
      const { getByTestId } = render(
        <Nav selectedId="1" collapsed={false} data-testid="nav">
          <NavItem id="1" />
        </Nav>
      )
      expect(getByTestId('nav')).not.toHaveClass(`${navClassName}--collapsed`)
    })
    it('should activate NavItem of which id equals to selectedId on Nav', () => {
      const { getByTestId } = render(
        <Nav selectedId="1">
          <NavItem id="1" data-testid="nav-item1" />
          <NavItem id="2" />
        </Nav>
      )
      expect(getByTestId('nav-item1')).toHaveClass(
        `${navClassName}__item--active`
      )
    })
    it('should render custom width correctly when set Nav to a specific value', () => {
      const { getByTestId: getByTestId1 } = render(
        <Nav selectedId="1" width={200} collapsed={false} data-testid="nav1">
          <NavItem id="1" />
        </Nav>
      )
      const { getByTestId: getByTestId2 } = render(
        <Nav selectedId="1" width={200} collapsed data-testid="nav2">
          <NavItem id="1" />
        </Nav>
      )
      expect(getByTestId1('nav1')?.style?.width).toBe('200px')
      expect(getByTestId2('nav2')?.style?.width).toBeUndefined
    })
    // TODO test computed style
    it.skip('should render hovered NavItem or SubNav correctly', () => {})
  })

  describe('open and close Nav/SubNav', () => {
    it('should open collapsed Nav correctly when click menu icon on the top', () => {
      const { container, getByTestId } = render(
        <Nav selectedId="1" data-testid="nav">
          <NavItem id="1" />
        </Nav>
      )
      expect(getByTestId('nav')).toHaveClass(`${navClassName}--collapsed`)
      fireEvent.click(
        container.querySelector(`.${navClassName}__top-left-container`)
      )
      expect(getByTestId('nav')).not.toHaveClass(`${navClassName}--collapsed`)
    })
    it('should close expanded Nav correctly when click close button on the right top', () => {
      const { container, getByTestId } = render(
        <Nav selectedId="1" data-testid="nav" collapsed={false}>
          <NavItem id="1" />
        </Nav>
      )
      expect(getByTestId('nav')).not.toHaveClass(`${navClassName}--collapsed`)
      fireEvent.click(
        container.querySelector(
          `.${navClassName}__top-right-container-close-icon`
        )
      )
      expect(getByTestId('nav')).toHaveClass(`${navClassName}--collapsed`)
    })
    // TODO test computed style
    it.skip('should switch the menu icon and logo image correctly', () => {})
    it('should open collapsed Nav and related SubNav correctly when click collapsed SubNav icon', () => {
      const { getByTestId } = render(
        <Nav selectedId="1" data-testid="nav">
          <SubNav data-testid="subnav1">
            <NavItem id="1" />
            <NavItem id="2" />
          </SubNav>
          <SubNav data-testid="subnav2">
            <NavItem id="3" />
            <NavItem id="4" />
          </SubNav>
        </Nav>
      )
      const nav = getByTestId('nav')
      const subnav1 = getByTestId('subnav1')
      const subnav2 = getByTestId('subnav2')
      const collapsedNavClassName = `${navClassName}--collapsed`
      const openSubNavClassName = `${navClassName}__sub-nav--open`

      expect(nav).toHaveClass(collapsedNavClassName)
      expect(subnav1).not.toHaveClass(openSubNavClassName)
      expect(subnav2).not.toHaveClass(openSubNavClassName)
      fireEvent.click(subnav2.firstChild)
      expect(nav).not.toHaveClass(collapsedNavClassName)
      expect(subnav1).not.toHaveClass(openSubNavClassName)
      expect(subnav2).toHaveClass(openSubNavClassName)
    })
    it('should open SubNav correctly when click expanded SubNav title', () => {
      const { getByTestId } = render(
        <Nav selectedId="1" collapsed={false}>
          <SubNav data-testid="subnav">
            <NavItem id="2" />
            <NavItem id="3" />
          </SubNav>
        </Nav>
      )
      const subnav = getByTestId('subnav')
      const openClassName = `${navClassName}__sub-nav--open`

      expect(subnav).not.toHaveClass(openClassName)
      fireEvent.click(subnav.firstChild)
      expect(subnav).toHaveClass(openClassName)
      fireEvent.click(subnav.firstChild)
      expect(subnav).not.toHaveClass(openClassName)
    })
    // TODO test computed style of triangle icons
    it.skip('should toggle triangle icons correctly when click SubNav title', () => {})
  })

  describe('callback event function', () => {
    const handleClick = jest.fn()

    it('should each NavItem event function successfully when click NavItem', () => {
      const { getByTestId } = render(
        <Nav selectedId="1" onItemClick={handleClick}>
          <NavItem id="1" data-testid="navitem" />
        </Nav>
      )
      fireEvent.click(getByTestId('navitem'))
      expect(handleClick).toBeCalled()
    })
    it('should call specific NavItem event function successfully when click NavItem', () => {
      const handleSpecificItemClick = jest.fn()
      const { getByTestId } = render(
        <Nav selectedId="1" onItemClick={handleClick}>
          <NavItem
            id="1"
            onClick={handleSpecificItemClick}
            data-testid="navitem"
          />
        </Nav>
      )
      fireEvent.click(getByTestId('navitem'))
      expect(handleSpecificItemClick).toBeCalled()
      expect(handleClick).toBeCalled()
    })
    it('should call event function successfully when click setting button on the bottom', () => {
      const { container } = render(
        <Nav selectedId="1" collapsed={false} onSettingClick={handleClick}>
          <NavItem id="1" />
        </Nav>
      )
      fireEvent.click(
        container.querySelector(`.${navClassName}__bottom-settings-icon`)
      )
      expect(handleClick).toBeCalled()
    })
    it('should call event function successfully when click logout button on the bottom', () => {
      const { container } = render(
        <Nav selectedId="1" collapsed={false} onLogoutClick={handleClick}>
          <NavItem id="1" />
        </Nav>
      )
      fireEvent.click(
        container.querySelector(`.${navClassName}__bottom-logout-icon`)
      )
      expect(handleClick).toBeCalled()
    })
    it('should call event function successfully when click SubNav', () => {
      const { getByTestId } = render(
        <Nav selectedId="1" collapsed={false}>
          <SubNav data-testid="subnav" onClick={handleClick}>
            <NavItem id="2" />
            <NavItem id="3" />
          </SubNav>
        </Nav>
      )
      fireEvent.click(getByTestId('subnav'))
      expect(handleClick).toBeCalled()
    })
  })

  describe('icon on SubNav/NavItem', () => {
    it('should render icon correctly when set SubNav icon to svg url', () => {
      const { getByTestId } = render(
        <Nav selectedId="1">
          <SubNav data-testid="subnav" icon="/svg/test.svg">
            <NavItem id="2" />
            <NavItem id="3" />
          </SubNav>
        </Nav>
      )
      expect(getByTestId('subnav').querySelector('svg')).not.toBeEmpty()
    })
    it('should render icon correctly when set SubNav icon to Icon id', () => {
      const { getByTestId } = render(
        <Nav selectedId="1">
          <SubNav data-testid="subnav" icon="apps">
            <NavItem id="2" />
            <NavItem id="3" />
          </SubNav>
        </Nav>
      )
      expect(
        getByTestId('subnav').querySelector('.true-icon__apps')
          ?.childElementCount
      ).toBe(0)
    })
    it('should render icon correctly when set NavItem icon to svg url', () => {
      const { getByTestId } = render(
        <Nav selectedId="1">
          <NavItem id="2" data-testid="navitem" icon="/svg/test.svg" />
        </Nav>
      )
      expect(getByTestId('navitem').querySelector('svg')).not.toBeEmpty()
    })
    it('should render icon correctly when set NavItem icon to Icon id', () => {
      const { getByTestId } = render(
        <Nav selectedId="1">
          <NavItem id="2" data-testid="navitem" icon="apps" />
        </Nav>
      )
      expect(
        getByTestId('navitem').querySelector('.true-icon__apps')
          ?.childElementCount
      ).toBe(0)
    })
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
      render(
        <Nav>
          <NavItem id="1" />
        </Nav>
      )
      expect(errorSpy.mock.calls.length).toBe(1)
    })
    it('should throw error when there is no id prop on NavItem', () => {
      render(
        <Nav selectedId="1">
          <NavItem />
        </Nav>
      )
      expect(errorSpy.mock.calls.length).toBe(1)
    })
    it('should not throw error when some props of user are missing in Nav', () => {
      render(
        <Nav selectedId="1" user={{}}>
          <NavItem id="1" />
        </Nav>
      )
      expect(errorSpy.mock.calls.length).toBe(0)
    })
    it('should not throw error when there is no children in Nav', () => {
      render(<Nav selectedId="1" />)
      expect(errorSpy.mock.calls.length).toBe(0)
    })
    it('should not throw error when there is no children in SubNav', () => {
      render(
        <Nav selectedId="1">
          <SubNav />
        </Nav>
      )
      expect(errorSpy.mock.calls.length).toBe(0)
    })
    it('should not throw error when there is no children in NavItemGroup', () => {
      render(
        <Nav selectedId="1">
          <SubNav>
            <NavItemGroup />
          </SubNav>
        </Nav>
      )
      expect(errorSpy.mock.calls.length).toBe(0)
    })
  })
})
