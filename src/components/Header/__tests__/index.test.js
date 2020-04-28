import React from 'react'
import { render, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import Header from '../index'

describe('Header', () => {
  it('should render title correctly', () => {
    const wrapper = render(<Header title="Header" />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render icon correctly', () => {
    const wrapper = render(
      <Header icon="https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/blue-bg-webapps-ui-icon.png" />
    )
    expect(wrapper).toMatchSnapshot()
  })
  it('should render children correctly', () => {
    const wrapper = render(<Header>Test</Header>)
    expect(wrapper).toMatchSnapshot()
  })
  it('should mount correctly', () => {
    expect(() => renderer.create(<Header title="Header" />)).not.toThrow()
  })
  it('should render className correctly', () => {
    const wrapper = mount(<Header className="test" />)
    expect(wrapper.find('header').hasClass('test')).toBe(true)
  })
  it('should render style correctly', () => {
    const wrapper = render(<Header style={{ color: 'red' }} />)
    expect(wrapper.prop('style').color).toBe('red')
  })
  it('should render color correctly', () => {
    const wrapper = mount(<Header color="blue" />)
    expect(wrapper.find('header').hasClass('true-header--blue')).toBe(true)
  })
  it('should render Chinese characters correctly', () => {
    const wrapper = render(<Header title="测试" />)
    expect(wrapper).toMatchSnapshot()
  })
})
