import React, {Component} from 'react'


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
        return(
            <div>
                <div>Form Component</div>
                <input type='text' value={this.state.imageUrlInput} onChange={ (e) => this.handleImageUrlInput(e.target.value) } />
                <input type='text' value={this.state.productNameInput} onChange={ (e) => this.handleProductNameInput(e.target.value) }/>
                <input type='text' value={this.state.price} onChange={ (e) => this.handlePriceInput(e.target.value) }/>
                <button onClick={ ()=>this.handleClickCancel() }>Cancel</button>
                <button>Add to Inventory</button>
            </div>

        )
    }
}