import React, {Component} from 'react'
import './form.css'
import noImage from './no-image.png'

export default class Form extends Component {
    constructor(){
        super()
        this.state = {
            imageUrlInput: '',
            productNameInput: '',
            price: 0,
        }
    }

    
    handleImageUrlInput(userInput){this.setState({imageUrlInput: userInput})}
    
    handleProductNameInput(userInput){this.setState({productNameInput: userInput})}
    
    handlePriceInput(userInput){this.setState({price: userInput})}
    
    handleClickCancel(){
        this.setState({
            imageUrlInput: '',
            productNameInput: '',
            price: 0,
        })
    }
    
    render(){

        let formImageDisplay = noImage

        return(
            <div className='form-container'>
                <div className='form-image'><div><img  width='75px' height='75px' src={formImageDisplay} alt=''/></div></div>
                <div className='form-input-container'>
                    <p>Image URL:</p>
                    <input type='text' value={this.state.imageUrlInput} onChange={ (e) => this.handleImageUrlInput(e.target.value) } />
                </div>
                <div className='form-input-container'>
                    <p>Product Name:</p>
                    <input type='text' value={this.state.productNameInput} onChange={ (e) => this.handleProductNameInput(e.target.value) }/>
                </div>
                <div className='form-input-container'>
                    <p>Price:</p>
                    <input type='text' value={this.state.price} onChange={ (e) => this.handlePriceInput(e.target.value) }/>
                </div>
                <div className='form-button-container'>
                    <div className='form-button' onClick={ ()=>this.handleClickCancel() }>Cancel</div>
                    <div className='form-button'>Add to Inventory</div>
                </div>
            </div>

        )
    }
}