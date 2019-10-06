import React from 'react'
import { mount } from 'enzyme'
import Input from '..'
import focusTest from '../../../tests/shared/focusTest'
import mountTest from '../../../tests/shared/mountTest'

describe('Input basic usage', () => {
  const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

  afterEach(() => {
    errorSpy.mockReset()
  })

  afterAll(() => {
    errorSpy.mockRestore()
  })

  focusTest(Input)
  mountTest(Input)

  it('should set width to 100% as default', () => {
    const wrapper = mount(<Input value="123" />)
    expect(wrapper.find('input').prop('style').width).toBe('100%')
    expect(wrapper).toMatchSnapshot()
  })

  it('should support specific px width', () => {
    const wrapper = mount(<Input width={456} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should set empty string if value is undefined, null', () => {
    const wrappers = [null, undefined].map(val => mount(<Input value={val} />))
    wrappers.forEach(wrapper => {
      expect(wrapper.find('input').getDOMNode().value).toEqual('')
      expect(wrapper).toMatchSnapshot()
    })
  })

  it('should change value when input other value', () => {
    const state = { value: '111' }
    const handleChange = e => {
      wrapper.setProps({ value: e.target.value })
    }
    const wrapper = mount(<Input value={state.value} onChange={handleChange} />)
    wrapper.find('input').simulate('change', { target: { value: '222' } })
    expect(wrapper.find('input').getDOMNode().value).toEqual('222')
    expect(wrapper).toMatchSnapshot()
  })
})

// todo
// describe('Input Readonly / Disabled', () => {})
// describe('Input Icon', () => {})
// describe('Input Size', () => {})

describe('Input clearable', () => {
  const state = { value: '111' }
  const handleClear = e => {}

  it('should show icon when onClear prop exists', () => {
    const handleClear = e => {
      wrapper.setProps({ value: '' })
    }
    const wrapper = mount(<Input value={state.value} onClear={handleClear} />)
    expect(wrapper.find('input').getDOMNode().value).toEqual('111')
    expect(wrapper.find('.true-icon').exists()).toEqual(true)
    expect(wrapper).toMatchSnapshot()
  })

  it('should not show icon if value is undefined, null or empty string', () => {
    const wrappers = [null, undefined, ''].map(val =>
      mount(<Input value={val} onClear={handleClear} />)
    )
    wrappers.forEach(wrapper => {
      expect(wrapper.find('input').getDOMNode().value).toEqual('')
      expect(wrapper.find('.true-icon').exists()).toEqual(false)
      expect(wrapper).toMatchSnapshot()
    })
  })

  it('should clear value correctly when click clear icon', () => {
    let argumentEventObject
    const handleClear = e => {
      argumentEventObject = e
      wrapper.setProps({ value: '' })
    }
    const wrapper = mount(<Input value={state.value} onClear={handleClear} />)
    wrapper
      .find('.true-icon')
      .at(0)
      .simulate('click')
    expect(argumentEventObject.type).toBe('click')
    expect(wrapper.find('input').getDOMNode().value).toEqual('')
    expect(wrapper).toMatchSnapshot()
  })

  it('should focus input after clear', () => {
    const wrapper = mount(<Input value={state.value} onClear={handleClear} />)
    wrapper
      .find('.true-icon')
      .at(0)
      .simulate('click')
    expect(document.activeElement).toBe(
      wrapper
        .find('input')
        .at(0)
        .getDOMNode()
    )
  })

  it('should not support clearable when it is disabled', () => {
    const wrapper = mount(
      <Input value={state.value} onClear={handleClear} disabled />
    )
    expect(wrapper.find('.true-icon').length).toBe(0)
  })
})