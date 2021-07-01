import React from 'react';
import withCounter from './withCounter';

class HoverCounter extends React.Component {
    
    render() {
        const { mouseEvent ,count} = this.props;
        return (
            <>
                <button onMouseOver={mouseEvent}>Hover Over Me</button>
                <h2>I clicked {count} times</h2>
            </>
        )
    }
}

export default withCounter(HoverCounter);