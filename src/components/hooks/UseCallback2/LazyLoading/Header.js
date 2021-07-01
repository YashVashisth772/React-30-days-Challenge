import React from 'react';


function Header(props){
    console.info('update ', props.type)
    return(
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

export default React.memo(Header)