import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import shallowEqual from '../_utils/shallowEqual';
import { getUnhandledProps, prefix, createContext } from '../_utils';
import { StandardProps, FormControlBaseProps } from '../@types/common';
import { CheckboxProps } from './Checkbox';

interface State {
    value: any[];
}

export interface CheckboxContextProps {
    inline?: boolean;
    name?: string;
    value?: any[];
    controlled?: boolean;
    onChange?: (
        value: any,
        checked: boolean,
        event: React.SyntheticEvent<HTMLInputElement>
    ) => void;
}

export interface CheckboxGroupProps<V = any>
    extends StandardProps,
        FormControlBaseProps<CheckboxProps<V>> {
    /** Used for the name of the form */
    name?: string;

    /** Primary content */
    children?: React.ReactNode;

    /** Inline layout */
    inline?: boolean;
}

export const CheckboxContext = createContext<CheckboxContextProps>({});

class CheckboxGroup extends React.Component<CheckboxGroupProps, State> {
    constructor(props: CheckboxGroupProps) {
        super(props);
        this.state = {
            value: props.defaultValue || [],
        };
    }

    getValue() {
        const { value } = this.props;
        return _.isUndefined(value) ? this.state.value : value;
    }

    getContextProps = (): CheckboxContextProps => {
        const { inline, name, value } = this.props;

        return {
            inline,
            name,
            value: this.getValue(),
            controlled: !_.isUndefined(value),
            onChange: this.handleChange,
        };
    };

    handleChange = (
        itemValue: any,
        itemChecked: boolean,
        event: React.SyntheticEvent<HTMLElement>
    ) => {
        const nextValue = _.cloneDeep(this.getValue()) || [];

        if (itemChecked) {
            nextValue.push(itemValue);
        } else {
            _.remove(nextValue, (i) => shallowEqual(i, itemValue));
        }

        this.setState({ value: nextValue });
        this.props.onChange?.(nextValue, event);
    };

    render() {
        const { className, inline, children, classPrefix, ...props } = this.props;
        const addPrefix = prefix(classPrefix);
        const classes = classNames(classPrefix, className, {
            [addPrefix('inline')]: inline,
        });

        const unhandled = getUnhandledProps(CheckboxGroup, props);

        return (
            <CheckboxContext.Provider value={this.getContextProps()}>
                <div {...unhandled} role="group" className={classes}>
                    {children}
                </div>
            </CheckboxContext.Provider>
        );
    }
}

export default CheckboxGroup;
