import React from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import { prefix, getUnhandledProps, partitionHTMLProps } from '../_utils';
import { RadioContext } from './RadioGroup';
import { RadioContextProps } from './RadioGroup';
import { StandardProps } from '../@types/common';
import './styles/index.less';

interface RadioState {
    checked?: boolean;
}

export interface RadioProps<V = any> extends StandardProps {
    /** HTML title */
    title?: string;

    /** The disable of component */
    disabled?: boolean;

    /** Specifies whether the radio is selected */
    checked?: boolean;

    /** Specifies the initial state: whether or not the radio is selected */
    defaultChecked?: boolean;

    /** Ref for the input element */
    inputRef?: React.Ref<any>;

    /** Value, corresponding to the value of the Radiogroup, to determine whether the */
    value?: V;

    /** Name to use for form */
    name?: string;

    /** Inline layout */
    inline?: boolean;

    /** Primary content */
    children?: React.ReactNode;

    /** Callback function with value changed */
    onChange?: (value: V, checked: boolean, event: React.SyntheticEvent<HTMLInputElement>) => void;
}

class Radio extends React.Component<RadioProps, RadioState> {
    static contextType = RadioContext;
    context: RadioContextProps = {};

    constructor(props: RadioProps) {
        super(props);
        this.state = {
            checked: props.defaultChecked,
        };
    }
    getCheckedByValue() {
        const { value } = this.props;
        if (!_.isUndefined(this.context.value)) {
            return this.context.value === value;
        }
        return this.props.checked;
    }

    updateCheckedState(checked: boolean, callback?: () => void) {
        this.setState({ checked }, callback);
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, disabled, onChange } = this.props;
        const checked = true;
        if (disabled) {
            return;
        }

        this.setState({ checked });
        this.context.onChange?.(value, checked, event);
        onChange?.(value, checked, event);
    };
    render() {
        const {
            title,
            className,
            children,
            disabled,
            defaultChecked,
            classPrefix = `${prefixCls}-radio`,
            tabIndex = 0,
            inputRef,
            onClick,
            ...props
        } = this.props;

        const { inline = this.props.inline, name = this.props.name } = this.context;
        const checked = this.getCheckedByValue();
        const addPrefix = prefix(classPrefix);
        const classes = classNames(classPrefix, className, {
            [addPrefix('inline')]: inline,
            [addPrefix('disabled')]: disabled,
            [addPrefix('checked')]: _.isUndefined(checked) ? this.state.checked : checked,
        });

        const unhandled = getUnhandledProps(Radio, props);
        const [htmlInputProps, rest] = partitionHTMLProps(unhandled);

        const input = (
            <span className={addPrefix('wrapper')} aria-disabled={disabled}>
                <input
                    {...htmlInputProps}
                    type="radio"
                    checked={checked}
                    defaultChecked={defaultChecked}
                    ref={inputRef}
                    name={name}
                    tabIndex={tabIndex}
                    disabled={disabled}
                    onChange={this.handleChange}
                    onClick={(event) => event.stopPropagation()}
                />
                <span className={addPrefix('inner')} aria-hidden={true} role="presentation" />
            </span>
        );

        return (
            <div {...rest} onClick={onClick} className={classes}>
                <div className={addPrefix('checker')}>
                    <label title={title}>
                        {input}
                        {children}
                    </label>
                </div>
            </div>
        );
    }
}

export default Radio;
