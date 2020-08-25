import React from "react";

const Toufic = (props) => {
    const {name,age,sport} = props;
    const callAlert = (greeting) => {
        alert(greeting)
    }
    return (
        <div>
            <h1>Hello {name} </h1>
            {/* <h1>My Age is {age} </h1>
            <h1>My game is {sport} </h1> */}
            <input type="submit" value="Call Function" onClick={() => callAlert('pepso')} />
        </div>
    )
}

export default Toufic;
