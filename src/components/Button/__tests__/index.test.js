import React from 'react'
import { render, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import Button from '../index'
import Icon from '../../Icon'

describe('Button', () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

    afterEach(() => {
        errorSpy.mockReset()
    })

    afterAll(() => {
        errorSpy.mockRestore()
    })

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
    it('should render type correctly', () => {
        const types = ['primary', 'accept', 'warning', 'danger', 'text', 'link']
        const wrappers = [
            mount(<Button type={types[0]}>PRIMARY</Button>),
            mount(<Button type={types[1]}>ACCEPT</Button>),
            mount(<Button type={types[2]}>WARNING</Button>),
            mount(<Button type={types[3]}>DANGER</Button>),
            mount(<Button type={types[4]}>TEXT</Button>),
            mount(<Button type={types[5]}>LINK</Button>)
        ]
        wrappers.forEach((wrapper, index) => {
            expect(wrapper.find('button').hasClass(`true-button--${types[index]}`)).toBe(true)
        })
        const wrapperDefault = mount(<Button>DEFAULT</Button>)
        types.forEach(type => {
            expect(wrapperDefault.find('button').hasClass(`true-button--${type}`)).toBe(false)
        })
    })
    it('should render size correctly according to its size prop', () => {
        const wrapperSm = mount(<Button size="sm">OK</Button>)
        const wrapperMd = mount(<Button size="md">OK</Button>)
        const wrapperLg = mount(<Button size="lg">OK</Button>)
        expect(wrapperSm.find('button').hasClass('true-button--sm')).toBe(true)
        expect(wrapperMd.find('button').hasClass('true-button--md')).toBe(true)
        expect(wrapperLg.find('button').hasClass('true-button--lg')).toBe(true)
    })
    it('should render middle size without size prop', () => {
        const wrapperDefault = mount(<Button>OK</Button>)
        expect(wrapperDefault.find('button').hasClass('true-button--md')).toBe(true)
    })
    it('should render ghost button correctly', () => {
        const wrappers = [
            mount(<Button ghost>DEFAULT</Button>),
            mount(
                <Button ghost type="primary">
                    PRIMARY
                </Button>
            ),
            mount(
                <Button ghost type="accept">
                    ACCEPT
                </Button>
            ),
            mount(
                <Button ghost type="warning">
                    WARNING
                </Button>
            ),
            mount(
                <Button ghost type="danger">
                    DANGER
                </Button>
            ),
            mount(
                <Button ghost type="text">
                    TEXT
                </Button>
            ),
            mount(
                <Button ghost type="link">
                    LINK
                </Button>
            )
        ]
        wrappers.forEach(wrapper => {
            expect(wrapper.find('button').hasClass('true-button--ghost')).toBe(true)
        })
    })
    it('should render original html type of button correctly', () => {
        const wrapperDefault = mount(<Button>Default</Button>)
        const wrapperSubmit = mount(<Button htmlType="submit">Default</Button>)
        const wrapperReset = mount(<Button htmlType="reset">Reset</Button>)
        expect(wrapperDefault.find('button').prop('type')).toBe('button')
        expect(wrapperSubmit.find('button').prop('type')).toBe('submit')
        expect(wrapperReset.find('button').prop('type')).toBe('reset')
    })
    it('should have error when setting invalid htmlType', () => {
        mount(<Button htmlType="hello">Hello</Button>)
        expect(errorSpy).toHaveBeenCalled()
    })
})
