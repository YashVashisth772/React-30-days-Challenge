// import React from 'react';

// class QuesAns extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             question: "What is your 'Country's name",
//             answer: 'India'
//         }
//         this.handleChange = this.handleChange.bind(this);

//     }
//     handleChange =() => {
//         this.setState({question:this.state.answer})
//     }
//     render(){
//         console.log('yash');
//         var {ques, ans} =this.state;
//         return(
//             <div>
//                 <button onClick={this.handleChange}>Hi{this.state.question}</button>
//             </div>
//         )
//     }
// }

// export default QuesAns;


// import logo from './logo.svg';
// import './App.css';
// import Day1 from './components/day1/Day1';
// import ShoutOut from './components/Day2/ShoutOut';
// import ColorChanger from './components/Day3/ColorChanger';
// import FruitFacts from './components/Day4/FruitFacts'
// import RelishReminder from './components/Day5/RelishReminder';
// import Post from './components/Day6/Post';
// import PetForm from './components/Day7/PetForm';
// import Bar from './components/Day8/Bar';
// import Apps from './components/Day9/Apps';
// import Weather from './components/Day11/Weather';
// import Users from './components/Day12/Users';
// import timepass from './components/timepass';
// import Quote from './components/Day14/Quote';
// import Map from './components/Day15/Map';
// import App1 from './components/LifeCycles/getDerivedStateFromProps/App1';
// import Clock from './components/LifeCycles/hookLifeCycle/Clock'
// import Memo from "./components/hooks/useMemo";
// import Callback from './components/hooks/UseCallback2/LazyLoading/CallBack';
// import LoadImages from './components/Lazy-load-images/LoadImages'
// import App1 from './components/HOC/App';
// import PostApi from './components/POST-Call/PostCall'
// import App1 from './components/Render-Prop/App';
// import Wrapper from './components/Render-Prop-2/Wrapper'
// import App1 from './components/TODO/App1'
import App1 from './components/hooks/useRef'

function App() {
  return (
    <div className="App">  
      <App1/>
    </div>
  );
}

export default App;
