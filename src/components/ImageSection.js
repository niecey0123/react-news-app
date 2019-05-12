import React, { Component } from 'react';
import '../ImageSection.css'

class ImageSection extends Component{
  render(props){
    const { images } =this.props
    let pics = images && images[0] 
    ? images.map((pic,id )=>(
        <div key={id}>
                <img src={pic.urlToImage} alt=" "/>
        </div>
    ))
    : "loading"
return(
         <section className="image-section">
              {pics}
            </section>
        )
    }
}



export default ImageSection