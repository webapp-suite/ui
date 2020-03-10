import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import xhr from '../_utils/xhr'
import FileList from './FileList'
import Button from '../Button/index'
import './index.less'

class Upload extends React.Component {
  constructor () {
    super()
    this.state = {
      data: {},
      list: []
    }
  }

  handleClick = e => {
    const fileEl = this.refs.file
    fileEl.value = ''
    fileEl.click()
  }

  handleChange = event => {
    const el = event.target
    const files = el.files
    const onUplading = this.props.onUplading
    const onUpload = this.props.onUpload
    onUplading && onUplading(0)
    onUpload ? onUpload(files) : this.upload(files)
    el.value = ''
  }

  upload (files) {
    const onUplading = this.props.onUplading
    const self = this
    const arr = []
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      arr.push({
        name: file.name,
        size: file.size,
        type: file.type,
        state: 0
      })
      ;(function (self, file, index) {
        const fd = new FormData()
        fd.append(self.props.fileName || 'files', file)
        xhr({
          type: 'post',
          url: self.props.action,
          data: fd,
          beforeSend (xhr) {
            // Detect the current attachment uploading situation
            xhr.upload.onprogress = function (evt) {
              const loaded = evt.loaded
              const tot = evt.total
              const per = Math.floor((100 * loaded) / tot) // Percentage that has been uploaded
              const list = self.state.list.slice(0)
              const f = list[index]
              f.percent = per
              onUplading && onUplading(per)
              self.setState({
                list
              })
            }
          },
          success (data) {
            const list = self.state.list.slice(0)
            const f = list[index]
            f.state = 1
            self.setState({
              data,
              list
            })
            if (typeof self.props.onComplete === 'function') {
              self.props.onComplete(data, list)
            }
          },
          error (msg) {
            const list = self.state.list.slice(0)
            const f = list[index]
            f.state = 2
            self.setState({
              list
            })
            if (typeof self.props.onComplete === 'function') {
              self.props.onComplete(msg, list)
            }
          },
          complete () {}
        })
      })(self, file, i)
    }

    this.setState({
      list: arr
    })
  }

  handleRemove = currItem => {
    const self = this
    const arr = this.state.list.slice(0)
    arr.map((item, index) => {
      if (item === currItem) {
        arr.splice(index, 1)
        self.setState({
          list: arr
        })
      }
    })
  }

  render () {
    const {
      className,
      action,
      fileName,
      multiple,
      onUplading,
      onComplete,
      showFileList,
      button,
      onUpload,
      ...other
    } = this.props
    return (
      <div className={cx(`${prefixCls}-upload`, className)} {...other}>
        <input
          ref="file"
          onChange={this.handleChange}
          type="file"
          multiple={!!multiple}
          style={{ display: 'none' }}
        />
        <div
          className={`${prefixCls}-upload__children`}
          onClick={this.handleClick}
        >
          {this.props.children}
        </div>
        {button && button.name && (
          <Button {...button} onClick={this.handleClick}>
            {button.name}
          </Button>
        )}
        {showFileList && (
          <div className={`${prefixCls}-upload__listbox`}>
            <FileList data={this.state.list} onRemove={this.handleRemove} />
          </div>
        )}
      </div>
    )
  }
}

Upload.propTypes = {
  children: PropTypes.node,

  className: PropTypes.string,

  /** The url of uploading */
  action: PropTypes.string,

  /** The configuration of button for uploading */
  button: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.string,
    circle: PropTypes.bool,
    transparent: PropTypes.bool
  }),

  /** The name of uploaded file, default value is `files` */
  fileName: PropTypes.string,

  /** Whether to support multi-selection, ie10+ supports, press ctrl can select multi files after enabled。 */
  multiple: PropTypes.bool,

  /** The callback of the progress of uploading */
  onUplading: PropTypes.func,

  onUpload: PropTypes.func,

  /** The callback of having uploaded, it works if the user does not have a custom onUpload method */
  onComplete: PropTypes.func,

  /** Whether to show file list */
  showFileList: PropTypes.bool
}

export default Upload
