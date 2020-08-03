import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';
import './styles/index.less';

import { prefix, defaultProps, getUnhandledProps, partitionHTMLProps, refType } from '../_utils';
import { CheckboxContext } from './CheckboxGroup';
import { CheckboxContextProps } from '../Checkbox/CheckboxGroup';
import { StandardProps } from '../@types/common';

export interface CheckboxProps<V = any> extends StandardProps {
    /** HTML title */
    title?: string;

    /** Inline layout */
    inline?: boolean;

    /** A checkbox can appear disabled and be unable to change states */
    disabled?: boolean;

    /** Whether or not checkbox is checked. */
    checked?: boolean;

    /** The initial value of checked. */
    defaultChecked?: boolean;

    /** Whether or not checkbox is indeterminate. */
    indeterminate?: boolean;

    /** Called when the user attempts to change the checked state. */
    onChange?: (value: V, checked: boolean, event: React.SyntheticEvent<HTMLInputElement>) => void;

    /** Called when the checkbox or label is clicked. */
    onClick?: (event: React.SyntheticEvent<HTMLElement>) => void;

    /** Ref of input element */
    inputRef?: React.Ref<any>;

    /** The HTML input value. */
    value?: V;

    /** A checkbox can receive focus. */
    tabIndex?: number;

    checkable?: boolean;

    onCheckboxClick?: (event: React.SyntheticEvent<HTMLElement>) => void;
}

interface CheckboxState {
    checked?: boolean;
}

class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
    static contextType = CheckboxContext;
    // static propTypes = {
    //     title: PropTypes.string,
    //     className: PropTypes.string,
    //     inline: PropTypes.bool,
    //     disabled: PropTypes.bool,
    //     checked: PropTypes.bool,
    //     defaultChecked: PropTypes.bool,
    //     indeterminate: PropTypes.bool,
    //     onChange: PropTypes.func,
    //     onClick: PropTypes.func,
    //     inputRef: refType,
    //     value: PropTypes.any,
    //     children: PropTypes.node,
    //     tabIndex: PropTypes.number,
    //
    //     checkable: PropTypes.bool,
    //     onCheckboxClick: PropTypes.func,
    // };
    static defaultProps = {
        checkable: true,
        tabIndex: 0,
    };

    context: CheckboxContextProps = {};

    constructor(props: CheckboxProps) {
        super(props);
        this.state = {
            checked: props.defaultChecked,
        };
    }

    handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
        const { onChange, disabled, value } = this.props;
        const checked = !this.isChecked();

        if (disabled) {
            return;
        }

        this.setState({ checked });
        onChange?.(value, checked, event);
        this.context.onChange?.(value, checked, event);
    };

    getCheckedByValue() {
        const { value } = this.context;
        if (!_.isUndefined(value) && !_.isUndefined(this.props.value)) {
            return value.some((i) => i === this.props.value);
        }

        return this.props.checked;
    }

    isChecked() {
        const checked = this.getCheckedByValue();
        return _.isUndefined(checked) ? this.state.checked : checked;
    }

    render() {
        const {
            disabled,
            className,
            children,
            title,
            inputRef,
            indeterminate,
            tabIndex,
            onClick,
            onCheckboxClick,
            checkable,
            ...props
        } = this.props;

        const checked = this.isChecked();
        const { inline = this.props.inline, name = this.props.name, controlled } = this.context;

        const addPrefix = prefix(`${prefixCls}checkbox`);
        const classes = classNames(`${prefixCls}checkbox`, className, {
            [addPrefix('inline')]: inline,
            [addPrefix('indeterminate')]: indeterminate,
            [addPrefix('disabled')]: disabled,
            [addPrefix('checked')]: checked,
        });

        const unhandled = getUnhandledProps(Checkbox, props);
        const [htmlInputProps, rest] = partitionHTMLProps(unhandled);

        if (!_.isUndefined(controlled)) {
            htmlInputProps[controlled ? 'checked' : 'defaultChecked'] = checked;
        }

        const input = (
            <span
                className={addPrefix('wrapper')}
                onClick={onCheckboxClick}
                aria-disabled={disabled}
            >
                <input
                    {...htmlInputProps}
                    name={name}
                    type="checkbox"
                    ref={inputRef}
                    tabIndex={tabIndex}
                    onClick={(event) => event.stopPropagation()}
                    disabled={disabled}
                    onChange={this.handleChange}
                />
                <span className={addPrefix('inner')} aria-hidden={true} role="presentation" />
            </span>
        );

        return (
            <div {...rest} onClick={onClick} className={classes}>
                <div className={addPrefix('checker')}>
                    <label title={title}>
                        {checkable ? input : null}
                        {children}
                    </label>
                </div>
            </div>
        );
    }
}

export default Checkbox;
