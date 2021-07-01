import React, { Component } from 'react';

const API_KEY = '05a1b8fa53280fbacbde4eb83bbe4340';


class Weather extends Component{
    constructor(props){
        super(props);
        this.state={
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: undefined
        }
    }
    getWeather = async (e)=>{
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        console.info('y city',city);
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        console.log('yash ',data);
        this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity:data.main.humidity,
            description: data.weather[0].description
        })
    }
    render(){
        return(
            <div>
                <p>Weather</p>
                <form onSubmit={e=>this.getWeather(e)}>
                    <input type="text" name="city" placeholder="City..."/>
                    <input type="text" name="country" placeholder="Country..."/>
                    <button>Get Weather</button>
                </form>

                <h1>Weather Details:</h1>
                <p>temperature: {this.state.temperature}</p>
                <p>city: {this.state.city}</p>
                <p>country: {this.state.country}</p>
                <p>humidity: {this.state.humidity}</p>
                <p>description: {this.state.description}</p>

            </div>
        )
    }
}

export default Weather;