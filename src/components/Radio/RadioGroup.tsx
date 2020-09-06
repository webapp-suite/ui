import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { StandardProps, FormControlBaseProps } from '../@types/common';
import { getUnhandledProps, prefix, createContext } from '../_utils';
import { RadioProps } from './Radio';

interface RadioGroupState {
    value: any;
}

export interface RadioContextProps {
    inline?: boolean;
    name?: string;
    value?: any;
    onChange?: (
        value: any,
        checked: boolean,
        event: React.SyntheticEvent<HTMLInputElement>
    ) => void;
}

export interface RadioGroupProps<V = any>
    extends StandardProps,
        FormControlBaseProps<RadioProps<V>> {
    /** A radio group can have different appearances */
    appearance?: 'default' | 'picker';

    /** Name to use for form */
    name?: string;

    /** Inline layout */
    inline?: boolean;

    /** Primary content */
    children?: React.ReactNode;
}

export const RadioContext = createContext<RadioContextProps>({});

class RadioGroup extends React.Component<RadioGroupProps, RadioGroupState> {
    static defaultProps = {
        appearance: 'default',
    };
    constructor(props) {
        super(props);
        this.state = {
            value: props.defaultValue,
        };
    }

    getValue() {
        const { value } = this.props;
        return _.isUndefined(value) ? this.state.value : value;
    }

    handleChange = (
        nextValue: any,
        _itemChecked: boolean,
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        this.setState({ value: nextValue });
        this.props.onChange?.(nextValue, event);
    };

    getContextProps = (): RadioContextProps => {
        const { inline, name } = this.props;
        const value = this.getValue();

        return {
            inline,
            name,
            value: _.isUndefined(value) ? null : value,
            onChange: this.handleChange,
        };
    };

    render() {
        const {
            className,
            inline,
            children,
            classPrefix = `${prefixCls}-radio-group`,
            appearance,
            ...rest
        } = this.props;
        const addPrefix = prefix(classPrefix);
        const classes = classNames(classPrefix, addPrefix(appearance), className, {
            [addPrefix('inline')]: inline,
        });

        const unhandled = getUnhandledProps(RadioGroup, rest);

        return (
            <RadioContext.Provider value={this.getContextProps()}>
                <div {...unhandled} className={classes} role="button">
                    {children}
                </div>
            </RadioContext.Provider>
        );
    }
}

export default RadioGroup;
