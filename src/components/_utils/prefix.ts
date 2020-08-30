import classNames from 'classnames';
import curry from 'lodash/curry';

export const globalKey = 'webapps-';
export const getClassNamePrefix = () => {
    if (typeof __WEBAPPS_CLASSNAME_PREFIX__ !== 'undefined') {
        return __WEBAPPS_CLASSNAME_PREFIX__;
    }
    return globalKey;
};
export const defaultClassPrefix = (name: string) => `${getClassNamePrefix()}${name}`;

export function prefix(pre: string, className: string | string[]): string {
    if (!pre || !className) {
        return '';
    }

    if (Array.isArray(className)) {
        return classNames(className.filter((name) => !!name).map((name) => `${pre}-${name}`));
    }

    return `${pre}-${className}`;
}

export default curry(prefix);
