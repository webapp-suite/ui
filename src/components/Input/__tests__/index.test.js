import React from 'react'
import { mount } from 'enzyme'
import Input from '..'
import focusTest from '../../../tests/shared/focusTest'
import mountTest from '../../../tests/shared/mountTest'

describe('Input', () => {
  const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

  afterEach(() => {
    errorSpy.mockReset()
  })

  afterAll(() => {
    errorSpy.mockRestore()
  })

  focusTest(Input, 'input')
  mountTest(Input)

  it('should support width', () => {
    const wrapper = mount(<Input width={456} />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('Input clearable', () => {
  it('should change type when click', () => {
    const wrapper = mount(<Input clearable />)
    wrapper.find('input').simulate('change', { target: { value: '111' } })
    expect(wrapper.find('input').getDOMNode().value).toEqual('111')
    expect(wrapper).toMatchSnapshot()
    wrapper
      .find('.true-icon')
      .at(0)
      .simulate('click')
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('input').getDOMNode().value).toEqual('')
  })

  it('should not show icon if value is undefined, null or empty string', () => {
    const wrappers = [null, undefined, ''].map(val =>
      mount(<Input clearable value={val} />)
    )
    wrappers.forEach(wrapper => {
      expect(wrapper.find('input').getDOMNode().value).toEqual('')
      expect(wrapper.find('.true-icon').exists()).toEqual(false)
      expect(wrapper).toMatchSnapshot()
    })
  })

  it('should not show icon if defaultValue is undefined, null or empty string', () => {
    const wrappers = [null, undefined, ''].map(val =>
      mount(<Input clearable defaultValue={val} />)
    )
    wrappers.forEach(wrapper => {
      expect(wrapper.find('input').getDOMNode().value).toEqual('')
      expect(wrapper.find('.true-icon').exists()).toEqual(false)
      expect(wrapper).toMatchSnapshot()
    })
  })

  it('should trigger event correctly on uncontrolled mode', () => {
    let argumentEventObject
    let argumentEventObjectValue
    const onChange = e => {
      argumentEventObject = e
      argumentEventObjectValue = e.target.value
    }
    const wrapper = mount(
      <Input clearable defaultValue="111" onChange={onChange} />
    )
    wrapper
      .find('.true-icon')
      .at(0)
      .simulate('click')
    expect(argumentEventObject.type).toBe('click')
    expect(argumentEventObjectValue).toBe('')
    expect(
      wrapper
        .find('input')
        .at(0)
        .getDOMNode().value
    ).toBe('')
  })

  it('should trigger event correctly on controlled mode', () => {
    let argumentEventObject
    let argumentEventObjectValue
    const onChange = e => {
      argumentEventObject = e
      argumentEventObjectValue = e.target.value
    }
    const wrapper = mount(<Input clearable value="111" onChange={onChange} />)
    wrapper
      .find('.true-icon')
      .at(0)
      .simulate('click')
    expect(argumentEventObject.type).toBe('click')
    expect(argumentEventObjectValue).toBe('')
    expect(
      wrapper
        .find('input')
        .at(0)
        .getDOMNode().value
    ).toBe('111')
  })

  it('should focus input after clear', () => {
    const wrapper = mount(<Input clearable defaultValue="111" />)
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
    const wrapper = mount(<Input clearable defaultValue="111" disabled />)
    expect(wrapper.find('.true-icon').length).toBe(0)
  })
})
