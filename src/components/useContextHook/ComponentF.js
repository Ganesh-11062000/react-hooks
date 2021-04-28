import React from 'react';
import {userContext} from "../../App";

function ComponentF() {
    return (
        <div>
            component F
            <userContext.Consumer>
                {user => <h1>Your name is {user}</h1>}
            </userContext.Consumer>
        </div>
    )
}

export default ComponentF
