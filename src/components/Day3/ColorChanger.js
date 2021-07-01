import React from 'react';

class ColorChanger extends React.Component{
    constructor(props){
        super(props);
        this.state={
            rgbClr: '',
            displayClr: ''
        }
        this.changeClr = this.changeClr.bind(this);
    }
    changeClr=() =>{
        var letters = '0123456789ABCDEF';
        var color = '#';
        for(var i=0;i<6;i++){
            color += letters[Math.floor(Math.random()*16)];
        }
        this.setState({displayClr:color})
    }
    
    render(){
        const newColor= ( this.state.displayClr );

        const inputStyle= {
            textAlign: 'center',
            fontSize: 'calc(10px + 2vmin)',
            color: 'black',
            paddingTop: '20vw',
            backgroundColor: newColor
        };
        const buttonStyle={
            margin: '40px auto',
            backgroundColor: newColor,
            textAlign: 'center',
            width: '50vw',
            height: '50vw',
            borderRadius: '100%',
            display: 'inline-block'
        };
        console.log('yash newclr',newColor);
        return(
            <React.Fragment>
                <div style={inputStyle}>
                    <button style={buttonStyle}
                        onClick={this.changeClr}
                        placeholder="Click Me to Display Random COlor">
                        {this.state.displayClr}
                    </button>
                </div>
            </React.Fragment>
        )
    }
}

export default ColorChanger;