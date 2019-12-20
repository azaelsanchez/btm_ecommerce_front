import React, { Component } from 'react';
import axios from 'axios'

class MeterProducto extends Component {

    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            Name: '',
            Price: '',
            CartDesc: '',
            ShortDesc: '',
            LongDesc: '',
            CategoryId: '',
            ThumbImg1: '', 
            Img1: '',
            ThumbImg2: '',
            Img2: '',
            ThumbImg3: '',
            Img3: '',
            Stock: '',
            Promoted: '',
            Location: '',
            Size: '',
            Dimensions: '',

        }
    }

    handleChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
          [name]: value
      });

    }

    handleSubmit = (event) => {
      event.preventDefault();

      const body = {
        Name: this.state.Name,
        Price: this.state.Price,
        CartDesc: this.state.CartDesc,
        ShortDesc: this.state.ShortDesc,
        LongDesc: this.state.LongDesc,
        CategoryId: this.state.CategoryId,
        ThumbImg1: this.state.ThumbImg1, 
        Img1: this.state.Img1,
        ThumbImg2: this.state.ThumbImg2,
        Img2: this.state.Img2,
        ThumbImg3: this.state.ThumbImg3,
        Img3: this.state.Img3,
        Stock: this.state.Stock,
        Promoted: this.state.Promoted,
        Location: this.state.Location,
        Size: this.state.Size,
        Dimensions: this.state.Dimensions 
      }

      axios.post('http://localhost:3000/', body)
          .then( data => (data.id) )
          .catch( err => (err.mns))

    
    
  }

  handleReset = (event) => {
    event.preventDefault();
    this.state = {
        Name: '',
        Price: '',
        CartDesc: '',
        ShortDesc: '',
        LongDesc: '',
        CategoryId: '',
        ThumbImg1: '', 
        Img1: '',
        ThumbImg2: '',
        Img2: '',
        ThumbImg3: '',
        Img3: '',
        Stock: '',
        Promoted: '',
        Location: '',
        Size: '',
        Dimensions: ''            
    }
    }

    render(){
        return(
          <div>
                <p>Introduce un nuevo producto</p>
                <form onSubmit={(ev) => this.handleSubmit(ev)}>
                    <label> Name </label>
                        <input
                        type="text"
                        name="Name"
                        value={this.state.Name}
                        onChange={(ev) => this.handleChange(ev)}   
                        />
                
                    <label> Price </label>
                        <input
                        type="number"
                        name="Price"
                        value={this.state.Price}
                        onChange={(ev) => this.handleChange(ev)}
                        />
                    
                    <label> CartDesc </label>
                        <input
                        type="text"
                        name="CartDesc"
                        value={this.state.CartDesc}
                        onChange={(ev) => this.handleChange(ev)}
                        />

                    <label> ShortDesc </label>
                        <input
                        type="text"
                        name="ShortDesc"
                        value={this.state.ShortDesce}
                        onChange={(ev) => this.handleChange(ev)}
                        />

                    <label> LongDesc </label>
                        <input
                        type="text"
                        name="LongDesc"
                        value={this.state.LongDesc}
                        onChange={(ev) => this.handleChange(ev)}
                        />

                    <label> CategoryId </label>
                        <input
                        type="text"
                        name="CategoryId"
                        value={this.state.CategoryId}
                        onChange={(ev) => this.handleChange(ev)}
                        />

                    <label> ThumbImg1 </label>
                        <input
                        type="text"
                        name="ThumbImg1"
                        value={this.state.ThumbImg1}
                        onChange={(ev) => this.handleChange(ev)}
                        />

                    <label> Img1 </label>
                        <input
                        type="text"
                        name="Img1"
                        value={this.state.Img1}
                        onChange={(ev) => this.handleChange(ev)}
                        />

                    <label> ThumbImg2 </label>
                        <input
                        type="text"
                        name="ThumbImg2"
                        value={this.state.ThumbImg2}
                        onChange={(ev) => this.handleChange(ev)}
                        />

                    <label> Img2 </label>
                        <input
                        type="text"
                        name="Img2"
                        value={this.state.Img2}
                        onChange={(ev) => this.handleChange(ev)}
                        />

                    <label> ThumbImg3 </label>
                        <input
                        type="text"
                        name="ThumbImg3"
                        value={this.state.ThumbImg3}
                        onChange={(ev) => this.handleChange(ev)}
                        />

                    <label> Img3 </label>
                        <input
                        type="text"
                        name="Img3"
                        value={this.state.Img3}
                        onChange={(ev) => this.handleChange(ev)}
                        />

                    <label> Stock </label>
                        <input
                        type="text"
                        name="Stock"
                        value={this.state.Stock}
                        onChange={(ev) => this.handleChange(ev)}
                        />

                    <label> Promoted </label>
                        <input
                        type="checkbox"
                        name="Promoted"
                        value={this.state.Promoted}
                        onChange={(ev) => this.handleChange(ev)}
                        />

                    <label> Location </label>
                        <input
                        type="text"
                        name="Location"
                        value={this.state.Location}
                        onChange={(ev) => this.handleChange(ev)}
                        />

                    <label> Size </label>
                        <input
                        type="text"
                        name="Size"
                        value={this.state.Size}
                        onChange={(ev) => this.handleChange(ev)}
                        />

                    <label> Dimensions </label>
                        <input
                        type="text"
                        name="Dimensions"
                        value={this.state.Dimensions}
                        onChange={(ev) => this.handleChange(ev)}
                        />

                    <button onClick={(ev) => this.handleReset(ev)}> Reset </button>
                    <input type="submit" value="Añadir producto" />
                </form>
                </div>
        )
    }
}
export default MeterProducto;