import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Markdown from 'widgets/Markdown'
import './index.less'

const PropsTable = props => {
  return (
    <div className="props-table">
      <header className="props-table__header">
        <div className="props-table__title">
          {props.name.charCodeAt(0) < 97
            ? '<' + props.name + ' />'
            : props.name}
        </div>
      </header>
      {props.props && props.props.length ? (
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {props.props.map(prop => (
              <tr key={prop.name}>
                <td
                  className={cx('props-table__prop-name', {
                    'props-table__prop-name--required': prop.required
                  })}
                >
                  {prop.name}
                </td>
                <td className="props-table__prop-type">{prop.type}</td>
                <td className="props-table__prop-type">
                  {prop.default || '-'}
                </td>
                <td>
                  <Markdown html={prop.description} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
      {props.apis &&
        props.apis.map(api => {
          const { name, type, description, params } = api
          return (
            <dl key={name}>
              <dt>
                {name}
                {type
                  ? null
                  : '( ' + (params || []).map(v => v.name).join(', ') + ' )'}
              </dt>
              {params && (
                <dd>
                  <h2>Params</h2>
                  <ul>
                    {params.map(param => (
                      <li key={param.name}>
                        {param.name} {param.type}
                        <Markdown html={param.description} />
                      </li>
                    ))}
                  </ul>
                </dd>
              )}
              {api.return && (
                <dd>
                  <h2>Return</h2>
                  {api.return.type + ' ' + api.return.description}
                </dd>
              )}
              {type && (
                <dd>
                  <h2>Type</h2>
                  {type}
                </dd>
              )}
              {description && (
                <dd>
                  <h2>Description</h2>
                  <Markdown html={description} />
                </dd>
              )}
            </dl>
          )
        })}
    </div>
  )
}

PropsTable.propTypes = {
  name: PropTypes.string,
  apis: PropTypes.array,
  props: PropTypes.array
}

export default PropsTable
