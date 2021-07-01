import React from 'react';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default class LoadImages extends React.Component{
    constructor(props){
        super(props);
        this.state={
            images: []
        }
    }
    getImages = () =>{
        const api_url = 'https://api.unsplash.com/photos/random?client_id=zxaeu_MQ7p-dgriMNcbhT7NCnOmBFTXN821q49RcoRI';
        axios.get(api_url)
            .then(res => res)
            .then(imgs => {
                this.setState({images : imgs.data})
                console.log('img', this.state.images)

            })
        }
    
    componentDidMount(){
        this.getImages();
    }


    render(){
        const displayImages = this.state.images.map((img, i)=>{
            <LazyLoadImage
            src={img.urls.small}
             alt={img.despcription}
             effect="blur"/>
        })
        // const displayImages = this.state.images.map((img, i)=>{
        //     <h1>hii</h1>
        //     // <img src={img.urls.small} alt={img.despcription}/>
        // })

        return(
            <div>
                <h1>Hello world</h1>
                {displayImages}
            </div>
        )
    }
}