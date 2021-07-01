import React from 'react';

export default class Wrapper extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loading: false,
            data: [],
            err: ''
        }
        this.getDataFromApi = this.getDataFromApi.bind(this)
    }
    getDataFromApi =()=>{
        this.setState({loading: true})
        let { path } = this.props
        fetch(`https://jsonplaceholder.typicode.com/${path}`)
            .then(res1 => res1.json())
            .then(data => this.setState({
                loading: true, 
                data: data}))
            .catch((err)=>{
                this.setState({
                    loading:true,
                    err: err})
            })

    }

    componentDidMount(){
        this.getDataFromApi();
        console.log('comp mounted')
        // console.log('state data yv', this.state)
    }
    componentDidUpdate(){
        console.log('updated yash', this.state)
    }

    render() {
        return (
          <div>
            {this.props.render(this.state)}
          </div>
        );
      }
    
   
}