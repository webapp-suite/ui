/* eslint-disable react/no-find-dom-node */
import React from 'react';
import { findDOMNode } from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { Tabs, TabList, Tab, TabPanel } from '../index';

describe('Tabs', () => {
    it('should default works', () => {
        const instance = TestUtils.renderIntoDocument(
            <Tabs>
                <TabList>
                    <Tab>a</Tab>
                    <Tab>b</Tab>
                </TabList>
                <TabPanel>a</TabPanel>
                <TabPanel>b</TabPanel>
            </Tabs>
        );
        const container = findDOMNode(instance);
        const tabs = container.querySelectorAll(`.${prefixCls}-tabs__tab`);
        const panels = container.querySelectorAll(`.${prefixCls}-tabs__panel`);
        expect(tabs[0].className).toContain('active');
        expect(panels[0].className).toContain('active');
        TestUtils.Simulate.click(tabs[1].querySelector('a'));
        expect(tabs[1].className).toContain('active');
        expect(panels[1].className).toContain('active');
    });

    it('should activeIndex works', () => {
        const instance = TestUtils.renderIntoDocument(
            <Tabs activeIndex={1} onChange={jest.fn()}>
                <TabList>
                    <Tab>a</Tab>
                    <Tab>b</Tab>
                </TabList>
                <TabPanel>a</TabPanel>
                <TabPanel>b</TabPanel>
            </Tabs>
        );
        expect(
            findDOMNode(instance).querySelectorAll(`.${prefixCls}-tabs__tab`)[1].className
        ).toContain('active');
    });

    it('should activeKey works', () => {
        const instance = TestUtils.renderIntoDocument(
            <Tabs activeKey="b" onChange={jest.fn()}>
                <TabList>
                    <Tab activeKey="a">a</Tab>
                    <Tab activeKey="b">b</Tab>
                </TabList>
                <TabPanel activeKey="a">a</TabPanel>
                <TabPanel activeKey="b">b</TabPanel>
            </Tabs>
        );
        expect(
            findDOMNode(instance).querySelectorAll(`.${prefixCls}-tabs__tab`)[1].className
        ).toContain('active');
    });

    it('should onChange works', () => {
        const handleChange = jest.fn();
        const instance = TestUtils.renderIntoDocument(
            <Tabs onChange={handleChange}>
                <TabList>
                    <Tab>a</Tab>
                    <Tab>b</Tab>
                </TabList>
                <TabPanel>a</TabPanel>
                <TabPanel>b</TabPanel>
            </Tabs>
        );
        TestUtils.Simulate.click(
            findDOMNode(instance).querySelector(`.${prefixCls}-tabs__tab > a`)
        );
        expect(handleChange).toBeCalledWith(0, undefined);
    });

    it('should closeable works', () => {
        const instance = TestUtils.renderIntoDocument(
            <Tabs>
                <TabList>
                    <Tab closeable>a</Tab>
                    <Tab closeable>b</Tab>
                </TabList>
                <TabPanel>a</TabPanel>
                <TabPanel>b</TabPanel>
            </Tabs>
        );
        expect(findDOMNode(instance).querySelector(`.${prefixCls}-tabs__tab-close`)).not.toBeNull();
    });

    it('should onClose works', () => {
        const onClose = jest.fn();
        const instance = TestUtils.renderIntoDocument(
            <Tabs onClose={onClose}>
                <TabList>
                    <Tab closeable>a</Tab>
                    <Tab closeable>b</Tab>
                </TabList>
                <TabPanel>a</TabPanel>
                <TabPanel>b</TabPanel>
            </Tabs>
        );
        TestUtils.Simulate.click(
            findDOMNode(instance).querySelector(`.${prefixCls}-tabs__tab-close`)
        );
        expect(onClose).toBeCalledWith(0, undefined);
    });

    it('should controlled activeIndex works', () => {
        class App extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    activeIndex: 0,
                };
            }
            componentDidMount() {
                this.setState({ activeIndex: 1 });
            }
            render() {
                const { activeIndex } = this.state;
                return (
                    <Tabs activeIndex={activeIndex} onChange={jest.fn()}>
                        <TabList>
                            <Tab>a</Tab>
                            <Tab>b</Tab>
                        </TabList>
                        <TabPanel>a</TabPanel>
                        <TabPanel>b</TabPanel>
                    </Tabs>
                );
            }
        }
        const instance = TestUtils.renderIntoDocument(<App />);
        const tabNodes = findDOMNode(instance).querySelectorAll(`.${prefixCls}-tabs__tab`);
        const panelNodes = findDOMNode(instance).querySelectorAll(`.${prefixCls}-tabs__panel`);
        expect(tabNodes[0].className).not.toContain('active');
        expect(tabNodes[1].className).toContain('active');
        expect(panelNodes[0].className).not.toContain('active');
        expect(panelNodes[1].className).toContain('active');
    });

    it('should controlled activeKey works', () => {
        class App extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    activeKey: 0,
                };
            }
            componentDidMount() {
                this.setState({ activeKey: 1 });
            }
            render() {
                const { activeKey } = this.state;
                return (
                    <Tabs activeKey={activeKey} onChange={jest.fn()}>
                        <TabList>
                            <Tab activeKey={0}>a</Tab>
                            <Tab activeKey={1}>b</Tab>
                        </TabList>
                        <TabPanel activeKey={0}>a</TabPanel>
                        <TabPanel activeKey={1}>b</TabPanel>
                    </Tabs>
                );
            }
        }
        const instance = TestUtils.renderIntoDocument(<App />);
        const tabNodes = findDOMNode(instance).querySelectorAll(`.${prefixCls}-tabs__tab`);
        const panelNodes = findDOMNode(instance).querySelectorAll(`.${prefixCls}-tabs__panel`);
        expect(tabNodes[0].className).not.toContain('active');
        expect(tabNodes[1].className).toContain('active');
        expect(panelNodes[0].className).not.toContain('active');
        expect(panelNodes[1].className).toContain('active');
    });
});
