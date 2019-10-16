import React from 'react'
import { render, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import Button from '../index'
import Icon from '../../Icon'

describe('Button', () => {
  it('should render correctly', () => {
    const wrapper = render(<Button>OK</Button>)
    expect(wrapper).toMatchSnapshot()
  })
  it('should mount correctly', () => {
    expect(() => renderer.create(<Button>OK</Button>)).not.toThrow()
  })
  it('should render className correctly', () => {
    const wrapper = mount(<Button className="test">OK</Button>)
    expect(wrapper.find('button').hasClass('test')).toBe(true)
  })
  it('should render style correctly', () => {
    const wrapper = render(<Button style={{ color: 'red' }}>OK</Button>)
    expect(wrapper.prop('style').color).toBe('red')
  })
  it('should render Chinese characters correctly', () => {
    const wrapper = render(<Button>添加</Button>)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render icon correctly', () => {
    const wrapper1 = render(<Button icon="add">添加</Button>)
    expect(wrapper1).toMatchSnapshot()
    const wrapper2 = render(
      <Button>
        <Icon type="add" />
        添加
      </Button>
    )
    expect(wrapper2).toMatchSnapshot()
  })
  it('should trigger event function correctly', () => {
    const handleClick = jest.fn()
    const wrapper = mount(<Button onClick={handleClick}>OK</Button>)
    wrapper.simulate('click')
    expect(handleClick).toBeCalled()
    expect(handleClick.mock.calls.length).toBe(1)
  })
  it('should render disabled button correctly', () => {
    const wrapper = render(<Button disabled>OK</Button>)
    expect(wrapper.prop('disabled')).toBe(true)
  })
  it('should render loading button correctly', () => {
    const wrapper = mount(
      <Button type="primary" loading>
        Show Loading
      </Button>
    )
    expect(wrapper.find('button').hasClass('true-button--loading')).toBe(true)
  })
  it('should not trigger event function when button is loading', () => {
    const handleClick = jest.fn()
    const wrapper = mount(
      <Button onClick={handleClick} loading>
        OK
      </Button>
    )
    wrapper.simulate('click')
    expect(handleClick).not.toBeCalled()
  })
})
