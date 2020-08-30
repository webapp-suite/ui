import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AvatarEditor from 'react-avatar-editor';
import Button from '../Button';
import { Modal, ModalBody } from '../Modal';
import './index.less';

class AvatarClip extends Component {
    constructor() {
        super();
        this.state = {
            scale: 1,
        };
    }

    setEditorRef = (editor) => {
        if (editor) this.editor = editor;
    };

    handleScale = (e) => {
        const scale = parseFloat(e.target.value);
        this.setState({ scale });
    };

    handleClose = () => {
        this.props.onClose && this.props.onClose();
    };

    handleSave = () => {
        const img = this.editor.getImageScaledToCanvas().toDataURL();
        this.props.onSave(img);
    };

    // TODO: replace svg icon
    render() {
        const { image, width, height, border, color, cropButtonName, open } = this.props;
        return (
            <Modal open={open} onClose={this.handleClose} lock>
                <ModalBody>
                    <h3 className={`${prefixCls}-avatar-clip__title`}>Edit Avatar</h3>
                    <div className={`${prefixCls}-avatar-clip__subtitle`}>
                        Adjust avatar size and position
                    </div>
                    <div className={`${prefixCls}-avatar-clip__content`}>
                        <div className={`${prefixCls}-avatar-clip__edit`}>
                            <AvatarEditor
                                ref={this.setEditorRef}
                                image={image}
                                width={width}
                                height={height}
                                border={border}
                                color={color} // RGBA
                                scale={this.state.scale}
                            />
                        </div>
                        <div className={`${prefixCls}-avatar-clip__zoom`}>
                            <svg
                                viewBox="0 0 18 16"
                                width="14"
                                height="16"
                                aria-hidden="true"
                                style={{ height: 16, width: 14 }}
                            >
                                <title />
                                <g>
                                    <path
                                        d="M13.296 3H1.006C.45 3 0 3.45 0 4.003v10.995C0 15.545.45 16 1.007 16h12.986C14.55 16 15 15.553 15 15V4.003C15 3.456 14.55 3 13.993 3h-.697zm-.892 11H2.596c-.33 0-.596-.266-.596-.6V5.6C2 5.27 2.267 5 2.596 5h9.81c.328 0 .595.266.595.6v7.8c0 .33-.268.6-.596.6zM4 0c-.552 0-1 .448-1 1s.448 1 1 1h11.5s.5 0 .5.5V12c0 .552.448 1 1 1s1-.448 1-1V1c0-.552-.448-1-1-1H4z"
                                        fillRule="evenodd"
                                    />
                                </g>
                            </svg>
                            <input
                                type="range"
                                name="scale"
                                onChange={this.handleScale}
                                min="1"
                                max="2"
                                step="0.01"
                                defaultValue="1"
                                className={`${prefixCls}-avatar-clip__range-input`}
                            />
                            <svg
                                viewBox="0 0 18 16"
                                width="21"
                                height="16"
                                aria-hidden="true"
                                style={{ height: 16, width: 21 }}
                            >
                                <title />
                                <g>
                                    <path
                                        d="M13.296 3H1.006C.45 3 0 3.45 0 4.003v10.995C0 15.545.45 16 1.007 16h12.986C14.55 16 15 15.553 15 15V4.003C15 3.456 14.55 3 13.993 3h-.697zm-.892 11H2.596c-.33 0-.596-.266-.596-.6V5.6C2 5.27 2.267 5 2.596 5h9.81c.328 0 .595.266.595.6v7.8c0 .33-.268.6-.596.6zM4 0c-.552 0-1 .448-1 1s.448 1 1 1h11.5s.5 0 .5.5V12c0 .552.448 1 1 1s1-.448 1-1V1c0-.552-.448-1-1-1H4z"
                                        fillRule="evenodd"
                                    />
                                </g>
                            </svg>
                        </div>
                        <div className={`${prefixCls}-avatar-clip__footer`}>
                            <Button type="primary" onClick={this.handleSave} block ghost>
                                {cropButtonName}
                            </Button>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}

AvatarClip.propTypes = {
    /** The url of image */
    image: PropTypes.string.isRequired,

    /** The callback of saving avatar */
    onSave: PropTypes.func.isRequired,

    /** The callback of closing avatar */
    onClose: PropTypes.func,

    /** Whether to open the modal of cropping avatar */
    open: PropTypes.bool,

    /** The name of the button for cropping */
    cropButtonName: PropTypes.string,

    /** The width of cropping */
    width: PropTypes.number,

    /** The height of cropping */
    height: PropTypes.number,

    /** The border of mask for cropping */
    border: PropTypes.number,

    /** The color of text for cropping */
    color: PropTypes.arrayOf(PropTypes.number),
};

AvatarClip.defaultProps = {
    width: 160,
    height: 160,
    border: 40,
    color: [248, 249, 250, 0.9],
    cropButtonName: 'SAVE',
};

export default AvatarClip;
