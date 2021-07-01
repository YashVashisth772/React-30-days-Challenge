import React from 'react';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

class App extends React.Component{
    render(){
        return(
            <>
                <ClickCounter/>
                <HoverCounter/>
            </>
        )
    }
}
export default App