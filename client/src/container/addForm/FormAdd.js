import React from 'react'
import { connect } from 'react-redux';
import { addProduct } from '../../action';
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color';
import { Form } from './Form';
import Upload from './Upload';
import { Button } from 'react-bootstrap';

//github.com/rofisyahrul
Node.prototype.getParents = function (nth = 0) {
    if (nth <= 0) return this.parentElement;
    return this.getParents.call(this.parentElement, --nth);
};

class FormAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            rate: '',
            description: '',
            price: '',
            brand: '',
            detail_product: '',
            colors: ['#fff'],
            capacities: [],
            displaypicker: [false],
            file: {}
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleButtonColor = this.handleButtonColor.bind(this)
        this.handleColorClose = this.handleColorClose.bind(this)
        this.handleChangeColor = this.handleChangeColor.bind(this)
        this.handleChangeCurrency = this.handleChangeCurrency.bind(this)
        this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this)
        this.selectCapacities = this.selectCapacities.bind(this)
    }

    //github.com/rofisyahrul
    convertPrice = (price = 0, currency = "Rp.") => {
        price = price
            .toString()
            .replace(/\D/g, "")
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        price = price && `${currency} ${price}`;
        return price;
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleChangeCurrency(event) {
        let { name, value, inputMode } = event.target
        if (inputMode === 'numeric') {
            value = this.convertPrice(value)
        }
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addProduct(
            this.state.title,
            this.state.rate,
            this.state.description,
            this.state.price,
            this.state.brand,
            this.state.detail_product,
            this.state.colors,
            this.state.capacities,
            this.state.file
        )
        this.setState({
            title: '',
            rate: '',
            description: '',
            price: '',
            brand: '',
            detail_product: '',
            colors: ['#fff'],
            capacities: [],
            displaypicker: [false],
            file: {}
        })
    }

    handleButtonColor = (event) => {
        let { id } = event.target;
        id = Number(id.split("click")[1])
        this.setState(state => ({
            displaypicker: state.displaypicker.map((result, index) => index === id ? !result : result)
        }))
    }

    handleColorClose = (event) => {
        let { id } = event.target
        id = Number(id.split('close')[1])
        this.setState(state => ({
            displaypicker: state.displaypicker.map((result, index) => index === id ? false : result)
        }))
    }

    handleChangeColor = (color, event) => {
        // console.log('target >',target.getParents(4)); //get parent div
        let target = event.target
        if (target) {
            let { id } = target.getParents(5)
            id = Number(id.split('color')[1])
            this.setState(state => ({
                colors: state.colors.map((res, index) => (index === id ? color.hex : res))
            }))
        }
    }

    addColor = (event) => {
        event.preventDefault()
        this.setState(state => ({
            colors: [...state.colors, "#fff"],
            displaypicker: [...state.displaypicker, false]
        }))
    }

    deleleColor = (event) => {
        event.preventDefault()
        this.setState(state => ({
            colors: state.colors.slice(0, state.colors.length - 1),
            displaypicker: state.displaypicker.slice(0, state.displaypicker.length - 1)
        }))
    }

    handleChangeCheckbox(event, name) {
        let { value, checked } = event.target
        if (checked) {
            this.setState(state => ({
                [name]: [...state[name], value]
            }))
        } else {
            this.setState(state => ({
                [name]: state[name].filter(x => x !== value)
            }))
        }
    }

    selectCapacities() {
        return {
            name: 'capacities',
            label: 'Capacity',
            type: 'checkbox',
            values: [16, 32, 64, 128, 256, 512],
            options: [16, 32, 64, 128, 256, 512].map(total => `${total} Gb`),
            nomor: [16, 32, 64, 128, 256, 512].map(total => `capacity${total}`),
            checked: this.state.capacities
        }
    }

    handleFileChange = file => {
        this.setState({ file });
    };

    render() {
        // console.log(this.state.file);
        // console.log(this.state.file.name);

        let { price, title, description, brand, rate, detail_product, colors } = this.state
        // console.log(this.state,'aaaaaaaaaa')
        let forms = [
            { name: 'title', type: 'text', label: 'Title', value: title },
            { name: 'rate', type: 'number', label: 'Rate', value: rate },
            { name: 'description', type: 'textarea', label: 'Description', row: '5', value: description },
            { name: 'price', type: 'money', inputMode: 'numeric', label: 'Price', min: '0', value: price },
            { name: 'brand', type: 'text', label: 'Brand', value: brand },
            { name: 'detail_product', type: 'textarea', label: 'Detail', value: detail_product },
            this.selectCapacities(),
            { name: 'colors', type: 'color', value: 'colors' },
            { name:'file', type: 'file', value:'file'}
        ]

        const styles = reactCSS({
            default: {
                colors: colors.map(result => ({
                    width: '40px',
                    height: '15px',
                    marginTop: '2px',
                    marginBottom: '2px',
                    borderRadius: '2px',
                    backgroundColor: result
                })),
                swatch: {
                    padding: "9px",
                    background: "#e9e9e9",
                    borderRadius: "2px",
                    boxShadow: "#010101",
                    display: "inline-block",
                    cursor: "pointer"
                },
                popover: {
                    position: "absolute",
                    zIndex: "2"
                },
                cover: {
                    position: "fixed",
                    top: "0px",
                    right: "0px",
                    bottom: "0px",
                    left: "0px"
                }
            }
        })

        let item = forms.map((result, index) => {
            if (result.type === 'color') {
                return (
                    <div key={index} className="form-group row my-4" >
                        <label htmlFor="colors" className="col-sm-2 col-form-label">Colors</label>
                        {colors.map((color, index) => (
                            <div key={index} id={`color${index}`} className="col-auto">
                                <div style={styles.swatch} onClick={this.handleButtonColor} id={`click${index}`}>
                                    <div style={styles.colors[index]} id={`click${index}`}></div>
                                </div>
                                {this.state.displaypicker[index] && (
                                    <div style={styles.popover}>
                                        <div style={styles.cover} onClick={this.handleColorClose} id={`close${index}`}></div>
                                        <SketchPicker color={color} onChange={this.handleChangeColor} />
                                    </div>
                                )}
                            </div>
                        ))}
                        <div>
                            {colors.length < 5 && (
                                <button type="button" onClick={this.addColor} className="btn btn-info mx-2"><i className="fa fa-plus" aria-hidden="true"></i></button>
                            )}
                            {colors.length > 1 && (
                                <button type="button" onClick={this.deleleColor} className="btn btn-danger mx-1"><i className="fa fa-minus" aria-hidden="true"></i></button>
                            )}
                        </div>
                    </div>
                )
            } else if (result.type === 'file') {
                return (
                    <div key={index}>
                        <Upload onFileChange={this.handleFileChange} onReset={this.handleResetImage} />
                    </div>
                )
            }
            return (
                <Form key={index} {...result} onChange={this.handleChange} onChangeCurrency={this.handleChangeCurrency} onChangeCheckbox={this.handleChangeCheckbox} />
            )
        })

        return (
            <div className="container my-5">
                <div className="card shadow">
                    <div className="card-body pt-3 pb-3">
                        <h5 className="mb-0">
                            Add New Product
                        </h5>
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                                {item}
                                <div className="form-group col-md-4 my-5">
                                    <button type="submit" className="btn btn-success mr-2"><i className="fas fa-check"></i> Save</button>
                                    {/* <button href="/" type="button" className="btn btn-danger"> <i className="fas fa-undo"></i> Cancel</button> */}
                                    <Button className="text-center" variant="outline-danger" type="button" href="/"><i className="fas fa-undo"></i> Cancel</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addProduct: (title, rate, description, price, brand, detail_product, colors, capacities, file) => 
    dispatch(addProduct(title, parseInt(rate), description, price, brand, detail_product, colors, capacities, file))
})

export default connect(
    null,
    mapDispatchToProps
)(FormAdd)