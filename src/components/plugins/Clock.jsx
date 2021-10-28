import React, { useState, useEffect, useLayoutEffect } from "react";

function Clock(props) {

    const [days, setDays] = useState(0);

    useLayoutEffect(() => {
        getTimeUntil(props.deadline);
    }, [props.deadline]);

    useEffect(() => {
        setInterval(() => getTimeUntil(props.deadline), 1000);
    }, [props.deadline]);    

    const leading0 = (num) => {
        return num < 10 ? "0" + num : num;
    }

    const getTimeUntil = (deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date());
        if (time < 0) {
            setDays(0);
        } else {
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            setDays(days);
        }
    }

    return (
        <div>
            22.01.2022 -
            Faltam {leading0(days)} dias
        </div>
    )
}

export default Clock;