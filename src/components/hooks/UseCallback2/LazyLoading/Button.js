import React from 'react';


function Button(props){
    console.info('button render', props.children);
    return(
        <div>
            <button onClick={props.clickEvent}>{props.children}</button>
        </div>
    )
}

export default React.memo(Button);