import React from 'react'
import './formCss/style.css'
import Dropzone from './Dropzone'
import Swal from "sweetalert2";

export default class Upload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            file: {},
            image: ''
        }
    }

    onFilesAdded = (file) => {
        if (file) {
            // accept all images type file
            if (file.type.match('image.*')) {
                if (file.size <= 3 * Math.pow(10, 6)) {
                    const read = new FileReader()
                    read.readAsDataURL(file)
                    // github.com/rofisyahrul
                    read.onload = (event) => {
                        this.setState({
                            file,
                            image: (
                                <div className="row justify-content-center">
                                    <div className="col-12 d-flex flex-column align-self-center">
                                        <img src={event.target.result} title={file.name} style={{ height: "10rem", border: "1px solid #292929", alignSelf: 'center' }} alt="Uploaded" />
                                    </div>
                                </div>
                            )
                        })
                        this.props.onFileChange(file)
                        // to close image when done adding (not done)
                    }
                } else {
                    Swal.fire({
                        title: 'Maximum File size exceeded',
                        text: 'Upload an Image below 5 Mb',
                        type: 'error'
                    })
                }
            } else {
                Swal.fire({
                    title: 'Wrong type File!',
                    text: "Upload Image Only",
                    type: 'error'
                })
            }
        }
    }

    render() {
        return (
                <div className="row">
                    <label htmlFor="file" className="col-sm-2 col-form-label">Upload Image</label>
                    <div className="col-sm-5">
                        <Dropzone onFilesAdded={this.onFilesAdded} disabled={false} />
                    </div>
                        {this.state.image}
                </div>
        )
    }
}