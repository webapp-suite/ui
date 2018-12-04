import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Markdown from 'widgets/Markdown'
import './index.less'

const Doc = props => {
  return (
    <div className="doc">
      <header className="doc__header">
        <div className="doc__title">
          {props.name.charCodeAt(0) < 97 ? '<' + props.name + ' />' : props.name}
        </div>
      </header>
      {props.props && props.props.length ? (
        <table>
          <thead>
            <tr>
              <th>属性</th>
              <th>类型</th>
              {/* <th>默认</th> */}
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            {props.props.map(prop => (
              <tr key={prop.name}>
                <td className={cx('doc__prop-name', {
                  'doc__prop-name--required': prop.required
                })}>
                  {prop.name}
                </td>
                <td className="doc__prop-type">{prop.type}</td>
                {/* <td className="doc__prop-type">{props.defaultProps}</td> */}
                <td>
                  <Markdown html={prop.desc} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
      {props.apis && props.apis.map(api => {
        const { name, type, desc, params } = api
        return (
          <dl key={name}>
            <dt>
              {name}{type ? null : '( ' + (params || []).map(v => v.name).join(', ') + ' )'}
            </dt>
            {params && (
              <dd>
                <h2>参数</h2>
                <ul>
                  {params.map(param => (
                    <li key={param.name}>
                      {param.name} {param.type}
                      <Markdown html={param.desc} />
                    </li>
                  ))}
                </ul>
              </dd>
            )}
            {api['return'] && (
              <dd>
                <h2>返回</h2>
                {api['return'].type + ' ' + api['return'].desc}
              </dd>
            )}
            {type && (
              <dd>
                <h2>类型</h2>
                {type}
              </dd>
            )}
            {desc && (
              <dd>
                <h2>描述</h2>
                <Markdown html={desc} />
              </dd>
            )}
          </dl>
        )
      })}
    </div>
  )
}

Doc.propTypes = {
  name: PropTypes.string,
  apis: PropTypes.array,
  props: PropTypes.array
}

export default Doc
