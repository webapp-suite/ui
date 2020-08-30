import React from 'react';
import PropTypes from 'prop-types';

const svg =
    '<svg preserveAspectRatio="xMidYMid" viewBox="0 0 100 100" style="background: none;"><g transform="rotate(0 50 50)">\n' +
    '  <rect x="47.5" y="2" rx="45.125" ry="1.9000000000000001" width="5" height="28" fill="#595959">\n' +
    '    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>\n' +
    '  </rect>\n' +
    '</g><g transform="rotate(30 50 50)">\n' +
    '  <rect x="47.5" y="2" rx="45.125" ry="1.9000000000000001" width="5" height="28" fill="#595959">\n' +
    '    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>\n' +
    '  </rect>\n' +
    '</g><g transform="rotate(60 50 50)">\n' +
    '  <rect x="47.5" y="2" rx="45.125" ry="1.9000000000000001" width="5" height="28" fill="#595959">\n' +
    '    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>\n' +
    '  </rect>\n' +
    '</g><g transform="rotate(90 50 50)">\n' +
    '  <rect x="47.5" y="2" rx="45.125" ry="1.9000000000000001" width="5" height="28" fill="#595959">\n' +
    '    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>\n' +
    '  </rect>\n' +
    '</g><g transform="rotate(120 50 50)">\n' +
    '  <rect x="47.5" y="2" rx="45.125" ry="1.9000000000000001" width="5" height="28" fill="#595959">\n' +
    '    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>\n' +
    '  </rect>\n' +
    '</g><g transform="rotate(150 50 50)">\n' +
    '  <rect x="47.5" y="2" rx="45.125" ry="1.9000000000000001" width="5" height="28" fill="#595959">\n' +
    '    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>\n' +
    '  </rect>\n' +
    '</g><g transform="rotate(180 50 50)">\n' +
    '  <rect x="47.5" y="2" rx="45.125" ry="1.9000000000000001" width="5" height="28" fill="#595959">\n' +
    '    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>\n' +
    '  </rect>\n' +
    '</g><g transform="rotate(210 50 50)">\n' +
    '  <rect x="47.5" y="2" rx="45.125" ry="1.9000000000000001" width="5" height="28" fill="#595959">\n' +
    '    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>\n' +
    '  </rect>\n' +
    '</g><g transform="rotate(240 50 50)">\n' +
    '  <rect x="47.5" y="2" rx="45.125" ry="1.9000000000000001" width="5" height="28" fill="#595959">\n' +
    '    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>\n' +
    '  </rect>\n' +
    '</g><g transform="rotate(270 50 50)">\n' +
    '  <rect x="47.5" y="2" rx="45.125" ry="1.9000000000000001" width="5" height="28" fill="#595959">\n' +
    '    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>\n' +
    '  </rect>\n' +
    '</g><g transform="rotate(300 50 50)">\n' +
    '  <rect x="47.5" y="2" rx="45.125" ry="1.9000000000000001" width="5" height="28" fill="#595959">\n' +
    '    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>\n' +
    '  </rect>\n' +
    '</g><g transform="rotate(330 50 50)">\n' +
    '  <rect x="47.5" y="2" rx="45.125" ry="1.9000000000000001" width="5" height="28" fill="#595959">\n' +
    '    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>\n' +
    '  </rect>\n' +
    '</g></svg>';

class IndicatorSVG extends React.Component {
    attribute(name, value, svg) {
        const pattern = new RegExp(`${name}=(?:"|')([^("|')]*)(?:"|')`);

        if (!value) {
            const svgOpenTag = svg.startsWith('<svg') ? svg.match(/<svg[^>]*>/)[0] : null;
            value = svgOpenTag && pattern.test(svgOpenTag) ? svgOpenTag.match(pattern)[1] : null;
        }

        return value;
    }

    extractChildren(svg) {
        return { __html: svg.replace(/<svg[^>]*>|<\/svg>/g, '') }; // remove svg tags
    }
    render() {
        const { width, height, viewBox, ...other } = this.props;
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                viewBox={this.attribute('viewBox', viewBox, svg)}
                dangerouslySetInnerHTML={this.extractChildren(svg)}
                {...other}
            />
        );
    }
}

IndicatorSVG.propTypes = {
    style: PropTypes.object,
};

export default IndicatorSVG;
