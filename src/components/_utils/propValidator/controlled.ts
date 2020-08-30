/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default function (validator, callbackName = 'onChange') {
    return function (props, propName, componentName) {
        if (propName in props && !props[callbackName] && !props.disabled) {
            return new Error(
                `You provided a \`${propName}\` prop to \`${componentName}\` without an \`${callbackName}\` handler.`
            );
        }
        // eslint-disable-next-line prefer-rest-params
        return validator(...Array.from(arguments));
    };
}
