import React, { Component } from 'react'
import './formCss/style.css'
export default class Dropzone extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hightlight: false
        }
        this.fileInputRef = React.createRef()
    }
    // github.com/rofisyahrul
    onDragOver = (event) => {
        event.preventDefault();
        if (this.props.disabled) return;
        this.setState({ hightlight: true });
    }

    onDragLeave = () => {
        this.setState({ hightlight: false });
    }

    onDrop = (event) => {
        event.preventDefault();
        if (this.props.disabled) return;
        const file = event.dataTransfer.files;
        console.log(file);
        if (this.props.onFilesAdded) {
            this.props.onFilesAdded(file[0])
        }
        this.setState({ hightlight: false });
    }

    openFileDialog = () => {
        if (this.props.disabled) return;
        this.fileInputRef.current.click();
    }

    onFilesAdded = (event) => {
        event.preventDefault();
        if (this.props.disabled) return;
        const file = event.target.files;
        // console.log(this.props)
        // console.log(file);
        if (this.props.onFilesAdded) {
            this.props.onFilesAdded(file[0])
        }
    }

    render() {
        return (
            <div className={`Dropzone text ${this.state.hightlight ? 'hightlight' : ''}`}
                onDragOver={this.onDragOver} onDragLeave={this.onDragLeave}
                onDrop={this.onDrop} onClick={this.openFileDialog}
                style={{ cursor: this.props.disabled ? "default" : "pointer" }} >

                <input
                    ref={this.fileInputRef}
                    className="FileInput"
                    type="file"
                    multiple
                    onChange={this.onFilesAdded}
                />
                <span className="text"> Upload Image</span>
            </div>
        )
    }
}