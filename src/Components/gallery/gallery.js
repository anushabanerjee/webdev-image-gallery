import React from 'react';
import "./style.css"
import ImageCard from "../imageCard/imageCard.js"


class Gallery extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            images:[],
            currentAddress:"",
        }
    }

    onAddressChange = (event) =>{
        this.setState(
            {currentAddress:event.target.value}
        )
    }

    onAddImage = () =>
    {
        if (this.state.currentAddress ==="") { 
                return;
            }

        //Copying all previous data
       const newImages= [...this.state.images]
       
       // Pushing new data
       newImages.push(this.state.currentAddress)
    
       // Updating state
       this.setState({
           images:newImages,
           currentAddress:"",
       })
    }

    render = () => {
        return(
            
            <div className="root-container">
                <p className="title"> <u>Image Gallery</u></p>
                    <div className="input-box"> 
                        <input
                        value={this.state.currentAddress}
                        onChange={this.onAddressChange}
                        type="text"
                        placeholder="Enter image url" />
                        <button onClick={this.onAddImage}>Add</button>
                    </div>

                    <div className="list-box">
                    {
                        this.state.images.map((url) => {
                            return <ImageCard 
                            key={`${url}-${Math.random()*10}`} 
                            imageUrl={url}/>

                        })
                    }
                    </div>
            </div>
        )
    }

}

export default Gallery;