import React from 'react';
import withCounter from './withCounter';

class ClickCounter extends React.Component {

    render() {
        const { mouseEvent ,count } = this.props;
        return (
            <>
                <button onClick={mouseEvent}>Click Me</button>
                <h2> clicked {count} times</h2>
            </>
        )
    }
}
export default withCounter(ClickCounter)