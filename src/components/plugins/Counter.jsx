import React, {useState} from "react";
import Clock from "./Clock";

function Counter(props) {

    const [deadline] = useState("January, 22, 2022");

    return (
        <>
            <Clock deadline={deadline} />
        </>
    )
}

export default Counter;