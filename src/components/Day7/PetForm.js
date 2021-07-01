import React from 'react';

class PetForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            petData: []
        }
        this.addPetData = this.addPetData.bind(this);
    }
    addPetData = (e) => {
        e.preventDefault();
        const Data = [...this.state.petData];
        const dataObject = {};
        dataObject.petName = this.petName.value;
        dataObject.OwnerName = this.OwnerName.value;
        dataObject.illness = this.OwnerName.value;

        Data.push(dataObject);
        this.setState({petData : Data});
        console.log('state', Data);

    }
    componentDidMount(){
        console.log('yash state,', this.state.petData);
    }
    render(){
        let petPosts = this.state.petData.map((petD, index)=> {
            return(
                <div>
                <ul>{petD.petName}</ul>
                <ul>{petD.OwnerName}</ul>
                <ul>{petD.illness}</ul>
                </div>
            )
        }).reverse();
        return(
            <div>
                <form onSubmit={e=> this.addPetData(e)}>
                    <label>Pet Name:</label>
                    <input type="text"
                    ref={(input) => {this.petName = input}}
                    /><br/>
                    <label>Owner Name:</label>
                    <input type="text"
                    ref={(input)=> {this.OwnerName = input}}
                    /><br/>
                    <label>Illness:</label>
                    <input type="text"
                    ref={(input)=> {this.illness = input}}
                    /><br/>
                    <input type="submit" vaalue="add"/>
                </form>
                <span>
                    {petPosts}
                </span>
            </div>
        )
    }
}

export default PetForm;